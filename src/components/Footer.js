import * as React from "react"

import { StaticImage } from "gatsby-plugin-image"
import styled from "styled-components"
import {breakpoints} from "../utils/breakpoints"

const Footer = () => {
    
    return(
    <FooterWrap>
        <Logo>
            <StaticImage 
            src="../images/CypressLogo2.png"
            layout="fixed"
            width={140}
            quality={90}
            placeholder="blurred"
            />
        </Logo>
        <CenterInfo>
            <a href="emailto:info@cypressmissions.com">info@cypressmissions.com</a>
            <p>© {new Date().getFullYear()}, CypressMissions</p>
        </CenterInfo>
        <FooterSocialsWrap>
            <p>Stay Connected:</p>
            <FooterSocials>
                <div>
                    <a href="https://www.facebook.com/CypressMissions/">
                    <svg xmlns="http://www.w3.org/2000/svg" width="36.459" height="53.347" viewBox="0 0 36.459 53.347">
                        <defs>
                            <filter id="Path_1" x="0" y="0" width="36.459" height="53.347" filterUnits="userSpaceOnUse">
                            <feOffset dy="3" input="SourceAlpha"/>
                            <feGaussianBlur stdDeviation="3" result="blur"/>
                            <feFlood floodOpacity="0.161"/>
                            <feComposite operator="in" in2="blur"/>
                            <feComposite in="SourceGraphic"/>
                            </filter>
                        </defs>
                        <g id="Facebook" transform="translate(9 6)">
                            <g transform="matrix(1, 0, 0, 1, -9, -6)" filter="url(#Path_1)">
                            <path id="Path_1-2" data-name="Path 1" 
                            d="M91.979,35.347v-16.1h5.5l.786-6.284H91.979V9.033c0-1.767.589-3.142,3.142-3.142h3.338V.2C97.674.2,95.71,0,93.55,0,88.837,0,85.5,2.946,85.5,8.248v4.713H80v6.284h5.5v16.1Z" 
                            transform="translate(-71 6)" fill="#199453" fillRule="evenodd"/>
                            </g>
                        </g>
                    </svg>
                    </a>
                </div>
                
                <div>
                    <a href="https://twitter.com/cypressmission1">
                <svg xmlns="http://www.w3.org/2000/svg"  width="53.347" height="46.671" viewBox="0 0 53.347 46.671">
                    <defs>
                        <filter id="Path_2" x="0" y="0" width="53.347" height="46.671" filterUnits="userSpaceOnUse">
                        <feOffset dy="3" input="SourceAlpha"/>
                        <feGaussianBlur stdDeviation="3" result="blur"/>
                        <feFlood floodOpacity="0.161"/>
                        <feComposite operator="in" in2="blur"/>
                        <feComposite in="SourceGraphic"/>
                        </filter>
                    </defs>
                    <g id="Twitter" transform="translate(9 6)">
                        <g transform="matrix(1, 0, 0, 1, -9, -6)" filter="url(#Path_2)">
                        <path id="Path_2-2" data-name="Path 2" 
                        d="M49.193,30.671c13.353,0,20.619-11,20.619-20.619V9.069a15.963,15.963,0,0,0,3.535-3.731,16.3,16.3,0,0,1-4.124,1.178,7.64,7.64,0,0,0,3.142-3.927,18.012,18.012,0,0,1-4.517,1.767A7.013,7.013,0,0,0,62.547,2a7.378,7.378,0,0,0-7.266,7.266,3.828,3.828,0,0,0,.2,1.571A20.3,20.3,0,0,1,40.553,3.178a7.52,7.52,0,0,0-.982,3.731A7.8,7.8,0,0,0,42.713,13a6.62,6.62,0,0,1-3.338-.982h0a7.177,7.177,0,0,0,5.891,7.069,6.054,6.054,0,0,1-1.964.2,3.342,3.342,0,0,1-1.375-.2A7.439,7.439,0,0,0,48.8,24.19a14.827,14.827,0,0,1-9.033,3.142,5.437,5.437,0,0,1-1.767-.2,18.535,18.535,0,0,0,11.193,3.535"
                        transform="translate(-29 4)" fill="#199453" fillRule="evenodd"/>
                        </g>
                    </g>
                </svg>
                </a>
                </div>
                
                <div>
                    <a href="https://www.instagram.com/cypressmissions/">
                <svg xmlns="http://www.w3.org/2000/svg"  width="53.347" height="53.347" viewBox="0 0 53.347 53.347">
                    <defs>
                        <filter id="Path_3" x="0" y="0" width="53.347" height="53.347" filterUnits="userSpaceOnUse">
                        <feOffset dy="3" input="SourceAlpha"/>
                        <feGaussianBlur stdDeviation="3" result="blur"/>
                        <feFlood flood-opacity="0.161"/>
                        <feComposite operator="in" in2="blur"/>
                        <feComposite in="SourceGraphic"/>
                        </filter>
                    </defs>
                    <g id="Instagram" transform="translate(9 6)">
                        <g transform="matrix(1, 0, 0, 1, -9, -6)" filter="url(#Path_3)">
                        <path id="Path_3-2" data-name="Path 3" d="M17.674,3.142a54.191,54.191,0,0,1,7.069.2,9.108,9.108,0,0,1,3.338.589A6.9,6.9,0,0,1,31.42,7.266a9.108,9.108,0,0,1,.589,3.338c0,1.767.2,2.356.2,7.069a54.192,54.192,0,0,1-.2,7.069,9.108,9.108,0,0,1-.589,3.338,6.9,6.9,0,0,1-3.338,3.338,9.108,9.108,0,0,1-3.338.589c-1.767,0-2.356.2-7.069.2a54.192,54.192,0,0,1-7.069-.2,9.108,9.108,0,0,1-3.338-.589,6.9,6.9,0,0,1-3.338-3.338,9.108,9.108,0,0,1-.589-3.338c0-1.767-.2-2.356-.2-7.069a54.191,54.191,0,0,1,.2-7.069,9.108,9.108,0,0,1,.589-3.338A7.053,7.053,0,0,1,5.3,5.3,3.32,3.32,0,0,1,7.266,3.927,9.108,9.108,0,0,1,10.6,3.338a54.191,54.191,0,0,1,7.069-.2m0-3.142a58.023,58.023,0,0,0-7.266.2,12.123,12.123,0,0,0-4.32.785A7.687,7.687,0,0,0,2.946,2.946,7.687,7.687,0,0,0,.982,6.088,8.947,8.947,0,0,0,.2,10.408,58.023,58.023,0,0,0,0,17.674,58.023,58.023,0,0,0,.2,24.94a12.123,12.123,0,0,0,.785,4.32A7.688,7.688,0,0,0,2.946,32.4a7.687,7.687,0,0,0,3.142,1.964,12.123,12.123,0,0,0,4.32.785,58.023,58.023,0,0,0,7.266.2,58.023,58.023,0,0,0,7.266-.2,12.123,12.123,0,0,0,4.32-.785,8.239,8.239,0,0,0,5.106-5.106,12.123,12.123,0,0,0,.785-4.32c0-1.964.2-2.553.2-7.266a58.023,58.023,0,0,0-.2-7.266,12.123,12.123,0,0,0-.785-4.32A7.687,7.687,0,0,0,32.4,2.946,7.687,7.687,0,0,0,29.26.982,12.123,12.123,0,0,0,24.94.2,58.023,58.023,0,0,0,17.674,0m0,8.64A8.888,8.888,0,0,0,8.64,17.674,9.033,9.033,0,1,0,17.674,8.64m0,14.924a5.786,5.786,0,0,1-5.891-5.891,5.786,5.786,0,0,1,5.891-5.891,5.786,5.786,0,0,1,5.891,5.891,5.786,5.786,0,0,1-5.891,5.891M27.1,6.088a2.16,2.16,0,1,0,2.16,2.16,2.179,2.179,0,0,0-2.16-2.16" transform="translate(9 6)" fill="#199453" fill-rule="evenodd"/>
                        </g>
                    </g>
                </svg>
                </a>
                </div>
                
                <div>
                    <a href="https://www.youtube.com/channel/UCHwL-YU-gvb9cpRCWYkTtbA">
                <svg xmlns="http://www.w3.org/2000/svg" width="56.4" height="45" viewBox="0 0 56.4 45">
                    <defs>
                        <filter id="Icon_awesome-youtube" x="0" y="0" width="56.4" height="45" filterUnits="userSpaceOnUse">
                        <feOffset dy="3" input="SourceAlpha"/>
                        <feGaussianBlur stdDeviation="3" result="blur"/>
                        <feFlood floodOpacity="0.161"/>
                        <feComposite operator="in" in2="blur"/>
                        <feComposite in="SourceGraphic"/>
                        </filter>
                    </defs>
                    <g id="Youtube" transform="translate(9 6)">
                        <g transform="matrix(1, 0, 0, 1, -9, -6)" filter="url(#Icon_awesome-youtube)">
                        <path id="Icon_awesome-youtube-2" data-name="Icon awesome-youtube" 
                        d="M38.648,8.725a4.825,4.825,0,0,0-3.395-3.417c-2.995-.808-15-.808-15-.808s-12.008,0-15,.808A4.825,4.825,0,0,0,1.852,8.725c-.8,3.014-.8,9.3-.8,9.3s0,6.289.8,9.3a4.753,4.753,0,0,0,3.395,3.362c2.995.808,15,.808,15,.808s12.008,0,15-.808a4.753,4.753,0,0,0,3.395-3.362c.8-3.014.8-9.3.8-9.3s0-6.289-.8-9.3ZM16.323,23.737V12.318l10.036,5.71L16.323,23.737Z" 
                        transform="translate(7.95 1.5)" fill="#199453"/>
                        </g>
                    </g>
                </svg>
                </a>
                </div>
            </FooterSocials>
        </FooterSocialsWrap>
    </FooterWrap>
    )
}

