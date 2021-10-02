import React from "react"
import styled from "styled-components"

import { graphql, useStaticQuery } from "gatsby"
import  { getImage } from "gatsby-plugin-image"

import { BgImage } from "gbimage-bridge"
import * as BannerStyle from "../../styles/jersey.module.css"


const NewJerseyBanner = () => {
  const { placeholderImage } = useStaticQuery(
    graphql`
      query {
        placeholderImage:file(relativePath: {eq: "greetings.jpg"}) {
          childImageSharp {
            gatsbyImageData(
              width: 4000
              quality: 60
              webpOptions: {quality: 70}
              aspectRatio: 4
              placeholder: BLURRED
              formats: AUTO
              transformOptions:{cropFocus:CENTER, fit: FILL, trim: 2}
            )
          }
        }
      }
    `
  );
  const pluginImage = getImage(placeholderImage);

      return(
        <NjBannerWrap>
            <BgImage image={pluginImage} className={BannerStyle.jersey} />
        </NjBannerWrap>
      )
    }
    export default NewJerseyBanner
    
    const NjBannerWrap = styled.div`
        width:100%;
        height:100%;
    `