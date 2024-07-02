import { createGlobalStyle } from "styled-components";

export const Global = createGlobalStyle`
*{
  margin:0;
  padding:0;
  box-sizing: border-box;
}
html{
  -webkit-text-size-adjust: 100%;
  box-sizing: border-box;
  overflow-x:hidden;
}
body{
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-weight: normal;
  width: 100%;
  height: 100vh;
  font-family: ${({theme}) => theme.fonts.body};
  margin: 0;
  word-wrap: break-word;
  height: 100%;
  background-color: ${({theme}) => theme.shades._50};
  box-sizing: border-box;
  overflow: auto;
  
  &.no-scroll{
    position: fixed;
  }
} 
  
`