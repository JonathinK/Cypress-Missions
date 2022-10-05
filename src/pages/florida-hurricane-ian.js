import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'
import { DonateButton } from '../components/Eventselements';
import { DropShadow, EventBackground, PageEventTitle, FullPageEventWrapper, PictureElementWrap, InfoContainer, Date, Summary } from '../components/eventPageElements';
import Layout from '../components/layout';

const Florida = () => {

    return(
        <Layout>
            <FullPageEventWrapper>
              <EventBackground/>
              <PictureElementWrap>
                 <StaticImage
                    src="../images/Ian-Damage.jpeg"
                    layout="fullWidth"
                    quality={50}
                    placeholder="blurred"
                    alt="Creator:Kevin Fogarty / Credit:Reuters"
                  />
              </PictureElementWrap>
                <DropShadow />
                <InfoContainer>
                    <PageEventTitle>
                     Florida
                    </PageEventTitle>
                    <Date>
                      Oct 11th - 15th
                    </Date>
                
                <Summary>
                    We've all seen the devastating impact Hurricane Ian has had on floridians. Many are left homeless or trapped after the cat 4 hurricane battered the western shore area of florida and ripped across the state causing massive amounts of damage. The damage is astounding, the death toll is rising, rescue crews are working around the clock to find those missing and most have no idea what's next for them. Cypress is heading down to florida to see where we can be of assistance to aid those in need. More information will be available once we have it, as this is an ongoing situation.
                </Summary>
                <DonateButton><Link to="/contactus">Donate</Link></DonateButton>
                </InfoContainer>
            </FullPageEventWrapper>
        </Layout>
    )
}
export default Florida