import { graphql } from 'gatsby';
import React from 'react';
import { Hero } from '../components';
import { Card, CardsContainer, Heading4, NavLink, Paragraph, Section, TextContainer } from '../styles';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import Seo from '../components/seo';

const EventPage = ({ data }) => {
  const pageHero = data.contentfulPage.pageHero;
  const events = data.allContentfulEvent.nodes;

  return(
    <>
      <Hero content={pageHero}/>
      <Section className="events_page_section">
        <CardsContainer $EventCards>
         {events.map((event) => {
          const cardImage = getImage(event.featureImage);
          return(
              <Card className="event_card" key={event.contentful_id}>
              <NavLink to={`/events/${event.slug}`}/>
                <div className="event_card_image">
                  <GatsbyImage 
                    image={cardImage}
                    alt=''
                    loading="eager"
                    className="full_image"
                  />
                </div>
                <TextContainer className="event_card_text">
                  <Heading4>{event.eventTitle}</Heading4>
                </TextContainer>
                <div className="event_card_date">
                  <Paragraph>{event.month}</Paragraph>
                  <Paragraph>{event.day}</Paragraph>
                </div>
              </Card>
          )
         })}
        </CardsContainer>
      </Section>
    </>
  )
}
export const query = graphql`
  query{
    contentfulPage(
      codeId: {eq: "future_plans"}
    ) {
        codeId
        contentful_id
        externalName
        metadata {
          contentful_id
          googleBots
          internalName
          keywords
          content {
            id
            content
          }
          name {
            contentful_id
            codeId
          }
      }
        pageHero{
          ...PageHero
        }
      }
    allContentfulEvent(
      sort: {startTime: ASC}
    ){
      nodes{
        codeId
        contentful_id
        slug
        eventTitle
        createdAt
        startTime
        month: startTime(formatString: "MMM")
        day: startTime(formatString: "Do")
        featureImage {
          contentful_id
          gatsbyImageData(
            layout: FULL_WIDTH
            placeholder: BLURRED
            quality: 70
            resizingBehavior: SCALE
          )
        }
        eventSummary {
          id
          eventSummary
        }
      }
    }
  }
`
export const Head = ({ data }) => {
  const metadata = data.contentfulPage.metadata;

  const seoData = metadata.reduce((acc,meta) => {
    if(meta.name.codeId === 'title'){
      acc.title = meta.content.content;
    } else if (meta.name.codeId === 'description'){
      acc.description = meta.content.content
    } else if (meta.name.codeId === 'canonical'){
      acc.canonical = meta.content.content
    } else if (meta.name.codeId === 'keywords'){
      acc.keywords = meta.keywords ? meta.keywords.join(', ') : '';
    }
    return acc;
  }, { title: 'Default Title', description: 'Default description', keywords: '' });

  return(
    <Seo
      title={seoData.title}
      description={seoData.description}
      meta={[
        {
          name: 'keywords',
          content: seoData.keywords,
        },
        {
          name: 'canonical',
          content: seoData.canonical,
        }
      ]}
      canonical={seoData.canonical}
    />
  );
};

export default EventPage
