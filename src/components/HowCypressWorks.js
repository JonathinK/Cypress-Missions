import React from "react"
import styled from "styled-components"

import  { StaticImage } from "gatsby-plugin-image"

import HurricaneIcon from "../svg/assets/hurricane.svg"
import Brush from "../svg/assets/brush.svg"
import Cross from "../svg/assets/cross.svg"
import Hammer from "../svg/assets/hammer.svg"
import Community from "../svg/assets/community.svg"
import Humanitarian from "../svg/assets/humanitarian.svg"
import Jersey from "../svg/assets/jersey.svg"



import { breakpoints } from "../utils/breakpoints"

const HowCypressWorksHome = () => {

    return(
        <HowCypressWorksSection>
            <TitleWrap>
                <StyledBrush />
                <h2>How Cypress Works</h2>
             </TitleWrap>
            <HowCypressWorks>
            <section>
                <div>
                   <div>
                       <h3>Disaster Relief</h3><StyledHurricaneIcon /> <Cross />
                    </div> 
                    <p>In the weeks and months following a natural disaster, Cypress can bring much-needed supplies to communities in desperate need of humanitarian relief. Putting a roof back on a family's house or fixing a plumbing problem at a school are just
                    some of the ways we help people recover after the headlines fade.
                    </p>
                </div>
             
                <div>
                    <StaticImage 
                        src="../images/hcwPhotos/disasterrelief.jpg"
                        alt="disaster relief photo"
                        quality= {40}
                        layout="fullWidth"
                        loading='lazy'
                        formats={["auto"]}
                        style={{
                            boxShadow:`10px 10px 20px rgba(0,0,0,.5)`,
                            borderRadius: `5px`
                        }}
                        
                    />
                </div>
                </section>
    

            <section>        
                <div>
                    <div><h3>Building Back Communities </h3><StyledHumanitarian /> <Hammer /></div>
                    <p>Cypress has ongoing volunteer projects in the Bahamas and Puerto Rico , two countries ravaged by hurricanes, as well as Haiti and Bulgaria , two countries in the grip of systemic poverty.
                    We concentrate on collecting and donating school supplies for classrooms that need it most, as well as using decades of construction experience to complete vital repairs to personal homes. Along the way Cypress cares about building lasting relationships 
                    with community leaders to target how we can be most helpful.</p>
                    </div>
                <div>
                    <StaticImage 
                            src="../images/hcwPhotos/buildingback.jpg"
                            alt="building back communities photo"
                            quality= {40}
                            layout="fullWidth"
                            loading="lazy"
                            formats={["auto"]}
                            style={{
                                boxShadow:`10px 10px 20px rgba(0,0,0,.5)`,
                                borderRadius: `5px`
                            }}
                        />   
                </div>
            </section>   
            
            <section>
                <div>
                    <div><h3>Local Outreach</h3> <StyledCommunity /> <Jersey /></div>
                    <p>When COVID hit, Cypress sprung into action by opening a much-needed food kitchen and clothing closet in Asbury Park, NJ. Now with a steady stream of local donations and a dedicated work force we plan to open more outreach centers throughout New Jersey.</p>
                </div>
             
                <div>
                    <StaticImage 
                            src="../images/hcwPhotos/localoutreach.jpg"
                            alt="local outreach photo"
                            quality= {40}
                            layout="fullWidth"
                            loading="lazy"
                            formats={["auto"]}
                            style={{
                                boxShadow:`10px 10px 20px rgba(0,0,0,.5)`,
                                borderRadius: `5px`
                            }}
                        />
                </div>
            </section>
            </HowCypressWorks>
        </HowCypressWorksSection>
    )
}

    export default HowCypressWorksHome

    const HowCypressWorksSection = styled.section`
        display:flex;
        flex-flow:column wrap;
        justify-content:center;
        align-items:center;

    `
    const TitleWrap = styled.div`
        display:grid;
        grid-template-columns: 1fr;
        grid-template-rows:1fr;
        justify-content:center;
        align-items:center;
        max-width:38rem;
        width:95%;
        min-width:18rem;
        margin-top:5rem;
        position:relative;

        h2{
            grid-area: 1 / 1 / 2 / 2;
            text-align:center;
            margin:0;
            font-family:flood-std, sans-serif;
            font-weight:300;
            font-size:clamp(1.3rem, 6vw, 2rem);
            color:white;
        }
    `
    const StyledBrush = styled(Brush)`
        grid-area: 1 / 1 / 2 / 2;
        
    `
    const HowCypressWorks = styled.main`
        h3{
            font-family: flood-std, sans-serif;
            font-size: clamp(1.2rem, 5vw, 1.8rem);
            color:#199534;
        }
        p{
            font-family: co-text, sans-serif;
            font-size: clamp(.9rem, 3.5vw, 1.2rem);
            color:#5f5f5f;
            padding:1rem 0;
        }
            section{
                max-width:1700px;
                width:65%;
                margin: 5rem auto; 
                display:grid;
            }
            
            section:nth-child(even){
               grid-template-columns: 55% 10% 35%;
               grid-template-rows:1fr;

               div:first-child{
                   grid-area: 1 / 1 / 2 / 2;
 
               }
               div:nth-child(2){
                   grid-area: 1 / 3 / 2 / 4;
               }
            }

            section:nth-child(odd){
                grid-template-columns:35% 10% 55%;
                grid-template-rows:1fr;

                
               div:first-child{
                    grid-area: 1 / 3 / 2 / 4;

            }
                div:nth-child(2){
                    grid-area: 1 / 1 / 2 / 2;
                }
            }
        @media ${breakpoints.lg}{
            section{
                width:95%;
            }
        }
        @media ${breakpoints.md}{
            section{
                display:flex;
                flex-flow: column;
                justify-content:center;
                align-items:center;
                width:90%;
                
                div:first-child{
                    text-align:center;
                }
                div:nth-child(2){
                    width:70%;
                }
            }
        }
        // @media ${breakpoints.md}{
        //     section{
        //         div:nth-child(2){
        //             width:70%;
        //         }
        //     }
        // }
    `
    const StyledHurricaneIcon = styled(HurricaneIcon)`
        border-radius:10px;
        margin-right: 1rem;
        animation: 1.5s  CaneRotation linear infinite;

        @keyframes CaneRotation{
          from{
              transform: rotate(0);   
          }
          to{
            transform: rotate(-360deg);
          }
      }
    `
    const StyledHumanitarian = styled(Humanitarian)`
        margin-right:1rem;
    `
    const StyledCommunity = styled(Community)`
     margin-right:1rem;
    `

