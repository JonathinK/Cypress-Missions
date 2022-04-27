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
                We continue to see great progress there working with other organizations. 
                The meeting for this trip will be Friday, September 9th at 6:30.  The address is 416 Philadelphia Ave, Point Pleasant Beach.  We will discuss costs, projects and the second Childrens program we will host on the island.
                </Summary>
                <DonateButton><Link to="/contactus">Donate</Link></DonateButton>
                </InfoContainer>
            </FullPageEventWrapper>
        </Layout>
    )
}
export default EventOne