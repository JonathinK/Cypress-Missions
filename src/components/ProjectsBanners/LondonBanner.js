import React from "react"
import styled from "styled-components"


import  { StaticImage } from "gatsby-plugin-image"

const BahamasBannerWrap = styled.div`
        width:100%;
        height:100%;

        .londonbanner{
          width:100%;
          height:100%;
        }
    `

const LondonBanner = () => {

      return(
        <BahamasBannerWrap>
           <StaticImage 
             src="../../images/london.jpg"
             style={{position:"absolute"}}
             className="londonbanner"
             placholder="blurred"
             loading="eager"
             quality={50}
             layout="fullWidth"
           />
        </BahamasBannerWrap>
      )
    }
    export default LondonBanner
    
    