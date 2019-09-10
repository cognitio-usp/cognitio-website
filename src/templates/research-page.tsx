import styled from '@emotion/styled';
import { graphql } from 'gatsby';
import React from 'react';
import Helmet from 'react-helmet';
import { oc } from 'ts-optchain.macro';
import Button from '../components/Button';
import Layout from '../components/Layout';
import PageTitle from '../components/PageTitle';
import ResearchCards from '../components/ResearchCards';
import SectionHeader from '../components/SectionHeader';
import { centerContentCollum } from '../style/modifiers';
import { ResearchPageTemplateQuery } from '../typings/graphql';

type Link = {
  name: string;
  url: string;
};

type ResearchCard = {
  description: string;
  links: Link[] | null;
};

type Props = {
  links?: Link[] | null;
  articles?: ResearchCard[] | null;
  thesis?: ResearchCard[] | null;
  books?: ResearchCard[] | null;
};

const Link = styled(Button)`
  margin: 8px;
  min-width: 300px;
  max-width: calc(100% - 32px);
`;

const LinksContainer = styled.div`
  ${centerContentCollum};
  width: 100%;
`;

export const ResearchPageTemplate = ({
  links,
  articles,
  thesis,
  books,
}: Props) => (
  <>
    <PageTitle title="Produção científica" />
    {links && (
      <>
        <SectionHeader label="Links" />
        {links.map((item, i) => (
          <LinksContainer key={i}>
            <Link outline label={item.name} href={item.url} />
          </LinksContainer>
        ))}
      </>
    )}

    {articles && articles.length !== 0 && (
      <>
        <SectionHeader label="Artigos" />
        <ResearchCards cards={articles} />
      </>
    )}

    {thesis && thesis.length !== 0 && (
      <>
        <SectionHeader label="Teses" />
        <ResearchCards cards={thesis} />
      </>
    )}

    {books && books.length !== 0 && (
      <>
        <SectionHeader label="Livros" />
        <ResearchCards cards={books} />
      </>
    )}
  </>
);

const ResearchPage = ({ data }: { data: ResearchPageTemplateQuery }) => {
  const { frontmatter } = oc(data).markdownRemark() || {};

  return (
    <Layout pageTitle="Produção científica">
      <Helmet>
        <title>COGNITIO · Produção Científica</title>
      </Helmet>
      <ResearchPageTemplate
        links={oc(frontmatter).links()}
        articles={oc(frontmatter).articles()}
        thesis={oc(frontmatter).thesis()}
        books={oc(frontmatter).books()}
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
