import { graphql } from 'gatsby';
import React, {useState,useEffect} from 'react';
import { BlogRender, FilterComponent, Hero, PaginationComponent } from '../components';
import { Section } from '../styles';
import Seo from '../components/seo';

const BlogPage = ({ data }) => {
  console.log(data);
  //Gets the heroData
  const pageHero = data.contentfulPage.pageHero;

  //Manages States
  const [selectedTags, setSelectedTags] = useState([]);
  const [filteredBlogs, setFilteredBlogs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 6;

  useEffect(() => {
    setFilteredBlogs(data.allContentfulBlogArticle.nodes);
  }, [data.allContentfulBlogArticle.nodes]);

  const handleTagChange = (tag) => {
    const newSelectedTags = selectedTags.includes(tag)
      ? selectedTags.filter(t => t !== tag)
      : [...selectedTags, tag];

    setSelectedTags(newSelectedTags);

    const filtered = data.allContentfulBlogArticle.nodes.filter(project =>
      newSelectedTags.length === 0 || newSelectedTags.every(tag => project.tags.some(t => t.value === tag))
    );
    setFilteredBlogs(filtered);
    setCurrentPage(1);
  };

  const indexOfLastProject = currentPage * blogsPerPage;
  const indexOfFirstProject = indexOfLastProject - blogsPerPage;
  const currentBlogs = filteredBlogs.slice(indexOfFirstProject, indexOfLastProject);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  return(
    <React.Fragment>
      <Hero content={pageHero}/>
      <Section className='blogs_section'>
        <FilterComponent
          tags={data.allContentfulTag.nodes} 
          selectedTags={selectedTags} 
          onTagChange={handleTagChange}
          filteredItems={filteredBlogs}
        />
        <BlogRender
          blogs={currentBlogs}
        />
        {filteredBlogs.length > 9 && (
          <PaginationComponent 
          itemsPerPage={blogsPerPage}
          totalItems={filteredBlogs.length}
          paginate={paginate}
          currentPage={currentPage}
        />
        )}
      </Section>
    </React.Fragment>
  )
}
export const query = graphql`
  query{
    contentfulPage(codeId: {eq: "news_and_stories"}){
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
        codeId
        contentful_id
        externalName
        heroType
        content {
          codeId
          contentful_id
          externalName
          content {
            ... on ContentfulText {
              id
              codeId
              shortSimpleText
              richText {
                raw
              }
            }
          }
        }
      }
    }
    allContentfulBlogArticle(
      sort:{datePosted: ASC}
    ) {
      nodes {
        codeId
        contentful_id
        externalName
        slug
        updatedAt(formatString: "MMM Do, YYYY") 
        datePosted(formatString: "MMM Do, YYYY")
        articleTitle
        summary {
          id
          summary
        }
        featureImage {
          contentful_id
          description
          gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, quality: 60)
   
        }
        tags {
          contentful_id
          codeId
          value
          tagFamilies
        }
      }
    } 
    allContentfulTag(
      filter: {codeId: {eq: "article_tag"}}
      sort: {tagFamilies: ASC}
    ) {
      nodes {
        codeId
        value
        tagFamilies
      }
    }
  }
`
export const Head = ({ data }) => {
  const metadata = data.contentfulPage.metadata;
  console.log(metadata);

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
export default BlogPage

