import { graphql } from 'gatsby';
import React from 'react';
import { Accordion, Heading2 } from '../styles';
import { RichTextRender } from './contentRender';

export const AccordionRender = ({ content }) => {
  const InnerContent = content.content;
  return(
    <React.Fragment>
      {InnerContent.map((items) => {
        return(
          <Accordion>
            <div $AccordionHeadlineContainer>
              <Heading2>
                {items.shortSimpleText}
              </Heading2>
              <div $AccordionPlus/>
            </div>
            <div $AccordionTextContainer>
              <RichTextRender content={items.richText}/>
            </div>
          </Accordion>
        )
      })}
    </React.Fragment>
   
  )
}

export const query = graphql`
  fragment AccordionRender on ContentfulContentContainer{
    contentful_id
    codeId
    externalName
    content{
      ... on ContentfulText {
        id
        contentful_id
        shortSimpleText
        richText {
          raw
        }
      }
    }
  }
`