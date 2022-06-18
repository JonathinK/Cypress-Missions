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
             src="../../images/kentucky.jpg"
             style={{position:"absolute"}}
             className="kentuckybanner"
             placholder="blurred"
             loading="eager"
             quality={80}
           />
        </BahamasBannerWrap>
      )
    }
    export default BahamasBanner
    
    