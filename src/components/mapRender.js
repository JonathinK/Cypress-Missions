import React from 'react';
import { graphql } from 'gatsby';
import { IframeContainer, Iframe } from '../styles';
export const MapRender = ({ content }) => {

  const IframeClass = content.externalName || '';
  const IframeContent = content.content[0];
  console.log(content, "Map_Render");
  
  return(
    <IframeContainer className={IframeClass} $MapIframe>
      <Iframe
        src={IframeContent.ctaExternalUrl}
        className={IframeContent.externalName}
        allowFullScreen={true}
        width="100%"
        height="100%"
        loading="lazy"
        referrerPolicy='no-referrer-on-downgrade'
      />
    </IframeContainer>
  )
}
export const query = graphql`
  fragment MapRender on ContentfulLink{
    id
    contentful_id
    ctaExternalUrl
    externalName
    internalName
  }
`