import React from 'react';
import { graphql } from "gatsby"
import { ButtonContainer, Card, ContentContainer } from '../styles';
import { MediaRenderer, ButtonRender, SvgRender, IconSelector, TextContainerRender, BgRender } from './';

export const CardRender = ({ content }) => {
  const CardContent = content.content;

  return(
    <Card> 
      {CardContent.map((items) => {
        if(items.codeId === "svg"){
          return <IconSelector key={items.contentful_id} content={items.content[0]}/>
        }
        else if(items.codeId === "text_container"){
         return <TextContainerRender key={items.contentful_id} content={items}/>
        }
        else if(items.codeId === "bg_image"){
          return <BgRender key={items.contentful_id} content={items}/>
        }
        else{
          return null;
        }
      })}
    </Card>
  )
}

export const query = graphql`
  fragment cardContent on ContentfulContentContainer{
    codeId
    contentful_id
    externalName
    content{
      ...on ContentfulMedia{
        ...iconSelector
        ...backgroundImageRender
      }
      ...on ContentfulText{
        ...textRender
      }
    }
  }
`

