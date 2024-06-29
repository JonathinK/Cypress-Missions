import { graphql } from 'gatsby';
import React from 'react';
import { ButtonContainer, ButtonLink, ButtonPageLink } from '../styles';
import { IconSelector } from './iconSelector';

export const ButtonContainerRender = ({ content, classContent }) => {
 const buttonContainerClass = classContent.externalName;
 const buttonContentArray = content || [];

 const renderButton = (buttonContent) => {
  const buttonCode = buttonContent.codeId;
  const buttonInternals = buttonContent.buttonInternals || '';
  switch (buttonCode) {
    case 'text_page_button_w_arrow':
      return (
        <ButtonPageLink $TextButton to={`/${buttonInternals[0].ctaPageUrl.slug}`}>
          {buttonInternals[0].externalName}
          <IconSelector content={buttonInternals[1]} />
        </ButtonPageLink>
      );
    case 'cta_page_button_w_svg':
      return (
        <ButtonPageLink $CtaPageButton to={`/${buttonInternals[0].ctaPageUrl.slug}`}>
          {buttonInternals[0].externalName}
          <IconSelector content={buttonInternals[1]} />
        </ButtonPageLink>
      );
    case 'cta_page_button':
      return (
        <ButtonPageLink $CtaPageButtonWithSvg to={`/${buttonInternals[0].ctaPageUrl.slug}`}>
          {buttonInternals[0].externalName}
        </ButtonPageLink>
      );
    case 'ghost_cta_page_button_w_svg':
      return (
        <ButtonPageLink $GhostButtonWithSvg to={`/${buttonInternals[0].ctaPageUrl.slug}`}>
          {buttonInternals[0].externalName}
          <IconSelector content={buttonInternals[1]} />
        </ButtonPageLink>
      );
    case 'ghost_cta_page_button':
      return (
        <ButtonPageLink $GhostButton to={`/${buttonInternals[0].ctaPageUrl.slug}`}>
          {buttonInternals[0].externalName}
        </ButtonPageLink>
      );
    case 'cta_external_button':
      return (
        <ButtonLink $ExternalBaseButton href={buttonInternals[0].ctaExternalUrl}>
          {buttonInternals[0].externalName}
        </ButtonLink>
      );
      case 'ghost_external_button_w_svg':
      return (
        <ButtonLink $ExternalGhostButton href={buttonInternals[0].ctaExternalUrl}>
          {buttonInternals[0].externalName}
          <IconSelector content={buttonInternals[1]} />
        </ButtonLink>
      );
    default:
      return null;
  }
 }
 return (
  <ButtonContainer className={buttonContainerClass}>
    {buttonContentArray.map((buttonContent, index) => (
      <React.Fragment key={index}>
        {renderButton(buttonContent)}
      </React.Fragment>
    ))}
  </ButtonContainer>
);
}

export const query = graphql`
  fragment buttonContainerRender on ContentfulButton {
    contentful_id
    codeId
    externalName
    buttonInternals {
      ... on ContentfulLink {
        contentful_id
        externalName
        ctaExternalUrl
        ctaPageUrl {
          ... on ContentfulPage {
            id
            codeId
            contentful_id
            externalName
            slug
          }
        }
      }
      ... on ContentfulMedia {
        id
        codeId
        contentful_id
        externalName
      }
    }
  }
`