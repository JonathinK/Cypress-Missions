import styled from "styled-components";
import { breakpoints } from "../utils/breakpoints";

export const FullPageEventWrapper = styled.div`
    display:flex;
    flex-flow:column nowrap;
    justify-content:flex-start;
    align-items:center;
    background: #EAEAEA;
  
`
export const  EventBackground = styled.div`
    width:100%;
    min-height:40vh;
    height:50vw;
    max-height:50vh;
    background:#A6B9AF;  
    display:flex;
    flex-flow:column;
    justify-content:flex-start;
    align-items:center;

    
    h2{
        font-family:flood-std, sans-serif;
       transform:translateY(10rem);
    }
    a{
        text-decoration:none;
        color:white;
    }

    @media ${breakpoints.xsm}{
        h2{
            transform:translateY(6rem);
        }
    }
`

export const PictureElementWrap = styled.div`
    width:80%;
    max-width: 50rem;
    transform:translateY(-17rem);
    border: 10px inset #5f5f5f;
    border-radius:5px;

    @media ${breakpoints.sm}{
        transform:translateY(-8rem);
    }
    @media ${breakpoints.xsm}{
        transform:translateY(-6rem);
    }
`

export const DropShadow = styled.div`
    width:70%;
    max-width:50rem;
    height:1.5rem;
    background-image:linear-gradient(to right, hsla(0,0%,92%) , hsla(0,0%,0%,.3), hsla(0,0%,92%,.1) 100%);
    transform:translateY(-9rem);
    border-radius:50%;
    filter:blur(4px);
    
    @media ${breakpoints.sm}{
        transform:translateY(-4rem);
    } 
    @media ${breakpoints.xsm}{
        transform:translateY(-2rem);
    }

`
export const InfoContainer = styled.div`
    max-width: 40rem;
    width:80%;
    height:auto;
    display:flex;
    flex-flow:column nowrap;
    justify-content:flex-start;
    align-items:flex-start;
    transform:translateY(-5rem);
    padding-bottom:1rem;
    

    @media ${breakpoints.sm}{
        transform:translateY(0);
    }

`
export const PageEventTitle = styled. h2`
    color:hsl(148,83%,38%);
    font-family: flood-std, sans-serif;
    font-size:clamp(2rem, 5vw, 3rem);

`
export const Date = styled.h3`
    color:hsl(148,83%,38%);
    font-family: flood-std, sans-serif;
    font-size:clamp(1.5rem, 4.5vw, 2rem);
`
export const Summary = styled.p`
    max-width:40rem;
    width:100%;
    line-height:30px;
    font-family: co-text, sans-serif;
    letter-spacing:1px;
    padding-bottom:1rem;
    font-size:clamp(1rem , 3vw, 1.125rem);
    margin-top:1rem;
    
    a{
        text-decoration:none;
        color: black;
        font-weight: bold;
        
    }
    @media ${breakpoints.sm}{
        line-height:27px;
    }

`