export default Footer

const FooterWrap = styled.footer`
    display:grid;
    grid-template-rows:1fr;
    grid-template-columns:repeat(3, 1fr);
    padding:1rem 0;
    position:relative;
    z-index:10;
  
    @media ${breakpoints.md}{
        display:flex;
        flex-flow:column-reverse;
        justify-content:center;
        align-items:center;
    }
`
const Logo = styled.div`
  display:flex; 
  flex-flow:column;
  justify-content:center;
  align-items:center;
@media ${breakpoints.md}{
    display:none;
}
`
const CenterInfo = styled.div`
    display:flex;
    flex-flow:column;
    justify-content:center;
    align-items:center;

    p,a{
        font-family: co-text, sans-serif;
        margin:0;
        color:#5f5f5f;
    }

    a{
        text-decoration:none;
        
        :hover{
            color:blue;
        }
    }

`
const FooterSocialsWrap = styled.div`
  display:flex; 
  flex-flow:column;
  justify-content:center;
  align-items:center;

  p{
      font-family:flood-std, sans-serif;
      font-size:clamp(1rem, 3vw, 1.4em);
      margin:0;
  }
`
const FooterSocials = styled.div`
    display:flex;
    flex-flow:row wrap;
    justify-content:center;
    align-items:center;
    
    @media ${breakpoints.md}{
        margin-bottom:2rem;
    }
`