import React from 'react';
import { Hero, SectionRender } from "../components";

const AboutPage = ({ data }) => {
  const pageHero = data.pageHero;
  const pageSections = data.sections;
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
export default AboutPage

