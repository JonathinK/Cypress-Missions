
import React from 'react'
import Layout from '../components/layout'
import styled from 'styled-components'

import { graphql, useStaticQuery } from "gatsby"
import  { getImage } from "gatsby-plugin-image"

import { BgImage } from "gbimage-bridge"
import * as ContactStyle from "../styles/ContactBackground.module.css"

const Contact = () => {
   const { placeholderImage } = useStaticQuery(
       graphql`
       query{
        placeholderImage:file(relativePath: {eq: "Donate.jpg"}) {
            childImageSharp {
              gatsbyImageData(
                formats: AUTO
                placeholder: BLURRED
                quality: 60
                width: 4000
                webpOptions: {quality: 80}
                layout: FULL_WIDTH
              )
            }
          }
       }
       `
   );

   const pluginImage = getImage(placeholderImage);
   
    return(
       <Layout> 
        <ContactWrap>
          <BackgroundImage>
            <BgImage  image={pluginImage} className={ContactStyle.background}/>
          </BackgroundImage>
              <ContactElement>
                <div>
                  <h2>We'd Love To Hear From You</h2>
                  <h3>Email Us:</h3>
                   <a href="mailto:info@cypressmissions.com">info@cypressmissions.com</a>
                   <br />
                   <a href="mailto:freddie@cypressmissions.com">freddie@cypressmissions.com</a>
                   <h3>Call Us:</h3>
                   <a href="phone:732-278-3797">732-278-3797</a>
                   <h2>Donate To Cypress</h2>
                   <h3>Changing lives through service</h3>
                   <p>Your financial donations are used to support humanitarian needs both home and abroad. 
                     Our goal is to support communities who are stuck in systemic poverty, or recovering from natural disasters get back on their feet. Your support is greatly appreciated.</p>
                  <a href="https://www.aplos.com/aws/give/CypressMissions/general"><button>Donate</button></a>
                </div>
                
              </ContactElement>

        </ContactWrap>
       </Layout>  
    )
}
 
export default Contact

const ContactWrap = styled.main`
  min-height:100vh;
  width:100%;
  position:relative;
  z-index:2;
  display:grid;
  grid-template-columns:auto;
  grid-template-rows:auto;
`
const BackgroundImage = styled.div`
  grid-area: 1 / 1 / 2 / 2;
  height:100%;
  width:100%;
`

const ContactElement = styled.div`
  grid-area: 1 / 1 / 2 / 2;
  height:100%;
  width:100%;

  div{
    height:auto;
    width:95%;
    max-width:1088px;
    margin:10rem auto;
    display:flex;
    flex-flow:column;
    justify-content:flex-start;
    align-items:center;
    background:rgba(255,255,255,.8);
    border:5px solid #199453;
    border-radius:20px;
  }

  h2,h3,a,p{
    margin:0;
    text-align:center; 
    text-rendering:optimizePrecision;
  }

  h2{
    font-family: flood-std, sans-serif;
    font-weight:300;
    font-size:clamp(30px, 5vw, 40px);
    margin:4rem 1rem 2rem 1rem;
    letter-spacing:2px;  
    color:#5f5f5f;
  }
  h3{
    margin-bottom:1rem;
    font-family:co-headline, sans-serif;
    font-weight:500;
    font-size:clamp(25px, 5vw, 30px);
    color:#199542;
   
  }
  h3:nth-child(6){
    margin-top:2rem;
  }
  br{
    margin:.5rem 0; 
  }
  
  a{
    text-decoration:none;
    color:#959595;
    font-family:co-text, sans-serif;
    font-size:clamp(18px, 5vw, 20px);
    :hover{
      color:blue;
    }
  }

  p{
    width:90%;
    margin:1rem 0 2rem 0; 
    font-family: co-text, sans-serif;
    color:#5f5f5f;
    font-size:clamp(18px, 4vw, 20px);
  }

  button{
    margin-bottom:2rem;
    width:14rem;
    height:4rem;
    box-shadow: 10px 10px 10px rgba(0,0,0,.4);
    color:white;
    background:#199453;
    border:none;
    border-radius:10px;
    font-family:flood-std,sans-serif; 
    font-weight:300;
    font-size:clamp(1.5rem, 5vw, 2rem);
  }

`