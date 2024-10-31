import { graphql, useStaticQuery } from 'gatsby';
import React, {useState, useEffect} from 'react';
import { Hamburger, NavLink, NavListItem, NavigationContainer, PageHeader, ButtonLink, NavListItems, ContentContainer } from '../styles';
import { Logo } from './logo';
import { Navigation } from "./navigation";
import { disableScroll, enableScroll } from '../utils/noScroll';

export const Header = () => {
// Query for Navigation Data
  const data = useStaticQuery(graphql`
    query{
      contentfulHeader {
      codeId
      contentful_id
      content {
      codeId
      contentful_id
      externalName
      content {
        ... on ContentfulNavigationItem {
          id
          codeId
          contentful_id
          externalName
          singleLink {
            externalName
            contentful_id
            ctaPageUrl {
              ... on ContentfulPage {
                id
                codeId
                contentful_id
                externalName
                slug
              }
            }
          }
        }
        ... on ContentfulButton {
          codeId
          contentful_id
          externalName
          buttonInternals {
            ... on ContentfulLink {
              contentful_id
              externalName
              ctaExternalUrl
            }
          }
        }
      }
      }
    }
    }
  `)
//Variable For navigation data
const NavComponents = data.contentfulHeader.content[0].content;

// State for managing menu opening/closing
const [menuOpen, setMenuOpen] = useState(false);

//Toggle menu open/close
const toggleMenu = () => {
  setMenuOpen(!menuOpen);
}
//Close Menu
const closeMenu = () => {
  setMenuOpen(false);
}

useEffect(() => {
  if (menuOpen) {
    disableScroll();
  } else {
    enableScroll();
  }

  return () => {
    enableScroll();
  };
}, [menuOpen]);
//Mobile Hamburger Menu To Open & Close Mobile Menu
  const MobileMenuBurger = () => {
    return(
      <Hamburger onClick={toggleMenu} className={menuOpen ? 'open' : ''}>
        <div className="top_bar"/>
        <div className='middle_bar'/>
        <div className='bottom_bar'/>
      </Hamburger>
    )
  } 

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }

    // Clean up
    return () => {
      document.body.classList.remove('no-scroll');
    };
  }, [menuOpen]);
  
//Navigation Cta Buttons Render
  const NavigationButtons = ({ content }) => {
    return(
      <ContentContainer>
        {content.map(items => {
          if(items.codeId === "button_nav_item"){
            return(
              <ButtonLink
                href={items.buttonInternals[0].ctaExternalUrl}
                key={items.contentful_id}
              >
                {items.externalName}
              </ButtonLink>
            )
          } else{
            return null
          }
        })}
      </ContentContainer>
    )
  }

//Return for Header Content
  return(
    <PageHeader>
      <Logo/>
      <NavigationContainer>
        <MobileMenuBurger />
        <Navigation 
          content={NavComponents} 
          closeMenu={closeMenu}
          menuOpen={menuOpen}
        />
        <NavigationButtons content={NavComponents}/>
      </NavigationContainer>
    </PageHeader>
  )
}