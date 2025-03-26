import { graphql } from 'gatsby';
import React from 'react';
import { ContentContainer, Heading1, Heading2, HeroContainer, HeroImage,  Overline,  Paragraph,  Section, TextContainer, LabelChip } from '../styles';
import { RichTextRender, ShareComponent } from '../components';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import Seo from '../components/seo';

const Story = ({ data }) => {
  const  story  = data.contentfulBlogArticle;
  const featureImg = getImage(story.featureImage.gatsbyImageData);

  return(
    <>
    <HeroContainer className="story_hero">
      <HeroImage className="story_feature">
        <GatsbyImage
          image={featureImg}
          alt={story.featureImage.description}
          className="full_image"
          loading='eager'
        />
      </HeroImage>
      <TextContainer className="story_text">
        <Overline>By: {story.author[0].authorName}</Overline>
        <Heading1>{story.articleTitle}</Heading1>
        <Paragraph dangerouslySetInnerHTML={{
          __html: story.summary.summary
        }}/>
        <ContentContainer className="date_container">
          <Paragraph>{story.datePosted}</Paragraph>
          {story.updatedAt && story.updatedAt !== story.datePosted && (
              <React.Fragment>
              <hr/>
              <LabelChip className='updated_at'>
                Updated: {story.updatedAt}
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
        <RichTextRender content={story.blogBody}/>
      </TextContainer>
      <ContentContainer className="article_relation">
        <Overline>
        Article Relations: 
        </Overline> 
        {story.tags.map(tag => {
            return(
              <span
                key={tag.contentful_id}
              >
                {tag.value}
              </span>
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
      codeId: {eq: "story_article"}
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
          quality: 80
          resizingBehavior: SCALE
          layout: FULL_WIDTH
          placeholder: BLURRED
          cropFocus: CENTER
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
  const metaTitle = data.contentfulBlogArticle.articleTitle;
  const metaDescription = data.contentfulBlogArticle.summary.summary;
 
  return(
    <Seo
      title={metaTitle}
      description={metaDescription}
      canonical={location.href}
    />
  );
};
export default Story