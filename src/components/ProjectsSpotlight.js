import React from "react"
import Brush from "../svg/assets/brush.svg"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"


const ProjectsSpotlight = () => {
     return(
         <PsWrapper>
             <PsTitleWrap>
                 <div>
                 <StyledBrush />
                 <h2>Projects Spotlight</h2>
                 </div>
             </PsTitleWrap>
            <section>
             <div>
                <StaticImage 
                    src="../images/puertorico.jpg"
                    alt="puerto rico image"
                    quality={50}

                />
                <Link to="/proj/puertorico">Puerto Rico</Link>
             </div>
             <div>
             <StaticImage 
                    src="../images/bahamas.jpg"
                    alt="bahamas image"
                    aspectRatio={1.5}
                    quality={50}

                />
                <Link to="/proj/bahamas">Bahamas</Link>
             </div>
             <div>
                <StaticImage 
                        src="../images/haiti.jpg"
                        alt="haiti image"
                        quality={50}

                    />
                <Link to="/proj/haiti">Haiti</Link>
             </div>
             <div>
                <StaticImage 
                    src="../images/KentuckyBanner.jpg"
                    alt="Kentucky image"
                    quality={50}

                />
                <Link to="/proj/kentucky">Kentucky</Link>
             </div>
             <div>
                 <StaticImage 
                    src="../images/greetings.jpg"
                    alt="New Jersey"
                    aspectRatio={1.5}
                    quality={50}

                />
                <Link to="/proj/newjersey">New Jersey</Link>
             </div>
             </section>
         </PsWrapper>
     )
}

export default ProjectsSpotlight

const PsWrapper = styled.main`
   display:flex;
   flex-flow:row wrap;
   max-width:1700px;
   width:90%;
   margin:4rem auto 4rem auto;

   section{
       width:100%;
       margin: 0 auto;
       display:flex;
       flex-flow:row wrap;
       align-items:center;
       justify-content:space-evenly;

       div{
           width:15rem;
           margin: 1rem;
           display:flex;
           flex-flow:column;
           justify-content:center;
           align-items:center;
           border-radius:10px;

           a{
               height:auto;
               background:#199534;
               color:white;
               width:10rem;
               padding:1rem 0;
               border-radius:10px;
               text-decoration:none;
               margin-top:1rem;
               text-align:center;
               font-family:flood-std, sans-serif;
               font-weight:300;
               font-size:1.2rem;
           }
       }
   }

`

const PsTitleWrap = styled.div`
    width:100%;
    margin-bottom:4rem;
    
    div{
        display:grid;
        grid-template-columns:1fr;
        grid-template-rows:1fr;
        align-items:center;
        width:95%;
        max-width:38rem;  
        margin:0 auto; 
    }

    h2{
        grid-area: 1 / 1 / 2 / 2;
        position:relative;
        text-align:center;
        font-family:flood-std,sans-serif;
        font-size:clamp(1.5rem,4vw,2rem);
        margin:0;
        color:white;
    }
    
`

const StyledBrush = styled(Brush)`
    grid-area: 1 / 1 / 2 / 2;
`