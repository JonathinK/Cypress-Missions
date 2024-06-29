import styled, {css} from "styled-components";
import { ContentContainer, MediaContainer, TextContainer } from "./contentContainers.styled";
import { Heading2, Paragraph } from "./typography.styled";
import { Tag } from "./tag.styled";
import { ButtonPageLink } from "./button.styled";

export const Project = styled.article`
  display: grid;
  grid-template-columns: 1em auto 1em;
  grid-template-rows: auto .8fr auto;
  justify-self:start;
  align-self:start;
  gap: 1em;
  
  box-sizing: border-box;
  border: 4px solid ${({theme}) => theme.colors.tertiary};
  border-radius: 1em;
  overflow: hidden;
  padding-bottom: .5em;

  ${MediaContainer}{
    grid-column: 1/4;
    grid-row: 1/3;  
    justify-self:center;
    align-self: start;
    width: 100%;
    aspect-ratio: 5/3;
    z-index: 1;
    box-shadow: none;
  }
  .no_radius{
    border-radius: 0em;
    .full_image{
      border-radius: 0em;
    }
  } 

  ${TextContainer}{
    background: ${({theme}) => theme.shades._50};
    padding: 1em 1em;
    border-radius: .75em;
    height: 100%;
    box-sizing: border-box;
    grid-column: 2/3;
    grid-row: 3/4;
    
    align-self:start;
    overflow:hidden;

    position:relative;
    z-index: 2;

    display: flex;
    flex-flow: column nowrap;
    justify-content:start;
    align-items:start;
    gap: 1em;
   
    

    ${Heading2}{
      display: -webkit-box;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
      -webkit-line-clamp: 2; 
      font-size: clamp(
        ${({theme}) => theme.font_size.heading_h5_small},
        3vw,
        ${({theme}) => theme.font_size.heading_h5_large}
      ) !important;
    }
    ${ContentContainer}{
      display: flex;
      flex-flow: row nowrap;
      justify-content:space-between;
      align-items:center;
      margin: 0;
      gap: .5em;
      
      hr{
        display: none;
        width:1%;
        height: 2px;
        border:none;
        background: ${({theme}) => theme.colors.tertiary};
      }
    }
    ${Paragraph}{
      display: -webkit-box;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
      -webkit-line-clamp: 4; 
    }
    ${ButtonPageLink}{
      padding-top: .5em;
      justify-content: flex-start;
    }
  }
`

export const ProjectTagContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  align-items:center;
  gap: 1em;

  padding: 1em 0em;
  width: 100%;
  box-sizing: border-box;
  
  ${Tag}{
    padding: .5em 1em;
    background: ${({theme}) => theme.colors.secondary};
    border-radius: .5em;
  }
  &.project_template_tags{
    grid-column: 2/14;
    justify-content:center;
    align-items:center;
    gap: 1.5em;
    
    ${Tag}{
      flex: 1 1 auto;
      text-align: center;
      padding: 1em 2em;
      border-radius: .25em;
      background: ${({theme}) => theme.shades._50};
      box-shadow: 0px 3px 7px rgba(0, 0, 0, 0.10), 
                  0px 12px 12px rgba(0, 0, 0, 0.09),
                  0px 27px 16px rgba(0, 0, 0, 0.05), 
                  0px 48px 19px rgba(0, 0, 0, 0.01), 
                  0px 74px 21px rgba(0, 0, 0, 0.00);
    }
    @media ${({theme}) => theme.breakpoints.tablet}{
      grid-column: 2/8;
      flex-flow: row wrap;
      justify-content: flex-start;
      align-items: center;
    }
    @media ${({theme}) => theme.breakpoints.mobile}{
      grid-column: 2/6;
    }
  }
`
