import { Link } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import * as React from 'react';
import { Button,ButtonWrapper, DonateButton, EventElement, EventTitle, ImageWrapper, InfoWrapper, WrapDiv } from './EventElements';
import { MARKS } from '@contentful/rich-text-types';
import { renderRichText } from "gatsby-source-contentful/rich-text";

export const EventCard = ({ data }) => {
  const CardImage = getImage(data.image);
  const dateTo = data.dateTo || [];
  const dateFrom = data.dateFrom || [];
  const richText = data.richText;
  
  const options = {
    renderMark: {
      [MARKS.BOLD]: text => <bold>{text}</bold>,
      [MARKS.ITALIC]: text => <em>{text}</em>,
      [MARKS.HYPERLINK]: (text, {data}) => (
        <a href={data.url} target="_blank" rel='noopener noreferrer'>
          {text}
        </a>
      ),
    },
  }
  return(
    <EventElement>
      <ImageWrapper>
       <GatsbyImage image={CardImage} className="image_fit" imgClassName='Image'/>
      </ImageWrapper>
          <InfoWrapper>
            <h3>{data.location}</h3>
            {dateTo !== dateFrom && 
              <EventTitle> {data.dateFrom} - {data.dateTo}</EventTitle>
            }
            {dateTo.length <= 0 &&
              <EventTitle>{data.dateFrom}</EventTitle>
            }
            {dateFrom === dateTo &&
              <EventTitle>{data.dateFrom}</EventTitle>
            }
            <p>{richText && renderRichText(richText, options)}</p>
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