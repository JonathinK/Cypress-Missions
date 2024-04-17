import styled,{css} from "styled-components";
import { Heading1, Heading2, Heading3, Heading4, Heading5, Paragraph } from "./typography.styled";

export const ContentContainer = styled.div.attrs(props => ({

}))`
/* Any general styles will go here. These will be overwritten down the tree if classNames are used. These are mainly for fallback */
 display: flex;
/* These are the Containers Coming from Contentful. Each will have their own classNames inside for ease of styling and placement. I ruled against dynamic placement through props. This way is more annoying but faster and versatile */
${props => props.$MediaContainer && css`

`}
${props => props.$TextContainer && css`
  padding: 2em 2em;
  display:flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items:flex-start;
  gap: .5em;

  & .button_container{
      display:flex;
      flex-flow: row nowrap;
      justify-content:flex-start;
      align-items:center;
      gap: 1em;
      padding-top: 1em;
  }
  &.testimonials_text{
    grid-column: 8/14;
  }
`}
${props => props.$CardsContainer && css`

`}
${props => props.$FeatureContainer && css`

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

/*Blog Post Page Styles*/
${props => props.$BlogPost && css`xs
  
`}

/*Blog Post Template Styles*/
${props => props.$BlogPostFeature && css`
  grid-column: 5/11;
  grid-row:2/3;
  background:red;
  border-radius: 1em;
  
  div{
    border-radius: 1em;
    overflow:hidden;
    box-shadow: 0px 4px 4px rgba(0,0,0,.33),
                0px 8px 8px rgba(0,0,0,.22),
                0px 12px 12px rgba(0,0,0,.22),
                0px 16px 16px rgba(0,0,0,.22); 
    img{
      border-radius: inherit;
    }
  }

`}
${props => props.$BlogInfo && css`
  grid-column: 5/11;
  grid-row: 3/4;
  display:flex;
  flex-flow: row nowrap;
  justify-content:space-between;
  align-items:center;
  padding: 2em 0em 1em 0em;
`}
${props => props.$BlogContent && css`
  grid-column: 5/11;
  grid-row: 4/5;
  padding: 1em 0em 2em 0em;
  ${Heading1}{
    color:${({theme}) => theme.colors.secondary};
  }
  ${Heading2}{
    color:${({theme}) => theme.shades._800};
  }
  ${Heading3}{
    
  }
  ${Heading4}{
    
  }
  ${Heading5}{
    
  }
  ${Paragraph}{
    margin-top:1em;
  }
`}

/*Homepage Reviews Feature*/

${props => props.$ReviewTotal && css`  
  grid-column: 2/8;
  grid-row:2/3;
  display:flex;
  flex-flow: row nowrap;
  background: skyblue;
`}
${props => props.$ReviewRating && css`  
  grid-column: 8/14;
  grid-row:2/3;
  display:flex;
  flex-flow: row nowrap;
  background: red;
`}
${props => props.$ReviewCardsContainer && css`  
  grid-column: 2/14;
  grid-row: 3/4;
  display:flex;
  flex-flow: row nowrap;
  gap: 2em;
  overflow-x: scroll;
  overflow-y: visible;
  scroll-snap-type: both mandatory;
  scroll-padding: 0em 1em 0em 1em;
  scroll-padding-inline: 2em;
`}
${props => props.$ReviewCard && css`  
  background: ${({theme}) => theme.shades._50};
  border: 2px solid ${({theme}) => theme.colors.primary};
  display:flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: stretch;
  gap:1em;
  padding: 1em;
  position:relative;
  flex: 1 0 30rem;
  height: 498px;
  overflow:hidden;
  border-radius: 1em;
  box-shadow: 0px 259px 72px 0px rgba(0, 0, 0, 0.00), 0px 166px 66px 0px rgba(0, 0, 0, 0.02), 0px 93px 56px 0px rgba(0, 0, 0, 0.07), 0px 41px 41px 0px rgba(0, 0, 0, 0.12), 0px 10px 23px 0px rgba(0, 0, 0, 0.14);
  scroll-snap-align: start;
  scroll-snap-stop: always;

  & .review_bubble{
    position: absolute;
    top:0;
    right:0;
    transform: translate(20px, -30px);
  }
  & .review_photo{
    width: 100px;
    img{
      width: 100%;
    }
  }
  & .review_text{
    ${Paragraph}{
      & .reviews_paragraph{
        display: -webkit-box;
        width: 416.84px;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 8;
        text-overflow: hidden;
        overflow: hidden;
      }
    }
  }

  & .review_info_container{
    display:inherit;
    flex-flow: row nowrap;
    justify-content:space-between;
    align-items:center;
    width:100%;
  }
`}
`