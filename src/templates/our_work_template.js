import React from 'react';
import { Hero, SectionRender } from "../components";
import { graphql } from 'gatsby';
import Seo from '../components/seo';


const OurWorkPage = ({ data }) => {
  const pageHero = data.contentfulPage.pageHero;
  const pageSections = data.contentfulPage.sections;
  
  return(
    <React.Fragment>
    <Hero content={pageHero}/>
    {pageSections.map((section) => {
      return <SectionRender 
            key={section.contentful_id}
            section={section}
          />
   })}
    </React.Fragment>
  )
}
export const query = graphql`
  query{
    contentfulPage(codeId: {eq: "our_work"}) {
      codeId
      contentful_id
      externalName
      metadata {
        contentful_id
        googleBots
        internalName
        keywords
        content {
          id
          content
        }
        name {
          contentful_id
          codeId
        }
      }
      pageHero{
        ...PageHero
      }
      sections {
        codeId
        contentful_id
        externalName
        content {
          ...SectionContentRender
        }
      }
    }
  }
`
export const Head = ({ data }) => {
  const metadata = data.contentfulPage.metadata;

  const seoData = metadata.reduce((acc,meta) => {
    if(meta.name.codeId === 'title'){
      acc.title = meta.content.content;
    } else if (meta.name.codeId === 'description'){
      acc.description = meta.content.content
    } else if (meta.name.codeId === 'canonical'){
      acc.canonical = meta.content.content
    } else if (meta.name.codeId === 'keywords'){
      acc.keywords = meta.keywords ? meta.keywords.join(', ') : '';
    }
    return acc;
  }, { title: 'Default Title', description: 'Default description', keywords: '' });

  return(
    <Seo
      title={seoData.title}
      description={seoData.description}
      meta={[
        {
          name: 'keywords',
          content: seoData.keywords,
        },
        {
          name: 'canonical',
          content: seoData.canonical,
        }
      ]}
      canonical={seoData.canonical}
    />
  );
};
export default OurWorkPage


