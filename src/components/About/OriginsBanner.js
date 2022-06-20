import { StaticImage } from "gatsby-plugin-image"
import React from "react"

import styled from "styled-components"

import * as BannerStyle from  "../../styles/origins.module.css"


const VisionBanner = () => {
    return(
        <VisionBannerWrap>
            <BackgroundImage>
                <StaticImage
                    src="../../images/banner-2.jpg"
                    quality={50}
                    alt=""
                    layout="fullWidth"
                    className="originsBackground"
                />
            </BackgroundImage>
        </VisionBannerWrap>   
    )
}
export default VisionBanner
const VisionBannerWrap = styled.div`
width:100%;
height:100%;
`
const BackgroundImage = styled.div`
    .originsBackground{
        width:100%;
        height:100%;
        position:absolute;
    }
`