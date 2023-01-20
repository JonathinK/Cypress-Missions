import * as React from 'react';
import { graphql, Link } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import Layout from '../components/layout';
import Seo from '../components/seo';
import { DropShadow, EventBackground, FullPageEventWrapper, InfoContainer, PageEventTitle, PictureElementWrap, Date, Location, Summary } from '../components/eventPageElements';
import { DonateButton } from '../components/Eventselements';

const EventTemplate = ({ data: {event} }) => {
const EventImage = getImage(event.image);
  return(
    <Layout>
      <FullPageEventWrapper>
        <EventBackground/>
        <PictureElementWrap ImageHeight>
          <GatsbyImage image={EventImage} alt="" className='ImagePosition'/>
        </PictureElementWrap>
        <DropShadow/>
        <InfoContainer>
          <PageEventTitle>{event.headline}</PageEventTitle>
          <Location>{event.location}</Location>
          <Date>{event.dateFrom} - {event.dateTo}</Date>
          <Summary>{event.body.body}</Summary>
          <DonateButton><Link to="/contactus">Donate</Link></DonateButton>
        </InfoContainer>
      </FullPageEventWrapper>
    </Layout>    
  )
}
export default EventTemplate

export const Head = ({data:{event}}) => <Seo title={event.seo.title} description={event.seo.description}/>
export const query = graphql`
  query($slug: String!) {
    event:contentfulEvent(slug: {eq: $slug}) {
      slug
      id
      contentful_id
      headline
      location
      dateFrom(formatString: "MMMM, DD")
      dateTo(formatString: "MMMM, DD")
      body {
        body
      }
      image {
        gatsbyImageData(placeholder: BLURRED, layout: FULL_WIDTH, quality: 60)
      }
      seo {
        title
        description {
          description
        }
      }
    }
  }
`

