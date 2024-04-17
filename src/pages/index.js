import React from 'react';
import { graphql } from 'gatsby';

const Homepage = ({ data }) => {
  return(
    <React.Fragment>
      
    </React.Fragment>
  )
}
export const query = graphql`
  query {
    allContentfulPage(filter: {codeId: {eq: "home"}}) {
      nodes {
        codeId
        contentful_id
        externalName
        sections {
          codeId
          contentful_id
          externalName
          content {
            ... on ContentfulContentContainer {
              codeId
              contentful_id
              externalName
            }
          }
        }
      }
    }
  }
`
export default Homepage