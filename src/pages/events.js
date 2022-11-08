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
                    src="../images/ClothingCloset.jpg"
                    layout="fullWidth"
                    placeholder="blurred"
                    aspectRatio={2 / 2}
                    transformOptions={{fit: "cover", cropFocus:"center"}}
                    alt=""
                    quality={50}
                    className='ImageHeight'
                  />
                </ImageContainer>  
              </ImageWrapper>
              <WrapDiv>
               <EventTitle>Every Month</EventTitle>
              </WrapDiv>
              <InfoWrapper>
                <h3>Asbury Park, NJ</h3>
                <p> 
                We continue our work with The Bethel Clothing Closet in Asbury Park, from 10:00 am to 12:00 pm. This is every 1st and 3rd Saturday of each month.
                Please feel free to join us to serve the local community.
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
                <h3>Green Turtle Cay, Bahamas</h3>
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
                <h3>Harlem Heights, Fort Myers, Fl</h3>
                <p> 
                  In our initial recovery efforts from Hurricane Ian, we found our purpose in this community. We will be helping with the recovery of the home of Virginia Rosado and her daughter Lynn.
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
