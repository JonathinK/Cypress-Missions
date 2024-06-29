import React from 'react';
import { ButtonLink, ContentContainer } from '../styles';
import { graphql } from 'gatsby';
import { TextContainerRender } from './textContainerRender';
import { IconSelector } from './iconSelector';



export const ContentBlock = ({ content }) => {
  const BlockContent = content.content;

  return(
    <ContentContainer 
      $ContentBlock
      className={BlockContent.externalName || ''}
    >
      {BlockContent.map((items) => {
        if(items.codeId === "svg"){
          return <IconSelector key={items.contentful_id} content={items.content[0]}/>
        }
        else if(items.codeId === "text_container"){
          return <TextContainerRender key={items.contentful_id} content={items}/>
        }
        else if(items.codeId === "link_container"){
          return(
            <ButtonLink href={items.content[0].ctaExternalUrl} target='_blank' rel='noreferrer nofollow' >
              {items.content[0].externalName}
            </ButtonLink>
          )
        }
        else{
          return null;
        }
      })}
    </ContentContainer>
  )
}

export const query = graphql`
  fragment blockContent on ContentfulContentContainer{
    codeId
    contentful_id
    externalName
    content{
      ...on ContentfulMedia{
        ...iconSelector
      }
      ...on ContentfulText{
        ...textRender
      }
    }
  }
`