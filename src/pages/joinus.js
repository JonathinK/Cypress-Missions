import React from "react"

import Layout from "../components/Layout"
import Seo from "../components/seo"

import styled from "styled-components"
import { breakpoints } from "../utils/breakpoints"



const JoinUs = () => {

    return(
        <Layout>
        <Seo title="JoinUs" />
            <JoinUsWrap>
            <JoinSvgWrap>
             <svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" width="100%" height="100%" viewBox="0 0 1920 700.222">
                <defs>
                    <linearGradient id="linear-gradient" x1="0.5" x2="0.5" y2="1.023" gradientUnits="objectBoundingBox">
                    <stop offset="0" stop-color="#a6b9af"/>
                    <stop offset="1" stop-color="#fff" stop-opacity="0.494"/>
                    </linearGradient>
                </defs>
                <path id="Path_205" data-name="Path 205" d="M0,0H1920V638.664s-214.915,138.506-957.734,0S0,638.664,0,638.664Z" fill="url(#linear-gradient)"/>
            </svg>
            </JoinSvgWrap>
                <MakeImpact>
                    <h2>Ready To Make An Impact?</h2>
                    <p>We are always looking for for new volunteers to join our teams, locally and abroad. If you are interested in changing lives through giving back, then watch this short video from our founder Freddie.
                        Fill out the form below, and someone will reach out to you with more information.
                    </p>
                    <div>Video Goes Here</div>
                </MakeImpact>
                <FormWrap>
                    <form>
                        <h2>Join Our Team</h2>
                        <label>
                            <input type="text" name="name" placeholder="Full Name"/>
                        </label>
                        <label>
                            <input type="email" name="email" placeholder="Email"/>
                        </label>
                        <label>
                            <input type="text" name="subject" placeholder="Subject" />
                        </label>
                        <label>
                            <textarea name="messsage" placeholder="Tell us about yourself"/> 
                        </label>
                        <div><button type="submit">Submit</button></div>
                    </form>
                </FormWrap>
            </JoinUsWrap> 
        </Layout>
    )
}

export default JoinUs

const JoinUsWrap = styled.main`
   @media ${breakpoints.sm}{
    
   }
    min-height:100vh;
    display:flex;
    flex-flow: column wrap;
`
const JoinSvgWrap = styled.div`
    position:absolute;
    top:0;
    width:100%;
    height:50vh;
    min-height:35rem;
    z-index:-1;
    
    svg{
        width:100%;
        height:100%;
        position:relative;
       }
`
const MakeImpact = styled.div`
    width:100%;
    max-width:1920px;
    display:flex;
    flex-flow:column wrap;
    justify-content:flex-start;
    align-items:center;
    margin:10rem auto 0 auto;

    h2{
        font-family: flood-std, sans-serif;
        font-weight: 300;
        font-size:clamp(25px, 5vw, 40px);
        margin:0;
        color:#5f5f5f;
        text-align:center;
    }

    p{
        text-align:center;
        line-height:30px;
        max-width:50rem;
        width:90%;
        font-family:co-text, sans-serif; 
        font-size:clamp(1rem, 3vw, 1.3rem);
        margin:0;
        margin-top:2rem;
        color:#5f5f5f;
    }
    div{
       display:flex;
       flex-flow:column;
       justify-content:center;
       align-items:center;
       background:orange;
       max-width:60rem;
       width:90%;
       min-height:12rem;
       height:50vw;
       max-height:30rem;
       border-radius:10px;
       box-shadow: 20px 20px 20px rgba(0,0,0,.3);
       margin-top:5rem;
    }
`
const FormWrap = styled.div`
    width:100%;
    height:auto;
    margin-top:5rem;
    display:flex;
    flex-flow:column;
    justify-content:center;
    align-items:center;

    form{
        display:flex;
        flex-flow:column wrap;
        justify-content:center;
        align-items:center;
        width:100%;
        height:auto;
        

        h2{
            font-family: flood-std, sans-serif;
            font-weight: 300;
            font-size:clamp(25px, 5vw, 40px);
            margin:0 0 1rem 0;  
            color:#5f5f5f;
        }
        label{
            width:100%;
            display:flex;
            justify-content:center;
            
            input{
                margin:1rem 0;
                max-width: 50rem;
                width:70%;
                height:2rem;
                text-align:center;
                box-shadow: inset 0px 0px 5px rgba(0,0,0,.3);
                border:none;
                border-radius:10px;
            }

            textarea{
                margin:1rem 0;
                resize:none;
                height:16rem;
                width:70%;
                max-width:50rem;
                border:none;
                border-radius:10px;
                box-shadow: inset 0px 0px 5px rgba(0,0,0,.3);   
                padding:5px 5px;
            }
        }
        div{
            width:auto;
            button{
                font-family:flood-std, sans-serif;
                font-weight:300;
                font-size:clamp(18px, 6vw, 20px);
                margin:2rem 0;
                width:10rem;
                height:3rem;
                border-radius:10px;
                border:none;
                box-shadow: 0px 5px 10px rgba(0,0,0,.2);
                background:#199453;
                color:white;
            }
            button:active{
                box-shadow:none;
            } 
        }
        
    }
`