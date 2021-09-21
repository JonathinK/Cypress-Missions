import React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import styled from "styled-components"
import OriginsBanner from "../components/About/OriginsBanner"


import { breakpoints } from "../utils/breakpoints"

import { Link, graphql } from "gatsby"

import { StaticImage, GatsbyImage } from "gatsby-plugin-image"
import { Container, Row, Col } from 'react-bootstrap';
import SimpleReactLightbox, { SRLWrapper } from "simple-react-lightbox"

import 'bootstrap/dist/css/bootstrap.min.css';

import Brush from "../svg/assets/brushw.svg"

const OriginsPage = ({data}) => {

    return(
         <Layout>
             <Seo title="Origins" />
             <Banner>
                 <BackgroundWrap>
                    <OriginsBanner />
                 </BackgroundWrap>
                <Overlay />
             </Banner>
             <ButtonWrap>
                 <TitleWrap>
                     <div>
                        <StyledBrush />
                        <h2>About</h2> 
                     </div>
                 </TitleWrap>
                <OriginsButton>
                    <div><h3>Origins</h3></div>
                </OriginsButton>
                <VisionButton>
                    <Link to="/vision">
                        Vision
                    </Link>
                </VisionButton>
             </ButtonWrap>
             <HowWeStarted>
                 <div>
                    <h3>How We Started</h3>
                        <p>We are recently formed, but our roots run deep. Before Cypress, there was Freddie and his group-centered, work oriented trips throughout North America.
                           Years of hard work, compassion, skill and a dedication to a higher cause, have all shaped the ground work for what has become Cypress.  
                        </p>
                 </div>
                 <div>
                 <StaticImage 
                        src="../images/g8-page-001.jpg"
                        quality= {50}
                        layout="fullWidth"
                        loading='lazy'
                        formats={["auto"]}
                        style={{
                            boxShadow:`10px 10px 20px rgba(0,0,0,.5)`,
                            borderRadius: `5px`
                        }}
                        />
                 </div>
             </HowWeStarted>
             <Freddie>
                 <div>
                    <h3>Our Founder</h3>
                        <p>Meet Freddie. A construction-minded humanitarian with a heart for encouragement. Freddie has been a 
                            community and church leader in the Jersey Shore for over 25 years, while operating a well-respected 
                            building company. More than anything else, Freddie enjoys helping people in need feel supported, no 
                            matter how big or small the trauma. Since 2017, Cypress has become an extension of this and Freddie is
                            eager to make a wider impact around the globe.
                        </p>
                 </div>
                 <div>
                 <StaticImage 
                        src="../images/f1-page-001.jpg"
                        quality= {50}
                        layout="fullWidth"
                        loading='lazy'
                        formats={["auto"]}
                        style={{
                            boxShadow:`10px 10px 20px rgba(0,0,0,.5)`,
                            borderRadius: `5px`
                        }}
                        />
                 </div>
             </Freddie>
             <InTheNews>
                 <div>
             <h3>In The News</h3>
                        <p>
                            Cypress is proud to be one of the many American non-profits mentioned by NBC News for helping the resilient community 
                            in Green Turtle Cay, Bahamas which was devastated by Hurricane Dorian.
                        </p>
                        <a href="https://www.nbcnews.com/news/world/two-months-after-hurricane-dorian-debris-poses-critical-health-risks-n1078531">Read Article</a>
                 </div>
                 <div>
                 <StaticImage 
                        src="../images/inthenews.jpg"
                        quality= {50}
                        layout="fullWidth"
                        loading='lazy'
                        formats={["auto"]}
                        style={{
                            boxShadow:`10px 10px 20px rgba(0,0,0,.5)`,
                            borderRadius: `5px`
                        }}
                        />
                 </div>
             </InTheNews>
             <BeforeCypress>
                 <h2>Before Cypress</h2>
           
             <Container> 
                        
                <SimpleReactLightbox>
                    <SRLWrapper>
                        <Row>
                         {data.gallery.edges.map(({node}) => (
                            <Col  lg={4} md={6} key={node.id} className="py-3"> 
                            <a href={node.publicURL}>
                                <GatsbyImage 
                                image={node.childImageSharp.gatsbyImageData} 
                                alt={node.base.split('-').join(' ').split('.')[0]}
                                style={{
                                    boxShadow:`10px 10px 10px rgba(0,0,0,.3)`,
                                    borderRadius: `5px`}}
                                />
                                </a>
                            </Col>
                         ))} 
                     </Row>
                    </SRLWrapper>
                </SimpleReactLightbox>
                     
                 </Container> 
            </BeforeCypress>  
         </Layout>
     )
}

