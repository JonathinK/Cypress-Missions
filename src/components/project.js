import React from 'react';
import { ButtonPageLink, ContentContainer, Heading2, LabelChip, MediaContainer, Paragraph, Project, TextContainer } from '../styles';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { Icon } from '@iconify-icon/react/dist/iconify.mjs';

export const ProjectCard = ({ project }) => {
  const featureImage = getImage(project.featureImage.asset);
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
          {project.updatedAt && project.updatedAt !== project.projectStartDate && (
            <React.Fragment>
              <LabelChip className='project_updated_at'>
                Updated On: {project.updatedAt}
              </LabelChip> 
            </React.Fragment>
          )}
      </ContentContainer>
      <Paragraph dangerouslySetInnerHTML={{
          __html: project.summary.summary,
        }}/>
        </TextContainer>
    </Project>
  )
}