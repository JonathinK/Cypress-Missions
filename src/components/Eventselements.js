import styled from "styled-components";
import { breakpoints } from "../utils/breakpoints";

export const EventWrapper = styled.main`
    width:100%;
    min-height:100vh;
    display:flex;
    flex-flow:column;
    justify-content:center;
    align-items:center;
    background-image: linear-gradient(#199543 5%, white 80%);

    h2{
        text-align:center;
        font-family: flood-std, sans-serif;
    }
    
    @media ${breakpoints.sm}{
        justify-content:center; 
        align-items:center; 
    }
`
export const UpcomingEventsTitle = styled.h2`
  
    font-family:flood-std,sans-serif;
    font-size: clamp(20px, 6.5vw, 35px);
    color:white;
    text-align:center;
    margin-bottom:2rem;
   
`
export const EventElement = styled.div`
    max-width:1700px;
    width:100%;
    padding:0 2rem;
    
    @media ${breakpoints.sm}{
        margin-top: 16vh;
        margin-bottom:2rem;
        padding:0;
    }
`
export const EventCard = styled.div`
    box-shadow: 20px 20px 20px hsla(50, 0%,0%, .3);
    overflow:hidden;
    background:white;
    display:flex;
    flex-flow:row wrap;
    justify-content: flex-start;
    align-items:center;
    
    @media ${breakpoints.lg}{
       width:60%;
       margin:0 auto;
       
    }
    @media ${breakpoints.md}{
       width:90%;
       margin:0 auto;
       
    }
  
    @media ${breakpoints.sm}{
       width:90%;
       margin:0 auto;
       box-shadow: 10px 10px 10px hsla(50, 0%,0%, .3);
       overflow:hidden;
    } 
    
`
export const EventImage = styled.div`
   width:40%;
   min-width:400px;
   overflow:hidden;
   border-radius: 20px 20px 0 0;
  @media ${breakpoints.sm}{
      width:100%;
  }
  @media ${breakpoints.md}{
     width:100%;   
    }
    @media ${breakpoints.lg}{
     width:100%;   
    }
`
export const EventInfoWrap = styled.div`
    padding:1rem;
    width:60%;
     @media ${breakpoints.sm}{
         width:100%;
     }
     @media ${breakpoints.md}{
        width:100%;   
       }
     @media ${breakpoints.lg}{
        width:100%;   
       }
`
export const EventLocation = styled.h4`
    color:#199534;
    font-family:flood-std;
    font-size: clamp(18px,4.5dvw, 25px);
    width:100%;
`
export const EventTime = styled.p`
   font-size: clamp(16px, 4vw, 18px);
   width:100%;
`
export const EventDescription = styled.p`
    font-size:clamp(14px,2vw, 18px);
    width:100%;
`