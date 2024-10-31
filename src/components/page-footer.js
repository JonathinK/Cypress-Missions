import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import { Footer, FooterInfoContainer,  Paragraph } from '../styles';
import { FooterNav } from './footerNav';
import { Logo } from './logo';
import { SocialMedia } from './socialMedia';
import MailChimpForm from './mailChimp';



export const PageFooter = () => {
  const data = useStaticQuery(graphql`
    query{
      contentfulFooter{
        codeId
        contentful_id
        content{
          codeId
          contentful_id
          externalName
          content{
            ... on ContentfulText{
              ...taxInfo
              ...copyright
            }
            ... on ContentfulNavigationItem{
              ...footerNavItems
            }
            ... on ContentfulContentContainer{
              ...socialMediaItems
            }
          }
        }
      }
    }
    fragment taxInfo on ContentfulText{
      codeId
      contentful_id
      shortSimpleText
    }
    fragment copyright on ContentfulText{
      codeId
      contentful_id
      shortSimpleText
    }
    fragment footerNavItems on ContentfulNavigationItem{
        id
        codeId
        contentful_id
        externalName
        singleLink {
          contentful_id
          externalName
          ctaPageUrl {
            ... on ContentfulPage {
              codeId
              contentful_id
              externalName
              slug
            }
            ... on ContentfulPolicyDocuments{
              codeId
              contentful_id
              externalName
              slug
            }
          }
        }
    }
    fragment socialMediaItems on ContentfulContentContainer{
      codeId
      contentful_id
      externalName
      content {
        ... on ContentfulMedia {
          id
          codeId
          contentful_id
          externalName
        }
        ... on ContentfulLink {
          contentful_id
          externalName
          ctaExternalUrl
        }
      }
    }
  `)
  const footerComponents = data.contentfulFooter.content;
  
  return(
   <Footer>
    {footerComponents.map((component) => {
      if(component.codeId === "brand_logo_container"){
        return <Logo key={component.contentful_id}/>
      }
      else if(component.codeId === "tax_info"){
        const ein = component.content[1].shortSimpleText;
        const nonProfit = component.content[0].shortSimpleText;
        const classN = component.externalName;
        return(
          <FooterInfoContainer key={component.contentful_id} className={classN}>
            <Paragraph>{nonProfit}</Paragraph>
            <hr/>
            <Paragraph>{ein}</Paragraph>
          </FooterInfoContainer>
        )
      }
      else if(component.codeId === "footer_nav_items"){
        return <FooterNav key={component.contentful_id} content={component}/>
      }
      else if(component.codeId === "social_media_container"){
        return <SocialMedia key={component.contentful_id} content={component}/>
      }
      else if(component.codeId === "footer_mailchimp"){
        return <MailChimpForm key={component.contentful_id} content={component}/>
      }
      else if(component.codeId === "copyright_container"){
        return(
          <FooterInfoContainer key={component.contentful_id} className={component.externalName || "copyright"}>
            <Paragraph>
              ©{new Date().getFullYear()} {component.content[0].shortSimpleText}
            </Paragraph>
          </FooterInfoContainer>
        )
      }
      else{
        return null
      }
    })}
   </Footer>
  )
}
