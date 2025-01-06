import React from 'react';
import { Card, CardsContainer, Heading3, MediaContainer, NavLink, Overline, TextContainer } from '../styles';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

export const ArticleFeature = () => {
  const data = useStaticQuery(graphql`
    query{
      allContentfulBlogArticle(
        limit: 4,
        sort: {createdAt: ASC}
      ){
        nodes{
          codeId
          contentful_id
          externalName
          articleTitle
          slug
          featureImage {
            contentful_id
            gatsbyImageData(
              resizingBehavior: SCALE
              quality: 70
              placeholder: BLURRED
              layout: FULL_WIDTH
            )
          }
          tags{
            codeId
            tagFamilies
            value
          }
        }
      }
    }
  `)
  const articleContent = data.allContentfulBlogArticle.nodes || null;
  return(
    <CardsContainer className="feature_cards_container">
      {articleContent.map(article => {
        const articleType = article.tags ? article.tags.find(tag => tag.tagFamilies === "Article Type") : null;
        return(
          <Card key={article.contentful_id}>
            <NavLink to={`/news-and-stories/${article.slug}`} className="card_link" />
              <MediaContainer className="latest_feature_image article">
                <GatsbyImage
                  image={getImage(article.featureImage.gatsbyImageData)}
                  alt=''
                  loading="lazy"
                  className="full_image"
                />
              </MediaContainer> 
              <TextContainer>
                {articleType && <Overline key={articleType.codeId}>{articleType.value}</Overline>}
                <Heading3>
                  {article.articleTitle}
                </Heading3>
              </TextContainer>
          </Card>
        )
      })}
    </CardsContainer>
  )
}