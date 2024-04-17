import { Link } from "gatsby";
import styled from "styled-components";

export const Button = styled.button.attrs((props) => ({
  
}))` 

`

export const ButtonLink = styled.a.attrs(props => ({
  type:'button'
}))`
  display: block;
  padding: 1em 2em;
  background: ${({theme}) => theme.colors.primary};
  text-decoration: none;
  color: ${({theme}) => theme.shades._50};
  text-align:center;
  border-radius: .5em;
`
export const ButtonPageLink = styled(Link).attrs(props => ({
  type:'button'
}))`
  display: block;
  border: none;
  padding: 1em 2em;
  background: ${({theme}) => theme.colors.primary};
  border-radius: .5em;
  text-decoration: none;
  color: ${({theme}) => theme.shades._50}; 
  box-shadow: 0px 4px 4px rgba(0,0,0,.33);
  text-align:center;
`