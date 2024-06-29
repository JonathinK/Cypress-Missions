import React from 'react';
import { ContentContainer } from '../styles';
import { graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

export const LogosContainer = ({ content }) => {
  const logosContainerClass = content.externalName;
  const logos = content.content;
  return(
    <ContentContainer $LogosContainer className={logosContainerClass}>
      {logos.map((logo) => {
        const logoClass = logo.externalName;
        const Link = logo.content[0].ctaExternalUrl;
        const Image = getImage(logo.content[1].asset);
        const imageClass = logo.content[1].externalName;
        return(
          <ContentContainer $LogosContainer className={logoClass} key={logo.contentful_id}>
            <a href={Link}>
              <GatsbyImage
                image={Image}
                alt={imageClass}
                loading="lazy"
              />
            </a>
          </ContentContainer>
        )
      })}
    </ContentContainer>
  )
}
export const query = graphql`
  fragment logosContainer on ContentfulContentContainer{
    codeId
    contentful_id
    externalName
    content{
      ... on ContentfulLink {
            contentful_id
            externalName
            ctaExternalUrl
            openInNewWindow
          }
          ... on ContentfulMedia {
            codeId
            contentful_id
            externalName
            altText
            asset {
              contentful_id
              gatsbyImageData(
                aspectRatio: 1
                layout: CONSTRAINED
                placeholder: BLURRED
                quality: 80
                resizingBehavior: SCALE
                width: 160
              )
            }
          }
    }
  }
` 