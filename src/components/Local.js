import * as React from 'react';
import { useStaticQuery, graphql,Link } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import { FeatureImage, LocationCard, LocationContainer,Headline } from '../styles';

const LocalAreas = () => {
  const data = useStaticQuery(graphql`
    query {
      local:allContentfulProjectLocation(filter: {location: {eq: "Local"}}) {
        nodes {
          title
          slug
          featureImg {
            gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, quality: 60)
          }
        }
      }
    }
  `)
  return(
    <LocationContainer>
      {data.local.nodes.map(area => (
        <LocationCard key={area.slug}>
          <Link to={`${area.slug}`}>
            <FeatureImage>
              <GatsbyImage image={area.featureImg.gatsbyImageData} className="image_fit" imgClassName='img'/>
            </FeatureImage>
          </Link>
          <Headline CardHeadline>{area.title}</Headline>
        </LocationCard>
      ))}
    </LocationContainer>
  )
}
export default LocalAreas