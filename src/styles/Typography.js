import styled,{css} from "styled-components";
import { breakpoints } from "../utils/breakpoints";

export const Headline = styled.h3`
  font-family: 'Flood-std', sans-serif;
  font-size: 2rem;
  line-height: 1.4;
  letter-spacing: .3px;
  flex:50%;
  margin:0;
  text-align:left;
  color:#199453;

  @media ${breakpoints.md} {
    font-size: 1.9em;
  }
  @media ${breakpoints.sm} {
    font-size: clamp(1.4em,6vw,1.9em);
    text-align:left;
  }

  ${props => props.CardHeadline && css`
    font-size: 1.125em;
    font-family: 'co-text', sans-serif;
    line-height:1.1;
    color:white;
    position:absolute;
    bottom:0;
    left:0;
    right:0;
    padding: .5em 1em;
    background: #199453;
    text-align:center;
    border-radius: 0 0 10px 10px;


    @media ${breakpoints.md}{
      text-align:center;
      font-size:1.125em;
    }
  `}
`

export const Text = styled.p`
  font-family: 'co-text', sans-serif;
  font-size: 1.125rem;
  line-height:1.4;
  margin:0;
  flex:70%;
  text-align:left;
  
  .display{
    display:none;
  }
  
  @media ${breakpoints.md} {
    
  }
  @media ${breakpoints.sm} {
    font-size: 1em;
    text-align:left;
  }
`