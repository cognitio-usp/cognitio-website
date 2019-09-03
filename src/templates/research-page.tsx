import css from '@emotion/css';
import styled from '@emotion/styled';
import { graphql } from 'gatsby';
import React from 'react';
import Button from '../components/Button';
import Layout from '../components/Layout';
import PageTitle from '../components/PageTitle';
import PlexusContainer from '../components/PlexusContainer';
import SectionHeader from '../components/SectionHeader';
import TextSection from '../components/TextSection';
import { letterSpacing } from '../style/helpers';
import { centerContentCollum, centerContent } from '../style/modifiers';
import { fontSecondary } from '../style/theme';
import { ResearchPageTemplateQuery } from '../typings/graphql';
import ResearchCards from '../components/ResearchCards';
import Helmet from 'react-helmet';

type Link = {
  name: string;
  url: string;
};

type ResearchCard = {
  description: string;
  links: Link[] | null;
};

type Props = {
  links: Link[];
  articles: ResearchCard[];
  thesis: ResearchCard[];
  books: ResearchCard[];
};

const Description = styled(PlexusContainer)`
  padding: 42px 0;
  ${centerContentCollum};

  p {
    margin-top: 28px;
    width: 100%;
    max-width: 840px;
    text-align: center;
    padding: 0 20px;
    font-size: 22px;
    ${letterSpacing(1)};
    font-weight: 300;
    line-height: 1.5;
    color: #fff;
    font-family: ${fontSecondary};
  }
`;

const Link = styled(Button)`
  margin: 8px;
  min-width: 400px;
  max-width: 100%;
`;

const LinksContainer = styled.div`
  ${centerContentCollum};
`;

export const ResearchPageTemplate = ({
  links,
  articles,
  thesis,
  books,
}: Props) => (
  <>
    <PageTitle title="Produção científica" />

    <SectionHeader label="Links" />
    <LinksContainer>
      {links.map((item, i) => (
        <Link key={i} outline label={item.name} href={item.url} />
      ))}
    </LinksContainer>

    {articles.length !== 0 && (
      <>
        <SectionHeader label="Artigos" />
        <ResearchCards cards={articles} />
      </>
    )}

    {thesis.length !== 0 && (
      <>
        <SectionHeader label="Teses" />
        <ResearchCards cards={thesis} />
      </>
    )}

    {books.length !== 0 && (
      <>
        <SectionHeader label="Livros" />
        <ResearchCards cards={books} />
      </>
    )}
  </>
);

const ResearchPage = ({ data }: { data: ResearchPageTemplateQuery }) => {
  const { frontmatter } = data.markdownRemark!;

  return (
    <Layout>
      <Helmet>
        <title>COGNITIO · Produção Científica</title>
      </Helmet>
      <ResearchPageTemplate
        links={frontmatter!.links!}
        articles={frontmatter!.articles!}
        thesis={frontmatter!.thesis!}
        books={frontmatter!.books!}
      />
    </Layout>
  );
};

export default ResearchPage;

export const researchPageQuery = graphql`
  query ResearchPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "research-page" } }) {
      frontmatter {
        links {
          name
          url
        }
        articles {
          description
          links {
            name
            url
          }
        }
        thesis {
          description
          links {
            name
            url
          }
        }
        books {
          description
          links {
            name
            url
          }
        }
      }
    }
  }
`;
