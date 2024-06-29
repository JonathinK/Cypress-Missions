import React from 'react';
import { ContentContainer } from '../styles';
import { RichTextRender } from '../components';
import { graphql } from 'gatsby';

const PolicyDoc = ({ data }) => {
  const PolicyContent = data.contentfulPolicyDocuments.documentContent;
  return(
    <ContentContainer $PolicyDoc>
      <RichTextRender content={PolicyContent}/>
    </ContentContainer>
  )
}
export default PolicyDoc;

export const query = graphql`
  query($slug: String!) {
    contentfulPolicyDocuments(slug: {eq:$slug}) {
      contentful_id
      codeId
      slug
      documentContent {
        raw
      }
    }
  }
`