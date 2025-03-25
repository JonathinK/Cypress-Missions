import { useStaticQuery, graphql } from 'gatsby';
import React from 'react';
import { Card, FeatureContainer, Heading3, MediaContainer, NavLink, Paragraph } from '../styles';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

export const FeaturedProjects = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulProject(sort: { fields: [updatedAt], order: DESC }) {
        nodes {
          codeId
          contentful_id
          slug
          projectLocation
          projectTitle
          activeProject
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
                quality: 90,
                resizingBehavior: SCALE,
              )
            }
          }
        }
      }
    }
  `);
  
  let featureCards = data?.allContentfulProject?.nodes || [];
  const activeProjects = featureCards.filter(card => card.activeProject);
  const inactiveProjects = featureCards.filter(card => !card.activeProject);

  featureCards = [...activeProjects, ...inactiveProjects].slice(0, 3);

  return (
    <FeatureContainer $ProjectsFeature>
      {featureCards.map((card) => (
        <Card $FeaturedProject key={card.contentful_id}>
          <NavLink to={`/portfolio/${card.slug}`} />
          <MediaContainer className="featured_projects_image">
            <GatsbyImage
              image={getImage(card.featureImage.asset)}
              loading="lazy"
              className="full_image"
              alt={card.featureImage.altText || ''}
            />
          </MediaContainer>
          <div className="project_info"> 
            <Paragraph className='white_text'>{card.projectLocation}</Paragraph>
            <Heading3>{card.projectTitle}</Heading3>
          </div>
        </Card>
      ))}
    </FeatureContainer>
  );
};