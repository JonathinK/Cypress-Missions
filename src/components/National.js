import * as React from 'react';
import { useStaticQuery, graphql,Link } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import { FeatureImage, LocationCard, LocationContainer,Headline } from '../styles';

const NationalAreas = () => {
  const data = useStaticQuery(graphql`
    query {
      national:allContentfulProjectLocation(filter: {location: {eq: "National"}}) {
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
      {data.national.nodes.map(area => (
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
export default NationalAreas