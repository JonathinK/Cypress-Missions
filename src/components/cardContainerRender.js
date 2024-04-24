import React from 'react';
import { graphql } from 'gatsby';
import { ContentContainer } from '../styles';
import { Card } from './cardRender';

export const CardsContainerRender = ({ content }) => {
  const CardsData = content.content;
  
  return(
    <ContentContainer>
      {CardsData.map((card) => {
        return <Card
          key={card.contentful_id}
          content={card}
        />
      })}
    </ContentContainer>
  )
}

export const query = graphql`
 fragment CardsRender on ContentfulContentContainer{
  codeId
  contentful_id
  internalName
  content {
  ...CardContent
  }
 }
`