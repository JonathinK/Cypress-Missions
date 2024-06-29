import React from 'react';
import { graphql } from 'gatsby';
import { CardsContainer} from '../styles';
import { CardRender } from './cardRender';

export const CardsContainerRender = ({ content }) => {
  const CardsData = content.content;
  
  return(
    <CardsContainer className={content.externalName}>
      {CardsData.map((card) => {
        return <CardRender
          key={card.contentful_id}
          content={card}
        />
      })}
    </CardsContainer>
  )
}

export const query = graphql`
 fragment cardsRender on ContentfulContentContainer{
  codeId
  contentful_id
  externalName
  content {
  ...cardContent
  }
 }
`