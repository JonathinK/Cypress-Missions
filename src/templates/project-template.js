import * as React from 'react';
import { useState } from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import { Flex, Headline, HeroContainer, PageContainer, Section, Text, ImagesContainer } from '../styles';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import  Seo  from '../components/seo';
import Lightbox from './lightbox.js';
import { MARKS } from '@contentful/rich-text-types';
import { renderRichText } from "gatsby-source-contentful/rich-text";

const ProjectTemplate = ({ data }) => {
  const {title,images, seo} = data.contentfulProject;
  const Hero = getImage(data.contentfulProject.featureImg);
  const [selectedImage, setSelectedImage] = useState(null);
  const richText = data.contentfulProject.richText;

  
  const options = {
    renderMark: {
      [MARKS.BOLD]: text => <bold>{text}</bold>,
      [MARKS.ITALIC]: text => <em>{text}</em>,
    },
  }
  
  const handleImageClick = (image) => {
    setSelectedImage(image);
    document.body.style.overflow = 'hidden';
  }
  const handleCloseModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  }
  return(
    <Layout>
    <Seo 
      title={seo.title}
      description={seo.description.description}
    />
      <PageContainer>
      <HeroContainer ProjectLocation>
        <GatsbyImage
          image={Hero}
          className="heroImage"
        />
      </HeroContainer>
      <Section>
        <Flex row="1/2" col="1/4">
          <Headline>{title}</Headline>
          {richText && richText ? (
            <Text>{richText && renderRichText(richText, options)}</Text>
          ) : null}          
      </Flex>
        <ImagesContainer>
         {images
         .filter(image => image.title)
         .sort((a,b) => (a.title > b.title ? 1 : +1))
         .map(image => (
            <div key={image.title} onClick={() => handleImageClick(image)}>
              <GatsbyImage
                image={image.gatsbyImageData}
                className="img_fit"
                imgClassName='image'
              />
            </div>
         ))}
        </ImagesContainer>
        <Lightbox
          selectedImage={selectedImage}
          closeModal={handleCloseModal}
        />
      </Section>
      </PageContainer>
    </Layout>
  )
}
export const query = graphql`
  query($slug: String!) {
    contentfulProject(slug: { eq: $slug }) {
      title
      slug
      seo {
        title
        description {
          description
        }
      }
      featureImg {
        gatsbyImageData(placeholder: BLURRED, layout: FULL_WIDTH, quality: 60)
      }
      images {
        id
        title
        publicUrl
        gatsbyImageData(placeholder: BLURRED, quality: 60, layout: CONSTRAINED, width: 1000,  cropFocus: CENTER, resizingBehavior: SCALE, )
      }
      richText{
        raw
      }
    }
  }
`
export default ProjectTemplate