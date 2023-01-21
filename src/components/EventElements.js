import styled from "styled-components";
import { breakpoints } from "../utils/breakpoints";

export const EventWrapper = styled.main`
    width:100%;
    min-height:100vh;
    padding-top: 20vh;
    padding-bottom:20vh;
    display:flex;
    flex-flow:column;
    justify-content:center;
    align-items:center;
    background-image:linear-gradient(
        hsl(148, 10%, 78%),
        hsl(0,0%,90%) 
    );
    
    h1{
        font-family:flood-std, sans-serif;
        color:white;
        text-shadow: 5px 5px 10px grey;
        text-align:center;
        margin:0 1rem;
        display:none;
    }

    @media ${breakpoints.sm}{
        justify-content:center; 
        align-items:center; 
    }
`

export const EventElement = styled.div`
    display:grid;
    grid-template-columns: repeat(8,1fr);
    grid-gap:1.5rem;
    width:68em;
    height:24.1875em;
    background:white;
    border-radius:10px;
    box-shadow: 0px 20px 10px -10px hsla(0,0%,0%,.3);
    position:relative;
    margin: 3rem 0;
    padding-right:1.5rem;

   
    @media ${breakpoints.aux}{
        display:flex;
        flex-flow:column wrap;
        justify-content:flex-start;
        align-items:center;
        width:80%;
        max-width:500px;
        height:auto;
        margin: 5rem auto;
        padding:0;
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
    border-radius: 10px;
    position:relative;

    .image_fit{
        position:absolute;
        width:100%;
        height:100%;
    }
    .Image{
        border-radius:10px;
    }

    @media ${breakpoints.aux}{
        grid-column:none;
        border-radius:10px;
        height:350px;
        
        .ImageHeight{
            transform:translateY(-7rem);
        }
    }

    @media ${breakpoints.sm}{
        height:250px;
        
        .ImageHeight{
            transform:translateY(0rem);
        }
    }


`

export const InfoWrapper = styled.div`
    display:flex;
    flex-flow: column nowrap;
    justify-content:center;
    align-items: flex-start;
    gap:.5rem 0rem;
    grid-column: 4 / 9;
    overflow:hidden;
    text-overflow:ellipsis;
    width:100%;
    
    
     h3{
        font-family:flood-std, sans-serif;
        color:#199453;
        font-size:1.5rem;
        letter-spacing:3px;
        line-height:1.3;
        margin:0;
    }
    h4{
        margin:0;
        font-family: co-text, sans-serif;
        font-size:1.3rem;
        line-height:1.3;
        color:#2F4644;
    }

    p{ 
       display:-webkit-box;
       -webkit-line-clamp:3;
       -webkit-box-orient: vertical;
       line-height:1.5;
       width:100%;   
       height:auto;
       overflow:hidden;
       font-family: co-text, sans-serif;
       color:#5f5f5f;
       font-size: clamp(1rem, 5vw, 1.125rem);
       margin:0;       
    }
    a{
           font-weight:800;
           text-decoration:none;
           color:black;
       }

    @media ${breakpoints.aux}{
        align-items:start;
        width:90%;
        p{
            width:100%
        }
    }
    
    @media ${breakpoints.sm}{
        align-items:start;
        
        h3{
            margin-top:0;
            font-size:1.3rem;
            padding:0rem;
        }
        p{
            width:100%;
            -webkit-line-clamp:5;
            font-size:1rem;
            line-height:1.5;
        }
    }
`
export const ButtonWrapper = styled.div`
   display:flex;
   flex-flow:row wrap;
   justify-content:start;
   margin-top: 1rem;
   gap:0rem 1rem;
   width:100%;
   
   @media ${breakpoints.aux}{
        padding-bottom:1rem;
        justify-content:space-evenly;
        flex-flow:column wrap;
        gap:1rem;
    }
    @media ${breakpoints.sm}{
        padding-bottom:1rem;
        justify-content:space-evenly;
        flex-flow:column wrap;
        gap:1rem;
    }
`
export const Button = styled.div`
    font-family: flood-std, sans-serif;
    font-size: 1.2rem;
    background:#A6B9AF;
    color:white;
    width:183px;
    text-align:center;
    box-shadow:0px 10px 10px -5px hsla(0,0%,0%,.3);
    border-radius: 5px;
    cursor:pointer;
    padding:1rem 0rem;
   

    a{
        text-decoration:none;
        color:inherit;   
    }

    @media ${breakpoints.aux}{
        width:100%;
        padding:1rem 0;
        margin:0;
    }
    @media ${breakpoints.sm}{
        font-size: clamp(.8rem, 4vw, 1rem);
        margin:0;
        width:100%;
        padding:1rem 0;
    }
`
export const DonateButton = styled(Button)`

`

export const WrapDiv = styled.div`
    grid-column: 1 / 9;
    width:100%;
    height:auto;
    background:hsl(148, 10%, 60%);
    position:absolute;
    border-radius: 30px 30px 30px 0;
    transform: translateX(-15px);
    box-shadow: 10px 10px 10px hsla(0,0%,0%,.3);
    

    &:before{
       content:'';
       position:absolute;
       width:15px;
       height:30px;
       background:hsl(148, 10%, 50%);
       top:60px;
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
       top:60px;
    }
    @media ${breakpoints.aux}{
       
    }
    @media ${breakpoints.sm}{
       
       
        &:before{
            top:50px;
        }

        &:after{
            top:50px;
        }
    }
` 
export const EventTitle = styled.div`
    line-height:1.5;
    text-align:center;
    font-family:co-text,sans-serif;
    font-size:clamp(1.1rem, 4vw, 1.2rem);
    font-weight:300;
    color:#2F4644;
    letter-spacing:2px;

    @media ${breakpoints.sm}{
        font-size:clamp(.9rem, 5vw, 1rem);
    }
`