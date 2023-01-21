import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { EventWrapper } from "../components/EventElements"
import { EventCard } from "../components/EventCard" 
import Seo from "../components/seo"

const Events = ({ data }) => {
  return(
      <Layout>
      <Seo title="Events" description={"Cypress is always looking to mobilize and see where we can be of aid around the world. See where we are going next and who's life we are changing. If you are interested in any of these trips please feel free to volunteer as you could be the change in someones life."}/>
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