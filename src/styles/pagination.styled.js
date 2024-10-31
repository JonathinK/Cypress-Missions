import styled from "styled-components";
import { UList } from "./typography.styled";


export const Pagination = styled.nav`
  grid-column: 5/14;
  justify-self:center;
  align-self: start;

  ${UList}{
    list-style-type: none;
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-start;
    align-items: center;
  }

  &.projects_pagination{
    grid-row: 3/4;
    
    @media ${({theme}) => theme.breakpoints.tablet}{
      grid-column: 2/8;
    }
    @media ${({theme}) => theme.breakpoints.mobile}{
      grid-column: 2/6;
    }
  } 
`

