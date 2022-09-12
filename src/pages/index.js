import * as React from "react"

import HeroImage from "../components/Hero"
import HowCypressWorks from "../components/HowCypressWorks"
import ProjectsSpotlight from "../components/ProjectsSpotlight"


import Layout from "../components/layout"
import Seo from "../components/seo"

const Home = () => { 
 return(
   <Layout>
     <Seo title="Home"/>
      <HeroImage />
      <HowCypressWorks />
      <ProjectsSpotlight />
   </Layout>
 ) 
}

export default Home

