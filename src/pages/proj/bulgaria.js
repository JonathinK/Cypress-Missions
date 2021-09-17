import React from "react"
import BulgariaImage from "../../components/ProjectsBanners/BulgariaBanner"
import styled from "styled-components"
import Layout from "../../components/layout"
import Brush from "../../svg/assets/brushw.svg"
import { breakpoints } from "../../utils/breakpoints"
import { Link, graphql } from "gatsby"
import Seo from "../../components/seo"

import { GatsbyImage } from "gatsby-plugin-image"
import { Container, Row, Col } from 'react-bootstrap';
import SimpleReactLightbox, { SRLWrapper } from "simple-react-lightbox"

import 'bootstrap/dist/css/bootstrap.min.css';

const Bulgaria = ({ data }) => {

    return(
        <Layout>
            <Seo title="Bulgaria" />
            <BackgroundWrap>
                <div>
                  <BulgariaImage />  
                </div>
                <Overlay />
            </BackgroundWrap>
            <TitleWrap>
                <div>
                    <StyledBrush />
                    <h2>Bulgaria</h2>
                </div>
            </TitleWrap>
            <Info>
                <h3>
                    Malomir
                </h3>
                <p>Cypress Missions came to the remote village of Malomir, Bulgaria. The first objective was repairing the church, which will serve as a local center in one of the most vulnerable regions in Europe. 
                    Cypress performed much needed repairs in the kindergarten in the village, as well as donating school materials to more than 50 children in the village of Tenevo.</p>
            </Info>

            <PhotoGridWrap>
                <Container> 
                    <SimpleReactLightbox>
                        <SRLWrapper>
                            <Row>
                                {data.gallery.edges.map(({node}) => (
                                <Col  lg={2} md={4} sm={4} xsm={6} key={node.id} className="py-3"> 
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
            </PhotoGridWrap>
        </Layout>
    )
}

export default Bulgaria

export const pageQuery = graphql`
    query {
        gallery: allFile(filter: {relativeDirectory: {eq: "bulgaria"}}
        sort: {fields: root, order: ASC}) {
            edges {
              node {
                id
                base
                publicURL
                childImageSharp {
                  gatsbyImageData(
                    height:500
                    width: 800
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

const BackgroundWrap = styled.div`
    display:grid;
    grid-template-rows: repeat(3,1fr);
    grid-template-columns: repeat(2,1fr);
    position:relative;
    height:50vh;
    width:100%;

    div{
        grid-area: 1 / 1 / 4 / 3;
    }
`
const Overlay = styled.div`
    grid-area: 1 / 1 / 4 / 3;
    position:relative;
    background:rgba(0,0,0,.2);
`
const TitleWrap = styled.div`
    width:100%;
    height:150px;
    div{
        height:100%;
        max-width:30rem;
        width:90%;
        margin: 0 auto;
        display:grid;
        grid-template-columns:1fr;
        grid-template-rows:1fr;
        text-align:center;
        align-items:center;

        h2{
           grid-area: 1 / 1 / 2 / 2; 
           font-family: flood-std, sans-serif;
           font-weight: 300;
           font-size: clamp(1.6rem,6vw,3rem);
           letter-spacing:2px;
           margin:0;
           color:#199453;
        }
    }
`
const StyledBrush = styled(Brush)`
    grid-area: 1 / 1 / 2 / 2;
`

const Info = styled.div`
    max-width:60rem;
    margin:2rem auto;
    width:90%;

    h3{
        font-family:flood-std, sans-serif;
        font-weight:300;
        font-size:clamp(1.8rem, 4vw, 2.5rem);
        letter-spacing:2px;
        color:#199534;
        margin:0 0 1rem 0;
    }

    p{
        font-family: co-text, sans-serif;
        font-size: clamp(.9rem,2vw, 1.2rem);
        line-height:28px;
        color:#5f5f5f;
        margin:0;
        letter-spacing:1px;

        strong{
            color:black;
        }
    }
    @media ${breakpoints.sm}{
        text-align:center;
    }
    `
    const PhotoGridWrap = styled.div`
        max-width:80rem;
        margin: 2rem auto;
    `