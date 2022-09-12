import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'
import { DonateButton } from '../components/Eventselements';
import { DropShadow, EventBackground, PageEventTitle, FullPageEventWrapper, PictureElementWrap, InfoContainer, Date, Summary } from '../components/eventPageElements';
import Layout from '../components/layout';

const spotswood = () => {

    return(
        <Layout>
            <FullPageEventWrapper>
              <EventBackground/>
              <PictureElementWrap>
                 <StaticImage
                    src="../images/pixie.jpg"
                    layout="fullWidth"
                    quality={50}
                    placeholder="blurred"
                    alt=""
                  />
              </PictureElementWrap>
                <DropShadow />
                <InfoContainer>
                    <PageEventTitle>
                     SpotsWood, NJ
                    </PageEventTitle>
                    <Date>
                      Oct 1st
                    </Date>
                
                <Summary>
                  On October 1st Cypress will be heading to Spotswood. We will be working with the community to complete work at The Pixie Preschool from 
                  9 am  to 12:30 pm. Lunch will be provided. 
                </Summary>
                <DonateButton><Link to="/contactus">Donate</Link></DonateButton>
                </InfoContainer>
            </FullPageEventWrapper>
        </Layout>
    )
}
export default spotswood