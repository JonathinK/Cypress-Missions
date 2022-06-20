import React,{useState} from "react";
//Banner Import
import KentuckyImage from "../../components/ProjectsBanners/KentuckyBanner";
//Styled Components
import styled from "styled-components";
//Layout
import Layout from "../../components/layout";
//Svg
import Brush from "../../svg/assets/brushw.svg";
//Seo
import Seo from "../../components/seo"
//Breakpoints
import { breakpoints } from "../../utils/breakpoints";
//Component Elements
import { ImageGrid, ImageWrapper } from "../../Elements/kentuckyElements";
//Gatsby Image
import { GatsbyImage } from "gatsby-plugin-image";
//Graphql
import { graphql } from "gatsby";

const Kentucky = ({data}) => {

    return(
        <Layout>
            <Seo title="Rebuilding Kentucky" />
            <BackgroundWrap>
                <div>
                  <KentuckyImage />  
                </div>
                <Overlay />
            </BackgroundWrap>
            <TitleWrap>
                <div>
                    <StyledBrush />
                    <h2>Kentucky</h2>
                </div>
            </TitleWrap>
            <Info>
            <h3>Cayce Rebuilding</h3>
              <p>It's been 6 months since the devastating tornado's ripped through kentucky. Family's are are still displaced looking for help but, the local Cayce Recovery team has done an amazing job to 
              organize and expedite the projects focusing on individuals that have the greatest need. We have a team of 6 along with several other volunteers and NGOs. A team from Heart/911 has flown out to
              assist us with this project. We will be focusing on Don Wright with this project.</p>
            </Info>
            <ImageGrid secondTrip>
                   {data.secondtrip.edges.map(({node,id}) => (
                    <ImageWrapper key={node.id}>
                        <GatsbyImage
                            image={node.childImageSharp.gatsbyImageData}
                            alt=""
                            className="imageStyles"
                      />
                    </ImageWrapper>
                   ))}
            </ImageGrid>
            
            <Info>
            <h3>First Visit</h3>
              <p>When the tornadoes ripped through Kentucky Cypress immediately assembled a small group of four from New Jersey to take on the task of finding where we could be most effective.
                On arrival the effect on the surrounding communities from the tornadoes was heartbreaking. </p>
            </Info>
            <ImageGrid firstTrip>
                   {data.firsttrip.edges.map(({node,id}) => (
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
    );
}
export const query = graphql`
  {
    secondtrip:allFile(
      filter: {relativeDirectory: {eq: "KentuckySecondTrip"}}
      sort: {fields: sourceInstanceName, order: DESC}
    ) {
      edges {
        node {
          id
          publicURL
          childImageSharp {
            gatsbyImageData(
              height: 600
              width: 800
              transformOptions: {fit: COVER, cropFocus: CENTER}
              placeholder: BLURRED
              webpOptions: {quality: 70}
              quality: 50
            )
          }
        }
      }
    }
     firsttrip:allFile(
      filter: {relativeDirectory: {eq: "KentuckyTripFirst"}}
      sort: {fields: sourceInstanceName, order: DESC}
    ) {
      edges {
        node {
          id
          publicURL
          childImageSharp {
            gatsbyImageData(
              height: 600
              width: 800
              transformOptions: {fit: COVER, cropFocus: CENTER}
              placeholder: BLURRED
              webpOptions: {quality: 70}
              quality: 50
            )
          }
        }
      }
    }
  }
`
export default Kentucky





const BackgroundWrap = styled.div`
    display:grid;
    grid-template-rows: repeat(3,1fr);
    grid-template-columns: repeat(2,1fr);
    position:relative;
    min-height:80vh;
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
           font-size: clamp(1.8rem,6vw,3rem);
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
    max-width:70rem;
    margin:5rem auto;
    width:90%;

    h3{
        font-family:co-text, sans-serif;
        font-weight:300;
        font-size:clamp(1.4rem, 4vw, 2rem);
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
