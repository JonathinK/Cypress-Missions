import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'
import { DonateButton } from '../components/Eventselements'
import { DropShadow, EventBackground, PageEventTitle, FullPageEventWrapper, PictureElementWrap, InfoContainer, Date, Summary } from '../components/KentuckyElements'
import Layout from '../components/layout'

const EventOne = () => {

    return(
        <Layout>
            <FullPageEventWrapper>
              <EventBackground>
                <h2><Link to="/events">Back</Link></h2>
              </EventBackground>
              <PictureElementWrap>
                 <StaticImage
                    src="../images/bahamasbanner.jpg"
                    layout="fullWidth"
                    placeholder="blurred"
                    alt=""
                  />
              </PictureElementWrap>
                <DropShadow />
                <InfoContainer>
                    <PageEventTitle>
                      Green Turtle Cay, Bahamas
                    </PageEventTitle>
                    <Date>
                        Feb 21st - Feb 28th
                    </Date>
                
                <Summary>
                  Cypress will be returning to Green Turtle Cay, Bahamas to help rebuild a house for a woman and daughter who lost their homes to hurricane Dorian. We also
                  will have continued support for the local school, bringing supplies and fixing whatever we can to give the youth the necessary environment they need to keep 
                  learning. Green Turtle Cay is currently our most visited area. We have many ongoing projects here and still continue to build lasting relationships. Cypress is 
                  excited to show you the progress and impact we've made in the lives of the community.
                </Summary>
                <DonateButton><Link to="/contactus">Donate</Link></DonateButton>
                </InfoContainer>
            </FullPageEventWrapper>
        </Layout>
    )
}
export default EventOne