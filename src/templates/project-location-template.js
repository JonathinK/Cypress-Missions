import * as React from 'react';
import Layout from '../components/layout';
import { graphql, Link } from 'gatsby';
import { Flex, Headline, HeroContainer, PageContainer, ProjectCard, ProjectsContainer, Section, Text } from '../styles';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import Seo from '../components/seo';

const ProjectLocation = ({ data }) => {
  const Hero = getImage(data.contentfulProjectLocation.featureImg);
  const { title, locationDescription, project, seo } = data.contentfulProjectLocation;
  
  
  return(
    <Layout>
    <Seo
      title={seo.title}
      description={seo.description.description}
    />
      <PageContainer>
        <HeroContainer ProjectLocation>
          <GatsbyImage
            image={ Hero }
            className="heroImage"
            alt=""
          />
        </HeroContainer>
        <Section>
          <Flex row="1/2" col="1/4">
            <Headline>{title}</Headline>
            <Text>{locationDescription.locationDescription}</Text>
          </Flex>
          <ProjectsContainer>
          {project.map(project => (
              <ProjectCard key={project.id}>
                <Link to={`${project.slug}`}>
                  <GatsbyImage
                    image={project.featureImg.gatsbyImageData}
                    className='img_fit'
                    imgClassName='img'
                  />
                </Link>
                <Headline CardHeadline>{project.title}</Headline>
              </ProjectCard> 
          ))}
          </ProjectsContainer>
        </Section>
      </PageContainer>
    </Layout>
  )
}
export const query = graphql`
  query($slug: String!) {
    contentfulProjectLocation(slug: { eq: $slug }) {
      title
      seo {
        title
        description {
          description
        }
      }
      locationDescription {
        locationDescription
      }
      featureImg {
        gatsbyImageData(placeholder: BLURRED, layout: FULL_WIDTH, quality: 60)
      }
      project{
        title
        slug
        featureImg {
        gatsbyImageData(placeholder: BLURRED, layout: FULL_WIDTH, quality: 60)
        }
      }
    }
  }
`
export default ProjectLocation