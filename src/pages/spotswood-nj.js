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
                      May 21st
                    </Date>
                
                <Summary>
                  We're working with the Pixie Preschool to help with projects on the property. This will include replacing windows and painting, while continuing our work with The CUP Food Pantry. 
                  The day will begin at 9:00am and lunch will be provided. The address is 429 Main Street, SpotsWood, NJ
                </Summary>
                <DonateButton><Link to="/contactus">Donate</Link></DonateButton>
                </InfoContainer>
            </FullPageEventWrapper>
        </Layout>
    )
}
export default spotswood