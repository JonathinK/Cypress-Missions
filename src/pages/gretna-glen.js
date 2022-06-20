import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'
import { DonateButton } from '../components/Eventselements';
import { DropShadow, EventBackground, PageEventTitle, FullPageEventWrapper, PictureElementWrap, InfoContainer, Date, Summary } from '../components/eventPageElements';
import Layout from '../components/layout';

const gretna = () => {

    return(
        <Layout>
            <FullPageEventWrapper>
              <EventBackground/>
              <PictureElementWrap>
                 <StaticImage
                    src="../images/gretnaglen.png"
                    layout="fullWidth"
                    quality={50}
                    placeholder="blurred"
                    alt=""
                  />
              </PictureElementWrap>
                <DropShadow />
                <InfoContainer>
                    <PageEventTitle>
                     Lebanon, PA
                    </PageEventTitle>
                    <Date>
                      Aug 22nd - 27th
                    </Date>
                
                <Summary>
                   We will be heading to the Gretna Glen Camp after prior postponement. The focus will be on repairing cabins with painting, as well as serving the community, 
                   specifically the Youth In Crisis Center. There will be a meeting on this trip May 4th at 6:15 in Brielle. The address is 821 Riverview Dr.
                </Summary>
                <DonateButton><Link to="/contactus">Donate</Link></DonateButton>
                </InfoContainer>
            </FullPageEventWrapper>
        </Layout>
    )
}
export default gretna