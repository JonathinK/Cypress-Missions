import { graphql } from 'gatsby';
import React from 'react';
import { ButtonContainer, ButtonLink, ButtonPageLink, ContentContainer, Heading1, HeroContainer, IconContainer, MediaContainer, Paragraph, Section, TextContainer } from '../styles';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { RichTextRender } from '../components';
import { Icon } from '@iconify-icon/react/dist/iconify.mjs';
import Seo from '../components/seo';

const EventTemplate = ({ data }) => {
const eventData = data.contentfulEvent;
console.log(data);
//Hero
const EventHero = ({ content }) => {
  //Feature Image
  const EventFeatureImage = ({ content }) => {
    const ftImage = getImage(content.featureImage);
    return(
      <MediaContainer $EventFeature>
        <GatsbyImage
          image={ftImage}
          alt=''
          loading='eager'
          className='full_image'
        />
      </MediaContainer>
    )
  }
  return(
    <HeroContainer $EventHero>
      <div className="background"/>
        <TextContainer $EventHeroText>
          <Heading1>{content.eventTitle}</Heading1>
          <Paragraph className='white_text'>
            {content.eventSummary.eventSummary}
          </Paragraph>
        </TextContainer>
        <EventFeatureImage content={content}/>
      </HeroContainer>
  )
}
//Info,Time,Location Bar
const EventInfoBar = ({ content }) => {
  return(
    <Section className='info_bar_section'>
      <ContentContainer className="event_info_container">
        <div className="date_container">
          <IconContainer>
            <Icon icon="solar:calendar-outline" class="icons calendar_outline"/>
          </IconContainer>
          <TextContainer className="info_text">
            {content.startDate === content.endDate && (
              <Paragraph><strong>Starts: </strong>{content.startDate}</Paragraph>
            )}
            {content.startDate !== content.endDate && (
              <>
                <Paragraph><strong>Starts: </strong>{content.startDate}</Paragraph>
                <Paragraph><strong>Ends: </strong>{content.endDate}</Paragraph>
              </> 
            )}
          </TextContainer>
        </div>
        <hr/>
        <div className="time_container">
          <IconContainer>
            <Icon icon="bi:clock" class="icons clock"/>
          </IconContainer>
          <TextContainer className="info_text">
            <Paragraph><strong>Starts: </strong>{content.startTime}</Paragraph>
            {content.endTime && (
              <Paragraph><strong>Ends: </strong>{content.endTime}</Paragraph>
            )}
          </TextContainer>
        </div>
        <hr/>
        <div className="location_container">
          <IconContainer>
            <Icon icon="system-uicons:location" class="icons location" />
          </IconContainer>
          <TextContainer className="info_text">
            <Paragraph>{content.locationName}</Paragraph>
            {content.googleMapLink && (
              <a href={content.googleMapLink}><strong>Get Directions </strong></a>
            )}
          </TextContainer>
        </div>
      </ContentContainer>
    </Section>
  )
}
//Cta Buttons
const EventCtaSection = ({ content }) => {

  //Google Calendar Cta Buttons
  const GoogleCalendarCtas = ({ content }) => {
    return(
      <ButtonContainer> 
        <ButtonLink $TextButton
          href={content.addEntireGoogleCalendar}
          target='_blank'
        >
          <Paragraph>Add Entire Calendar</Paragraph>
          <Icon icon="ph:plus-fill" class="plus"/>
        </ButtonLink>
        <hr/>
        <ButtonLink $TextButton
          href={content.icsCalendar}
          target="_blank"
        >
          <Paragraph>iCS File</Paragraph>
          <Icon icon="ph:plus-fill" class="plus"/>
        </ButtonLink>
      </ButtonContainer>
    )
  }  
  return(
    <Section $EventCtaSection className="event_cta_section">
      <ButtonContainer>
        <ButtonPageLink 
          to="/volunteer"
          target='_blank'
        >
          <Paragraph className='white_text'>Volunteer</Paragraph>
          <Icon icon="uil:arrow-right" class="arrow_right"/>
        </ButtonPageLink>
        <ButtonLink 
          href="https://app.aplos.com/aws/give/CypressMissions/general" 
          target='_blank'
          $AlternateButton
        >
          <Paragraph>Donate</Paragraph>
          <Icon icon="uil:arrow-right" class="arrow_right"/>
        </ButtonLink>
      </ButtonContainer>
      <GoogleCalendarCtas content={content}/>
    </Section>
    
  )
}
//Article Content
const ArticleContent = ({ content }) => {
  return(
    <Section className="event_article">
      <TextContainer as="article">
      <RichTextRender content={content.body}/>
      </TextContainer>
    </Section>
    
  )
}
  
  return(
    <React.Fragment>
      <EventHero content={eventData} key='section_1'/>
      <EventInfoBar content={eventData}/>
      <EventCtaSection content={eventData}/>
      <ArticleContent content={eventData}/>
    </React.Fragment>
  )
}

export const query = graphql`
  query($slug: String!){
    contentfulEvent(slug: {eq:$slug}){
    codeId
    contentful_id
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
    eventTitle
    eventSummary {
      eventSummary
      id
    }
    icsCalendar
    locationName
    googleMapLink
    addEntireGoogleCalendar
    startDate:startTime(formatString: "MMM Do")
    startTime: startTime(formatString: "hh:mm A")
    endDate: endTime(formatString: "MMM Do")
    endTime:endTime(formatString: "hh:mm A")
    body {
      raw
    }
    featureImage {
      contentful_id
      gatsbyImageData(
        layout: FULL_WIDTH
        quality: 70
        placeholder: BLURRED
        resizingBehavior: SCALE
      )
    }
  }
}
`
export const Head = ({ data }) => {
  const metadata = data.contentfulEvent.metadata;
  console.log(metadata);

  const seoData = metadata.reduce((acc,meta) => {
    if(meta.name.codeId === 'title'){
      acc.title = meta.content.content || '';
    } else if (meta.name.codeId === 'description'){
      acc.description = meta.content.content || '' ;
    } else if (meta.name.codeId === 'canonical'){
      acc.canonical = meta.content.content || '';
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
export default EventTemplate