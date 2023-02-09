import styled from "styled-components";
import { breakpoints } from "../utils/breakpoints";

export const ProjectsContainer = styled.div`
  grid-row: 2 / 3;
  grid-column: 1 / 4;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, .4fr));
  grid-auto-rows: minmax(250px, 1fr);
  gap: 2em 2em;
  
  @media ${breakpoints.md}{
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));

  }
`
export const ProjectCard = styled.div`
  width:100%;
  position: relative;
  border-radius: 10px;
  overflow:hidden;
  box-shadow: 0px 10px 15px rgba(0,0,0,.2);
  transition: box-shadow .5s ease-in-out;
  cursor:pointer;

  .img_fit{
    position:absolute;
    width:100%;
    height:100%;
    border-radius:inherit;
    object-fit:cover;
    overflow:hidden; 
  }
  .img{
    border-radius: inherit;
    transition: all .5s ease-in-out;
  }
  :hover{
      box-shadow: 0px 10px 15px rgba(0,0,0,.3);
    }
  :hover .img{
    transform:scale(1.1);
  }
`
export const ImagesContainer = styled.div`
  grid-row: 2/3;
  grid-column: 1/4;
  display: grid;
  grid-template-columns: repeat(auto-fit,minmax(220px,1fr));
  grid-auto-rows: minmax(180px,1fr);
  justify-self:center;
  align-self:center;
  column-gap:2em;
  row-gap: 2em;
  height:100%;
  width:100%;

  @media ${breakpoints.md} {
    grid-template-columns: repeat(auto-fit,minmax(200px,1fr));
    grid-auto-rows: minmax(150px,1fr);
  }
  @media ${breakpoints.sm} {
    grid-template-columns: repeat(auto-fit,minmax(40%,1fr));
    grid-auto-rows: minmax(120px,1fr);
  }

  div{
    width:100%;
    height:100%;
    position:relative;
    border-radius: 10px;
    object-fit:cover;
    box-shadow: 0px 10px 15px rgba(0,0,0,.2);
    transition: box-shadow .5s ease-in-out;
    cursor:pointer;
    
    .img_fit{
        position:absolute;
        width:100%;
        height:100%;
        border-radius:inherit;
        object-fit:cover;
        overflow:hidden;
    }
    .img{
      border-radius: inherit;
      transition: all .5s ease-in-out;
    }
    :hover{
      box-shadow: 0px 10px 15px rgba(0,0,0,.3);
    }
    :hover .img{
      transform:scale(1.1);
    }
  }
`
