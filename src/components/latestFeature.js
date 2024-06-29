import React, { useState } from 'react';
import { graphql } from 'gatsby';
import { ContentContainer } from '../styles';
import { LatestFeatureSwitch } from './latestFeatureSwitch';
import { ArticleFeature } from './articleFeature';
import { ProjectsFeature } from './projectsFeature';
import { EventsFeature } from './eventsFeature';
import { ButtonContainerRender } from './buttonContainerRender';

export const LatestFeature = ({ content }) => {
  const [activeFeature, setActiveFeature] = useState('article'); // Default to article
  
  const handleFeatureChange = (feature) => {
    setActiveFeature(feature);
  };

  return (
    <ContentContainer className={content.externalName}>
      {content.content.map(items => {
        if (items.codeId === "latest_feature_switch") {
          return (
            <LatestFeatureSwitch 
              key={items.contentful_id} 
              content={items} 
              activeFeature={activeFeature} 
              onFeatureChange={handleFeatureChange} 
            />
          );
        } else if (items.codeId === "article_feature" && activeFeature === 'article') {
          return (
            <ContentContainer key={items.contentful_id} className={items.externalName}>
              <ArticleFeature />
              <ButtonContainerRender classContent={items.content[0]} content={items.content[0].content}/>
            </ContentContainer>
          );
        } else if (items.codeId === "project_feature" && activeFeature === 'project') {
          return (
            <ContentContainer key={items.contentful_id} className={items.externalName}>
              <ProjectsFeature />
              <ButtonContainerRender classContent={items.content[0]} content={items.content[0].content}/>
            </ContentContainer>
          );
        } else if (items.codeId === "events_feature" && activeFeature === 'events') {
          return (
            <ContentContainer key={items.contentful_id} className={items.externalName}>
              <EventsFeature />
              <ButtonContainerRender classContent={items.content[0]} content={items.content[0].content}/>
            </ContentContainer>
          );
        } else {
          return null;
        }
      })}
    </ContentContainer>
  );
};

export const query = graphql`
  fragment latestFeatureContent on ContentfulContentContainer{
    codeId
    contentful_id
    externalName
    content{
      ...on ContentfulContentContainer{
        ...switchContent
        ... on ContentfulContentContainer{
          codeId
          contentful_id
          externalName
          content{
            ... on ContentfulButton{
              ...buttonContainerRender
            }
          }
        }
      }
    }
  }
`