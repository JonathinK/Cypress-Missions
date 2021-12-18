import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import { WrapDiv, EventTitle, EventDescription, DonateButton, EventElement, EventImage, EventLocation, EventTime, EventInfoWrap, EventCard, EventWrapper, ImageWrapper, ImageContainer, InfoWrapper, Button, ButtonWrapper} from "../components/Eventselements"

const Events = () => {
  return(
      <Layout>
        <EventWrapper>
            <EventElement>
              <ImageWrapper>
                <ImageContainer>
                  <StaticImage
                    src="../images/kentucky.jpg"
                    layout="fullWidth"
                    placeholder="blurred"
                    aspectRatio={2 / 2}
                    transformOptions={{fit: "cover", cropFocus:"center"}}
                    alt="A U.S. flag is tied to a fallen tree in front of a destroyed residence in the aftermath of a tornado in Mayfield, Kentucky. Photo credit: Reuters/Adrees Latif"
                  />
                </ImageContainer>  
              </ImageWrapper>
              <WrapDiv>
               <EventTitle>Operation Kentucky Relief</EventTitle>
              </WrapDiv>
              <InfoWrapper>
                <h3>Dec 27th, 2021 - Jan 2, 2022</h3>
                <p> 
                  In the aftermath of the deadly tornadoes that wreaked havoc on five U.S. states, Cypress is mobilizing to help our neighbors
                  begin their long road of recovery. With dozens dead and hundreds still missing, we can only begin to imagine what lies ahead for the families
                  left in the wake of this natural disaster. On December 27, I will be taking a small team to Cayce, Kentucky (population: 123) to bring vital 
                  supplies and help the first phase of clean up. We are currently in contact with the town's fire department and other locals to see how our group 
                  can be most effective moving forward. I will follow-up with more specifics soon, but please consider supporting this mission financially, as 100% 
                  of these donations will go to help this devastated community. 
        
                  Thank you again for being an important part of Cypress Missions.
                </p>
                <ButtonWrapper>
                  <Button><Link to="/kentucky">Read More</Link></Button> 
                  <DonateButton><Link to="/contactus">Donate</Link></DonateButton>
                </ButtonWrapper>
              </InfoWrapper>
            </EventElement>
        </EventWrapper>
      </Layout>
  )
}

export default Events
