import React from "react"
import BahamasImage from "../../components/ProjectsBanners/BahamasBanner"
import styled from "styled-components"
import Layout from "../../components/layout"
import Brush from "../../svg/assets/brush.svg"
import { breakpoints } from "../../utils/breakpoints"
import { graphql } from "gatsby"
import Seo from "../../components/seo"
import { ImageGrid,ImageWrapper } from "../../Elements/kentuckyElements" 
import { GatsbyImage } from "gatsby-plugin-image"


const Bahamas = ({ data }) => {

    return(
        <Layout>
            <Seo title="Bahamas"/>
            <BackgroundWrap>
                <div>
                  <BahamasImage />  
                </div>
                <Overlay />
            </BackgroundWrap>
            <TitleWrap>
                <div>
                    <StyledBrush />
                    <h2>Bahamas</h2>
                </div>
            </TitleWrap>
            <Info>
                <h3>
                    Abaco Islands
                </h3>
                <p>Our latest trip to Green Turtle Cay, Bahamas, three years after Hurricane Dorian working with local residents as well as other NGO’s, we have seen much progress. Charles Williams, now able to move out of the attic he has lived  in for the past three years into a place he can now call home. Leslie and Seanna Dames, pictured here, are now one step closer to completing their house. Gathering the children together for Cay Kids Day, was a celebration time music, crafts and games. Cypress is thankful to be involved which such a great community.</p>
            </Info>
            <ImageGrid firstTrip>
                   {data.gallery.edges.map(({node,id}) => (
                    <ImageWrapper key={node.id}>
                        <GatsbyImage
                            image={node.childImageSharp.gatsbyImageData}
                            alt=""
                            className="imageStyles"      
                      />
                    </ImageWrapper>
                   ))}
            </ImageGrid> 
        </Layout>
    )
}

export default Bahamas

export const pageQuery = graphql`
    query {
        gallery: allFile(filter: {relativeDirectory: {eq: "bahamas"}}
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
    height:70vh;
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
        max-width:35rem;
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
           font-size: clamp(1.8em,8vw,3rem);
           letter-spacing:2px;
           margin:0;
           color:white;
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
        font-size:clamp(1.4rem, 4vw, 2.5rem);
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
        margin:2rem auto;
    `