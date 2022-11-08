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
              <PictureElementWrap ImageHeight>
                 <StaticImage
                    src="../images/Charles.jpg"
                    layout="fullWidth"
                    quality={50}
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
                        Nov 15th - Nov 21st
                    </Date>
                
                <Summary>
                    We will be moving Charles Williams, 81, back into his home. We met Charles on our very first trip. He has become a very dear friend. For over three years, he was living in a neighbor's attic.  On November 20th, the community will be hosting a ceremony to hand him the key to his home.  We look forward to this, as well as closing in on the final phases of the home of Leslie and Seanna Dames.
                </Summary>
                <DonateButton><Link to="/contactus">Donate</Link></DonateButton>
                </InfoContainer>
            </FullPageEventWrapper>
        </Layout>
    )
}
export default EventOne