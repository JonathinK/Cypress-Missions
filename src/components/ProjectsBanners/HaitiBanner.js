import React from "react"
import styled from "styled-components"


import  { StaticImage } from "gatsby-plugin-image"

const HaitiBannerWrap = styled.div`
        width:100%;
        height:100%;

        .haitibanner{
          width:100%;
          height:100%;
        }
    `

const HaitiBanner = () => {

      return(
        <HaitiBannerWrap>
           <StaticImage 
             src="../../images/haiti.jpg"
             style={{position:"absolute"}}
             className="haitibanner"
             placholder="blurred"
             loading="eager"
             quality={80}
           />
        </HaitiBannerWrap>
      )
    }
    export default HaitiBanner
    
    