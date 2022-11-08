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
              <PictureElementWrap>
                 <StaticImage
                    src="../images/HarlemFL.jpg"
                    layout="fullWidth"
                    quality={50}
                    placeholder="blurred"
                    alt=""
                  />
              </PictureElementWrap>
                <DropShadow />
                <InfoContainer>
                    <PageEventTitle>
                     Harlem Heights, Fl
                    </PageEventTitle>
                    <Date>
                        March 4th - 11th
                    </Date>
                <Summary>
                    After seeing the devastation from Hurricane Ian, we were lead by the workings of fate to a small community in Fort Meyers called Harlem Heights.
                    Here we have found our purpose with helping Virgina Rosado and her daughter Lynn. Virgina's son in law, Pete Saez will also be assisting.
                </Summary>
                <DonateButton><Link to="/contactus">Donate</Link></DonateButton>
                </InfoContainer>
            </FullPageEventWrapper>
        </Layout>
    )
}
export default Florida