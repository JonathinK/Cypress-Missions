import styled,{ css } from 'styled-components';
import { breakpoints } from '../utils/breakpoints';

export const Section = styled.section`
  display: grid;
  grid-template-rows: auto;
  grid-template-columns: repeat(3,1fr);
  justify-self:center;
  align-self:center;
  grid-column: 2 / 14;
  grid-row:auto;
  gap:3em;
  width:100%;
  height:auto;
  
  @media ${breakpoints.md} {
    grid-column: 2 / 8;
  }@media ${breakpoints.sm} {
    grid-column: 2 / 6;
  }
`