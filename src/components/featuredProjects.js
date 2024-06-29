import { useStaticQuery, graphql} from 'gatsby';
import React from 'react';
import { Card, FeatureContainer, Heading4, MediaContainer, NavLink, Paragraph } from '../styles';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';


export const FeaturedProjects = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulProject(limit: 3) {
        nodes {
          codeId
          contentful_id
          externalName
          slug
          projectLocation
          projectTitle
          featureImage {
            altText
            codeId
            contentful_id
            externalName
            asset {
              contentful_id
              gatsbyImageData(
                layout: FULL_WIDTH, 
                placeholder: BLURRED, 
                quality: 90
                resizingBehavior: SCALE,
                )
            }
          }
        }
      }
    }
  `)
  const featureCards = data.allContentfulProject.nodes;
  return(
    <FeatureContainer $ProjectsFeature>
      {featureCards.map((card) => {
        const cardImage = getImage(card.featureImage.asset);
        return(
          <Card $FeaturedProject key={card.contentful_id}>
            <NavLink to={`/projects/${card.slug}`}/>
            <MediaContainer className="featured_projects_image">
              <GatsbyImage
                image={cardImage}
                loading="lazy"
                className={card.featureImage.externalName || ''}
                alt={card.featureImage.altText || ''}
              />
            </MediaContainer>
            <div className="project_info">
              <Heading4>{card.projectTitle}</Heading4>
              <Paragraph>{card.projectLocation}</Paragraph>
            </div>
         
 
          </Card>
        )
      })}
    </FeatureContainer>
  )
}