import React from 'react';
import { Section } from "../styles";
import { graphql } from 'gatsby';
import { MediaRender, CardsContainerRender, AccordionRender, FormRender, MapRender, SvgRender, TextContainerRender, IframeRender, LogosContainer, FeaturedProjects, ButtonContainerRender, BgRender, VolunteerExperiences, ContentBlock, LatestFeature } from "../components";

export const SectionRender = ({ section }) => {
  const SectionComponentData = section.content || null;
  return(
    <Section className={`${section.externalName}`} >
    {SectionComponentData.map((component) => {
      switch (component.codeId) {
        case 'text_container':
          return <TextContainerRender key={component.contentful_id} content={component}/> 
        case 'card_container':
          return <CardsContainerRender key={component.contentful_id} content={component}/>
        case 'media_container':
          return <MediaRender key={component.contentful_id} content={component}/>
        case 'iframe_container':
          return <IframeRender key={component.contentful_id} content={component}/>
        case 'logos_container':
          return <LogosContainer key={component.contentful_id} content={component}/>
        case 'project_feature_container':
          return <FeaturedProjects key={component.contentful_id}/> 
        case 'button_container': 
          return <ButtonContainerRender key={component.contentful_id} content={component.content} classContent={component}/>
        case 'bg_image_container': 
          return <BgRender key={component.contentful_id} content={component}/>
        case 'form_container':
          return <FormRender key={component.contentful_id} content={component}/>
        case 'volunteer_experiences': 
          return <VolunteerExperiences key={component.contentful_id} content={component}/> 
        case 'block_content':
          return <ContentBlock key={component.contentful_id} content={component}/>
        case 'latest_feature':
          return <LatestFeature key={component.contentful_id} content={component}/>
        default:
          return null;
      }
    })}
  </Section>
  )
}

export const query = graphql`
  fragment SectionContentRender on ContentfulContentContainer{
    codeId
    contentful_id
    externalName
    content{
      ... on ContentfulText{
        ...textRender
      }
      ... on ContentfulMedia {
        ...mediaRender 
        ...backgroundImageRender
      }
      ...on ContentfulLink{
        ...iframeRender
      }
      ...on ContentfulButton{
        ...buttonContainerRender
      }
      ... on ContentfulContentContainer{
        ...blockContent
        ...cardsRender
        ...logosContainer
        ...volunteerExperiences
        ...latestFeatureContent
        ...switchContent
        content{
          ...on ContentfulButton{
          ...buttonContainerRender
        }
        }
        
      }
      ... on ContentfulForm{
        ...formRender
      }
    }
  }
`