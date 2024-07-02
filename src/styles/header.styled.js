import styled, {css} from "styled-components";
import { Link } from "gatsby";
import { ButtonLink } from "./button.styled";
import { ContentContainer } from "./contentContainers.styled";

export const PageHeader = styled.header`
  box-sizing: border-box;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items:center;
  grid-column: 1/15;
  background: ${({theme}) => theme.shades._50};
  padding: ${({theme}) => theme.sizes.small} ${({theme}) => theme.sizes.xxxx_large};
  height:calc(6.75rem - ${({theme}) => theme.sizes.large});
  position:fixed;
  top:0;
  z-index: 100;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,.2);
  width: 100%;
  @media ${({theme}) => theme.breakpoints.tablet}{
    grid-column: 1/9;
    padding: 0em 0em 0em 2em;
  }
  @media ${({theme}) => theme.breakpoints.mobile}{
    grid-column: 1/7;
    box-sizing: border-box;
  }
`
export const NavigationContainer = styled.nav`
  display:flex;
  flex-flow: row nowrap;
  justify-content: flex-end;
  align-items:center;
  gap: 1em 2em;
  width: 100%;

  @media ${({theme}) => theme.breakpoints.tablet}{
    height:100%;
    width: 100%;
    position:relative;
    justify-content: flex-end;
    
    ${ContentContainer}{
      height: 100%;
      width:20%;
      position: relative;

      ${ButtonLink}{
        width:100%;
        padding: 1em 1em;
        border-radius: 0em;
        display: flex;
        flex-flow:column;
        justify-content: center;
        align-items: center;
      }
    }
  }
  @media ${({theme}) => theme.breakpoints.mobile}{
    height:100%;
    width: 100%;
    position:relative;
    justify-content: flex-end;
    
    ${ContentContainer}{
      height: 100%;
      position: relative;
      width: 30%;
      min-width: 124px;
    }
  }

`
export const NavListItems = styled.ul`
  display: inherit;
  flex-flow: inherit;
  justify-content:center;
  align-items: center;
  gap:2rem;
  position: relative;
  margin: .5em 0;
  
  @media ${({theme}) => theme.breakpoints.tablet}{
    flex-flow: column;
    justify-content: flex-start;
    align-items:flex-start;
    gap: 3em;
    position: fixed;
    z-index: 105;
    padding: 4em 2em;
    top:76px;
    right: -100%;
    margin: 0;
    width: 100%;
    height: calc(100vh - 75px);
    background: ${({theme}) => theme.colors.primary};
    transform: translateX(100%);
    transition: all 500ms ease-in-out;

    &.open{
      transform: translateX(0%);
      right: 0;
    }
  }
`
export const NavListItem = styled.li`
  list-style: none;
  font-size: ${({theme}) => theme.font_size.body_medium};
  cursor: pointer;
  text-transform: capitalize;
  text-align:center;
  
  @media ${({theme}) => theme.breakpoints.tablet}{
 
  }
`
export const NavLink = styled(Link)`
  font-size: inherit; 
  color: ${({theme}) => theme.shades._1000};
  text-decoration: none;
  text-transform: capitalize;
  font-family: ${({theme}) => theme.fonts.body};
  font-weight: ${({theme}) => theme.font_weight.medium};

  @media ${({theme}) => theme.breakpoints.tablet}{
    color: ${({theme}) => theme.shades._50};
    font-size: ${({theme}) => theme.font_size.heading_h4_large};
  }
`
export const DropDownMenu = styled.div`
  position: absolute;
  display:none;
  ${NavListItem}:hover & {
    display: flex;
  }
  ${NavListItems}{
    background: ${({theme}) => theme.shades._50};
    display: flex;
    flex-flow: column nowrap;
    justify-content: flex-start;
    align-items:flex-start;
    gap:1rem;
    padding:2em;
    border-radius: .5em;
    box-shadow: 0 .25em .25em 0em rgba(0,0,0,.33),
                0 .5em .5em 0em rgba(0,0,0,.22),
                0 1em 1em 0em rgba(0,0,0,.22),
                0 0 .5em .25em rgba(0,0,0,.22) inset;
    

    ${NavListItem} ${NavLink}{
      text-decoration: none;
      color: ${({theme}) => theme.shades._1000};  
    }
    a{
      text-decoration: none;
      color: ${({theme}) => theme.shades._1000};
      font-size: ${({theme}) => theme.font_size.body_medium};
    }
  }
`
export const Hamburger = styled.div` 
  display: flex;
  flex-flow: column nowrap;
  justify-content:center;
  align-items:flex-end;
  gap: .25em;
  position: relative;
  z-index: 106;
  cursor: pointer;
  height: 28px;
  width: max-content;
  pointer-events: default;
    
    .top_bar,
    .middle_bar,
    .bottom_bar {
      height: 4px;
      background: ${({theme}) => theme.shades._900};
      border-radius: 99999px;
      position: relative;
      transform-origin: right center;
      rotate: 0deg;
    }
    .top_bar{
      top:0;
      right:0;
      width: 16px;
      rotate: 0deg;
      transition: rotate 1s ease;
    }
    .middle_bar{
      width: 20px;
    }
    .bottom_bar{
      width:16px;
      bottom:0;
      right:0;
      rotate: 0deg;
    }
    
    
    &.open .top_bar {
      rotate: -45deg;
      width: 24px;
      translate: 0 30%;
      transition: rotate 5s ease;
    }
    &.open .middle_bar {
      width: 0px;
      right:0;
    }
    &.open .bottom_bar {
      rotate: 45deg;
      width: 24px;
      translate: 0 50%;
    }
  @media ${({theme}) => theme.breakpoints.desktop}{
    display:none;
  }
`