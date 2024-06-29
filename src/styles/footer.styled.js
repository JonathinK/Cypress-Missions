import styled from "styled-components";
import { LogoContainer } from "./logo.styled";
import { NavLink } from "./header.styled";
import { Social, SocialsContainer } from "./socials.styled";


export const Footer = styled.footer`
  grid-column: 1/15;
  display: grid;
  grid-auto-rows: auto;
  grid-template-columns: inherit;
  padding-top: 1em;
  gap: 2em 0em;
  
  ${LogoContainer}{
    grid-column: 5/11;
    grid-row: 1/2;
    justify-self:center;
    align-self:center;
    @media ${({theme}) => theme.breakpoints.tablet}{
      grid-column: 2/8;
    }
    @media ${({theme}) => theme.breakpoints.mobile}{
      grid-column: 2/6;
    }
  }
  ${SocialsContainer}{
    grid-column: 5/11;
    grid-row: 3/4;
    justify-self:center;
    align-items:center;
    gap: 1em;
    padding-top: .5em;
    ${Social}{   
      a{
        text-decoration:none;
        color: ${({theme}) => theme.colors.primary};
        font-size: 2.5em;
        display: flex;
      }
    }
    @media ${({theme}) => theme.breakpoints.tablet}{
      grid-column: 2/8;
      }
    @media ${({theme}) => theme.breakpoints.mobile}{
      grid-column: 2/6;
    }
  }

  @media ${({theme}) => theme.breakpoints.tablet}{
    grid-column: 1/9;
  }
  @media ${({theme}) => theme.breakpoints.mobile}{
    grid-column: 1/7;

  }
`

export const FooterNavigationContainer = styled.nav`
  display: flex;
  flex-flow: row nowrap;
  justify-content:center;
  align-items:center;
  gap: 2em;
  color: ${({theme}) => theme.shades._900};

  &.main_links{
    grid-column: 3/13;
    grid-row: 2/3;
    justify-self: stretch;
    align-self:center;
    padding: 1em 0em;
    border-left: 0;
    border-right:0;
    border-bottom: .125em solid;
    border-top: .125em solid;
    border-image-slice:1;
    border-image-source: linear-gradient(
      to right,
      hsla(130,35%,62%,.1),
      ${({theme}) => theme.colors.primary},
      hsla(130,35%,62%,.1)
    );

    ${NavLink}{
      font-size: clamp(
        ${({theme}) => theme.font_size.body_medium},
        5vw,
        ${({theme}) => theme.font_size.body_large}
      );  
      color: inherit;
    }
    @media ${({theme}) => theme.breakpoints.tablet}{
      grid-column: 2/8;
      flex-flow: column;
    }
    @media ${({theme}) => theme.breakpoints.mobile}{
      grid-column: 2/6;
      flex-flow: column nowrap;
    }
  }

  &.policy_doc_links{
    grid-row: 5/6;
    grid-column: 5/11;
    ${NavLink}{
      font-weight: ${({theme}) => theme.font_weight.bold};
      color: inherit;
      font-size: clamp(
        ${({theme}) => theme.font_size.body_small},
        5vw,
        ${({theme}) => theme.font_size.body_medium}
      );
    }
    @media ${({theme}) => theme.breakpoints.tablet}{
      grid-column: 2/8;
    }
    @media ${({theme}) => theme.breakpoints.mobile}{
      grid-column: 2/6;
    }
  }
`
export const FooterInfoContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;

  &.tax_info{
    grid-row: 4/5;
    grid-column: 6/10;
    gap: .5em;
    justify-content:center;
    align-items:center;
    padding-bottom: .5em;

    hr{
      width:1px;
      height: 60%;
      background: ${({theme}) => theme.shades._500};
      border:none;
    }
    @media ${({theme}) => theme.breakpoints.tablet}{
      grid-column: 2/8;
      flex-flow: column wrap;
      hr{
        display:none;
      }
    }
    @media ${({theme}) => theme.breakpoints.mobile}{
      grid-column: 2/6;
      
    }
  }
  &.copyright{
    grid-row: 6/7;
    grid-column: 1/15;
    justify-content:center;
    align-items:center;
    padding: 1em 0em;
    background: ${({theme}) => theme.colors.secondary};
    @media ${({theme}) => theme.breakpoints.tablet}{
      grid-column: 1/9;
    }
    @media ${({theme}) => theme.breakpoints.mobile}{
      grid-column: 1/7;
    }
  }

`
