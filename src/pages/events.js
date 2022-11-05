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
                   We are continuing our work with Bethel AME and The Ford Center in Asbury Park from 10:00am to 12:00pm. Those of you who wish to serve in a local capacity feel free to join us.
                   This will be the 1st and 3rd Saturday of every month.
                </p>
                <ButtonWrapper>
                  <Button><Link to="/asbury-park">Read More</Link></Button> 
                  <DonateButton><Link to="/contactus">Donate</Link></DonateButton>
                </ButtonWrapper>
              </InfoWrapper>
            </EventElement>

        {/*Cayce, Kentucky */}
            {/* <EventElement>
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
               <EventTitle>Sept 26th - 30th</EventTitle>
              </WrapDiv>
              <InfoWrapper>
                <h3>Cayce, Kentucky</h3>
                <p>
                  Cypress is heading back to Cayce, Kentucky to finish the work on Don Wright's home and to finish helping another family in need.
                  We have made incredible progress on getting these two back into their homes with the hope of a return to a normal life.
                  If you would like more information on this trip please reach out to <a href="mailto:freddie@cypressmissions.com" target="_blank" rel="noreferrer">Freddie</a>.
                </p>
                <ButtonWrapper>
                  <Button><Link to="/Cayce-Kentucky">Read More</Link></Button> 
                  <DonateButton><Link to="/contactus">Donate</Link></DonateButton>
                </ButtonWrapper>
              </InfoWrapper>
            </EventElement> */}
            
             {/*  //SpotsWood RCA, NJ */}
           {/*  <EventElement>
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
               <EventTitle>Oct 1st</EventTitle>
              </WrapDiv>
              <InfoWrapper>
                <h3>SpotsWood RCA, NJ</h3>
                <p> 
                  On October 1st Cypress will be heading to Spotswood. We will be working with the community to complete work at The Pixie Preschool from 
                  9 am to 12:30 pm. Lunch will be provided. 
                </p>
                <ButtonWrapper>
                  <Button><Link to="/spotswood-nj">Read More</Link></Button> 
                  <DonateButton><Link to="/contactus">Donate</Link></DonateButton>
                </ButtonWrapper>
              </InfoWrapper>
            </EventElement> */} 
            
            {/*  //SpotsWood RCA, NJ */}
            {/* <EventElement>
             <ImageWrapper>
                <ImageContainer>
                  <StaticImage
                    src="../images/Ian-Damage.jpeg"
                    layout="fullWidth"
                    placeholder="blurred"
                    aspectRatio={2 / 2}
                    transformOptions={{fit: "cover", cropFocus:"center"}}
                    alt=""
                  />
                </ImageContainer>  
              </ImageWrapper>
              <WrapDiv>
               <EventTitle>Oct 11th-15th</EventTitle>
              </WrapDiv>
              <InfoWrapper>
                <h3>Florida</h3>
                <p> 
                  We've all seen the devastating impact Hurricane Ian has had on floridians. Many are left homeless or trapped after the cat 4 hurricane battered the western shore area of florida and ripped across the state causing massive amounts of damage. The damage is astounding, the death toll is rising, rescue crews are working around the clock to find those missing and most have no idea what's next for them. Cypress is heading down to florida to see where we can be of assistance to aid those in need. More information will be available once we have it, as this is an ongoing situation.
                </p>
                <ButtonWrapper>
                  <Button><Link to="/florida-hurricane-ian">Read More</Link></Button> 
                  <DonateButton><Link to="/contactus">Donate</Link></DonateButton>
                </ButtonWrapper>
              </InfoWrapper>
            </EventElement> */}

         {/*Gtc Bahamas */}
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
                  More work is to be done in Green Turtle Cay Bahamas.
                  Details to arrive soon.
                </p>
                <ButtonWrapper>
                  <Button><Link to="/green-turtle-cay-bahamas">Read More</Link></Button> 
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
               <EventTitle>Apr 10th - 14th</EventTitle>
              </WrapDiv>
              <InfoWrapper>
                <h3>Lebanon, PA</h3>
                <p> 
                  Cypress is heading back to the Gretna Glen Camp in Lebanon,Pa to help prepare for the summer camp.
                </p>
                <ButtonWrapper>
                  <Button><Link to="/gretna-glen">Read More</Link></Button> 
                  <DonateButton><Link to="/contactus">Donate</Link></DonateButton>
                </ButtonWrapper>
              </InfoWrapper>
            </EventElement> 
        </EventWrapper>
      </Layout>
  )
}

export default Events
