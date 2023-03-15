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
        <Text>Our local efforts are community based. We collaborate with other Nonprofits and organizations. We support retired military vets, food banks, churches, preschools, and other community volunteers and residents.
        </Text>
    </Flex>
    <Local/>  
    </ProjectLocation>  
      <ProjectLocation>
      <Flex>
        <Headline>National</Headline>
        <Text>Natural disaster recovery, focusing on rebuilding and restoring homes and lives.</Text>
      </Flex>
      <National/>
      </ProjectLocation>  
      <ProjectLocation>
      <Flex>
        <Headline>Global</Headline>
        <Text>Tackling poverty, harsh conditions and inequality.</Text>
      </Flex>
      <International/>
      </ProjectLocation>
     </PageContainer>
    </Layout>
  )
}
export default Projects 