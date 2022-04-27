import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'
import { DonateButton } from '../components/Eventselements';
import { DropShadow, EventBackground, PageEventTitle, FullPageEventWrapper, PictureElementWrap, InfoContainer, Date, Summary } from '../components/eventPageElements';
import Layout from '../components/layout';

const Kentucky = () => {

    return(
        <Layout>
            <FullPageEventWrapper>
              <EventBackground/>
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
                     Cayce, Kentucky
                    </PageEventTitle>
                    <Date>
                      June 13th - 20th 
                    </Date>
                
                <Summary>
                  Based on our recent trip, Cypress will be helping two families return to some kind of "norm". This will include demolition, framing and general clean up. We're planning to stay at a hotel
                  in Union City. This will help with logistics and close proximity to supplies as well as supporting local businesses. The cost of this trip will be $285.00 including food, plus your travel expenses. 
                  More details on this trip will be sent after our next meeting with the Cayce Recovery Team.
                </Summary>
                <DonateButton><Link to="/contactus">Donate</Link></DonateButton>
                </InfoContainer>
            </FullPageEventWrapper>
        </Layout>
    )
}
export default Kentucky