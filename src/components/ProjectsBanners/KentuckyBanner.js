import React from "react"
import styled from "styled-components"

import { graphql, useStaticQuery } from "gatsby"
import  { getImage } from "gatsby-plugin-image"

import { BgImage } from "gbimage-bridge"
import * as BannerStyle from "../../styles/haiti.module.css"



const KentuckyBanner = () => {
  const { placeholderImage } = useStaticQuery(
    graphql`
      query {
        placeholderImage:file(relativePath: {eq: "KentuckyBanner.jpg"}) {
          childImageSharp {
            gatsbyImageData(
              width: 4000
              quality: 50
              webpOptions: {quality: 70}
            
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
        <PrBannerWrap>
            <BgImage image={pluginImage} className={BannerStyle.haiti} />
        </PrBannerWrap>
      )
    }
    export default KentuckyBanner
    const PrBannerWrap = styled.div`
        width:100%;
        height:100%;
    `