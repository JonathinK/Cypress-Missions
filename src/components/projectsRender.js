import React from 'react';
import { ContentContainer } from '../styles';
import { ProjectCard } from './project';

export const ProjectsRender = ({ projects }) => {
  return(
    <ContentContainer
      className="projects_container"
    >
      {projects.map(project => {
        return <ProjectCard project={project} key={project.contentful_id}/>
      })}
    </ContentContainer>
  )
}