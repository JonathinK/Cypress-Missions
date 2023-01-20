import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { EventWrapper } from "../components/EventElements"
import { EventCard } from "../components/EventCard" 

const Events = ({ data }) => {
  return(
      <Layout>
       <EventWrapper>
          {data.events.nodes.map(event =>(
            <EventCard key={`event${event.slug}`} data={event} />
          ))}
       </EventWrapper>
      </Layout>
  )
}

export default Events
export const query = graphql`
  query {
    events:allContentfulEvent(sort: {dateFrom: ASC}) {
      nodes{
        slug
        headline
        location
        dateFrom(formatString: "MMM DD")
        dateTo(formatString: "MMM DD")
        body{
          body
        }
        image {
        gatsbyImageData(placeholder: BLURRED, quality: 100, layout: FULL_WIDTH)
      }
      }
    }
  }
`