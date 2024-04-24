import styled, { css } from 'styled-components';
import { ContentContainer } from './contentContainer.styled';

export const Section = styled.section.attrs(props => ({
  type:'section'
}))`

  /* Homepage Sections */
  &.how_it_works_section {
    grid-column: 1/15;
    grid-row: auto;
    background:red;
  }
  &.why_choose_section {
    background: teal;
    grid-column: 1/15;
    grid-row:auto;
  }
  &.trusted_by_section {
    background: yellow;
    grid-column: 1/15;
    grid-row: auto;
  }
  &.testimonials_feature_section{
    background: ${({theme}) => theme.shades._50};
    grid-column: 1/15;
    grid-row: auto;
    display: grid;
    grid-template-columns: ${({theme}) => theme.layout.desktop};
  }
  /* Gallery Section */
  ${props => props.$GallerySection && css`
    grid-column: 1/15;
    grid-row:auto;
  `}
`