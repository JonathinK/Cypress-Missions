import styled, {css} from "styled-components";
import { Iframe } from "./iframe.styled";
import { ContentContainer, MediaContainer, TextContainer } from "./contentContainers.styled";
import { Overline } from "./typography.styled";
import { theme } from "../theme/site-theme";

export const HeroImage = styled.div`
position: relative;
  .full_image{
    position:absolute;
    width:100%;
    height: 100%;
    border-radius: 1em;
    overflow: hidden;
  }
`
export const HeroContainer = styled.section.attrs(props => ({
  type:"section"
}))`
  grid-column: 1/15;
  display: grid;
  grid-template-columns: inherit;
  position:relative;
  gap:1em 1em;
  width: 100%;

  @media ${({theme}) => theme.breakpoints.tablet}{
    grid-column: 1/9;
  }
  @media ${({theme}) => theme.breakpoints.mobile}{
    grid-column: 1/7;
  }

  &.full_width_image{
    grid-column: 1/15;
    height: calc(100vh - 76px);
    width: 100%;

    ${HeroImage}{
      grid-column: 1/15;
      grid-row: 1/2;
      position:relative; 
      z-index: 1;
      border-radius: 0;
      height: 100%;
     
      .full_image{
        border-radius: 0;
      }
    }
    ${TextContainer}{
      grid-column: 6/10;
      grid-row: 1/2;
      position:relative;
      z-index: 3;
      justify-self:center;
      align-self:center;
      text-align:center;
      justify-content:center;
      align-items:center;
      color: ${({theme}) => theme.shades._50};
      padding: 1em 2em;
      
      p:last-child{
        font-weight: ${({theme}) => theme.font_weight.medium};
      }
    }
    .
    @media ${({theme}) => theme.breakpoints.tablet}{
      grid-column: 1/9;
      ${HeroImage}{
        grid-column: 1/9;
      }
      ${TextContainer}{
        grid-column: 2/8;
      }
    }
    @media ${({theme}) => theme.breakpoints.mobile}{
      grid-column: 1/7;
      padding-bottom: 1em;

      ${HeroImage}{
        grid-column: 1/7;
        grid-row: 1/2;
        height:50vh;
      }
      ${TextContainer}{
        grid-column: 2/6;
        grid-row: 2/3;
        padding: 0;
        color: ${({theme}) => theme.shades._900};
        justify-content: flex-start;
        align-items: flex-start;
        text-align: left;
      }
    }
  }
  &.full_width_image::before{
      content: '';
      position: absolute;
      top: 0;
      bottom:0;
      width: 100%;
      background: black;
      z-index: 2;
      opacity: 0.65;
      mix-blend-mode: multiply;
    @media  ${({theme}) => theme.breakpoints.mobile}{
      display:none;
    }
  }
  
  &.full_width_image_align_left{
    grid-column: 1/15;
    height: 100vh;

    ${HeroImage}{
      grid-column: 1/15;
      grid-row: 1/2;
      position:relative; 
      z-index: 1;
      border-radius: 0;

      .full_image{
        border-radius: 0;
      }
    }
    ${TextContainer}{
      grid-column: 2/6;
      grid-row: 1/2;
      position:relative;
      z-index: 3;
      justify-self:start;
      align-self:center;
      justify-content:center;
      align-items:flex-start;
      color: ${({theme}) => theme.shades._50};
      padding: 1em 2em;
      text-align: left;
      
      ${Overline}{
        text-align: left;
      }
      
      p:last-child{
        font-weight: ${({theme}) => theme.font_weight.medium};
      }
    }
    @media ${({theme}) => theme.breakpoints.tablet}{
      grid-column: 1/9;
      ${HeroImage}{
        grid-column: 1/9;
      }
      ${TextContainer}{
        grid-column: 2/8;
      }
    }
    @media ${({theme}) => theme.breakpoints.mobile}{
      grid-column: 1/7;
      height:100vh;

      ${HeroImage}{
        grid-column: 1/7;
        grid-row: 1/2;
      }
      ${TextContainer}{
        grid-column: 1/7;
        grid-row: 1/2;
        padding: 1em 1em;
        color: ${({theme}) => theme.shades._50};
        justify-content: flex-start;
        align-items: flex-start;
        justify-self: center;
        align-self: center;
        text-align: left;
        height: auto;
        position: relative;

        p:last-child{
          font-weight: ${({theme}) => theme.font_weight.medium};
        }
      }
    }
  }
  &.full_width_image_align_left::before{
      content: '';
      position: absolute;
      top: 0;
      bottom:0;
      width: 100%;
      background-image: linear-gradient(
        to top right,
        rgba(0,0,0,.8) 35%,
        rgba(0,0,0,0)
      );
      z-index: 2;

    @media  ${({theme}) => theme.breakpoints.tablet}{
      background: black;
      opacity: .7;
    }
    @media  ${({theme}) => theme.breakpoints.mobile}{
      opacity: .6;
    }
  }
  &.text_left_asset_right{
    margin: 5em 0em;
    
    ${TextContainer}{
      grid-column: 2 / 6;
      grid-row: 1 / 2;
      justify-self: center;
      align-self: center;
    }
    ${HeroImage}{
      grid-column: 7 / 14;
      grid-row: 1 / 2;
      aspect-ratio: 3/2;
      overflow: hidden;
      border-radius: 1em;
      overflow: hidden;
      img{
        border-radius: 1em;
      }
    }
    
    //Specific Styles
    .project_text{
      p{
        font-size: clamp(
          ${({theme}) => theme.font_size.body_medium},
          3vw,
          ${({theme}) => theme.font_size.body_large}
        );
      }
      .date_container{
        flex-flow: row nowrap;
      }
      .project_location_container{
        display: inherit;
        flex-flow: row nowrap;
        justify-content: flex-start;
        align-items:center;
        gap: .5em;
        ${Overline}{
          margin-bottom: 0;
        }
      }
    }
    @media ${({theme}) => theme.breakpoints.tablet}{
          ${TextContainer}{
            grid-column: 2/8;
          }
          ${HeroImage}{
            grid-column: 2/8;
            grid-row: 2/3;
          }
    }
    @media ${({theme}) => theme.breakpoints.mobile}{
      margin: 2.5em 0em;
      ${TextContainer}{
        grid-column: 2/6;
      }
      ${HeroImage}{
        grid-column: 2/6;
      }
      .project_text{
      .date_container{
        flex-flow: column nowrap;
        justify-content: start;
        align-items: start;
        padding-bottom: .5em;
        hr{
          display:none;
        }
      }
      }
    }
  }
  &.centered_text_no_image{
    grid-column: 1/15;
    padding: 5.5em 0em 0em 0em;
    background: ${({theme}) => theme.shades._50};
   
    ${TextContainer}{
      grid-column: 2/14;
      grid-row: 1/2;
      padding: 1em 0em;
      justify-self: center;
      align-self:center;
      justify-content:center;
      align-items:center;
      color: ${({theme}) => theme.shades._900};
    }
    @media ${({theme}) => theme.breakpoints.tablet}{
      grid-column: 1/9;
      ${TextContainer}{
        grid-column: 2/8;
      }
    }
    @media ${({theme}) => theme.breakpoints.mobile}{
      grid-column: 1/7;
      ${TextContainer}{
        grid-column: 2/6;
      }
    }
  }
  &.full_width_video{
    grid-column: 1/15;
    width: 100%;
    overflow: hidden;
    position: relative;
    aspect-ratio: 16/7.6;
    
    .home_page_hero_video{
      grid-column: 1/15;
      grid-row: 1/2;
      position:relative;
      z-index: 1;
      
      ${Iframe}{
        
      }
    }
    .home_page_hero_video:before{
      content: '';
      position: absolute;
      height: 100%;
      width: 100%;
      background: rgba(0,0,0,.4);
      z-index: 2;
    }
    ${TextContainer}{
      grid-column: 6/10;
      grid-row: 1/2;
      position: relative;
      z-index: 3;
      justify-self: center;
      align-self: center;

      justify-content:center;
      align-items:center;
      text-align:center;
      color: ${({theme}) => theme.shades._50};

      p{
        margin-bottom: 0;
      }
    }
    
    @media ${({theme}) => theme.breakpoints.tablet}{
      grid-column: 1/9;
      .home_page_hero_video{
        grid-column: 1/11;
        grid-row: 1/2;
        position:relative;
        z-index: 1;
      }
      ${TextContainer}{
        grid-column: 2/10;
      }
    }
    @media ${({theme}) => theme.breakpoints.mobile}{
      grid-column: 1/7;
    }
  }
/* Blog Template Heros */
  &.story_hero,
  &.news_hero{
    grid-column: 1/15;
    width: 100%;
    padding: 5em 0em;
    gap: 3em 1em;
    ${TextContainer}{
      justify-content:center;
      align-items:center;
      text-align:center;
      p{
        margin-bottom:0em;
      }
    }
    ${HeroImage}{
      aspect-ratio: 16/8;
      border-radius: 1em;
      overflow: hidden;
      box-shadow: 0px 197px 55px 0px rgba(0, 0, 0, 0.00), 0px 126px 50px 0px rgba(0, 0, 0, 0.02), 0px 71px 42px 0px rgba(0, 0, 0, 0.07), 0px 31px 31px 0px rgba(0, 0, 0, 0.13), 0px 8px 17px 0px rgba(0, 0, 0, 0.15);
    }
    @media ${({theme}) => theme.breakpoints.tablet}{
      grid-column: 1/9;
    }
    @media ${({theme}) => theme.breakpoints.mobile}{
      grid-column: 1/7; 
    }
  }
  &.story_hero{
    ${HeroImage}{
      grid-row: 1/2;
      grid-column: 5/11;
    }
    ${TextContainer}{
      grid-row: 2/3;
      grid-column: 6/10;
    }
    @media ${({theme}) => theme.breakpoints.tablet}{
      ${HeroImage}{
        grid-row: 1/2;
        grid-column: 2/8;
      }
      ${TextContainer}{
        grid-row: 2/3;
        grid-column: 2/8;
      }
    }
    @media ${({theme}) => theme.breakpoints.mobile}{
      
      ${HeroImage}{
        grid-column: 2/6;
      }
      ${TextContainer}{
        grid-column: 2/6;
      }
    }
  }
  &.news_hero{
    ${ContentContainer}{
      grid-row: 1/2;
      grid-column: 6/10;
      flex-flow: column nowrap;
      justify-content:center;
      align-items:center;
      justify-self: center;
      align-self: center;
      gap: 1em;

      ${MediaContainer}{
        width: 70%;
        border-radius: 50%;
        box-shadow:none;
      }
    }
    ${HeroImage}{
      grid-column: 5/11;
      grid-row: 3/4;
    }
    ${TextContainer}{
      grid-row: 2/3;
      grid-column: 5/11;
      padding: 0em 1em;
    }
    @media ${({theme}) => theme.breakpoints.tablet}{
      
      ${ContentContainer}{
        grid-column: 2/8;
      }
      ${HeroImage}{
        grid-column: 2/8;
        grid-row: 3/4;
      }
      ${TextContainer}{
        grid-row: 2/3;
        grid-column: 2/8;
        padding: 0em 1em;
      }
    }
    @media ${({theme}) => theme.breakpoints.mobile}{
      grid-column: 1/7;
      ${ContentContainer}{
        grid-column: 2/6;
      }
      ${TextContainer}{
        grid-column: 2/6;
      }
      ${HeroImage}{
        grid-column: 2/6 ;
      }
    }
  }
  
/* Events Page Hero */
  ${props => props.$EventHero && css`
    grid-template-rows: 5em auto 5em auto;
    grid-column: 1/15;
    grid-row:2/3;
    position: relative;
    grid-gap: 1em 1em;
    
  
    .background{
      grid-column: 1/15;
      grid-row: 1/4;
      background: ${({theme}) => theme.colors.primary};
      border-radius: 0 0 20% 20%;
    }
    ${TextContainer}{
      grid-column: 6/10;
      grid-row: 2/3;
      justify-content:center;
      align-items:center;
      padding: 5em 0em;
      text-align:center;
      position:relative;
      color: ${({theme}) => theme.shades._50};
    }
    ${MediaContainer}{
      grid-column: 4/12;
      grid-row: 3/5;
      aspect-ratio: 16/9;
      width:100%;
      position:relative;
      border: 2px solid ${({theme}) => theme.shades._500};
    }
    @media ${({theme}) => theme.breakpoints.tablet}{
      grid-column: 1/9;
      .background{
        grid-column: 1/9;
      }
      ${TextContainer}{
        grid-column: 2/8;
      }
      ${MediaContainer}{
        grid-column: 2/8;
      }
    } 
    @media ${({theme}) => theme.breakpoints.mobile}{
      grid-column: 1/7;
      grid-template-rows: 3em auto 3em auto;
      .background{
        grid-column: 1/7;
      }
      ${TextContainer}{
        grid-column: 2/6;
        padding: 2.5rem 0em;
      }
      ${MediaContainer}{
        grid-column: 2/6;
        aspect-ratio: 4/3;
      }
    }
  `}
`

