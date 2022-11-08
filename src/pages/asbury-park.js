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
              <PictureElementWrap ImageHeight >
                 <StaticImage
                    src="../images/ClothingCloset.jpg"
                    layout="fullWidth"
                    placeholder="blurred"
                    quality={50}
                    alt=""
                    className='ImagePosition'
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
                  We continue our work with The Bethel Clothing Closet in Asbury Park, from 10:00 am to 12:00 pm. This is every 1st and 3rd saturday of every month.
                  Please feel free to join us to serve locally.
                </Summary>
                <DonateButton><Link to="/contactus">Donate</Link></DonateButton>
                </InfoContainer>
            </FullPageEventWrapper>
        </Layout>
    )
}
export default Asbury