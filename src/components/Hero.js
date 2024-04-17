import { graphql } from 'gatsby';
import React from 'react';
import { HeroContainer } from '../styles';
import { TextRender } from './textRender';
import { MediaRenderer } from './mediaRender';
import { VideoRender } from './videoRender';

export const Hero = ({ content }) => {
  const HeroRender = content;

  return(
    <HeroContainer className={HeroRender.heroType}>
    {HeroRender.content.map((items) => {
      const className = items.externalName || '';
      if(items.codeId === "hero_text_container"){
        return <TextRender key={items.contentful_id} content={items} classContent={className}/>
      }
      else if(items.codeId === "hero_media_container"){
        return <MediaRenderer key={items.contentful_id} content={items} classContent={className}/>
      }
      else if(items.codeId === "hero_video"){
        return <VideoRender key={items.contentful_id} content={items} classContent={className}/>
      }
      else{
        return null;
      }
    })}
    </HeroContainer>
  )
}

export const query = graphql`
  fragment PageHero on ContentfulHero{
  codeId
  contentful_id
  heroType
  content {
    codeId
    contentful_id
    externalName
    content{
      ...TextRender
      ...MediaRender
    }
  }
  }
`