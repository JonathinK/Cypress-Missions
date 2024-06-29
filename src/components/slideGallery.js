import React from 'react';
import { ContentContainer, MediaContainer } from '../styles';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

export const ImageSlider = ({ content }) => {
  
  return(
   <ContentContainer
    className="image_slider_container"
   >
    {content.map(image => {
      return(
        <MediaContainer className="slider_image_container" key={image.contentful_id}>
          <GatsbyImage
            image={getImage(image)}
            alt={image.description || ''}
            className="full_image"
          />
        </MediaContainer>
      )
    })}
   </ContentContainer>
  )
}

