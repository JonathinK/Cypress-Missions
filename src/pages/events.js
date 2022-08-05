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

            {/* //The Clothing Closet,Asbury Park,NJ */}
            <EventElement>
             <ImageWrapper>
                <ImageContainer>
                  <StaticImage
                    src="../images/newjersey/Asbury-Park-13.jpg"
                    layout="fullWidth"
                    placeholder="blurred"
                    aspectRatio={2 / 2}
                    transformOptions={{fit: "cover", cropFocus:"center"}}
                    alt=""
                    quality={50}
                  />
                </ImageContainer>  
              </ImageWrapper>
              <WrapDiv>
               <EventTitle>Every Month</EventTitle>
              </WrapDiv>
              <InfoWrapper>
                <h3>Asbury Park, NJ</h3>
                <p> 
                   We are continuing are work with Bethel AME and The Ford Center in Asbury Park from 10:00am to 12:00pm. Those of you who wish to serve in a local capacity feel free to join us.
                   This will be the 1st and 3rd Saturday of every month.
                </p>
                <ButtonWrapper>
                  <Button><Link to="/asbury-park">Read More</Link></Button> 
                  <DonateButton><Link to="/contactus">Donate</Link></DonateButton>
                </ButtonWrapper>
              </InfoWrapper>
            </EventElement>

           {/*  //SpotsWood RCA, NJ */}
          {/*   <EventElement>
             <ImageWrapper>
                <ImageContainer>
                  <StaticImage
                    src="../images/pixie.jpg"
                    layout="fullWidth"
                    placeholder="blurred"
                    aspectRatio={2 / 2}
                    transformOptions={{fit: "cover", cropFocus:"center"}}
                    alt=""
                  />
                </ImageContainer>  
              </ImageWrapper>
              <WrapDiv>
               <EventTitle>May 21st</EventTitle>
              </WrapDiv>
              <InfoWrapper>
                <h3>SpotsWood RCA, NJ</h3>
                <p> 
                  We're working with the Pixie Preschool to help with projects on the property. This will include replacing windows and painting, while continuing our work with The CUP Food Pantry. 
                  The day will begin at 9:00am and lunch will be provided. The address is 429 Main Street, SpotsWood, NJ
                </p>
                <ButtonWrapper>
                  <Button><Link to="/spotswood-nj">Read More</Link></Button> 
                  <DonateButton><Link to="/contactus">Donate</Link></DonateButton>
                </ButtonWrapper>
              </InfoWrapper>
            </EventElement>  */}

        {/*     //Cayce, Kentucky */}
            <EventElement>
              <ImageWrapper>
                <ImageContainer>
                  <StaticImage
                    src="../images/kentucky.jpg"
                    layout="fullWidth"
                    placeholder="blurred"
                    aspectRatio={2 / 2}
                    transformOptions={{fit: "cover", cropFocus:"center"}}
                    quality={50}
                    alt="A U.S. flag is tied to a fallen tree in front of a destroyed residence in the aftermath of a tornado in Mayfield, Kentucky. Photo credit: Reuters/Adrees Latif"
                  />
                </ImageContainer>  
              </ImageWrapper>
              <WrapDiv>
               <EventTitle>June 14th - 22nd</EventTitle>
              </WrapDiv>
              <InfoWrapper>
                <h3>Cayce, Kentucky</h3>
                <p>
                 Based on our recent trip, Cypress will be helping two families return to some kind of "norm". This will include demolition, framing and general clean up. 
                 More details on this trip will be sent after our next meeting with the Cayce Recovery Team.
                 If you would like more information on this trip please reach out to <a href="mailto:freddie@cypressmissions.com" target="_blank" rel="noreferrer">Freddie</a>.
                </p>
                <ButtonWrapper>
                  <Button><Link to="/Cayce-Kentucky">Read More</Link></Button> 
                  <DonateButton><Link to="/contactus">Donate</Link></DonateButton>
                </ButtonWrapper>
              </InfoWrapper>
            </EventElement>

           {/*  //Gretna Glen,Pa */}
            <EventElement>
              <ImageWrapper>
                <ImageContainer>
                  <StaticImage
                    src="../images/gretnaglen.png"
                    layout="fullWidth"
                    placeholder="blurred"
                    quality={50}
                    aspectRatio={2 / 2}
                    transformOptions={{fit: "cover", cropFocus:"center"}}
                    alt=""
                  />
                </ImageContainer>  
              </ImageWrapper>
              <WrapDiv>
               <EventTitle>Aug 22nd - 27th</EventTitle>
              </WrapDiv>
              <InfoWrapper>
                <h3>Lebanon, PA</h3>
                <p> 
                  Cypress will be heading to the Gretna Glen Camp after prior postponement. The focus will be on repairing cabins with painting, as well as serving the community, specifically the Youth In Crisis Center. There will be a meeting on this trip May 4th at 6:15 in Brielle. The address is 821 Riverview Dr. 
                </p>
                <ButtonWrapper>
                  <Button><Link to="/gretna-glen">Read More</Link></Button> 
                  <DonateButton><Link to="/contactus">Donate</Link></DonateButton>
                </ButtonWrapper>
              </InfoWrapper>
            </EventElement> 

       {/*      //Gtc Bahamas */}
            <EventElement>
              <ImageWrapper>
                <ImageContainer>
                  <StaticImage
                    src="../images/bahamasbanner.jpg"
                    layout="fullWidth"
                    placeholder="blurred"
                    aspectRatio={2 / 2}
                    quality={50}
                    transformOptions={{fit: "cover", cropFocus:"center"}}
                    alt=""
                  />
                </ImageContainer>  
              </ImageWrapper>
              <WrapDiv>
               <EventTitle>Nov 7th - 14th</EventTitle>
              </WrapDiv>
              <InfoWrapper>
                <h3>Gtc, Bahamas</h3>
                <p> 
                The second week of November Cypress will be returning to Green Turtle Cay, a Barrier island off the mainland Great Abbaco, in the Bahamas.  
                Cypress continues to see great progress in working with organizations, our efforts with school supplies, repairs to schools and getting the 
                communities back on their feet by getting them into their homes. The meeting for this trip will be Friday, September 9th at 6:30.  The address 
                is 416 Philadelphia Ave, Point Pleasant Beach.  We will discuss costs, projects and the second Children's program we will host on the island.

                </p>
                <ButtonWrapper>
                  <Button><Link to="/green-turtle-cay-bahamas">Read More</Link></Button> 
                  <DonateButton><Link to="/contactus">Donate</Link></DonateButton>
                </ButtonWrapper>
              </InfoWrapper>
            </EventElement>
        </EventWrapper>
      </Layout>
  )
}

export default Events
