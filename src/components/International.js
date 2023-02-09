import * as React from 'react';
import { useStaticQuery, graphql,Link } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import { FeatureImage, LocationCard, LocationContainer,Headline } from '../styles';

const InternationalAreas = () => {
  const data = useStaticQuery(graphql`
    query {
      international:allContentfulProjectLocation(filter: {location: {eq: "International"}}) {
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
      {data.international.nodes.map(area => (
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
export default InternationalAreas