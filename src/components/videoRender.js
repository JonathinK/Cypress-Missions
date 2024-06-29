import React from 'react';
import { Iframe, IframeContainer } from '../styles';
import {graphql} from "gatsby";

export const VideoRender = ({ content }) => {
  const VideoClassName = content.externalName;
  const Video = content.content[0].ctaExternalUrl;
  console.log(Video)
  return(
    <IframeContainer className={VideoClassName}>
      <Iframe
        src={Video}
        height="100%"
        width="100%"
        title="Background Presentational Video"
        loading='eager'
        as={`iframe`}
        allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
        $allowfullscreen={"true"}
      />
    </IframeContainer>
  )
}
export const query = graphql`
  fragment Video on ContentfulLink{
    id
    contentful_id
    ctaExternalUrl
    externalName
    internalName
  }
`