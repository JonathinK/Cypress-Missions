import React from 'react';
import { ContentContainer, Heading1, Heading2, Heading3, Heading4, Heading5, Overline, } from '../styles';
import { RichTextRender } from './contentRender';
import { graphql } from "gatsby";
import { ButtonRender } from './buttonRender';

export const TextRender = ({ content }) => {
const TextContainerClass = content.externalName || '';
const TextContainerContent = content.content;
  return(
    <ContentContainer $TextContainer className={TextContainerClass}>
      {TextContainerContent.map((items) => { 
        switch(items.codeId){
          case "overline": 
            return(
              <Overline key={items.codeId}>
                {items.shortSimpleText}
              </Overline>
            )
          case "display":
            return(
              <React.Fragment key={items.codeId}>
                {items.shortSimpleText && (
                  <Heading2 key={items.codeId} $Display>
                    {items.shortSimpleText}
                  </Heading2>
                )}
                {items.longSimpleText && (
                  <Heading2 key={items.codeId} $Display>
                    {items.longSimpleText}
                  </Heading2>
                )}
              </React.Fragment>
            )
          case "headline_1":
            return(
              <React.Fragment key={items.codeId}>
                {items.shortSimpleText && (
                  <Heading1 key={items.codeId}>
                    {items.shortSimpleText}
                  </Heading1>
                )}
                {items.longSimpleText && (
                  <Heading1 key={items.codeId}>
                    {items.longSimpleText}
                  </Heading1>
                )}
              </React.Fragment>
            )
          case "headline_2":
            return(
              <React.Fragment key={items.codeId}>
                {items.shortSimpleText && (
                  <Heading2 key={items.codeId}>
                    {items.shortSimpleText}
                  </Heading2>
                )}
                {items.longSimpleText && (
                  <Heading2 key={items.codeId}>
                    {items.longSimpleText}
                  </Heading2>
                )}
              </React.Fragment>
            )
          case "headline_3":
            return(
              <React.Fragment key={items.codeId}>
                {items.shortSimpleText && (
                  <Heading3 key={items.codeId}>
                    {items.shortSimpleText}
                  </Heading3>
                )}
                {items.longSimpleText && (
                  <Heading3 key={items.codeId}>
                    {items.longSimpleText}
                  </Heading3>
                )}
              </React.Fragment>
            )
          case "headline_4":
            return(
              <React.Fragment key={items.codeId}>
                {items.shortSimpleText && (
                  <Heading4 key={items.codeId}>
                    {items.shortSimpleText}
                  </Heading4>
                )}
                {items.longSimpleText && (
                  <Heading4 key={items.codeId}>
                    {items.longSimpleText}
                  </Heading4>
                )}
              </React.Fragment>
            )
          case "headline_5":
            return(
              <React.Fragment key={items.codeId}>
                {items.shortSimpleText && (
                  <Heading5 key={items.codeId}>
                    {items.shortSimpleText}
                  </Heading5>
                )}
                {items.longSimpleText && (
                  <Heading5 key={items.codeId}>
                    {items.longSimpleText}
                  </Heading5>
                )}
              </React.Fragment>
            )
          case "body":
            return(
              <RichTextRender  key={items.codeId} content={items.richText}/>
            )
          default: 
              return null;
        }
      })}
    <ContentContainer $TextButtonContainer>
         {TextContainerContent.map((items) => {
        if(items.codeId === "cta_button"){
          return(
            <ButtonRender content={items} key={items.contentful_id}/>
          )
        }
        else{
          return null;
        }
      })}
      </ContentContainer>
    </ContentContainer>
  )
}
export const query = graphql`
  fragment TextRender on ContentfulText{
    contentful_id
    internalName
    codeId
    shortSimpleText
    longSimpleText {
      longSimpleText
      id
    }
    richText {
      raw
    }
  }
`