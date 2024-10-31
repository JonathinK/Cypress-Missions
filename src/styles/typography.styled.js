import styled from "styled-components";

export const Display = styled.p`
  font-size: clamp(
    ${({theme}) => theme.font_size.display_small},
    1vw,
    ${({theme}) => theme.font_size.display_large}
  ) !important;
  margin-bottom: 0 !important;
  font-family: ${({theme}) => theme.fonts.headline};
`
export const Heading1 = styled.h1.attrs(props => ({
  type:"h1"
}))`
  font-size: clamp(
    ${({theme}) => theme.font_size.heading_h1_small},
    4vw,
    ${({theme}) => theme.font_size.heading_h1_large}
  );
  font-family: ${({theme}) => theme.fonts.headline};
  text-transform: uppercase;
`
export const Heading2 = styled.h2.attrs(props => ({
  type: "h2"
}))`
  font-size: clamp(
    ${({theme}) => theme.font_size.heading_h2_small},
    2vw,
    ${({theme}) => theme.font_size.heading_h2_large}
  ) !important;
  line-height: ${({theme}) => theme.line_height.heading};
  letter-spacing: ${({theme}) => theme.letter_spacing.heading};
  font-weight: ${({theme}) => theme.font_weight.regular};
  font-family:${({theme}) => theme.fonts.headline};
`
export const Heading3 = styled.h3.attrs(props => ({
  type:'h3'
}))`
  font-size: clamp(
    ${({theme}) => theme.font_size.heading_h3_small},
    1.5vw,
    ${({theme}) => theme.font_size.heading_h3_large}
  );
  line-height: ${({theme}) => theme.line_height.heading};
  letter-spacing: ${({theme}) => theme.letter_spacing.heading};
  font-weight: ${({theme}) => theme.font_weight.regular};
  font-family: ${({theme}) => theme.fonts.headline};
`
export const Heading4 = styled.h4.attrs(props => ({
  type:'h4'
}))`
  font-size: clamp(
    ${({theme}) => theme.font_size.heading_h4_small},
    2vw,
    ${({theme}) => theme.font_size.heading_h4_large}
  );
  font-weight: ${({theme}) => theme.font_weight.regular};
  font-family: ${({theme}) => theme.fonts.headline} !important;
`
export const Heading5 = styled.h5.attrs(props => ({
  
}))`
  font-size: clamp(
    ${({theme}) => theme.font_size.heading_h5_small},
    2vw,
    ${({theme}) => theme.font_size.heading_h5_large}
  );
  font-weight: ${({theme}) => theme.font_weight.regular};
  font-family: ${({theme}) => theme.fonts.headline};
`
export const Heading6 = styled.h6.attrs(props => ({ 
    type:"h6"
  }))`
   font-family: ${({theme}) => theme.fonts.headline};
   font-size: clamp(
    ${({theme}) => theme.font_size.heading_h6_small},
    2vw,
    ${({theme}) => theme.font_size.heading_h6_large}
  );
  font-weight: ${({theme}) => theme.font_weight.light};
`
export const Paragraph = styled.p`
  font-size: clamp(
    ${({theme}) => theme.font_size.body_medium},
    2vw,
    ${({theme}) => theme.font_size.body_large}
  );
  line-height: ${({theme}) => theme.line_height.body};
  letter-spacing: ${({theme}) => theme.letter_spacing.body};
  margin-bottom: 0em;
  font-family: ${({theme}) => theme.fonts.body};
  color: ${({theme}) => theme.shades._900}; 

  &.white_text{
    color: ${({theme}) => theme.shades._50};
  }
`
export const BoldText = styled.strong.attrs(props => ({

}))`

`
export const ItalicText = styled.em.attrs(props => ({

}))`

`
export const UnderlineText = styled.em.attrs(props => ({

}))`

`
export const StrikeThroughText = styled.del.attrs(props => ({

}))`

`
export const BlockQuote = styled.blockquote.attrs(props => ({

}))`

`
export const OList = styled.ol.attrs(props => ({

}))`

`
export const UList = styled.ul.attrs(props => ({

}))`
  
`
export const LItem = styled.li.attrs(props => ({

}))`

`
export const LabelChip = styled.span.attrs(props => ({
  
}))`
  font-size: clamp(.750rem, 4vw, .875rem );
  font-family: ${({theme}) => theme.fonts.body};
  color: ${({theme}) => theme.shades._900};
`
export const Caption = styled.caption.attrs(props => ({
  type: 'caption',
}))`
  font-size: clamp(.812rem, 4vw, 1rem);
  font-family: ${({theme}) => theme.fonts.body};
`
export const Overline = styled.p.attrs(props => ({
  type: 'text',
}))`
  font-size: clamp(.812rem, 4vw, ${({theme}) => theme.font_size.caption_large}) !important;
  margin-bottom:0 !important;
  font-family: ${({theme}) => theme.fonts.body};
  font-weight: ${({theme}) => theme.font_weight.medium};
  text-transform: uppercase;
`
