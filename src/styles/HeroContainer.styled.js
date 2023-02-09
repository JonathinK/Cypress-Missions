import styled,{css} from "styled-components";
import { breakpoints } from "../utils/breakpoints";

export const HeroContainer = styled.div`
  min-height: 60vh;
  grid-column: 1 / 15;
  grid-row: 1 / 2;
  position:relative;
  
  @media ${breakpoints.md}{
    grid-column: 1 / 9;
  }
  @media ${breakpoints.sm}{
    grid-column: 1 / 7;
  }

  
  .heroImage{
    position:absolute;
    width:100%;
    height:100%;
   
  }

  ${props => props.ProjectLocation && css`
    min-height: 60vh;
  `}
`