import styled,{ css } from "styled-components";
import { breakpoints } from "../utils/breakpoints";
export const Flex = styled.div`
  display:flex;
  flex-flow:row wrap;
  width: fit-content;
  grid-row: ${props => props.row};
  grid-column: ${props => props.col};
  @media ${breakpoints.md}{
    grid-row:${props => props.rowMed};
    grid-column:${props => props.colMed};
  }@media ${breakpoints.sm}{
    grid-column:${props => props.colSm};
    grid-row:${props => props.rowSm};
  }@media ${breakpoints.xsm}{
    grid-column:${props => props.colXsm};
    grid-row:${props => props.rowXsm};
  }

  /*Tagged template literals*/
  ${props => props.ProjectsTitleText && css`
    justify-content:center;
    align-items:center;
    gap:.5em;
    padding:1em 20%;
    @media ${breakpoints.md}{
    padding:1em 10%;
    }@media ${breakpoints.sm}{
    padding:1em 0%;
    }
    `}
    
  ${props => props.ProjectsLocation && css`
      grid-column: 9 / 14;
      grid-row: 1 / 2;
      position:relative;
      justify-items:center;
      align-items:center;
      justify-content:center;
      align-items:center;
      background: rgba(225,150,225,.5);
      height:50%;
  `}
` 