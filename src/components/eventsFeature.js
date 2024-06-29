import React from 'react';
import { Card, CardsContainer, ContentContainer, Heading2, Heading4, MediaContainer, NavLink, Overline, TextContainer } from '../styles';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

export const EventsFeature = () => {
  const data = useStaticQuery(graphql`
    query{
      allContentfulEvent(
        limit: 3,
        sort: {createdAt: ASC}
      )
      {
          nodes{
            codeId
            contentful_id
            eventTitle
            slug
            startTime(formatString: "MMM Do")
            featureImage {
              contentful_id
              gatsbyImageData(
                resizingBehavior: SCALE
                quality: 70
                placeholder: BLURRED
                layout: FULL_WIDTH
              )
            }
          }
        }
    }
`)
const eventsContent = data.allContentfulEvent.nodes;
  return(
    <CardsContainer className='feature_cards_container'>
       {eventsContent.map(event => {
        return(
          <Card key={event.contentful_id}>
           <MediaContainer className="latest_feature_image">
            <GatsbyImage
              image={getImage(event.featureImage.gatsbyImageData)}
              alt=''
              loading="lazy"
              className="full_image"
            />
           </MediaContainer> 
           <TextContainer>
           <Overline>{event.startTime}</Overline>
              <Heading4>
                  {event.eventTitle}
              </Heading4>
              <NavLink to={`/events/${event.slug}`}>View Event</NavLink>
           </TextContainer>
          </Card>
        )
      })}
    </CardsContainer>
  )
}