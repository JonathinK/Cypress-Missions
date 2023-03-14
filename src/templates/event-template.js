import * as React from 'react';
import { graphql, Link } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import Layout from '../components/layout';
import Seo from '../components/seo';
import { DropShadow, EventBackground, FullPageEventWrapper, InfoContainer, PageEventTitle, PictureElementWrap, Date, Location, Summary } from '../components/eventPageElements';
import { DonateButton } from '../components/EventElements';
import { MARKS } from '@contentful/rich-text-types';
import { renderRichText } from "gatsby-source-contentful/rich-text";


const EventTemplate = ({ data: {event}}) => {
const EventImage = getImage(event.image);
const DateTo = event.dateTo || [];
const richText = event.richText;

const options = {
  renderMark: {
    [MARKS.BOLD]: text => <bold>{text}</bold>,
    [MARKS.ITALIC]: text => <em>{text}</em>,
    [MARKS.HYPERLINK]: (text, {data}) => (
      <a href={data.url} target="_blank" rel='noopener noreferrer'>
        {text}
      </a>
    ),
  },
}
  return(
    <Layout>
    <Seo title={event.seo.title} description={event.seo.description.description}/>
      <FullPageEventWrapper>
        <EventBackground/>
        <PictureElementWrap ImageHeight>
          <GatsbyImage image={EventImage} alt="" className='ImagePosition'/>
        </PictureElementWrap>
        <DropShadow/>
        <InfoContainer>
          <PageEventTitle>{event.headline}</PageEventTitle>
          <Location>{event.location}</Location>
          {DateTo.length > 0 &&
            <Date>{event.dateFrom} - {event.dateTo}</Date>
          }
          {DateTo.length === 0 &&
            <Date>{event.dateFrom}</Date>
          }
          <Summary>{renderRichText(richText,options)}</Summary>
          <DonateButton><Link to="/contactus">Donate</Link></DonateButton>
        </InfoContainer>
      </FullPageEventWrapper>
    </Layout>    
  )
}
export default EventTemplate
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
      richText{
        raw
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

