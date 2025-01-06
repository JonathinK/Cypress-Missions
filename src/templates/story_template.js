import { graphql } from 'gatsby';
import React from 'react';
import { ContentContainer, Heading1, Heading2, HeroContainer, HeroImage,  Overline,  Paragraph,  Section, TextContainer, LabelChip } from '../styles';
import { RichTextRender, ShareComponent } from '../components';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { Caption } from '../styles/typography.styled';
import Seo from '../components/seo';

const Story = ({ data }) => {
  const  story  = data.contentfulBlogArticle;
  const featureImg = getImage(story.featureImage.gatsbyImageData);
  console.log(story);
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
              <Caption
                key={tag.contentful_id}
              >
                {tag.value}
              </Caption>
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
      metadata {
          contentful_id
          googleBots
          internalName
          keywords
          content {
            id
            content
          }
          name {
            contentful_id
            codeId
          }
        }
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
export const Head = ({ data }) => {
  const metadata = data.contentfulBlogArticle.metadata;
  console.log(metadata);

  const seoData = metadata.reduce((acc,meta) => {
    if(meta.name.codeId === 'title'){
      acc.title = meta.content.content;
    } else if (meta.name.codeId === 'description'){
      acc.description = meta.content.content
    } else if (meta.name.codeId === 'canonical'){
      acc.canonical = meta.content.content
    } else if (meta.name.codeId === 'keywords'){
      acc.keywords = meta.keywords ? meta.keywords.join(', ') : '';
    }
    return acc;
  }, { title: 'Default Title', description: 'Default description', keywords: '' });

  return(
    <Seo
      title={seoData.title}
      description={seoData.description}
      meta={[
        {
          name: 'keywords',
          content: seoData.keywords,
        },
        {
          name: 'canonical',
          content: seoData.canonical,
        }
      ]}
      canonical={seoData.canonical}
    />
  );
};
export default Story