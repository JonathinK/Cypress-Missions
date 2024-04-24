import React from 'react';
import { graphql } from "gatsby";
import { ContentContainer } from '../styles';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

export const MediaRenderer = ({ content, classContent }) => {
  if(content && content.media) {
    const image = getImage(content.media);
    return(
      <ContentContainer $MediaContainer>
        <GatsbyImage
          image={image}
          alt={content.altText || ''}
          loading="eager"
          className="img_style"
        />
      </ContentContainer>
    );
  } else if(content.content[0] && content.content[0].media){
    const image = getImage(content.content[0].media);
    return(
      <ContentContainer $MediaContainer>
        <GatsbyImage
          image={image}
          alt={content.content[0].altText || ''}
          loading='eager'
        />
      </ContentContainer>
    )
  }
}
export const query = graphql`
  fragment MediaRender on ContentfulMedia {
    id
    altText
    codeId
    contentful_id
    internalName
    externalName
    media: asset {
      contentful_id
      gatsbyImageData(
        formats: [WEBP, AUTO]
        layout: FULL_WIDTH
        placeholder: DOMINANT_COLOR
        quality: 70
        resizingBehavior: SCALE
      )
    }
  }
`