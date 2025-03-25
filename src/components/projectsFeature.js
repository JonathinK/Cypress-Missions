import React from 'react';
import { Card, CardsContainer, Heading3, MediaContainer, NavLink, Overline, TextContainer } from '../styles';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

export const ProjectsFeature = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulProject(sort: { fields: [updatedAt], order: DESC }) {
        nodes {
          codeId
          contentful_id
          projectTitle
          slug
          activeProject
          featureImage {
            codeId
            contentful_id
            externalName
            altText
            asset {
              contentful_id
              gatsbyImageData(
                resizingBehavior: SCALE
                quality: 70
                placeholder: BLURRED
                layout: FULL_WIDTH
              )
            }
          }
          tags {
            codeId
            tagFamilies
            value
          }
        }
      }
    }
  `);

  let projectContent = data?.allContentfulProject?.nodes || [];
  const activeProjects = projectContent.filter(project => project.activeProject);
  const inactiveProjects = projectContent.filter(project => !project.activeProject);

  projectContent = [...activeProjects, ...inactiveProjects].slice(0, 4);

  return (
    <CardsContainer className="feature_cards_container">
      {projectContent.map(project => (
        <Card key={project.contentful_id}>
          <NavLink to={`/portfolio/${project.slug}`} className="card_link" />
          <MediaContainer className="latest_feature_image">
            <GatsbyImage
              image={getImage(project.featureImage.asset.gatsbyImageData)}
              alt={project.featureImage.altText || ''}
              loading="lazy"
              className="full_image"
            />
          </MediaContainer>
          <TextContainer>
            {project.tags?.filter(tag => tag.tagFamilies === "Project Type").map(tag => (
              <Overline key={tag.codeId}>{tag.value}</Overline>
            ))}
            <Heading3>{project.projectTitle}</Heading3>
          </TextContainer>
        </Card>
      ))}
    </CardsContainer>
  );
};