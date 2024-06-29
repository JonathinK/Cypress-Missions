import React from 'react';
import { Social, SocialsContainer } from '../styles';
import { Icon } from '@iconify-icon/react/dist/iconify.mjs';

export const SocialMedia = ({ content }) => {
  const socialContent = content.content || null;
 

  return(
    <SocialsContainer className={content.externalName || ''}>
      {socialContent.map((items) => {
        if(items.codeId === "facebook"){
          return(
            <Social key={items.contentful_id}>
              <a
                href={items.content[0].ctaExternalUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={items.externalName || 'Social media link'}
              >
                <Icon icon="ant-design:facebook-outlined"/>
              </a>
            </Social>
          )
        }
        else if(items.codeId === "instagram"){
          return(
            <Social key={items.contentful_id}>
              <a
                href={items.content[0].ctaExternalUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={items.externalName || 'Social media link'}
              >
                <Icon icon="circum:instagram"/>
              </a>
            </Social>
          )
        }
        else if(items.codeId === "youtube"){
          return(
            <Social key={items.contentful_id}>
              <a
                href={items.content[0].ctaExternalUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={items.externalName || 'Social media link'}
              >
                <Icon icon="uit:youtube"/>
              </a>
            </Social>
          )
        }
        else{
          return null
        }
      })}
    </SocialsContainer>
  )
}