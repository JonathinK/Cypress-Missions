import styled from "styled-components";

/* const StyledImg = styled(Img)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: -1;
  height: 100%; // or whatever
  & > img {
    object-fit: cover !important; // or whatever
    object-position: 0% 0% !important; // or whatever
  }
` */

const Gallery = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  @media (min-width: 700px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (min-width: 900px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media (min-width: 1100px) {
    grid-template-columns: repeat(5, 1fr);
  }
  grid-gap: 15px;
  .gatsby-image-outer-wrapper {
    height: 100%;
  }
`

const GalleryItem = styled.div`
  position: relative;
`

const Button = styled.button``

const LightboxModal = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.5);
  opacity: ${props => (props.visible ? '1' : '0')};
  visibility: ${props => (props.visible ? 'visible' : 'hidden')};
`
const LightboxContent = styled.div`
  margin: 15px;
  max-width: 700px;
  width: 100%;
`

const Controls = styled.div`
  display: flex;
  justify-content: space-between;
`

const LeftRight = styled.div`
  button:first-child {
    margin-right: 10px;
  }
`
