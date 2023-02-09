import styled from "styled-components";
import { breakpoints } from "../utils/breakpoints";

export const ProjectLocation = styled.div`
  grid-column: 2 / 14;
  display:grid;
  grid-template-rows:auto .5fr;
  grid-template-columns:1fr;
  justify-items:center;
  align-items:center;
  gap:2em;
  
  @media ${breakpoints.md}{
    grid-column: 2 / 8;
  }@media ${breakpoints.sm}{
    grid-column: 2 / 6;
  }
`
export const LocationContainer = styled.div`
  height:100%;
  -webkit-display:flex;
  display: flex;
  flex-flow:row wrap;
  justify-content: center;
  align-items:center;
  gap: 2em;
  width:100%;
  @media ${breakpoints.md}{

  }@media ${breakpoints.sm}{
  }
`
export const LocationCard = styled.div`
  height:auto;
  position:relative;
  overflow:hidden;
  border-radius: 10px;
  box-shadow: 0px 20px 40px -5px hsla(0,0%,0%,.4);
  flex-grow:1;
  min-width:350px;
  overflow:hidden;

  @media ${breakpoints.md}{
    width:100%;
    min-width:100%;
  }
` 
export const FeatureImage = styled.div`
  position:relative;
  height:100%;
  width:100%;
  aspect-ratio:2/1;

  .image_fit {
    position: absolute;
    width:100%;
    height:100%;
    border-radius:10px;
    overflow:hidden;
  }
  .img{
    border-radius:10px;
  }
`

