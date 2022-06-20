import styled,{css} from "styled-components";

export const ImageGrid = styled.div`
  display:flex;
  flex-flow: row wrap;
  justify-content:center;
  max-width:90rem;
  width:90%;
  margin: 0 auto;
  gap:1.7rem;
  margin-bottom: 8rem;

`

export const ImageWrapper = styled.div`
  width:clamp(18rem,90%,25rem);
  border-radius: 10px;
  overflow:hidden;
  box-shadow: 0px 0px 10px rgba(0,0,0,.5);
  
`
