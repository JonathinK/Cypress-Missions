import React from 'react';
import { graphql } from 'gatsby';
import { IframeContainer, Iframe } from '../styles';
export const IframeRender = ({ content }) => {

  const IframeClass = content.externalName || '';
  const IframeContent = content.content[0];
  
  
  return(
    <IframeContainer className={IframeClass} $VideoIframe>
      <Iframe
        src={IframeContent.ctaExternalUrl}
        className={IframeContent.externalName}
        height="100%"
        width="100%"
        title="YouTube video player" 
        frameBorder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;" allowFullScreen
      />
    </IframeContainer>
  )
}
export const query = graphql`
  fragment iframeRender on ContentfulLink{
    id
    contentful_id
    ctaExternalUrl
    externalName
    internalName
  }
`