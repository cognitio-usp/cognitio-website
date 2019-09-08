import styled from '@emotion/styled';
import { graphql } from 'gatsby';
import React from 'react';
import Helmet from 'react-helmet';
import { oc } from 'ts-optchain.macro';
import ActivitiesAndNews from '../components/ActivitiesAndNews';
import Button from '../components/Button';
import HomeHighlights from '../components/HomeHighlights';
import Layout from '../components/Layout';
import PlexusContainer from '../components/PlexusContainer';
import Projects from '../components/Projects';
import { centerContentCollum } from '../style/modifiers';
import { fontSecondary } from '../style/theme';
import { IndexPageTemplateQuery } from '../typings/graphql';

type Props = {
  description?: string | null;
  mainHighlight?: IndexPageTemplateQuery['mainHighlight'];
  highlight2?: IndexPageTemplateQuery['highlight2'];
  highlight3?: IndexPageTemplateQuery['highlight3'];
  projects?: IndexPageTemplateQuery['projects'];
  posts?: IndexPageTemplateQuery['posts'];
};

const Description = styled(PlexusContainer)`
  ${centerContentCollum};
  margin-top: 80px;
  padding-top: 46px;
  padding-bottom: 36px;

  p {
    margin-bottom: 24px;
    width: 100%;
    max-width: 800px;
    text-align: center;
    padding: 0 20px;
    font-size: 22px;
    font-weight: 300;
    line-height: 1.5;
    color: #fff;
    font-family: ${fontSecondary};
  }
`;

export const IndexPageTemplate = ({
  description,
  mainHighlight,
  highlight2,
  highlight3,
  projects,
  posts,
}: Props) => (
  <>
    <Description>
      <p>{description}</p>
      <Button label="Mais sobre o grupo" to="/sobre" />
    </Description>

    {mainHighlight && highlight2 && highlight3 && (
      <HomeHighlights
        mainHighlight={mainHighlight}
        highlight2={highlight2}
        highlight3={highlight3}
      />
    )}

    <Projects moreButton projects={projects} />

    <ActivitiesAndNews
      moreButton
      posts={posts}
      sectionTitle="Atividades e Notícias Recentes"
    />
  </>
);

const IndexPage = ({ data }: { data: IndexPageTemplateQuery }) => {
  const description = oc(data).markdownRemark.frontmatter.description();
  const { mainHighlight, highlight2, highlight3, projects, posts } = data;

  return (
    <Layout home>
      <Helmet>
        <title>COGNITIO · USP</title>
        <meta name="description" content={`${description}`} />
      </Helmet>
      <IndexPageTemplate
        description={description}
        mainHighlight={mainHighlight}
        highlight2={highlight2}
        highlight3={highlight3}
        projects={projects}
        posts={posts}
      />
    </Layout>
  );
};

export default IndexPage;

export const pageQuery = graphql`
  fragment Highlight on MarkdownRemark {
    fields {
      slug
    }
    frontmatter {
      templateKey
      blogTitle
      projectName
      activitieTitle
      activitieType
      activitieLocation
      date(formatString: "DD/MM/YYYY [às] HH:mm", locale: "pt-Br")
      image {
        childImageSharp {
          fluid(maxWidth: 1920, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }

  fragment Projects on MarkdownRemarkConnection {
    edges {
      node {
        fields {
          slug
        }
        excerpt(pruneLength: 200)
        frontmatter {
          projectName
          image {
            childImageSharp {
              fluid(maxWidth: 1000, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }

  fragment Posts on MarkdownRemarkConnection {
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
          activitieLocation
          date(formatString: "DD/MM/YYYY, HH:mm", locale: "pt-Br")
        }
      }
    }
  }

  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        description
      }
    }

    mainHighlight: allMarkdownRemark(
      limit: 1
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { featured: { eq: "1" } } }
    ) {
      edges {
        node {
          excerpt(pruneLength: 200)
          ...Highlight
        }
      }
    }
    highlight2: allMarkdownRemark(
      limit: 1
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { featured: { eq: "2" } } }
    ) {
      edges {
        node {
          ...Highlight
          excerpt(pruneLength: 100)
        }
      }
    }
    highlight3: allMarkdownRemark(
      limit: 1
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { featured: { eq: "3" } } }
    ) {
      edges {
        node {
          ...Highlight
          excerpt(pruneLength: 100)
        }
      }
    }

    projects: allMarkdownRemark(
      limit: 4
      filter: { frontmatter: { templateKey: { eq: "project-page" } } }
      sort: { fields: [frontmatter___projectStart], order: DESC }
    ) {
      ...Projects
    }

    posts: allMarkdownRemark(
      limit: 4
      filter: {
        frontmatter: { templateKey: { in: ["blog-post", "activitie-post"] } }
      }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      ...Posts
    }
  }
`;
