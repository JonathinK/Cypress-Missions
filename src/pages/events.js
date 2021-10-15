import React from "react"

import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import { EventDescription, EventElement, EventImage, EventLocation, EventTime, EventInfoWrap, EventCard, EventWrapper, UpcomingEventsTitle } from "../components/Eventselements"

const Events = () => {
  return(
      <Layout>
        <EventWrapper>
               
            <EventElement>
                <UpcomingEventsTitle> Upcoming Events</UpcomingEventsTitle>
                <EventCard>
                <EventImage>
                    <StaticImage 
                        src="../images/bahamas/Bahamas-15.jpg"
                        layout="fullWidth"
                        quality={50}
                        alt="bahamas trip photo" 
                        loading="eager"
                    />
                </EventImage>
                <EventInfoWrap>
                <EventLocation>Green Turtle Cay, Bahamas</EventLocation>
                <EventTime>November 8th - 15th, 2021</EventTime>
                <EventDescription>Cypress will be building a new house for Charles, an 84-year old community leader who actively helped many families on the island back into their homes despite not having a house for himself.
                    Now it is time to help him live his golden years in comfort. Additionally, we will be bringing much-needed educational supplies to the one school on the island as we continue to support teachers on Green Turtle Cay.
                </EventDescription>
                </EventInfoWrap>
                </EventCard>
            </EventElement>
        </EventWrapper>
      </Layout>
  )
}

export default Events
