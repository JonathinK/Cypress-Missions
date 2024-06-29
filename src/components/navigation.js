import React from 'react';
import { NavListItems, NavListItem, NavigationContainer, NavLink } from '../styles';

export const Navigation = ({ content, closeMenu, menuOpen }) => {
  return(
    <NavListItems
      className={menuOpen ? 'open' : ''}
    >
      {content.map(items => {
         if(items.codeId === "nav_item"){
          return(
            <NavListItem key={items.contentful_id}>
              <NavLink 
              to={`/${items.singleLink.ctaPageUrl.slug}`}
              onClick={closeMenu}
              >
                {items.singleLink.externalName}
              </NavLink>
            </NavListItem>
          )
         }
         else{
          return null;
         }
      })}
    </NavListItems>
  )
}