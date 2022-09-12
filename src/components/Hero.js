
import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import styled from "styled-components"

import { breakpoints } from "../utils/breakpoints"


const HeroImage = () =>{
 
  return(
    <HeroGrid>
      <HeroWrap>
        <HeroBackground>
          <StaticImage
            src="../images/Background.jpg"
            quality={50}
            placeholder="blurred"
            className="heroBackground"
            layout="fullWidth"
          />
        </HeroBackground>
      </HeroWrap>
      <HeroOverlay />
      <HeroInfo>
        <h1>One Goal</h1>
        <h1>One Mission</h1>
        <p>Building Back communities one relationship at a time</p>
      </HeroInfo>
    </HeroGrid>
    
  )
}
export default HeroImage

const HeroGrid = styled.div`
  display:grid;
  grid-template-columns: 3fr;
  grid-auto-rows:auto;
  min-height:100vh;
  height:100vh;
`

const HeroWrap = styled.div`
  grid-column: 1 / 2;
  grid-row: 1 / 2;
  height:100vh;
  min-height:100vh;
`
const HeroBackground = styled.div`
  grid-area: 1 / 1 / 2 / 2;
  
  .heroBackground{
    position:absolute;
    height:100%;
    width:100%;
  }
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




