import { StaticImage } from 'gatsby-plugin-image';
import * as React from 'react';
import Layout from "../components/layout";
import { PageContainer, ProjectLocation, Headline, Text, HeroContainer, Flex } from '../styles';
import  Local  from '../components/Local';
import National from '../components/National';
import International from '../components/International';
import Seo from '../components/seo';

const Projects = () => {
  return(
    <Layout>
    <Seo
      title='Project Areas'
      description={'Cypress is involved all over the world. We share with you our on going projects in the local community of New Jersey and our expanded levels of work at the National & International levels. Cypress is changing lives one relationship at a time. Become a part of something greater than yourself.'}
    />
     <PageContainer>
     <HeroContainer>
      <StaticImage
        src="../images/projects.jpg"
        layout='fullWidth'
        placeholder='blurred'
        quality={51}
        className='heroImage'
        loading={'eager'}
      />
     </HeroContainer>
    <ProjectLocation>
    <Flex row="1/2" col="1/2">
        <Headline>Local</Headline>
        <Text>Our local efforts support retired military vets, other non-profit orgs such as churches & food banks, preschools, and other community volunteers or those who need help.
        </Text>
    </Flex>
    <Local/>  
    </ProjectLocation>  
      <ProjectLocation>
      <Flex>
        <Headline>National</Headline>
        <Text>Our work at a national level is based around natural disasters and building communities back stronger than ever. </Text>
      </Flex>
      <National/>
      </ProjectLocation>  
      <ProjectLocation>
      <Flex>
        <Headline>International</Headline>
        <Text>Natural disasters, systemic poverty, poor living conditions, bad water systems and child education are just a sample size of the tasks faced.</Text>
      </Flex>
      <International/>
      </ProjectLocation>
     </PageContainer>
    </Layout>
  )
}
export default Projects 