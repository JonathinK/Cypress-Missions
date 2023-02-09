import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import * as React from 'react';
import { FeatureImage, Headline, LocationCard } from '../styles';


export const Project = ({data}) => {
 console.log(data)
  return(
    <LocationCard>
      <FeatureImage>
        <GatsbyImage />
      </FeatureImage>
      <Headline>{data.title}</Headline>
    </LocationCard>
  )
};