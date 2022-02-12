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
                     Cayce, Kentucky
                    </PageEventTitle>
                    <Date>
                        May 7th - May 15th
                    </Date>
                
                <Summary>
                  This project will primarily focus on helping to rebuild and finish homes that were devastated by the recent tornadoes in Cayce and surrounding areas. It will be one of 
                  several trips over the next few months and into the following year. We are looking at flying into Nashville, TN and driving about 3 hours down to Bardwell, Kentucky, a town 
                  just outside of Cayce. We encourage you to join us on this trip.
                </Summary>
                <DonateButton><Link to="/contactus">Donate</Link></DonateButton>
                </InfoContainer>
            </FullPageEventWrapper>
        </Layout>
    )
}
export default Kentucky