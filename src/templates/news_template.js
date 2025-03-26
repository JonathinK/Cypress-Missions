import { graphql } from 'gatsby';
import React from 'react';
import { ContentContainer, HeroContainer,  Section, TextContainer, Heading2, HeroImage, Overline, MediaContainer, Heading1, LabelChip, Paragraph } from '../styles';
import { RichTextRender, ShareComponent } from '../components';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import Seo from '../components/seo';

const Story = ({ data }) => {
  const  news  = data.contentfulBlogArticle;
  const featureImg = getImage(news.featureImage.gatsbyImageData);
  const author = getImage(news.author[0].authorImage.gatsbyImageData);

  return(
    <>
    <HeroContainer className="news_hero">
    <ContentContainer className="author_container">
      <MediaContainer className="author_image">
        <GatsbyImage
          image={author}
          alt=""
          loading='eager'
        />
      </MediaContainer>   
      <Overline>
        {news.author[0].authorName}
      </Overline>
    </ContentContainer>
      <HeroImage>
        <GatsbyImage
          image={featureImg}
          alt=''
        />
      </HeroImage>
      <TextContainer>
        <Heading1>{news.articleTitle}</Heading1>
        <Paragraph dangerouslySetInnerHTML={{
          __html: news.summary.summary
        }}/>
        <ContentContainer className="date_container">
          <Paragraph>{news.datePosted}</Paragraph>
          {news.updatedAt && news.updatedAt !== news.datePosted && (
              <React.Fragment>
              <hr/>
              <LabelChip className='updated_at'>
                Updated: {news.updatedAt}
              </LabelChip> 
              </React.Fragment>
            )}
        </ContentContainer>
      </TextContainer>
    </HeroContainer>
    <Section className="share_section">
      <TextContainer>
        <Heading2>Share</Heading2>
      </TextContainer>
       <ShareComponent/>
    </Section>
    <Section className="article_body_section">
      <TextContainer className="article">
        <RichTextRender content={news.blogBody}/>
      </TextContainer>
      <ContentContainer className="article_relation">
        <Overline>
        Article Relations: 
        </Overline> 
        {news.tags.map(tag => {
            return(
              <LabelChip
                key={tag.contentful_id}
              >
                {tag.value}
              </LabelChip>
            )
          })}
      </ContentContainer>
    </Section>
    </>
  )
}

export const query = graphql`
  query ($slug: String!){
    contentfulBlogArticle(
      codeId: {eq: "news_article"}
      slug: {eq: $slug}
    ) {
      codeId
      contentful_id
      externalName
      articleTitle
      datePosted(formatString: "MMM Do, YYYY")
      updatedAt(fromNow: true)
      author{
        codeId
        contentful_id
        authorName
        authorImage {
          contentful_id
          description
          gatsbyImageData(
            quality: 70
            resizingBehavior: SCALE
            placeholder: BLURRED
            layout: FULL_WIDTH
          )
        }
      }
      summary{
        id
        summary
      }
      featureImage{
        contentful_id
        description
        gatsbyImageData(
          layout: FULL_WIDTH
          placeholder: BLURRED
          quality: 70
          resizingBehavior: SCALE
        )
      }
      blogBody {
        raw
        references {
          contentful_id
          description
          __typename
          gatsbyImageData(
          quality: 100
          resizingBehavior: CROP
          layout: FULL_WIDTH
          placeholder: BLURRED
          cropFocus: FACES
          aspectRatio: 2.1
          )
        }
      }
      tags{
        contentful_id
        codeId
        value
      }
    }
  }
`
export const Head = ({ data, location }) => {
  const news = data.contentfulBlogArticle;

  return(
    <Seo
      title={news.articleTitle}
      description={news.summary.summary}
      canonical={location.href}
    />
  );
};
export default Story