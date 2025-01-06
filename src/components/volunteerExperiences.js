import { graphql } from 'gatsby';
import React from 'react';
import { CardsContainer } from '../styles';
import { VolunteerCard } from './volunteerCard';

export const VolunteerExperiences = ({ content }) => {
  const experienceCard = content.content;
  return(
    <CardsContainer $VolunteerExperiences>
      {experienceCard.map((content) => {
        return <VolunteerCard 
                key={content.contentful_id} 
                content={content}
                />
      })}
    </CardsContainer>
  )
}

export const query = graphql`
  fragment volunteerExperiences on ContentfulContentContainer{
    codeId
    externalName
    contentful_id
    content{
      ...volunteerCard
    }
  }
`