import React from 'react';
import { BlogCard } from './blog';
import { ContentContainer } from '../styles';

export const BlogRender = ({blogs}) => {
  return(
    <ContentContainer
    className="blogs_container"
    >
    {blogs.map(blog => {
      return <BlogCard blog={blog} key={blog.contentful_id}/>
    })}
  </ContentContainer>
  ) 
}