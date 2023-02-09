import { GatsbyImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';
import * as React from 'react';
import { LocationCard, LocationContainer, FeatureImage, Headline } from '../styles';

export const ProjectLocations = ({ data }) => {  
  return(
    <LocationContainer>
      {data.map(locations => (
        <LocationCard key={`locations${locations.slug}`}>
          <FeatureImage>
          <Link to={`${locations.slug}`}>
            <GatsbyImage image={locations.featureImg.gatsbyImageData} className="image_fit" imgClassName='img'/>
            {locations.title}
          </Link>
          </FeatureImage>
          <Headline CardHeadline>{locations.title}</Headline>
        </LocationCard>
      ))}
    </LocationContainer>
  )
}