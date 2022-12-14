import React from "react"
import styled from "styled-components";
import  { StaticImage } from "gatsby-plugin-image"

const BahamasBannerWrap = styled.div`
        width:100%;
        height:100%;

        .bahamasbanner{
          width:100%;
          height:100%;
        }
    `

const BahamasBanner = () => {

      return(
        <BahamasBannerWrap>
           <StaticImage 
             src="../../images/bahamas.jpg"
             layout="fullWidth"
             style={{position:"absolute"}}
             className="bahamasbanner"
             placeholder="blurred"
             loading="eager"
             quality={50}
             webpOptions={{quality:100}}
           />
        </BahamasBannerWrap>
      )
    }
    export default BahamasBanner
    
    