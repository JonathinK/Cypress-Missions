import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import { WrapDiv, EventTitle, EventDescription, DonateButton, EventElement, EventImage, EventLocation, EventTime, EventInfoWrap, EventCard, EventWrapper, ImageWrapper, ImageContainer, InfoWrapper, Button, ButtonWrapper} from "../components/Eventselements"

const Events = () => {
  return(
      <Layout>
        <EventWrapper>
          <h1>Check Back Soon For More Events</h1>
            <EventElement>
              <ImageWrapper>
                <ImageContainer>
                  <StaticImage
                    src="../images/bahamasbanner.jpg"
                    layout="fullWidth"
                    placeholder="blurred"
                    aspectRatio={2 / 2}
                    transformOptions={{fit: "cover", cropFocus:"center"}}
                    alt=""
                  />
                </ImageContainer>  
              </ImageWrapper>
              <WrapDiv>
               <EventTitle>GTC, Bahamas</EventTitle>
              </WrapDiv>
              <InfoWrapper>
                <h3>Feb 21st - Feb 28th</h3>
                <p> 
                  Cypress will be returning to Green Turtle Cay, Bahamas to help rebuild a house for a woman and daughter who lost their homes to hurricane Dorian. We also
                  will have continued support for the local school, bringing supplies and fixing whatever we can to give the youth the necessary environment they need to keep 
                  learning. Green Turtle Cay is currently our most visited area. We have many ongoing projects here and still continue to build lasting relationships. Cypress is 
                  excited to show you the progress and impact we've made in the lives of the community.
                </p>
                <ButtonWrapper>
                  <Button><Link to="/Gtc-Bahamas-21st-28th">Read More</Link></Button> 
                  <DonateButton><Link to="/contactus">Donate</Link></DonateButton>
                </ButtonWrapper>
              </InfoWrapper>
            </EventElement>

            <EventElement>
              <ImageWrapper>
                <ImageContainer>
                  <StaticImage
                    src="../images/pennsylvania.jpg"
                    layout="fullWidth"
                    placeholder="blurred"
                    aspectRatio={2 / 2}
                    transformOptions={{fit: "cover", cropFocus:"center"}}
                    alt=""
                  />
                </ImageContainer>  
              </ImageWrapper>
              <WrapDiv>
               <EventTitle>Lebanon, Pa</EventTitle>
              </WrapDiv>
              <InfoWrapper>
                <h3>April 18th - April 23rd</h3>
                <p> 
                  Cypress will be organizing a team trip to Lebanon, Pennsylvania to support Gretna Glen Retreat Center and a Youth
                  Crisis Center. Much like our first trip in 2019 which left us with a great feeling of gratitude and appreciation for being
                  part of something unique, this trip will be no different. We will do as much as we can to help the community and leave a warming 
                  impact on the youth.    
                </p>
                <ButtonWrapper>
                  <Button><Link to="/Lebanon-Pa">Read More</Link></Button> 
                  <DonateButton><Link to="/contactus">Donate</Link></DonateButton>
                </ButtonWrapper>
              </InfoWrapper>
            </EventElement>
            
            <EventElement>
              <ImageWrapper>
                <ImageContainer>
                  <StaticImage
                    src="../images/kentucky.jpg"
                    layout="fullWidth"
                    placeholder="blurred"
                    aspectRatio={2 / 2}
                    transformOptions={{fit: "cover", cropFocus:"center"}}
                    alt="A U.S. flag is tied to a fallen tree in front of a destroyed residence in the aftermath of a tornado in Mayfield, Kentucky. Photo credit: Reuters/Adrees Latif"
                  />
                </ImageContainer>  
              </ImageWrapper>
              <WrapDiv>
               <EventTitle>Cayce, Kentucky</EventTitle>
              </WrapDiv>
              <InfoWrapper>
                <h3>May 7th - May 15th</h3>
                <p> 
                  This project will primarily focus on helping to rebuild and finish homes that were devastated by the recent tornadoes in Cayce and surrounding areas. It will be one of 
                  several trips over the next few months and into the following year. We are looking to fly into Nashville, TN and drive about 3 hours down to Bardwell, Kentucky, a town 
                  just outside of Cayce.
                </p>
                <ButtonWrapper>
                  <Button><Link to="/Cayce-Kentucky-march-10th">Read More</Link></Button> 
                  <DonateButton><Link to="/contactus">Donate</Link></DonateButton>
                </ButtonWrapper>
              </InfoWrapper>
            </EventElement>
        </EventWrapper>
      </Layout>
  )
}

export default Events
