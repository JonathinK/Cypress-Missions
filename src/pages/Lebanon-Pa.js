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
                    src="../images/pennsylvania.jpg"
                    layout="fullWidth"
                    placeholder="blurred"
                    alt=""
                  />
              </PictureElementWrap>
                <DropShadow />
                <InfoContainer>
                    <PageEventTitle>
                     Lebanon, Pa
                    </PageEventTitle>
                    <Date>
                      April 18th - April 23rd
                    </Date>
                
                <Summary>
                  Cypress will be organizing a team trip to Lebanon, Pennsylvania to support <a href="https://www.gretnaglen.org" target="_blank" rel="nofollow">Gretna Glen Retreat Center</a> and a Youth
                  Crisis Center. Much like our first trip in 2019 which left us with a great feeling of gratitude and appreciation for being
                  part of something unique, this trip will be no different. We will do as much as we can to help the community and leave a warming 
                  impact on the youth.  
                </Summary>
                <DonateButton><Link to="/contactus">Donate</Link></DonateButton>
                </InfoContainer>
            </FullPageEventWrapper>
        </Layout>
    )
}
export default Kentucky