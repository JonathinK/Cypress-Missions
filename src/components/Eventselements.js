import styled from "styled-components";
import { breakpoints } from "../utils/breakpoints";

export const EventWrapper = styled.main`
    width:100%;
    min-height:100vh;
    display:flex;
    flex-flow:column;
    justify-content:center;
    align-items:center;
    background-image:linear-gradient(
        hsl(148, 10%, 78%),
        hsl(0,0%,90%) 
    );

    @media ${breakpoints.sm}{
        justify-content:center; 
        align-items:center; 
    }
`

export const EventElement = styled.div`
    display:grid;
    grid-template-columns: repeat(8,1fr);
    grid-gap:10px;
    width:68em;
    height:24.1875em;
    background:white;
    border-radius:10px;
    box-shadow: 20px 20px 10px hsla(0,0%,0%,.3);
    position:relative;

   
    @media ${breakpoints.aux}{
        display:flex;
        flex-flow:column wrap;
        justify-content:flex-start;
        align-items:center;
        width:80%;
        max-width:500px;
        height:auto;
        margin: 0 auto;
    } 
    @media ${breakpoints.md}{
        margin-top:4rem;
        max-width:450px;
    }
`
export const ImageWrapper = styled.div`
    overflow:hidden;
    height:100%;
    width:100%;
    grid-column: 1 / 4;
    border-radius: 10px 0 0 10px;

    @media ${breakpoints.aux}{
        grid-column:none;
        border-radius:10px 10px 0 0;
    }

    @media ${breakpoints.sm}{
        height:250px;
    }


`
export const ImageContainer = styled.div`
    overflow:hidden;
`
export const InfoWrapper = styled.div`
    display:flex;
    flex-flow: column nowrap;
    justify-content:flex-start;
    align-items: flex-start;
    grid-column: 4 / 9;
    overflow:hidden;
    text-overflow: ellipes;

   
     h3{
        font-family:flood-std, sans-serif;
        color:#199453;
        margin-top:60px;
        font-size:1.4rem;
    }
    p{ 
       display:-webkit-box;
       -webkit-line-clamp: 5;
       -webkit-box-orient: vertical;
       line-height:35px;
       width:95%;   
       height:45%;
       overflow:hidden;
       font-family: co-text, sans-serif;
       color:#5f5f5f;
    }

    @media ${breakpoints.aux}{
        align-items:center;
        p{
            width:90%
        }
    }
    
    @media ${breakpoints.sm}{
        align-items:center;
        
        h3{
            margin-top:1rem;
            font-size:clamp(1rem, 4vw, 1.1rem);
        }
        p{
            width:90%;
            -webkit-line-clamp:3;
            font-size:clamp(.7rem, 5vw, .9rem);
        }
    }
`
export const ButtonWrapper = styled.div`
   display:flex;
   flex-flow:row nowrap;
   justify-content:space-between;
   margin-top: 1rem;
   
   @media ${breakpoints.aux}{
        width:100%;
        justify-content:space-evenly;
        margin-top:.5rem;
    }
`
export const Button = styled.div`
    font-family: flood-std, sans-serif;
    font-size: 1.2rem;
    background:#A6B9AF;
    color:white;
    margin: .5rem 2rem 1rem 0;
    width:183px;
    padding:.5rem 0;
    text-align:center;
    box-shadow:10px 10px 10px hsla(0,0%,0%,.3);
    border-radius: 5px;
    cursor:pointer;

    a{
        text-decoration:none;
        color:inherit;
    }

    @media ${breakpoints.aux}{
        margin: 1rem 0;
        width:40%
    }
    @media ${breakpoints.sm}{
        font-size: clamp(.8rem, 4vw, 1rem);
        margin:0;
        margin-bottom:1rem;
    }
`
export const DonateButton = styled(Button)`

`

export const WrapDiv = styled.div`
    grid-column: 1 / 4;
    width:100%;
    height:auto;
    background:hsl(148, 10%, 60%);
    position:absolute;
    margin-top:1rem;
    border-radius: 30px 30px 30px 0;
    transform: translateX(-15px);
    box-shadow: 10px 10px 10px hsla(0,0%,0%,.3);

    &:before{
       content:'';
       position:absolute;
       width:15px;
       height:30px;
       background:hsl(148, 10%, 50%);
       top:68px;
       border-top-left-radius:20px;
       border-bottom-left-radius:20px;
       z-index:2;
    }
    &:after{
       content:'';
       position:absolute;
       width:15px;
       height:15px;
       background:hsl(148, 10%, 60%);
       top:68px;
    }

    @media ${breakpoints.sm}{
     
        &:before{
            top:55px;
        }

        &:after{
            top:55px;
        }
    }
` 
export const EventTitle = styled.div`
    padding: 1rem 0;
    text-align:center;
    font-family:flood-std;
    font-size:clamp(1rem, 5.3vw, 1.5rem);
    font-weight:300;
    color:white;

    @media ${breakpoints.sm}{
        font-size:clamp(.9rem, 5vw, 1rem);

    }
`