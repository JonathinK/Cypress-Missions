import styled,{css} from "styled-components";
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
    transform:translateY(-10rem);
    border: 10px inset #5f5f5f;
    border-radius:5px;

    @media ${breakpoints.sm}{
        transform:translateY(-5rem);
    }
    @media ${breakpoints.xsm}{
        transform:translateY(-6rem);
    }

    ${props => props.ImageHeight && css`
        height:clamp(16rem,50vw,34rem);
        overflow:hidden;
        position:relative;
        
        .ImagePosition{
            position:absolute;
            height:100%;
            width:100%;
        }
    `}
`

export const DropShadow = styled.div`
    width:80%;
    max-width:50rem;
    height:1.5rem;
    background-image:linear-gradient(to right, hsla(0,0%,92%) , hsla(0,0%,0%,.3), hsla(0,0%,92%,.1) 100%);
    transform:translateY(-7rem);
    border-radius:50%;
    filter:blur(8px);
    margin:0;
    
    @media ${breakpoints.sm}{
        transform:translateY(-3rem);
    } 
    @media ${breakpoints.xsm}{
        transform:translateY(-2rem);
    }
`
export const InfoContainer = styled.div`
    max-width: 48rem;
    width:80%;
    height:auto;
    display:flex;
    flex-flow:column nowrap;
    justify-content:flex-start;
    align-items:flex-start;
    gap:1rem;
    transform:translateY(-5rem);
    padding-bottom:1rem;
    margin-bottom:5rem;
    

    @media ${breakpoints.sm}{
        transform:translateY(0);
    }
`
export const PageEventTitle = styled.h2`
    color:hsl(148,83%,38%);
    font-family: flood-std, sans-serif;
    font-size:clamp(1.6rem, 5vw, 2.1rem);
    line-height:1.5;
    letter-spacing:.5px;
    margin:0;
`

export const Location = styled.h3`
    font-family:co-text,sans-serif;
    font-size:clamp(1.3em,3vw,1.5em);
    line-height:1.5;
    color:#2f4644;
    margin:0;
`

export const Date = styled.h3`
    color:hsl(148,83%,38%);
    font-family: co-text, sans-serif;
    font-size:1.2em;
    line-height:1.5;
    margin:0;
`
export const Summary = styled.p`
    max-width:48rem;
    width:100%;
    line-height:1.5;
    font-family: co-text, sans-serif;
    letter-spacing:1px;
    padding-bottom:1rem;
    font-size:clamp(1rem , 3vw, 1.125rem);
    margin:0;
    color:#5f5f5f;
    
    a{
        text-decoration:none;
        color: green;
        font-weight: bold;
        :hover{
            color: blue;
        }
    }
    @media ${breakpoints.sm}{
        line-height:1.5;
    }
`

