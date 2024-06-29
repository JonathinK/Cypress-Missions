import styled from "styled-components";
import { Project } from "./projects.styled";
import { MediaContainer, TextContainer } from "./contentContainers.styled";
import { Heading2, Paragraph } from "./typography.styled";
import { ButtonPageLink } from "./button.styled";

export const Blog = styled(Project)`
  display: flex;
  flex-flow: column nowrap;
  gap: .5em;
  padding: 1em 1em;
  min-width: none;
  ${MediaContainer}{
    flex: 1 1 50%;
    aspect-ratio: 2/1;
    border-radius:.5em;
  }
  ${TextContainer}{
    flex: 1 1 50%;
    justify-self: center;
    align-self:center;
    gap: .5em;
    
    ${Heading2}{
      color: ${({theme}) => theme.colors.primary};
    }
    ${Paragraph}:first-child{
      font-weight: ${({theme}) => theme.font_weight.bold};
      font-size: ${({theme}) => theme.font_size.body_medium};
    }

    .date_container{
      justify-content: flex-start;
      align-items:baseline;
      flex-flow: row wrap;
    }
    ${ButtonPageLink}{
      width: 100%;
      min-width:100%;
    }
  }
`