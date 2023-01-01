import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'
import { DonateButton } from '../components/Eventselements';
import { DropShadow, EventBackground, PageEventTitle, FullPageEventWrapper, PictureElementWrap, InfoContainer, Date, Summary } from '../components/eventPageElements';
import Layout from '../components/layout';
import Seo from "../components/seo";

const FortMyersFlorida = () => {
    <Seo title='Fort Myers Florida Recovery' description="Cypress has mobilized to lay the ground work in helping Virginia and Lynn Rosado rebuild their home in the Harlem Heights section of Fort Myers,FL. There is much work to be done and this is one of 3 trips before a larger trip planned to take place in march. Cypress is dedicated to helping Floridians get back in their homes."/>
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
                     Harlem Heights, Fort Myers, Fl
                    </PageEventTitle>
                    <Date>
                      Dec 31st, 2022 - January 7th, 2023 
                    </Date>
                <Summary>
                    Cypress has mobilized once again into the new year, heading down to Florida to help the Rosado family. This trip is one that will lay the ground work for subsequent trips to Harlem Heights / Fort Meyers, FL. Cypress is grateful to be able to help Virginia and Lynn Rosado find some normalcy and comfort in their life. Check back as we update the situation with changes and new trip details.
                </Summary>
                <DonateButton><Link to="/contactus">Donate</Link></DonateButton>
                </InfoContainer>
            </FullPageEventWrapper>
        </Layout>
    )
}
export default FortMyersFlorida