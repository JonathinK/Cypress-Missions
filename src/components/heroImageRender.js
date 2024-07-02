import { graphql } from 'gatsby';
import React from 'react';
import { HeroImage } from '../styles';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

export const HeroImageRender = ({ content }) => {
  const heroClass = content.externalName;
  const imageClass = content.content[0].externalName;
  const Image = getImage(content.content[0].asset);
  
  return(
    <HeroImage className={heroClass}>
      <GatsbyImage
        image={Image}
        loading='eager'
        className={imageClass}
        alt=''
      />
    </HeroImage>
  )
}

export const query = graphql`
  fragment heroImageRender on ContentfulMedia{
    codeId
    contentful_id
    externalName
    altText
    asset {
      contentful_id
      gatsbyImageData(
        layout: FULL_WIDTH
        placeholder: BLURRED
        quality: 40
        resizingBehavior: SCALE
      )
    }
  }
`