import React from "react"
import styled from "styled-components"

import { graphql, useStaticQuery } from "gatsby"
import  { getImage } from "gatsby-plugin-image"

import { BgImage } from "gbimage-bridge"
import * as BannerStyle from "../../styles/Banner.module.css"


const BahamasBanner = () => {
  const { placeholderImage } = useStaticQuery(
    graphql`
      query {
        placeholderImage:file(relativePath: {eq: "bahamasbanner.jpg"}) {
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
        <BahamasBannerWrap>
            <BgImage image={pluginImage} className={BannerStyle.bahamas} />
        </BahamasBannerWrap>
      )
    }
    export default BahamasBanner
    
    const BahamasBannerWrap = styled.div`
        width:100%;
        height:100%;
    `