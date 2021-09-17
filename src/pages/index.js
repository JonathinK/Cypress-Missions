import * as React from "react"

import HeroSection from "../components/Hero"
import HowCypressWorks from "../components/HowCypressWorks"
import ProjectsSpotlight from "../components/ProjectsSpotlight"


import Layout from "../components/layout"
import Seo from "../components/seo"

const Home = () => { 
 return(
   <Layout>
     <Seo title="Home"/>
      <HeroSection />
      <HowCypressWorks />
      <ProjectsSpotlight />
   </Layout>
 ) 
}

export default Home

