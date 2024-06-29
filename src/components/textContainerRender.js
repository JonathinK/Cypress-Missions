import React from 'react';
import { graphql } from 'gatsby';
import { Display, Heading1, Heading2, Heading3, Heading4, Heading5, Overline, TextContainer } from '../styles';
import { RichTextRender } from './contentRender';
import { ContentBlock } from './contentBlock';
import { ButtonContainerRender } from './buttonContainerRender';


export const TextContainerRender = ({ content }) => {
  const TextContainerClass = content.externalName || '';
  const TextContainerContent = content.content || null;
  
  return(
    <TextContainer className={TextContainerClass}>
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
                  <Display key={items.codeId}>
                    {items.shortSimpleText}
                  </Display>
                )}
                {items.longSimpleText && (
                  <Display key={items.codeId}>
                    {items.longSimpleText}
                  </Display>
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
                  <Heading5 key={items.id}>
                    {items.shortSimpleText}
                  </Heading5>
                )}
                {items.longSimpleText && (
                  <Heading5 key={items.id}>
                    {items.longSimpleText}
                  </Heading5>
                )}
              </React.Fragment>
            )
          case "body":
            return <RichTextRender  key={items.id} content={items.richText}/>
          case "content_block":
            return <ContentBlock key={items.contentful_id} content={items}/>
          case "button_container":
            return <ButtonContainerRender key={items.contentful_id} content={items.content} classContent={items}/>
          default: 
              return null;
        }
      })}
    </TextContainer>
  )
}

export const query = graphql`
  fragment textRender on ContentfulText{
    codeId
    contentful_id
    id
    longSimpleText {
      id
      longSimpleText
    }
    shortSimpleText
    richText {
      raw
    }
  }
`
