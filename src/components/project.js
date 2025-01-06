import React from 'react';
import { ButtonPageLink, ContentContainer, Heading2, LabelChip, MediaContainer, Paragraph, Project, TextContainer } from '../styles';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { Icon } from '@iconify-icon/react/dist/iconify.mjs';

export const ProjectCard = ({ project }) => {
  const featureImage = getImage(project.featureImage.asset);

  const getDisplayDate = (project) => {
    return project.updatedAt !== project.projectStartDate ? `Updated On: ${project.updatedAt}` : `Started On: ${project.projectStartDate}`;
  };

  return(
    <Project
      className="project_card"
    >
      <ButtonPageLink 
        className="project_page_link"
        to={`/portfolio/${project.slug}`}
      />
      <MediaContainer className='project_image no_radius' >
        <GatsbyImage 
          image={featureImage}
          alt=''
          loading='eager'
          className={project.featureImage.externalName || ''}
        />
      </MediaContainer>
      <TextContainer className='project_text'>
        <Heading2 className="project_headline">
          {project.projectTitle}
        </Heading2>
        <ContentContainer className="date_container">
          <LabelChip className='project_date'>
            {getDisplayDate(project)}
          </LabelChip>
        </ContentContainer>
        <Paragraph dangerouslySetInnerHTML={{
          __html: project.summary.summary,
        }}/>
      </TextContainer>
    </Project>
  )
}