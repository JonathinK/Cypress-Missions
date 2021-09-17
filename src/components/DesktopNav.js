import React, {useEffect, useRef, useState } from "react"

import styled from "styled-components"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import { breakpoints } from "../utils/breakpoints"


const DesktopNav = () => {
    const [fill, setFill] = useState(false)
    const [color, setColor] = useState(false)
    const colorRef = useRef()
    const navRef = useRef()
    colorRef.current = color
    navRef.current = fill
    useEffect(() => {
        const handleScroll = () => {
            const show = window.scrollY > 20
            if (navRef.current !== show) {
                setFill(show)
                setColor(show)
            }
        }
        document.addEventListener("scroll", handleScroll)

        return () => {
            document.removeEventListener("scroll", handleScroll)
        }
    }, [])
    return(
        <NavWrap>
            <NavSvg fill={fill}>
                <svg xmlns="http://www.w3.org/2000/svg" width="1920" height="120" preserveAspectRatio="none" viewBox="0 0 1920 120">
                <path id="Path_406" data-name="Path 406" d="M-.965,0H1998.918V92.823S1683.116,120,998.977,120-.965,92.823-.965,92.823Z" transform="translate(0.965)" />
                </svg>
            </NavSvg>
            <LinksWrapper>
            <LeftLinks color={color}>
                <Link to="/origins">Origins</Link>
                <Link to="/proj">Projects</Link>
                <Link to="/events">Events</Link>
            </LeftLinks>
            <NavLogo> 
                <Link to="/">
                <StaticImage 
                    src="../images/CypressLogo2.png"
                    layout="fixed"
                    width={150}
                    quality={100}
                    placeholder="blurred"
                />
                </Link>
            </NavLogo>
            <RightLinks color={color}>
                <Link to="/joinus">Join Us</Link>
                <Link to="/contactus">Contact</Link>
                <a href="https://www.aplos.com/aws/give/CypressMissions/general"> Donate</a>
            </RightLinks>
            </LinksWrapper>
        </NavWrap>
    )
}

export default DesktopNav

const NavWrap = styled.nav`

    width:100%;
    height:6.5rem;
    display:grid;
    grid-template-columns:1fr;
    grid-template-rows:1fr;
    position:fixed;
    top:0;
    right:0;
    z-index:100;
@media ${breakpoints.md}{
    display:none;
}   
    
`
const NavSvg = styled.div`

    grid-area:1 / 1 / 2 / 2;
    width:100%;
    height:inherit;
    
    svg{
        width:100%;
        height:100%;
        filter:drop-shadow(0 5px 10px rgba(0,0,0,.3));
        -webkit-filter:drop-shadow(0 5px 10px rgba(0,0,0,.3));
        drop-shadow:none;
        fill:${({ fill }) => (fill ? "white" : "transparent")};
        transition: fill 200ms ease-in;
    }

    


`
const LinksWrapper = styled.div`

    grid-area: 1 / 1 / 1 / 2;
    width:100%;
    max-width:80rem;
    margin:0 auto;
    position:relative;
    display:grid;
    grid-template-columns: 1fr .5fr 1fr;
    grid-template-rows: 1fr;

`
const LeftLinks = styled.div`

    grid-area: 1 / 1 / 2 / 2;
    display:flex;
    flex-flow:row;
    justify-content:flex-end;
    align-items:center;
    padding:0 .8rem;

    a{
        margin: 0 .5rem;
        font-family: co-headline, sans-serif;
        font-size: clamp(1rem, 2vw, 1.5rem);
        text-decoration:none;
        color: ${({ color }) => (color ? "#5f5f5f" : "white")};
        transition: color 400ms ease-in-out;
        // text-shadow: 4px 4px 4px rgba(0,0,0,.5);
  
`
const NavLogo = styled.div`
    grid-area: 1 / 2 / 2 / 3;
    display:flex;
    flex-flow:column;
    justify-content:center;
    align-items:center;
`

const RightLinks = styled.div`
    grid-area: 1 / 3 / 2 / 4;
    display:flex;
    flex-flow:row;
    justify-content:flex-start;
    align-items:center;
    padding:0 .8rem;

    a{
        margin: 0 .5rem;
        font-family: co-headline, sans-serif;
        font-size: clamp(1rem, 2vw, 1.5rem);
        text-decoration:none;
        color:${({ color }) => (color ? "#5f5f5f" : "white")};
        transition:color 400ms ease-in-out;
        // text-shadow: 4px 4px 4px rgba(0,0,0,.5);
    }
`