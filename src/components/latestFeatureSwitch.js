
import React from 'react';
import { Button, ContentContainer } from '../styles';
import { graphql } from 'gatsby';

export const LatestFeatureSwitch = ({ content, activeFeature, onFeatureChange }) => {
  return (
    <ContentContainer className={content.externalName}>
      {content.content.map(items => {
        const isActive = (feature) => activeFeature === feature;

        switch(items.codeId) {
          case "news_stories_selector":
            return (
              <React.Fragment key={items.codeId}>
                <Button 
                  className={`${items.externalName} ${isActive('article') ? 'active' : ''}`} 
                  onClick={() => onFeatureChange('article')}
                >
                 {items.buttonInternals[0].externalName}
                </Button>
                <hr />
              </React.Fragment>
            );
          case "projects_selector":
            return (
              <React.Fragment key={items.codeId}>
                <Button 
                  className={`${items.externalName} ${isActive('project') ? 'active' : ''}`} 
                  onClick={() => onFeatureChange('project')}
                >
                 {items.buttonInternals[0].externalName}
                </Button>
                <hr />
              </React.Fragment>
            );
          case "events_selector":
            return (
              <React.Fragment key={items.codeId}>
                <Button 
                  className={`${items.externalName} ${isActive('events') ? 'active' : ''}`} 
                  onClick={() => onFeatureChange('events')}
                >
                  {items.buttonInternals[0].externalName}
                </Button>
              </React.Fragment>
            );
          default:
            return null;
        }
      })}
    </ContentContainer>
  );
};

export const query = graphql`
  fragment switchContent on ContentfulContentContainer{
    codeId
    contentful_id
    externalName
    content {
      ... on ContentfulButton {
        codeId
        contentful_id
        externalName
        buttonInternals {
          ... on ContentfulLink {
            contentful_id
            externalName
          }
        }
      }
    }
  }
`