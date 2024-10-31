import { Link } from "gatsby";
import styled, { css } from "styled-components";
import { IconContainer } from "./icons.styled";

export const ButtonContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content:flex-start;
  align-items: stretch;
  gap: 1em;
  width:100%;
  margin-top: 1em;
`
export const Button = styled.button.attrs((props) => ({
  
  }))` 
  font-family: ${({theme}) => theme.fonts.body};
  &.icon_share_button{
    display:flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
    border: none;
    border-radius: 1em;
    font-size: clamp(
      1em, 
      5vw,
      2em
    );
    padding: .5em .5em;
    cursor: pointer;
    transition: box-shadow .5s ease-in-out;
    
  }
  &.icon_share_button:hover{
    box-shadow: 0px 16px 5px 0px rgba(0, 0, 0, 0.00), 0px 10px 4px 0px rgba(0, 0, 0, 0.02), 0px 6px 3px 0px rgba(0, 0, 0, 0.06), 0px 3px 3px 0px rgba(0, 0, 0, 0.10), 0px 1px 1px 0px rgba(0, 0, 0, 0.12);
    transition: box-shadow .5s ease-in-out;
  }
  &.selector_button{
    border: none;
    background: transparent;
    text-align: center;
    padding: 1em 1.5em;
  }
`
export const ButtonLink = styled.a.attrs(props => ({
    type:'button'
  }))`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1em 2em;
  gap: 1em;
  background: ${({theme}) => theme.colors.primary};
  text-decoration: none;
  color: ${({theme}) => theme.shades._50};
  text-align:center;
  border-radius: .5em;
  text-transform: uppercase;
  font-family: ${({theme}) => theme.fonts.body};
  ${IconContainer}{
    display: flex;
  }
  ${props => props.$TextButton && css`
    background: transparent;
    color: ${({theme}) => theme.shades._900};
    gap: 1em;
  `}
  ${props => props.$AlternateButton && css`
    background: transparent;
    color: ${({theme}) => theme.shades._900};
    gap: 1em;
    border: 2px solid ${({theme}) => theme.colors.primary};
  `}
  ${props => props.$ExternalBaseButton && css`
    flex: 1;
   
  `}
  ${props => props.$ExternalGhostButton && css`
    border: 2px solid ${({theme}) => theme.colors.primary};
    background: transparent;
    color: ${({theme}) => theme.colors.primary};
    text-transform: uppercase;
    flex: 1; 
    min-width: 300px;
  `}
`
export const ButtonPageLink = styled(Link).attrs(props => ({
    type:'button'
  }))`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1em;
  border: none;
  padding: 1em 2em;
  background: ${({theme}) => theme.colors.primary};
  border-radius: .5em;
  text-decoration: none;
  text-transform: uppercase;
  color: ${({theme}) => theme.shades._50}; 
  text-align:center;
  font-family: ${({theme}) => theme.fonts.body};
  flex: 1;
  min-width: 300px;

  ${IconContainer}{ 
    display: flex;
  }

  ${props => props.$TextButton && css`
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items:center;
    text-align: center;
    background: transparent;
    color: ${({theme}) => theme.shades._800};
    box-shadow: none;
    font-weight: ${({theme}) => theme.font_weight.bold};
    padding: 0em;

    ${IconContainer}{
      display:inherit;
      font-size: 1.5em;

  `}

  &.blog_page_link{
    display:inherit;
    flex-flow:inherit;
    gap: inherit;
    padding: inherit;
    min-width: inherit;
    color: none;
    background: transparent;
  }
`