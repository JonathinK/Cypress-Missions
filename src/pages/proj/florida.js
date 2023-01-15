import React,{useState} from "react";
//Banner Import
import FloridaImage from "../../components/ProjectsBanners/FloridaBanner";
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

const Florida = ({data}) => {

    return(
        <Layout>
            <Seo title="Recovery Efforts After Ian" />
            <BackgroundWrap>
                <div>
                  <FloridaImage />  
                </div>
                <Overlay />
            </BackgroundWrap>
            <TitleWrap>
                <div>
                    <StyledBrush />
                    <h2>Florida</h2>
                </div>
            </TitleWrap>
            <Info>
            <h3>Harlem Heights, Fort Myers, Fl</h3>
              <p>Wrapping up our initial trip, having met our objectives. This lays the ground work for the next trip in completing this rebuild.</p>
            </Info>
            <ImageGrid secondTrip>
                   {data.florida.edges.map(({node,id}) => (
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
    florida:allFile(
      filter: {relativeDirectory: {eq: "Florida"}}
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
export default Florida





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
