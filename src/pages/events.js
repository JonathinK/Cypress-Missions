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

         {/*Gtc Bahamas */}
           <EventElement>
              <ImageWrapper>
                <ImageContainer>
                  <StaticImage
                    src="../images/Charles.jpg"
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
               <EventTitle>Nov 15th - 21st</EventTitle>
              </WrapDiv>
              <InfoWrapper>
                <h3>Gtc, Bahamas</h3>
                <p> 
                  We will be moving Charles Williams, 81, back into his home. We met Charles on our very first trip. He has become a very dear friend. For over three years, he was living in a neighbor's attic.  On November 20th, the community will be hosting a ceremony to hand him the key to his home.  We look forward to this, as well as closing in on the final phases of the home of Leslie and Seanna Dames.
                </p>
                <ButtonWrapper>
                  <Button><Link to="/green-turtle-cay-bahamas">Read More</Link></Button> 
                  <DonateButton><Link to="/contactus">Donate</Link></DonateButton>
                </ButtonWrapper>
              </InfoWrapper>
            </EventElement>

            {/* Florida,NJ */}
            <EventElement>
             <ImageWrapper>
                <ImageContainer>
                  <StaticImage
                    src="../images/HarlemFL.jpg"
                    layout="fullWidth"
                    placeholder="blurred"
                    aspectRatio={2 / 2}
                    transformOptions={{fit: "cover", cropFocus:"center"}}
                    alt=""
                  />
                </ImageContainer>  
              </ImageWrapper>
              <WrapDiv>
               <EventTitle>March 4th - 11th</EventTitle>
              </WrapDiv>
              <InfoWrapper>
                <h3>Harlem Heights, Fl</h3>
                <p> 
                  After seeing the devastation from Hurricane Ian, we were lead by the workings of fate to a small community in Fort Meyers called Harlem Heights.
                  Here we have found our purpose with helping Virgina Rosado and her daughter Lynn. Virgina's son in law, Pete Saez will also be assisting.
                </p>
                <ButtonWrapper>
                  <Button><Link to="/florida-hurricane-ian">Read More</Link></Button> 
                  <DonateButton><Link to="/contactus">Donate</Link></DonateButton>
                </ButtonWrapper>
              </InfoWrapper>
            </EventElement>

            {/*  //Gretna Glen,Pa */}
            {/* <EventElement>
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
            </EventElement>  */}
        </EventWrapper>
      </Layout>
  )
}

export default Events
