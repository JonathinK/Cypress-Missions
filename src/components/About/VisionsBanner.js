import React from "react"

import { graphql, useStaticQuery } from "gatsby"
import  { getImage } from "gatsby-plugin-image"
import { BgImage } from "gbimage-bridge"
import styled from "styled-components"

import * as BannerStyle from  "../../styles/vision.module.css"


const VisionBanner = () => {
    const { placeholderImage} = useStaticQuery(
        graphql`
            query{
                placeholderImage:file(relativePath: {eq: "vision.jpg"}) {
                    childImageSharp {
                      gatsbyImageData(
                        placeholder: BLURRED
                        layout: FULL_WIDTH
                        formats: AUTO
                        webpOptions: {quality: 70}
                        width: 4000
                        quality: 50
                        transformOptions: {cropFocus: CENTER, fit: COVER}
                      )
                    }
                  }
            }
        `
     );
     const pluginImage = getImage(placeholderImage);
     
    return(
        <VisionBannerWrap>
            <BgImage image={pluginImage} className={BannerStyle.vision} />
        </VisionBannerWrap>   
    )
}
export default VisionBanner

const VisionBannerWrap = styled.div`
width:100%;
height:100%;
`