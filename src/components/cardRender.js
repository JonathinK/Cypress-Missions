import React from 'react';
import { graphql } from "gatsby"
import { ContentContainer } from '../styles';
import { MediaRenderer, ButtonRender, SvgRender, TextRender } from './';

export const Card = ({ content }) => {
  const CardContent = content.content;
  

  return(
    <ContentContainer $Card> 
      {CardContent.map((items) => {
        if(items.codeId === "svg"){
          return <SvgRender key={items.contentful_id} content={items}/>
        }
        else if(items.codeId === "card_media"){
          return <MediaRenderer content={items} key={items.contentful_id}/>
        }
        else if(items.codeId === "text_container"){
         return <TextRender key={items.contentful_id} content={items}/>
        }
        else{
          return null;
        }
      })}
      <ContentContainer $ButtonContainer>
         {CardContent.map((items) => {
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
  fragment CardContent on ContentfulContentContainer{
    codeId
    contentful_id
    externalName
    content{
      ...SVG
      ...MediaRender
      ...TextRender
    }
  }
`

