import { graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import React from 'react';
import { BackgroundContainer } from '../styles';


export const BgRender = ({ content }) => {
  const bgImageContainerClass = content.externalName || '';
  const bgImageClass = content.content[0].externalName || '';
  const bgImage = getImage(content.content[0].background);
  
  return(
    <BackgroundContainer className={bgImageContainerClass}>
      <GatsbyImage
        image={bgImage}
        loading="eager"
        alt=''
        className={bgImageClass}
      />
    </BackgroundContainer>
  )
}

export const query = graphql`
  fragment backgroundImageRender on ContentfulMedia{
      contentful_id
      externalName
      codeId
      background:asset {
        contentful_id
        gatsbyImageData(
          layout: FULL_WIDTH
          formats: [WEBP, PNG]
          placeholder: BLURRED
          quality: 100
          resizingBehavior: SCALE
        )
      }
  }
`