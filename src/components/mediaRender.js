import React from 'react';
import { MediaContainer } from '../styles';
import { graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

export const MediaRender = ({ content }) => {
  const mediaContainerClass = content.externalName;
  const imageClass = content.content[0].externalName;
  const Image = getImage(content.content[0].asset);
  return(
    <MediaContainer className={mediaContainerClass}>
      <GatsbyImage
        image={Image}
        className={imageClass}
        loading="lazy"
        alt=""
      />
    </MediaContainer>
  )
}

export const query = graphql`
  fragment mediaRender on ContentfulMedia{
    codeId
    contentful_id
    externalName
    asset{
      contentful_id
      gatsbyImageData(
        layout: FULL_WIDTH
        placeholder: BLURRED
        formats: [WEBP,AUTO]
        quality: 70
      )
    }
  }
`