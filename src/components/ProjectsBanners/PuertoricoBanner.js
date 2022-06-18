import React from "react"
import styled from "styled-components"


import  { StaticImage } from "gatsby-plugin-image"

const PrBannerWrap = styled.div`
        width:100%;
        height:100%;

        .bahamasbanner{
          width:100%;
          height:100%;
        }
    `

const PrBanner = () => {

      return(
        <PrBannerWrap>
           <StaticImage 
             src="../../images/puertorico.jpg"
             style={{position:"absolute"}}
             className="bahamasbanner"
             placholder="blurred"
             loading="eager"
             quality={50}
           />
        </PrBannerWrap>
      )
    }
    export default PrBanner
    
    