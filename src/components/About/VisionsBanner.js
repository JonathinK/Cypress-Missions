import React from "react"


import  { StaticImage } from "gatsby-plugin-image"

import styled from "styled-components"

import * as BannerStyle from  "../../styles/vision.module.css"


const VisionBanner = () => {
     
    return(
        <VisionBannerWrap>
            <StaticImage 
                src="../../images/vision.jpg"
                placeholder="blurred"
                alt=""
                style={{position:"absolute"}}
                className="visionbanner"
            />
        </VisionBannerWrap>   
    )
}
export default VisionBanner

const VisionBannerWrap = styled.div`
width:100%;
height:100%;

.visionbanner{
    width:100%;
    height:100%;
}

`