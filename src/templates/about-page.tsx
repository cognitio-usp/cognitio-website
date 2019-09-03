import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Content, { HTMLContent } from '../components/Content';
import { centerContentCollum } from '../style/modifiers';
import styled from '@emotion/styled';
import PlexusContainer from '../components/PlexusContainer';
import { AboutPageTemplateQuery } from '../typings/graphql';
import SectionHeader from '../components/SectionHeader';
import TextSection from '../components/TextSection';
import Logotype from '../components/Logotype';
import ResearchAreas from '../components/ResearchAreas';
import css from '@emotion/css';
import Button from '../components/Button';
import { letterSpacing } from '../style/helpers';
import { fontSecondary } from '../style/theme';
import Helmet from 'react-helmet';

type Props = {
  description: string;
  history: string;
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
    font-family: ${fontSecondary};
    font-weight: 300;
    line-height: 1.5;
    color: #fff;
  }
`;

const MoreInfoButton = styled(Button)`
  margin: 8px;
`;

export const AboutPageTemplate = ({ description, history }: Props) => {
  return (
    <>
      <Description>
        <Logotype textColor="#fff" height={140} />
        <p>{description}</p>
      </Description>

      {history && (
        <>
          <SectionHeader label="Histórico do grupo" />
          <TextSection>{history}</TextSection>
        </>
      )}

      <SectionHeader label="Linhas de pesquisa" />
      <ResearchAreas />

      <SectionHeader label="Mais Informações" />
      <div
        css={css`
          max-width: 1000px;
        `}
      >
        <MoreInfoButton outline label="Projetos de pesquisa" to="/projetos" />
        <MoreInfoButton outline label="Contato" to="/contato" />
        <MoreInfoButton outline label="Produção científica" to="/pesquisa" />
      </div>
    </>
  );
};

const AboutPage = ({ data }: { data: AboutPageTemplateQuery }) => {
  const { frontmatter } = data.markdownRemark!;

  return (
    <Layout>
      <Helmet>
        <title>COGNITIO · Sobre</title>
      </Helmet>
      <AboutPageTemplate
        description={frontmatter!.description!}
        history={frontmatter!.history!}
      />
    </Layout>
  );
};

export default AboutPage;

export const aboutPageQuery = graphql`
  query AboutPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "about-page" } }) {
      frontmatter {
        description
        history
      }
    }
  }
`;
