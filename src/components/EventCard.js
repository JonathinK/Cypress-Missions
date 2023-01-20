import { Link } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import * as React from 'react';
import { Button,ButtonWrapper, DonateButton, EventElement, EventTitle, ImageWrapper, InfoWrapper, WrapDiv } from './EventElements';

export const EventCard = ({ data }) => {
  const CardImage = getImage(data.image);
  return(
    <EventElement>
      <ImageWrapper>
       <GatsbyImage image={CardImage} className="image_fit"/>
      </ImageWrapper>
          <InfoWrapper>
            <h3>{data.location}</h3>
            <EventTitle>{data.dateFrom} - {data.dateTo}</EventTitle>
            <p>{data.body.body}</p>
            <ButtonWrapper>
              <Button>
                <Link to={`${data.slug}`}>See More</Link>
              </Button>
            <DonateButton>
              <Link to='/contactus'>Donate</Link>
            </DonateButton>
            </ButtonWrapper>
          </InfoWrapper>
    </EventElement>
  )
}