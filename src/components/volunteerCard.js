import { graphql } from 'gatsby';
import React from 'react';
import { BgRender } from './bgImageRender';
import { MediaRender } from './mediaRender';
import { TextContainerRender } from './textContainerRender';
import { Card } from '../styles';

export const VolunteerCard = ({ content }) => {
  const experience = content;

  return(
    <Card>
      {experience.content.map((items) => {
        if(items.codeId === 'bg_image'){
          return <BgRender key={items.contentful_id} content={items}/>
        }else if(items.codeId === 'volunteer_image'){
          return <MediaRender key={items.contentful_id} content={items}/>
        }else if(items.codeId === 'text_container'){
          return <TextContainerRender key={items.contentful_id} content={items}/>
        }else{
          return null
        }
      })}
    </Card>
  )
}
export const query = graphql`
  fragment volunteerCard on ContentfulContentContainer{
    codeId
    contentful_id
    externalName
    content{
      ... on ContentfulMedia {
        ...backgroundImageRender
        ...mediaRender
      }
      ... on ContentfulText{
        ...textRender
      }
    }
  }
`