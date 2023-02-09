import styled from "styled-components";
import { breakpoints } from "../utils/breakpoints";

export const PageContainer = styled.div`
  min-height:100vh;
  height:100%;
  display:grid;
  grid-template-columns: minmax(20vw,1fr) repeat(12, minmax(auto,9rem)) minmax(20vw,1fr);
  grid-auto-rows: auto;
  background-image:linear-gradient(to bottom ,hsl(148, 10%, 78%),hsl(0,0%,100%));
  gap: 4em 1em;
  margin-bottom: 5em;
@media  ${breakpoints.lg} {
    grid-template-columns: minmax(10vw,1fr) repeat(12, minmax(auto,9rem)) minmax(10vw,1fr);
}
@media  ${breakpoints.md} {
    grid-template-columns: minmax(2rem,1fr) repeat(6, minmax(auto,9rem)) minmax(2rem,1fr);
}
@media  ${breakpoints.sm}{
    grid-template-columns: minmax(1rem,1fr) repeat(4, minmax(auto,9rem)) minmax(1rem,1fr);
  }

`