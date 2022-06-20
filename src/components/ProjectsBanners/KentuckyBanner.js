import React from "react"
import styled from "styled-components"


import  { StaticImage } from "gatsby-plugin-image"

const BahamasBannerWrap = styled.div`
        width:100%;
        height:100%;

        .kentuckybanner{
          width:100%;
          height:100%;
        }
    `

const BahamasBanner = () => {

      return(
        <BahamasBannerWrap>
           <StaticImage 
             src="../../images/kentuckybanner.jpg"
             style={{position:"absolute"}}
             className="kentuckybanner"
             placholder="blurred"
             loading="eager"
             layout="fullWidth"
             quality={50}
           />
        </BahamasBannerWrap>
      )
    }
    export default BahamasBanner
    
    