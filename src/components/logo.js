import React from "react";
import { LogoContainer, NavLink } from "../styles";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { useStaticQuery, graphql } from "gatsby";


export const Logo = () => {
  const data = useStaticQuery(graphql`
  query {
    contentfulContentContainer(codeId: {eq: "brand_logo_container"}) {
      id
      codeId
      content {
        ... on ContentfulMedia {
          id
          codeId
          asset {
            gatsbyImageData(
              formats: [WEBP, AUTO]
              placeholder: DOMINANT_COLOR
              quality: 90
              resizingBehavior: SCALE
              layout: CONSTRAINED
              width: 112
            )
          }
        }
      }
    }
  }
  `)
  const logo = getImage(data.contentfulContentContainer.content[0].asset);
  return(
    <LogoContainer>
    <NavLink 
      to="/" 
      $LogoLink
      aria-label="Homepage Link"
      tabIndex={0}
    >
      <GatsbyImage
        image={logo}
        alt='Cypress Logo'
      />
    </NavLink>
    </LogoContainer>
  )
}
