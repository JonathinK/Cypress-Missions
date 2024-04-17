import React from 'react';
import { Section } from "./styles";
export const SectionRender = ({section,}) => {
  const SectionComponentData = section.content || null;

  return(
    <Section className={`${section.externalName}`}>
    {SectionComponentData.map((component) => {
      switch (component.codeId) {
        case 'text_container':
          return <TextRender key={component.contentful_id} content={component}/>
        case 'media_container':
          return <MediaRenderer key={component.contentful_id} content={component}/>
        case "media_gallery_container":
          return <GalleryRender key={component.contentful_id} content={component}/>
        case "card_container":
          return <CardsContainerRender key={component.contentful_id} content={component}/>
        case "accordion":
          return <AccordionRender key={component.contentful_id} content={component}/>
        case "form_container":
          return <FormRender key={component.contentful_id} content={component}/>
        case "google_map_iframe":
          return <MapRender key={component.contentful_id} content={component}/>
        case "info_container":
          return <ContactRender key={component.contentful_id} content={component}/>
        case "svg_container": 
          return <SvgRender key={component.contentful_id} content={component}/>
        case "trusted_by_logos_container": 
          return <TrustedByLogos key={component.contentful_id} content={component}/>
        case "google_reviews_feature":
          return <HomepageReviewsFeature key={component.contentful_id} content={reviews}/>
        default:
          return null;
      }
    })}
  </Section>
  )
}