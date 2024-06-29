import styled from "styled-components";
import { UList } from "./typography.styled";


export const Pagination = styled.nav`
  grid-column: 5/14;
  grid-row: 2/3;
  justify-self:center;
  align-self: start;


  ${UList}{
    list-style-type: none;
  }
 }
`