export default OriginsPage

export const pageQuery = graphql`
    query {
        gallery: allFile(filter: {relativeDirectory: {eq: "beforecypress"}}) {
            edges {
              node {
                id
                base
                publicURL
                childImageSharp {
                  gatsbyImageData(
                    height:400
                    width: 700
                    transformOptions: {fit: COVER, cropFocus: CENTER}
                    placeholder: BLURRED
                    webpOptions: {quality: 70}
                    quality: 60
                    
                  )
                }
              }
            }
          }
    }
`

const Banner = styled.div`
    width:100%;
    height:50vh;
    display:grid; 
    grid-template-rows:1fr;
    grid-template-columns:1fr;
    position:relative;
`
const BackgroundWrap = styled.div`
    grid-area: 1 / 1 / 2 / 2;
    position: relative;
`
const Overlay = styled.div`
    grid-area: 1 / 1 / 2 / 2;
    background:rgba(0,0,0,.2);
    position:relative;
`
const ButtonWrap = styled.div`
    width:100%;
    height: auto;
    position:relative;
    display:flex;
    flex-flow:row nowrap;
    justify-content:center;
    align-items:center;
    padding:5rem 0;
`
const TitleWrap = styled.div`
    width: 100%;
    height:100px;
    margin:0 auto;
    
    position:absolute;
    top:-65px;

    div{
        height:100%;
        max-width:30rem;
        width:90%;
        margin: 0 auto;
        display:grid;
        grid-template-rows:1fr;
        grid-template-columns:1fr;
        text-align:center;
        align-items:center;

        h2{
            grid-area: 1 / 1 / 2 / 2;
            font-family: flood-std, sans-serif;
            font-weight: 300;
            font-size: clamp(1.5rem,6vw,2.5rem);
            letter-spacing:2px;
            margin:0;
            color:#199453;
        }
    }
`
const StyledBrush = styled(Brush)`
    grid-area: 1 / 1 / 2 / 2;
`   
const OriginsButton = styled.div`
    max-width: 12rem;
    width:100%;
    min-width:6rem;
    min-height: 4rem;
    background: #199645;
    display:flex;
    justify-content:center;
    align-items:center;
    margin-right:.5rem;
    margin-left:1rem;
    border-radius:10px;
    box-shadow: inset 0px 0px 10px rgba(0,0,0,.5);
    
    h3{
        margin:0;
        color:white;
        font-family:flood-std, sans-serif;
        font-weight:300;
        font-size: clamp(1.3rem,4vw,1.8rem);
    }
`
const VisionButton = styled.div`
    max-width: 12rem;
    width:100%;
    min-width:6rem;
    min-height:4rem;
    display:flex;
    align-items:center;
    justify-content:center;
    box-shadow: 10px 5px 10px rgba(0,0,0,.4);
    margin-left:.5rem;
    margin-right:1rem;
    border-radius:10px;

    a{
        text-decoration:none;
        color:#5f5f5f;
        font-family:flood-std, sans-serif;
        font-size: clamp(1.3rem,4vw,1.8rem);
        font-weight: 300;
    }
`

