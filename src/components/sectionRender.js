import React from 'react';
import { Section } from "../styles";
import { graphql } from 'gatsby';
import { TextRender, MediaRenderer, CardsContainerRender, AccordionRender, FormRender, MapRender, SvgRender } from "../components";

export const SectionRender = ({ section }) => {
  const SectionComponentData = section.content || null;

  return(
    <Section className={`${section.externalName}`}>
    {SectionComponentData.map((component) => {
      switch (component.codeId) {
        case 'text_container':
          return <TextRender key={component.contentful_id} content={component}/>
        case 'media_container':
          return <MediaRenderer key={component.contentful_id} content={component}/>
        case "card_container":
          return <CardsContainerRender key={component.contentful_id} content={component}/>
        case "accordion":
          return <AccordionRender key={component.contentful_id} content={component}/>
        case "form_container":
          return <FormRender key={component.contentful_id} content={component}/>
        case "google_map_iframe":
          return <MapRender key={component.contentful_id} content={component}/>
        case "svg_container": 
          return <SvgRender key={component.contentful_id} content={component}/>
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
      ...on ContentfulContentContainer{
        codeId
        contentful_id
        externalName
        content{
          ...TextRender
        }
      }
    }
  }
`