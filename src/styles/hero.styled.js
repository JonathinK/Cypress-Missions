import styled from "styled-components";
import { Iframe } from "./iframe.styled";


export const HeroContainer = styled.section.attrs(props => ({
  type:"section"
}))`
 grid-column: 1/15;
 display: grid;
 grid-template-columns: inherit;

/*We set the layout of all the heros through here.
Full Width Image Styles. 
*/
  &.full_width_image{
    height: 50vh;
    background:red;
  }
/*
Full Width Video Styles. 
*/
  &.full_width_video{
  
  }
/*
 Text Content Left And Assets Right 
*/
  &.text_left_asset_right{
    
  } 
/*
 Center Places Text with No Images 
*/
  &.center_text_no_image{

  }
`