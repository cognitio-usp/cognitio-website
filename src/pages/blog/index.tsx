import { graphql } from 'gatsby';
import React from 'react';
import ActivitiesAndNewsPageTemplate from '../../components/ActivitiesAndNewsPageTemplate';
import { ActivitiesAndNewsPageQuery } from '../../typings/graphql';
import Button from '../../components/Button';

const ActivitiesAndNewsPage = ({
  data,
}: {
  data: ActivitiesAndNewsPageQuery;
}) => (
  <ActivitiesAndNewsPageTemplate data={data} title="Blog">
    <div css={{ marginTop: 16, marginBottom: -24 }}>
      <Button
        label="Atividades e Notícias"
        to="atividades-e-noticias"
        small
        outline
      />
      <Button
        css={{ marginLeft: 12 }}
        label="Atividades"
        to="atividades"
        small
        outline
      />
    </div>
  </ActivitiesAndNewsPageTemplate>
);

export default ActivitiesAndNewsPage;

export const activitiesandnewsPageQuery = graphql`
  query BlogPostsPage {
    allMarkdownRemark(
      filter: { frontmatter: { templateKey: { in: ["blog-post"] } } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          fields {
            slug
            readingTime {
              text
            }
          }
          excerpt(pruneLength: 150)
          frontmatter {
            templateKey
            blogTitle
            blogAuthor
            activitieTitle
            activitieType
            image {
              childImageSharp {
                fluid(maxWidth: 500, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            activitieLocation
            date(formatString: "DD/MM/YYYY", locale: "pt-Br")
          }
        }
      }
    }
  }
`;
