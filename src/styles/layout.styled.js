import styled from "styled-components";

export const PageWrapper = styled.div`
  display:grid;
  grid-auto-flow:row;
  grid-template-columns:${({theme}) => theme.layout.desktop};
  gap: 0 ${({theme}) => theme.sizes.medium};
  height: 100vh;
  
  @media ${({theme}) => theme.breakpoints.tablet}{
    grid-template-columns:${({theme}) => theme.layout.tablet};
  }
  @media ${({theme}) => theme.breakpoints.mobile}{
    grid-template-columns:${({theme}) => theme.layout.mobile};
  }
`