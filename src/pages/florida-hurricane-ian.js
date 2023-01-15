import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'
import { DonateButton } from '../components/Eventselements';
import { DropShadow, EventBackground, PageEventTitle, FullPageEventWrapper, PictureElementWrap, InfoContainer, Date, Summary } from '../components/eventPageElements';
import Layout from '../components/layout';
import Seo from "../components/seo";

const Florida = () => {
    <Seo title='Florida Recovery'/>
    return(
        <Layout>
            <FullPageEventWrapper>
              <EventBackground/>
              <PictureElementWrap ImageHeight >
                 <StaticImage
                    src="../images/Harlem-Photo.jpg"
                    layout="fullWidth"
                    quality={50}
                    placeholder="blurred"
                    alt=""
                    className="ImagePosition"
                  />
              </PictureElementWrap>
                <DropShadow />
                <InfoContainer>
                    <PageEventTitle>
                     Harlem Heights, Fort Myers, Fl
                    </PageEventTitle>
                    <Date>
                        March 4th - 11th
                    </Date>
                <Summary>
                    In our initial recovery efforts from Hurricane Ian, we found our purpose in this community. We will be helping with the recovery of the home of Virginia Rosado and her daughter Lynn.
                </Summary>
                <DonateButton><Link to="/contactus">Donate</Link></DonateButton>
                </InfoContainer>
            </FullPageEventWrapper>
        </Layout>
    )
}
export default Florida