import React from "react"
import styled, { keyframes } from "styled-components"

import { graphql, useStaticQuery } from "gatsby"
import  { getImage } from "gatsby-plugin-image"

import { BgImage } from "gbimage-bridge"
import { breakpoints } from "../utils/breakpoints"



const HeroImage = () =>{
  const { placeholderImage } = useStaticQuery(
    graphql`
      query {
        placeholderImage:file(relativePath: {eq: "Background.jpg"}) {
          childImageSharp {
            gatsbyImageData(
              width: 4000
              quality: 50
              webpOptions: {quality: 70}
              aspectRatio: 1.5
              placeholder: BLURRED
              formats: AUTO
            )
          }
        }
      }
    `
  );
  const pluginImage = getImage(placeholderImage);

  return(
    <HeroGrid>
      <HeroWrap>
        <StyledBgImage image={pluginImage} />
      </HeroWrap>
      <HeroOverlay />
      <HeroInfo>
        <h1>One Goal</h1>
        <h1>One Mission</h1>
        <p>Building Back communities one relationship at a time</p>
        <ArrowWrap>
          <div />
          <div />
        </ArrowWrap>
      </HeroInfo>
    </HeroGrid>
    
  )
}

const HeroGrid = styled.div`
  display:grid;
  grid-template-columns: 100%;
  grid-template-rows:100%;
  min-height:100vh;
  height:100vh;
  @media ${breakpoints.sm}{
   min-height:100%;
  }
`
const StyledBgImage = styled(BgImage)`
  height:100%;
  width:100%;
`
const HeroWrap = styled.div`
  grid-area: 1 / 1 / 2 / 2;
`
const HeroOverlay = styled.div`
  grid-area: 1 / 1 / 2 / 2;
  width:100%;
  height:100%;
  background:rgba(0,0,0, .4);
  position:relative;
`
const HeroInfo = styled.div`
  grid-area: 1 / 1 / 2 / 2;
  width:100%;
  height:100%;
  display:flex;
  flex-flow:column;
  justify-content:center;
  align-items:center;
  position:relative;

  h1{
    font-size:clamp(2.8rem, 8vw, 8rem);
    margin:0;
    color: white;
    text-align:center;
  
    :first-child{
      margin-top:8rem;
    }
  }
  h1,p{
     font-family:flood-std, sans-serif; 
     font-weight:300;
    
  }
  p{
    font-size:clamp(1.5rem, 3vw, 5rem);
    margin: 4rem 1rem 0 1rem;
    color:white;
    text-align:center;
    letter-spacing:3px;
  }

  @media ${breakpoints.md}{
      justify-content:flex-start;
      margin-top: 15rem;
  }

  @media ${breakpoints.sm}{
      justify-content:flex-start;
      margin-top:23vh;

      h1{
        :first-child{
          margin:0;
        }
      }
      p{
        margin: 1rem 1rem 0 1rem;
      }
  }
`
const arrowmovement = keyframes`
  0%{
    transform: translateY(0)
  }
  50%{
    transform: translateY(1rem)
  }

  100%{
    transform: translateY(0)
  }
`
const ArrowWrap = styled.div`
  position:absolute; 
  max-height:3rem;
  height:10vw;
  min-height:2rem;
  max-width:5rem;
  width:13vw;
  min-width:2rem;
  bottom:0;
  display:flex;
  justify-content:center;
  align-items:center;
  margin-bottom:5vh;
  animation: ${arrowmovement} 2s linear infinite;
  
    div{
    background:white;
    border-radius:10px;
    position:relative;
    height:100%;
    width:15%;
  }
  div:first-child{
    transform:translate(-5px) rotate(-30deg);
  }
  div:last-child{
    transform: translate(5px) rotate(30deg);
  }

 @media ${breakpoints.md}{
    margin-bottom:30vh;
 }

  @media ${breakpoints.sm}{
    margin-bottom:35vh;
  }
`
export default HeroImage



