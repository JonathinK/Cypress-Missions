import React, { useEffect, useState } from 'react';
import { graphql } from 'gatsby';
import { Hero, FilterComponent, ProjectsRender, PaginationComponent } from '../components';
import { Section } from '../styles';
import Seo from '../components/seo';

const Projects = ({ data }) => {
  //Gets the heroData
  const pageHero = data.contentfulPage.pageHero;

  //Manages States
  const [selectedTags, setSelectedTags] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 9;

  useEffect(() => {
    setFilteredProjects(data.allContentfulProject.nodes);
  }, [data.allContentfulProject.nodes]);

  const handleTagChange = (tag) => {
    const newSelectedTags = selectedTags.includes(tag)
      ? selectedTags.filter(t => t !== tag)
      : [...selectedTags, tag];

    setSelectedTags(newSelectedTags);

    const filtered = data.allContentfulProject.nodes.filter(project =>
      newSelectedTags.length === 0 || newSelectedTags.every(tag => project.tags.some(t => t.value === tag))
    );
    setFilteredProjects(filtered);
    setCurrentPage(1);
  };

  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = filteredProjects.slice(indexOfFirstProject, indexOfLastProject);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

 
  return(
    <React.Fragment>
      <Hero content={pageHero}/>
      <Section className='projects_section'>
        <FilterComponent
          tags={data.allContentfulTag.nodes} 
          selectedTags={selectedTags} 
          onTagChange={handleTagChange}
          filteredItems={filteredProjects}
        />
        <ProjectsRender 
          projects={currentProjects}
        />
        {filteredProjects.length > 9 && (
          <PaginationComponent 
            itemsPerPage={projectsPerPage}
            totalItems={filteredProjects.length}
            paginate={paginate}
            currentPage={currentPage}
          />
        )}   
      </Section>
    </React.Fragment>
  )
}
export const query = graphql`
  query {
  contentfulPage(codeId: {eq: "projects"}) {
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
    pageHero {
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
  allContentfulProject {
      nodes {
        codeId
        contentful_id
        externalName
        slug
        updatedAt(formatString: "MMM Do, YYYY") 
        projectStartDate(formatString: "MMM Do, YYYY")
        projectTitle
        summary {
        id
        summary
        }
        featureImage {
          contentful_id
          externalName
          asset {
            contentful_id
            gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, quality: 60)
          }
        }
        tags {
          contentful_id
          codeId
          value
          tagFamilies
        }
      }
    }
  allContentfulTag(filter: {codeId: {eq: "project_tag"}}) {
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
export default Projects