const HowWeStarted = styled.div`
    h3{
        text-align:left;
        font-family: flood-std, sans-serif;
        font-size:clamp(1.7rem, 3vw, 2.5rem);
        color: #199453;
        margin:0 0 1rem 0;
    }
    p{
        color:#959595;
        margin:0;
        font-size:clamp(1rem, 1.5vw, 1.3rem);
        font-family: co-text, sans-serif;
        line-height:30px;

    }

        display:grid;
        grid-template-columns: 55% 10% 35%;
        grid-template-rows:1fr;
        max-width: 1800px;
        width: 90%;
        margin: 0 auto;

        div:first-child{
            grid-area: 1 / 1 / 2 / 2;
            display:flex;
            flex-flow:column;
            justify-content:flex-startf;
            align-items:flex-start;

           
        }
        div:nth-child(2){
            grid-area: 1 / 3 / 2 / 4;
        }
    

    @media ${breakpoints.md}{
        display:flex;
        flex-flow: column-reverse;
        justify-content:center;
        align-items:center;

        div:first-child{
            text-align:center;
            
            h3{
                text-align:center;
                margin:0 auto;
            }
            p{
                width:90%;
                margin:0 auto;
                text-align:center;
            }
        }

        div:nth-child(2){
            width:90%;
            margin-bottom:2rem;
        }
    }
`   
const Freddie = styled.div`
    h3{
        text-align:left;
        font-family: flood-std, sans-serif;
        font-size:clamp(1.7rem, 3vw, 2.5rem);
        color: #199453;
        margin:0 0 1rem 0;
    }
    p{
        color:#959595;
        margin:0;
        font-size:clamp(1rem, 1.5vw, 1.3rem);
        font-family: co-text, sans-serif;
        line-height:30px;

    }

    display:grid;
    grid-template-columns: 35% 10% 55%;
    grid-template-rows:1fr;
    max-width: 1800px;
    width:90%;
    margin: 5rem auto;

    div:first-child{
        grid-area: 1 / 3 / 2 / 4;
        display:flex;
        flex-flow:column;
        justify-content:flex-start;
        align-items:flex-start;
    }
    div:nth-child(2){
        grid-area: 1 / 1 / 2 / 2;
    }

@media ${breakpoints.md}{
    display:flex;
    flex-flow: column-reverse;
    justify-content:center;
    align-items:center;

    div:first-child{
        text-align:center;
        
        h3{
            text-align:center;
            margin:0 auto;
        }
        p{
            width:90%;
            margin:0 auto 1rem auto;
            text-align:center;

        }
    }

    div:nth-child(2){
        width:90%;
        margin-bottom:2rem;
    }
}
`
const InTheNews = styled.div`
   
    a{  
        display:flex;
        justify-content:center;
        align-items:center;
        text-decoration:none;
        font-family:flood-std, sans-serif;
        font-size:clamp(1.2rem,4vw,1.4rem);
        color:white;
        max-width:14rem;
        width:60%;
        height:4rem;
        margin-top:1rem;
        border:none;
        border-radius:10px;
        box-shadow:  0px 5px 10px rgba(0,0,0,.4);
        background: #199534;
        
        :active{
            box-shadow: inset 0px 0px 10px rgba(0,0,0,.4);
        }
    }
    
    h3{
        text-align:left;
        font-family: flood-std, sans-serif;
        font-size:clamp(1.7rem, 3vw, 2.5rem);
        color: #199453;
        margin:0 0 1rem 0;
    }
    p{
        color:#959595;
        margin:0;
        font-size:clamp(1rem, 1.5vw, 1.3rem);
        font-family: co-text, sans-serif;
        line-height:30px;

    }

    display:grid;
    grid-template-columns: 55% 10% 35%;
    grid-template-rows:1fr;
    max-width: 1800px;
    width:90%;
    margin: 0 auto 10rem auto;

    div:first-child{
        grid-area: 1 / 1 / 2 / 2;
        display:flex;
        flex-flow:column;
        justify-content:flex-start;
        align-items:flex-start;

        
    }
    div:nth-child(2){
        grid-area: 1 / 3 / 2 / 4;
    }

@media ${breakpoints.md}{
    display:flex;
    flex-flow: column-reverse;
    justify-content:center;
    align-items:center;

    div:first-child{
        text-align:center;
        
        h3{
            text-align:center;
            margin: 0 auto;
        }
        p{
            width:90%;
            margin:0 auto 0 auto;
            text-align:center;
        }

        a{
            margin:1rem auto 3rem auto;
        }
    }

    div:nth-child(2){
        width:90%;
        margin-bottom:2rem;
    }
}
`

const BeforeCypress = styled.div`
    display:flex;
    flex-flow:column;
    justify-content:center;
    align-items:center;
    margin:0 auto 5rem auto;
    max-width:1920px;
    width:90%;
    h2{
        font-family:flood-std, sans-serif;
        color:#199534;
        font-weight:300;
        font-size:clamp(1.5rem, 3vw, 2.5rem);
    }
`