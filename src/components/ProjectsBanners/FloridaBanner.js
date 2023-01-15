import React from "react"
import styled from "styled-components"


import  { StaticImage } from "gatsby-plugin-image"

const BulgariaBannerWrap = styled.div`
        width:100%;
        height:100%;

        .bulgariabanner{
          width:100%;
          height:100%;
        }
    `

const FloridaBanner = () => {

      return(
        <BulgariaBannerWrap>
           <StaticImage 
             src="../../images/Florida-Banner.jpg"
             style={{position:"absolute"}}
             className="bulgariabanner"
             placholder="blurred"
             layout="fullWidth"
             loading="eager"
             quality={50}
           />
        </BulgariaBannerWrap>
      )
    }
    export default FloridaBanner
    
    