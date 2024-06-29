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
${'' /*   font-family: ${({theme}) => theme.fonts.main_font}; */}
  margin: 0;
  word-wrap: break-word;
  height: 100%;
  background-color: ${({theme}) => theme.shades._50};
  box-sizing: border-box;
  
  &.no-scroll{
    position: fixed;
  }
} 
  
`