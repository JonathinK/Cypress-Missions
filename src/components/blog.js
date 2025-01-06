import React from 'react';
import { Blog, Overline } from '../styles';
import { ButtonPageLink, ContentContainer, Heading2, LabelChip, MediaContainer, Paragraph, TextContainer } from '../styles';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { Icon } from '@iconify-icon/react/dist/iconify.mjs';

export const BlogCard = ({ blog }) => {
  const featureImage = getImage(blog.featureImage);
  return(
    <Blog>
    <ButtonPageLink 
        className="blog_page_link"
        to={`/news-and-stories/${blog.slug}`}
      >
      <MediaContainer className='project_image no_radius' >
        <GatsbyImage 
          image={featureImage}  
          alt=''
          loading='eager'
          className="full_image"
        />
      </MediaContainer>
      <TextContainer className='project_text_container'>
      {blog.tags[0].tagFamilies === "Article Type" && (
        <Overline className="blog_card_overline_tag">
          {blog.tags[0].value}
        </Overline>
      )}
        <Heading2 className="project_headline">
          {blog.articleTitle}
        </Heading2>
      <ContentContainer className="date_container">
        <Paragraph className="date_posted">{blog.datePosted}</Paragraph>
          {blog.updatedAt && blog.updatedAt !== blog.datePosted && (
            <React.Fragment>
              <LabelChip className='project_updated_at'>
                ( Updated On: {blog.updatedAt} )
              </LabelChip> 
            </React.Fragment>
          )}
      </ContentContainer>
      <Paragraph 
        className="blog_card_summary"
        dangerouslySetInnerHTML={{
            __html: blog.summary.summary,
          }}
      />
      </TextContainer>
      </ButtonPageLink>
    </Blog>
  )
}