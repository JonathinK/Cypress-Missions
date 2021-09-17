import React from "react"
import styled from "styled-components"

import { graphql, useStaticQuery } from "gatsby"
import  { getImage } from "gatsby-plugin-image"

import { BgImage } from "gbimage-bridge"
import * as BannerStyle from "../../styles/Banner.module.css"


const NewJerseyBanner = () => {
  const { placeholderImage } = useStaticQuery(
    graphql`
      query {
        placeholderImage:file(relativePath: {eq: "newjersey.jpg"}) {
          childImageSharp {
            gatsbyImageData(
              width: 4000
              quality: 50
              webpOptions: {quality: 70}
              aspectRatio: 2.5
              placeholder: BLURRED
              formats: AUTO
              transformOptions:{cropFocus:NORTH, fit: FILL, trim: 2}
            )
          }
        }
      }
    `
  );
  const pluginImage = getImage(placeholderImage);

      return(
        <NjBannerWrap>
            <BgImage image={pluginImage} className={BannerStyle.london} />
        </NjBannerWrap>
      )
    }
    export default NewJerseyBanner
    
    const NjBannerWrap = styled.div`
        width:100%;
        height:100%;
    `