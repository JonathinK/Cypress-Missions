import styled from "styled-components";
import { Project } from "./projects.styled";
import { MediaContainer, TextContainer } from "./contentContainers.styled";
import { Heading2, Paragraph } from "./typography.styled";
import { ButtonPageLink } from "./button.styled";

export const Blog = styled(Project)`
  display: flex;
  flex-flow: column nowrap;
  gap: .5em;
  padding: .5em .5em;
  min-width: none;

  && .project_image{
    flex: 1 1 50%;
    aspect-ratio: 2/1;
    border-radius:.5em;
  } 

  && .project_text_container{
      flex: 1 1 50%;
      justify-content: flex-start;
      align-items:flex-start;
      gap: .5em;
      text-align: left;

      .blog_card_overline_tag{
        color: ${({theme}) => theme.shades._700};
      }
      .project_headline{
        color: ${({theme}) => theme.colors.primary};
        font-size: 1.5rem !important;
        -webkit-line-clamp: 1;
      }
      .date_container{
        justify-content: flex-start;
        align-items:baseline;
        flex-flow: row wrap;
        .date_posted{
          color: ${({theme}) => theme.shades._900};
          font-weight: ${({theme}) => theme.font_weight.medium};
          font-size: ${({theme}) => theme.font_size.body_medium};
          .project_updated_at{

          }
        }
      }
      .blog_card_summary{
        text-transform: initial;
      }
  }

  @media ${({theme}) => theme.breakpoints.tablet}{

  }
  @media ${({theme}) => theme.breakpoints.mobile}{
    flex-flow: row nowrap;
    justify-self: stretch;
    align-self: stretch;
    gap: 0;
    padding: 0;
    border-radius: .5rem;
    border: 1px solid inherit !important;

   & > .blog_page_link{
      justify-content:center;
      align-items: center;
    }
    && .project_image{
      flex: 1;
      aspect-ratio: 1/1;
      border-radius:0;
    } 
    && .project_text_container{
      flex: 2;
      justify-content: center;
      align-items:flex-start;
      gap: .5em;
      text-align: left;
      margin: 0;
      padding: .5em;

      .blog_card_overline_tag{
        color: ${({theme}) => theme.shades._700};
        font-size: .8rem !important;
      }
      .project_headline{
        color: ${({theme}) => theme.colors.primary};
        font-size: 1.25rem !important;
        -webkit-line-clamp: 1;
      }
      .date_container{
        justify-content: flex-start;
        align-items:baseline;
        flex-flow: row wrap;

        .date_posted{
          color: ${({theme}) => theme.shades._900};
          font-weight: ${({theme}) => theme.font_weight.medium};
          font-size: ${({theme}) => theme.font_size.body_small};
        }
        .project_updated_at{
            display: none !important;
          }
      }
      .blog_card_summary{
        text-transform: initial;
        display: none;
      }
    }
  }
`