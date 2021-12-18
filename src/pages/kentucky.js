import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'
import { DonateButton } from '../components/Eventselements'
import { DropShadow, EventBackground, PageEventTitle, FullPageEventWrapper, PictureElementWrap, InfoContainer, Date, Summary } from '../components/KentuckyElements'
import Layout from '../components/layout'

const Kentucky = () => {

    return(
        <Layout>
            <FullPageEventWrapper>
              <EventBackground>
                <h2><Link to="/events">Back</Link></h2>
              </EventBackground>
              <PictureElementWrap>
                 <StaticImage
                    src="../images/kentucky.jpg"
                    layout="fullWidth"
                    placeholder="blurred"
                    alt="A U.S. flag is tied to a fallen tree in front of a destroyed residence in the aftermath of a tornado in Mayfield, Kentucky. Photo credit: Reuters/Adrees Latif"
                  />
              </PictureElementWrap>
                <DropShadow />
                <InfoContainer>
                    <PageEventTitle>
                    Operation Kentucky Recovery
                    </PageEventTitle>
                    <Date>
                        Dec 27th, 2021 - Jan 2, 2022
                    </Date>
                
                <Summary>
                Hi Everyone,
                <br/>
                     In the aftermath of the deadly tornadoes that wreaked havoc on five U.S. states, Cypress is mobilizing to help our neighbors
                  begin their long road of recovery. With dozens dead and hundreds still missing, we can only begin to imagine what lies ahead for the families
                  left in the wake of this natural disaster. On December 27, I will be taking a small team to Cayce, Kentucky <i>(population: 123)</i> to bring vital 
                  supplies and help the first phase of clean up. We are currently in contact with the town's fire department and other locals to see how our group 
                  can be most effective moving forward. I will follow-up with more specifics soon, but please consider supporting this mission financially, as 100% 
                  of these donations will go to help this devastated community. 
        
                  Thank you again for being an important part of Cypress Missions.
                <br/>
                  Sincerly,
                  <br/>
                  Freddie
                </Summary>
                <DonateButton><Link to="/contactus">Donate</Link></DonateButton>
                </InfoContainer>
            </FullPageEventWrapper>
        </Layout>
    )
}
export default Kentucky