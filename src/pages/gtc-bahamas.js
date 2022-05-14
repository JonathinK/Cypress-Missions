import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'
import { DonateButton } from '../components/Eventselements'
import { DropShadow, EventBackground, PageEventTitle, FullPageEventWrapper, PictureElementWrap, InfoContainer, Date, Summary } from '../components/eventPageElements';
import Layout from '../components/layout'

const EventOne = () => {

    return(
        <Layout>
            <FullPageEventWrapper>
              <EventBackground/>
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
                    The second week of November Cypress will be returning to Green Turtle Cay, a Barrier island off the mainland Great Abbaco, in the Bahamas.  
                    Cypress continues to see great progress in working with organizations, our efforts with school supplies, repairs to schools and getting the 
                    communities back on their feet by getting them into their homes. The meeting for this trip will be Friday, September 9th at 6:30.  The address 
                    is 416 Philadelphia Ave, Point Pleasant Beach.  We will discuss costs, projects and the second Children's program we will host on the island.
                </Summary>
                <DonateButton><Link to="/contactus">Donate</Link></DonateButton>
                </InfoContainer>
            </FullPageEventWrapper>
        </Layout>
    )
}
export default EventOne