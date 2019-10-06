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
  <ActivitiesAndNewsPageTemplate data={data} title="Atividades e Notícias">
    <div css={{ marginTop: 16, marginBottom: -24 }}>
      <Button label="Atividades" to="atividades" small outline />
      <Button css={{ marginLeft: 12 }} label="Notícias" to="noticias" small outline />
    </div>
  </ActivitiesAndNewsPageTemplate>
);

export default ActivitiesAndNewsPage;

export const activitiesandnewsPageQuery = graphql`
  query ActivitiesAndNewsPage {
    allMarkdownRemark(
      filter: {
        frontmatter: { templateKey: { in: ["blog-post", "activitie-post"] }, notListed: { in: [false, null] } }
      }
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
            dateFormat

            yearOnly: date(formatString: "YYYY")
            monthAndYear: date(formatString: "MMM YYYY")
            dateTime: date(formatString: "DD/MM/YYYY, HH:mm")
            dateOnly: date(formatString: "DD/MM/YYYY")

            endYearOnly: dateEnd(formatString: "YYYY")
            endMonthAndYear: dateEnd(formatString: "MMM YYYY")
            endDateTime: dateEnd(formatString: "DD/MM/YYYY, HH:mm")
            endDateOnly: dateEnd(formatString: "DD/MM/YYYY")
            image {
              childImageSharp {
                fluid(maxWidth: 500, quality: 100) {
                  ...GatsbyImageSharpFluid_withWebp
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
