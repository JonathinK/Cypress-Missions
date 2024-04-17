import styled, {css} from "styled-components";
import { Link } from "gatsby";

export const PageHeader = styled.header`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items:center;
  grid-column: 1/15;
  background: ${({theme}) => theme.shades._50};
  padding: ${({theme}) => theme.sizes.small} ${({theme}) => theme.sizes.xxxx_large};
  height:calc(6.75rem - ${({theme}) => theme.sizes.large});

`
export const NavigationContainer = styled.nav`
  display:flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items:center;
`
export const NavListItems = styled.ul`
  display: inherit;
  flex-flow: inherit;
  justify-content:center;
  align-items: flex-end;
  gap:2rem;
  position: relative;
  margin: .5em 0;
`
export const NavListItem = styled.li`
  list-style: none;
  font-size: ${({theme}) => theme.font_size.body_large};
  cursor: pointer;
  text-transform: capitalize;
  
  @media ${({theme}) => theme.breakpoints.hover}{
    :hover:before{
        
    }
    }
  }
`
export const NavLink = styled(Link)`
  font-size: inherit ; 
  color: ${({theme}) => theme.shades._1000};
  text-decoration: none;
  text-transform: capitalize;
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
  
  @media ${({theme}) => theme.breakpoints.desktop}{
    display:none;
  }
`