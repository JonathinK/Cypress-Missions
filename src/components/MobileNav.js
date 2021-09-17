import  React, { useState} from "react"

import styled from "styled-components"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import { breakpoints } from "../utils/breakpoints"

const MobileNav = () => {
    const [menuOpen, toggleMenuOpen] = useState(false)

    return(
        <MobileBar>
            <MobileSvg>
                <svg xmlns="http://www.w3.org/2000/svg" width="1999.883" height="120" preserveAspectRatio="none" viewBox="0 0 1999.883 120">
                 <path id="Path_406" data-name="Path 406" d="M-.965,0H1998.918V92.823S1683.116,120,998.977,120-.965,92.823-.965,92.823Z" transform="translate(0.965)" fill="#fff"/>
                </svg>
            </MobileSvg>
            <MobileLogo>
                <Link to="/">
                <StaticImage 
                    src="../images/CypressLogo2.png"
                    layout="constrained"
                    width={150}
                    quality={100}
                    placeholder="blurred"
                />
                </Link>
            </MobileLogo>
            <MenuBarWrap>
            <MenuBar menuOpen={menuOpen} onClick={ () => toggleMenuOpen(!menuOpen)}> 
                <div />
                <div />
                <div />
            </MenuBar>
            </MenuBarWrap>
            <MobileMenu menuOpen={menuOpen} onClick={ () => toggleMenuOpen(!menuOpen)}>
                <Link to="/origins">About</Link>
                <Link to="/proj">Projects</Link>
                <Link to="/events">Events</Link>
                <Link to="/joinus">Join Us</Link>
                <Link to="/contactus">Contact</Link>
                <a href="https://www.aplos.com/aws/give/CypressMissions/general">Donate</a>
            </MobileMenu>
        </MobileBar>
       
    )
}

export default MobileNav

const MobileBar = styled.div`
    display:none;
@media ${breakpoints.md}{
    display:grid;
    grid-template-rows:1fr;
    grid-template-columns:repeat(3, 1fr);
    width:100%;
    max-height:6.5rem;
    height:20vw;
    position:fixed;
    top:0:
    right:0;
    z-index:100;
}
`
const MobileSvg = styled.div`
    width:100%;
    height:100%;
    grid-area:  1 / 1 / 2 / 4;

    svg{
        width:100%;
        height:inherit;
        filter: drop-shadow(0 5px 10px rgba(0,0,0,.3));
    }
`
const MobileLogo = styled.div`
 grid-area: 1 / 2 / 2 / 3;
 width:100%;
 display:flex;
 justify-content:center;
 align-items:center;
`
const MenuBarWrap = styled.div`
    @media ${breakpoints.md}{
        grid-area: 1 / 3 / 2 / 4;
        display:flex;
        flex-flow:column;
        justify-content:center;
        align-items:center;
        width:100%;
        height:100%;
        position:relative;
    }
    display:none;
`
const MenuBar = styled.div`
    width:2.5rem;
    height:2rem;
    display:flex;
    flex-flow:column;
    justify-content:space-between;
    align-items:center;
    cursor:pointer;
    position:relative; 
    z-index:102;
   

    div{
        height:.4rem;
        width:100%;
        background:${({ menuOpen }) => (menuOpen ? "red" : "black")};
        border-radius:10px;
        transform-origin:4px;
        transition: transform 400ms ease-in-out, opacity 400ms ease-in-out;
        

        :first-child{
            transform: ${({ menuOpen }) => menuOpen ? "rotate(45deg)" : "rotate(0)"};
        }

        :nth-child(2){
            opacity: ${({ menuOpen}) => menuOpen ? "0" : "1"};
            transform: ${({ menuOpen}) => menuOpen ?  "translateX(-20px)" : "translateX(0)"};
            pointer-events: ${({ menuOpen}) => menuOpen ? "none" : "all"};
        }

        :nth-child(3){
            transform: ${({menuOpen}) => menuOpen ?  "rotate(-45deg)" : "rotate(0)"}
        }
    }

    @media ${breakpoints.sm}{
        
        height:1.5rem;
        width:2rem;
        div{

        }
    }
   
`

const MobileMenu = styled.nav`
    display:none;
    @media ${breakpoints.md}{
        display:flex;
        flex-flow:column;
        justify-content: center;
        align-items: center;
        width:100%;
        height:100vh;
        position:absolute;
        background:white;
        top:0;
        right:0;
        z-index:101;
        transform: ${({ menuOpen }) => menuOpen ? "translateX(0)" : "translateX(100%)"};
        transition: transform 500ms ease-in-out;
        
       

        a{
            text-decoration:none;
            color:#5f5f5f;
            font-size: clamp(1.5rem, 3vw, 2rem);
            margin:1rem 0;
            font-family: co-headline, sans-serif;
        }
    }
`