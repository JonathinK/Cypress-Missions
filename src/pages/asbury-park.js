import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'
import { DonateButton } from '../components/Eventselements';
import { DropShadow, EventBackground, PageEventTitle, FullPageEventWrapper, PictureElementWrap, InfoContainer, Date, Summary } from '../components/eventPageElements';
import Layout from '../components/layout';

const Asbury = () => {

    return(
        <Layout>
            <FullPageEventWrapper>
              <EventBackground/>
              <PictureElementWrap>
                 <StaticImage
                    src="../images/newjersey/Asbury-Park-13.jpg"
                    layout="fullWidth"
                    placeholder="blurred"
                    quality={50}
                    alt=""
                  />
              </PictureElementWrap>
                <DropShadow />
                <InfoContainer>
                    <PageEventTitle>
                     Asbury Park, NJ
                    </PageEventTitle>
                    <Date>
                      1st & 3rd Saturday monthly
                    </Date>
                
                <Summary>
                  We are continuing are work with Bethel AME and The Ford Center in Asbury Park from 10:00am to 12:00pm. Those of you who wish to serve in a local capacity feel free to join us.
                </Summary>
                <DonateButton><Link to="/contactus">Donate</Link></DonateButton>
                </InfoContainer>
            </FullPageEventWrapper>
        </Layout>
    )
}
export default Asbury