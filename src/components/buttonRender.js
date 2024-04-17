import React from 'react'
import { Button, ButtonLink, ButtonPageLink } from '../styles';
import { graphql } from 'gatsby';

export const ButtonRender = ({ content }) => {
  const ButtonContent = content;
  return(
   <React.Fragment>
    {ButtonContent.link.ctaPageUrl && (
      <ButtonPageLink to={ButtonContent.link.ctaPageUrl.slug} className={content.externalName}>
        {ButtonContent.link.externalName}
      </ButtonPageLink>
    )}
    {ButtonContent.link.ctaExternalUrl && (
      <ButtonLink href={content.link.ctaExternalUrl} className={content.externalName}>
        {content.link.externalName}
      </ButtonLink>
    )}
   </React.Fragment>
  )
}

