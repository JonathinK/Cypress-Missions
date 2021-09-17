import React from "react"
import styled from "styled-components"

import { graphql, useStaticQuery } from "gatsby"
import  { getImage } from "gatsby-plugin-image"

import { BgImage } from "gbimage-bridge"
import * as HeroStyle from "../styles/Hero.module.css"
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
        <BgImage image={pluginImage} className={HeroStyle.hero} />
      </HeroWrap>
      <HeroOverlay />
      <HeroInfo>
        <h1>One Goal</h1>
        <h1>One Mission</h1>
        <p>Building Back communities one person at a time</p>
        <HeroButton>Learn How</HeroButton>
      </HeroInfo>
    </HeroGrid>
    
  )
}

const HeroGrid = styled.div`
  display:grid;
  grid-template-columns: 1fr;
  grid-template-rows:1fr;
  min-height:100vh;

`
const HeroWrap = styled.div`
  grid-area:1 / 1 / 2 / 2;
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
    font-size:clamp(2.8rem, 6vw, 8rem);
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
    font-size:clamp(1.5rem, 2.5vw, 5rem);
    margin: 4rem 1rem 0 1rem;
    color:white;
    text-align:center;
    letter-spacing:3px;
  }
`
const HeroButton = styled.button`
    position:relative;
    color:white;
    background:transparent;
    border: 3px white solid;
    border-radius: 10px;
    font-family:flood-std,sans-serif;
    font-weight:300;
    font-size:clamp(1.2rem,2vw, 3rem);
    padding:1rem 2rem;
    margin-top:3rem;
    letter-spacing:3px;
    cursor:pointer;

    
    @media ${breakpoints.md}{
      :hover{
      background:white;
      color:#565656;
      transition: background 400ms ease-in ;
    }
    }
    @media ${breakpoints.sm}{
      :active{
        background:white;
        color:#565656;
      }
    }
`
export default HeroImage



