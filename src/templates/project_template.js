import React from 'react';
import { ContentContainer, Heading1, HeroContainer, HeroImage, Overline, Paragraph, Section, TextContainer, BoldText, LabelChip, ProjectTagContainer, Tag, IframeContainer, Iframe, Heading2 } from '../styles';
import { graphql } from 'gatsby';
import { Icon } from '@iconify-icon/react/dist/iconify.mjs';

import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { ImageSlider, RichTextRender, SectionRender } from '../components';
import Seo from '../components/seo';


const Project = ({ data }) => {
  const projectData = data.contentfulProject;
  const sliderGallery = data.contentfulProject.imageSlider;
  const getInvolvedCta = data.contentfulContentContainer;
  console.log("Project Data:", projectData);
  return(
    <React.Fragment>
      <HeroContainer className="text_left_asset_right">
        <TextContainer className="project_text">
          <ContentContainer className="project_location_container">
            <Icon icon="iconamoon:location"/>
            <Overline>{projectData.projectLocation}</Overline>
          </ContentContainer>
          <Heading1>{projectData.projectTitle}</Heading1>
          <ContentContainer className="date_container">
            <Paragraph>
              <BoldText>Started:</BoldText> {projectData.projectStartDate} 
            </Paragraph>
              {projectData.updatedAt && projectData.updatedAt !== projectData.projectStartDate && (
              <React.Fragment>
              <hr/>
              <LabelChip className='project_updated_at'>
                Updated: {projectData.updatedAt}
              </LabelChip> 
              </React.Fragment>
              )}
          </ContentContainer>
          <Paragraph dangerouslySetInnerHTML={{
            __html: projectData.summary.summary
          }}/>
        </TextContainer>
        <HeroImage>
          <GatsbyImage
            image={getImage(projectData.featureImage.asset)}
            alt={projectData.featureImage.altText || ''}
            className={projectData.featureImage.externalName}
          />  
        </HeroImage>
      </HeroContainer>
      <Section className="tags_section">
        <ProjectTagContainer className="project_template_tags">
          {projectData.tags.map(tag => {
            return(
              <Tag key={tag.contentful_id}>
                {tag.value}
              </Tag>
            )
          })}
        </ProjectTagContainer>
      </Section>
      <Section className="project_article_section">
        <TextContainer className="project_article">
          <RichTextRender content={projectData.richTextBody} references={projectData.richTextBody.references}/>
        </TextContainer>
      </Section>
      <Section className="project_slider_section">
      <TextContainer className="slider_section_heading_2_text">
        <Heading2>Gallery</Heading2>
        <hr/>
      </TextContainer>
        <ImageSlider content={sliderGallery}/>
      </Section>
      {projectData.video && 
          <Section className='project_video_section'>
          <IframeContainer className="project_video_iframe_container">
            <Iframe
              src={projectData.video}
              className="project_iframe"
              height="100%"
              width="100%"
              title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;" allowFullScreen
            />
          </IframeContainer>
          </Section>
      }
      <SectionRender section={getInvolvedCta}/>
    </React.Fragment>
  )
}

export const query = graphql`
   query($slug: String!) {
    contentfulProject(slug: {eq:$slug}) {
      contentful_id
      codeId
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
      projectLocation
      projectTitle
      projectStartDate(formatString: "MMM Do, YYYY")
      updatedAt(fromNow: true)
      video
      summary{
        id
        summary
      }
      featureImage {
        altText
        codeId
        externalName
        asset {
          contentful_id
          gatsbyImageData(
            layout: FULL_WIDTH
            quality: 70
            resizingBehavior: SCALE
            placeholder: BLURRED
          )
        }
      }
      richTextBody{
        raw
        references{
          ... on ContentfulBlogArticle{
            contentful_id     
            __typename
            codeId
            slug
            id
          }
        }
      }
      imageSlider {
        contentful_id
        description
        gatsbyImageData(
          layout: FULL_WIDTH
          placeholder: BLURRED
          quality: 60
          resizingBehavior: SCALE
        )
      }
      tags{
        codeId
        contentful_id
        value
      }
    }
    contentfulContentContainer(externalName: {eq: "get_involved_cta_section"}) {
      codeId
      contentful_id
      externalName
      content{
        ...SectionContentRender
      }
    }
  }
`
export const Head = ({ data }) => {
  const metadata = data.contentfulProject.metadata;

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
export default Project