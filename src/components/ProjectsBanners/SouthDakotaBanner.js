import React from "react"
import styled from "styled-components"

import { graphql, useStaticQuery } from "gatsby"
import  { getImage } from "gatsby-plugin-image"

import { BgImage } from "gbimage-bridge"
import * as BannerStyle from "../../styles/Banner.module.css"



const SdBanner = () => {
  const { placeholderImage } = useStaticQuery(
    graphql`
      query {
        placeholderImage:file(relativePath: {eq: "southdakota.jpg"}) {
          childImageSharp {
            gatsbyImageData(
              width: 4000
              quality: 50
              webpOptions: {quality: 70}
              aspectRatio: 1.5
              placeholder: BLURRED
              formats: AUTO
            )
          }
        }
      }
    `
  );
  const pluginImage = getImage(placeholderImage);

      return(
        <SdBannerWrap>
            <BgImage image={pluginImage} className={BannerStyle.haiti} />
        </SdBannerWrap>
      )
    }
    export default SdBanner
    const SdBannerWrap = styled.div`
        width:100%;
        height:100%;
    `