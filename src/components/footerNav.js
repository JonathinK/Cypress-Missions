import React from 'react';
import { FooterNavigationContainer, NavLink } from '../styles';

export const FooterNav = ({ content }) => {
  
  return(
    <FooterNavigationContainer className={content.externalName}>
      {content.content.map((items) => {
        
        return(
          <NavLink to={`/${items.singleLink.ctaPageUrl.slug}`} key={items.contentful_id}>
            {items.singleLink.externalName}
          </NavLink>
        )
      })}
    </FooterNavigationContainer>
  )
}