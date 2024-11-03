import React from 'react';
import { Card, CardsContainer, Heading3, Heading4, MediaContainer, NavLink, Overline, TextContainer } from '../styles';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

export const ProjectsFeature = () => {
  const data = useStaticQuery(graphql`
    query{
      allContentfulProject(
        limit: 4,
        sort: {createdAt: ASC}
      ){
        nodes{
          codeId
          contentful_id
          externalName
          projectTitle
          slug
          featureImage {
            codeId
            contentful_id
            externalName
            altText
            asset{
              contentful_id
              gatsbyImageData(
              resizingBehavior: SCALE
              quality: 70
              placeholder: BLURRED
              layout: FULL_WIDTH
            ) 
            }     
          }
          tags{
            codeId
            tagFamilies
            value
          }
        }
      }
    }
  `)
  const projectContent = data.allContentfulProject.nodes;
  
  return(
    <CardsContainer className="feature_cards_container">
      {projectContent.map(project => {
        return(
          <Card key={project.contentful_id}>
            <NavLink to={`/portfolio/${project.slug}`} className="card_link" />
              <MediaContainer className="latest_feature_image">
                <GatsbyImage
                  image={getImage(project.featureImage.asset.gatsbyImageData)}
                  alt=''
                  loading="lazy"
                  className="full_image"
                />
              </MediaContainer> 
              <TextContainer>
                {project.tags.filter(tag => tag.tagFamilies === "Project Type").map(tag => (
                  <Overline key={tag.codeId}>{tag.value}</Overline>
                ))}
                <Heading3>
                  {project.projectTitle}
                </Heading3>
              </TextContainer>
          </Card>
        )
      })}
    </CardsContainer>
  )
}