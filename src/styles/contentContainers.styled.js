import styled,{css} from "styled-components";
import { Card } from "./card.styled";
import { Heading1, Heading2, Heading3, LabelChip, Paragraph, UList, } from "./typography.styled";

export const ContentContainer = styled.div.attrs(props => ({

  }))`
  display: flex;
  font-family: ${({theme}) => theme.fonts.body};
  p{
    font-size: clamp(
    ${({theme}) => theme.font_size.body_small},
    4vw,
    ${({theme}) => theme.font_size.body_large}
    );
    line-height: ${({theme}) => theme.line_height.body};
    letter-spacing: ${({theme}) => theme.letter_spacing.body};
    margin-bottom: 2em;
    font-family: ${({theme}) => theme.fonts.body};
  }
  /* Our Work Page Styles*/
  ${props => props.$FeaturedProjects && css`
    height: 500px;
    width: 1000px;
  `}

  /*Author Styles*/
  ${props => props.$Author && css`
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-start;
    align-items:center;
    gap: .5em;
    width: auto;
    padding:.25em .5em;
  `}

  ${props => props.$PolicyDoc && css`
    grid-column: 5/11;
    display: flex;
    flex-flow: column nowrap;
    padding: 5em 0;
    
    /*Style Clears*/
    p{
      font-size: ${({theme}) => theme.font_size.body_large};
    }
    li{
      font-size: clamp(
        ${({theme}) => theme.font_size.body_medium}
        );
    }
    p,li{
      margin: 0;
      padding: 0;
      font-family: ${({theme}) => theme.fonts.body};
      padding-bottom: .5em;
    }
    h1,h2,h3,h4,h5,h6{
      font-family: ${({theme}) => theme.fonts.headline};
      padding-bottom: .5em;
    }
    ul{
      list-style: square;
    }
    ul,ol{
     
      margin-left: 2em;
    }
    
    /*Styles*/

    @media ${({theme}) => theme.breakpoints.tablet}{
      grid-column: 2/8;
    }
    @media ${({theme}) => theme.breakpoints.mobile}{
      grid-column: 2/6;
    }
  `}
  
  &.date_container{
        display: inherit;
        flex-flow: column nowrap;
        justify-content: flex-start;
        align-items:center;
        gap:.5em;
        padding: 0em;

        ${Paragraph}{
          margin-bottom: 0;
        }

        hr{
          height: .4em;
          width: .4em;
          border: 2px solid ${({theme}) => theme.colors.tertiary};
          border-radius: 1em;
          background: ${({theme}) => theme.colors.primary};
        }
        ${LabelChip}{
          color: ${({theme}) => theme.shades._800};
        }
      }
`
export const TextContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content:flex-start;
  align-items:flex-start;
  gap: .5em;
  font-family: ${({theme}) => theme.fonts.body};
  
  ${Paragraph}{
    margin-bottom: 0;
  }
  p{
    font-size: clamp(
    ${({theme}) => theme.font_size.body_medium},
    2.1vw,
    ${({theme}) => theme.font_size.body_large}
    );
    line-height: ${({theme}) => theme.line_height.body};
    letter-spacing: ${({theme}) => theme.letter_spacing.body};
    margin-bottom: 0em;
    font-family: ${({theme}) => theme.fonts.body};
  }
`
export const MediaContainer = styled.div`
  box-shadow: 0px 60px 17px 0px rgba(0, 0, 0, 0.00), 0px 38px 15px 0px rgba(0, 0, 0, 0.02), 0px 22px 13px 0px rgba(0, 0, 0, 0.08), 0px 10px 10px 0px rgba(0, 0, 0, 0.14), 0px 2px 5px 0px rgba(0, 0, 0, 0.16);
  border-radius:1em;
  position: relative;
  overflow: hidden;
  
  .full_image{
    position:absolute;
    width: 100%;
    height: 100%;
    overflow:hidden;
    border-radius: 1em;
  }
  &.rich_text_image{
    width: 100%;
    margin-bottom: 2em;
    box-shadow: none;
  }
  ${props => props.$EventFeature && css`
    
  `}
`
export const BackgroundContainer = styled.div`
  position:relative;
  z-index: 1;
  .bg_image{
      position:absolute;
      width:100%;
      height: 100%;
      mix-blend-mode: color-burn;
      opacity: .25;
    } 
`
export const CardsContainer = styled.div`
  display:flex;
  flex-flow: row nowrap;

  ${props => props.$EventCards && css`
  `}
`
export const FeatureContainer = styled.div`
  
`