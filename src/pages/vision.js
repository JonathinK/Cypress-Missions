import React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import styled from "styled-components"
import VisionBanner from "../components/About/VisionsBanner"
import { Link } from "gatsby"


import Brush from "../svg/assets/brushw.svg"

const VisionPage = () => {
   
     return(
         <Layout>
             <Seo title="Vision" />
             <Banner>
                 <BackgroundWrap>
                     <VisionBanner />
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
                   <Link to="/origins">
                        Origins
                    </Link>
                </OriginsButton>
                <VisionButton> 
                    <div><h3>Vision</h3></div>    
                </VisionButton>
             </ButtonWrap>
             <Vision>
                 <h3>Our Vision</h3>
                <p>Our Vision is simple, to help communities recover one person at a time.
                    Whether it's from an unexpected natural disaster or systemic poverty, 
                    Cypress offers ways for families to bounce back.</p>
             </Vision>
             <CoreValues>
                 <h3>Core Values</h3>
                 <p>Cypress welcomes all walks of life. When you donate your time, 
                     not only are you helping others, you are also adding purpose to 
                     your life. Cypress's goal is to provide tangible help for those 
                     in need by motivating people to help their neighbor.</p>
             </CoreValues>
         </Layout>
     )
}

export default VisionPage

const Banner = styled.div`
    width:100%;
    height:70vh;
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
    background:rgba(0,0,0,.3);
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
    padding:5rem 0 0 0;
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
const VisionButton = styled.div`
    max-width: 12rem;
    width:100%;
    min-width:6rem;
    min-height:4rem;
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
            margin:0;
        }
    
`
const Vision = styled.div`
    display:flex;
    flex-flow:column wrap;
    justify-content:center;
    align-items:center;
    padding:3rem 3rem;

    h3{
        font-family:flood-std, sans-serif;
        font-weight:300;
        font-size: clamp(2rem , 6vw , 2.5rem);
        margin:0 0 1rem 0;
        color:#199645;
    }

    p{
        font-family:co-text, sans-serif;
        font-size:clamp(1rem, 3vw, 1.3rem);
        margin:0;
        width:90%;
        max-width:60rem;
        text-align:center;
        color:#959595;
        line-height:30px;
    }
`
const CoreValues =styled.div`
    display:flex;
    flex-flow:column wrap;
    justify-content:center;
    align-items:center;
    padding:3rem 3rem;
    margin-bottom:5rem;

    h3{
        font-family:flood-std, sans-serif;
        font-weight:300;
        font-size: clamp(2rem , 6vw , 2.5rem);
        margin:0 0 1rem 0;
        color:#199645;
    }

    p{
        font-family:co-text, sans-serif;
        font-size:clamp(1rem, 3vw, 1.3rem);
        margin:0;
        width:90%;
        max-width:60rem;
        text-align:center;
        color:#959595;
        line-height:30px;
}
`

