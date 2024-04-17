import styled from "styled-components";

export const Heading1 = styled.h1.attrs(props => ({
  type:"h1"
}))`
  font-size: clamp(2.562rem, 4vw ,3.250rem);
`
export const Heading2 = styled.h2.attrs(props => ({
  type: "h2"
}))`
  font-size: clamp(2rem,4vw,2.562rem);
  line-height: ${({theme}) => theme.line_height.heading};
  letter-spacing: ${({theme}) => theme.letter_spacing.heading};
  font-weight: ${({theme}) => theme.font_weight.bold};
`
export const Heading3 = styled.h3.attrs(props => ({
  type:'h3'
}))`
  font-size: clamp(1.812rem, 4vw, 2.250rem);
  line-height: ${({theme}) => theme.line_height.heading};
  letter-spacing: ${({theme}) => theme.letter_spacing.heading};
  font-weight: ${({theme}) => theme.font_weight.regular};
`
export const Heading4 = styled.h4.attrs(props => ({
  type:'h4'
}))`
  font-size: clamp(
    ${({theme}) => theme.font_size.heading_h4_small},
    4vw,
    ${({theme}) => theme.font_size.heading_h4_large}
  );
`
export const Heading5 = styled.h5.attrs(props => ({

}))`

`
export const Heading6 = styled.h6.attrs(props => ({

}))`
`
export const Paragraph = styled.p.attrs(props => ({
  type: "text"
}))`
  font-size: clamp(.875rem, 4vw, 1.125rem );
  line-height: ${({theme}) => theme.line_height.body};
  letter-spacing: ${({theme}) => theme.letter_spacing.body};
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
export const Label = styled.label.attrs(props => ({
  type: 'label',
}))`
  font-size: clamp(.750rem, 4vw, .875rem );
`
export const Caption = styled.caption.attrs(props => ({
  type: 'caption',
}))`
  font-size: clamp(.812rem, 4vw, 1rem);
`
export const Overline = styled.p.attrs(props => ({
  type: 'text',
}))`
  font-size: clamp(.812rem, 4vw, ${({theme}) => theme.font_size.heading_h6_large});
`
