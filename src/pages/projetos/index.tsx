import styled from '@emotion/styled';
import { rgba } from '@lucasols/utils';
import { graphql, Link } from 'gatsby';
import React from 'react';
import Helmet from 'react-helmet';
import { oc } from 'ts-optchain.macro';
import Button from '../../components/Button';
import Layout from '../../components/Layout';
import PageTitle from '../../components/PageTitle';
import PreviewCompatibleImage from '../../components/PreviewCompatibleImage';
import { letterSpacing } from '../../style/helpers';
import { centerContent, centerContentCollum, fillContainer } from '../../style/modifiers';
import { colorSecondary, fontSecondary, colorPrimary, colorTertiary } from '../../style/theme';
import { ProjectsPageQuery } from '../../typings/graphql';
import Icon from '../../components/Icon';
import PlexusContainer from '../../components/PlexusContainer';

const ProjectsContainer = styled.div`
  max-width: 1200px;
  width: 100%;
  padding: 16px;
  margin-top: 42px;

  ${centerContent};
  align-items: stretch;
  flex-wrap: wrap;
`;

const ProjectCard = styled(Link)`
  ${centerContentCollum};
  border: 1.5px solid ${rgba(colorSecondary, 0.4)};
  border-radius: 8px;
  overflow: hidden;
  padding: 24px;
  margin: 8px;
  flex: 1 0 300px;
  max-width: 380px;
  transition: border-color 160ms;

  &:hover {
    border-color: ${colorSecondary};
  }

  h1 {
    font-weight: 400;
    margin-top: 16px;
    font-size: 26px;
    ${letterSpacing(4)};
    color: #000;
  }

  p {
    width: 100%;
    font-size: 14px;
    flex-grow: 1;
    line-height: 1.4;
    text-align: center;
    font-family: ${fontSecondary};
    margin-bottom: 20px;
  }
`;

const Divider = styled.div`
  height: 2px;
  width: 120px;
  background: ${colorSecondary};
  margin-top: 16px;
  margin-bottom: 20px;
`;

const ProjectLogo = styled.div`
  height: 180px;
  width: 100%;
`;

const ProjectsPage = ({ data }: { data: ProjectsPageQuery }) => {
  const projects = oc(data).allMarkdownRemark.edges() || [];

  return (
    <Layout>
      <Helmet>
        <title>COGNITIO · Projetos de pesquisa</title>
      </Helmet>

      <PageTitle title="Projetos de pesquisa" />

      <ProjectsContainer>
        {projects.map(({ node }, i) => {
          if (!node) return undefined;

          const projectLogo = oc(
            node,
          ).frontmatter.image.childImageSharp.fluid();

          return (
            <ProjectCard key={i} to={oc(node).fields.slug() || 'ERROR'}>
              <ProjectLogo>
                {projectLogo ? (
                  <PreviewCompatibleImage
                    imageInfo={projectLogo}
                    fillContainer
                    contain
                  />
                ) : (
                  <PlexusContainer
                    opacity={1}
                    edgesOpacity={0.9}
                    color={colorPrimary}
                    background="#f8f8f8"
                    css={[fillContainer, { borderRadius: 8 }]}
                  >
                    <Icon name="network" size={100} color={colorTertiary} />
                  </PlexusContainer>
                )}
              </ProjectLogo>
              <h1>{oc(node).frontmatter.projectName()}</h1>
              <Divider />
              <p>{oc(node).excerpt()}</p>
              <Button label="Ver página do projeto" small />
            </ProjectCard>
          );
        })}
      </ProjectsContainer>
    </Layout>
  );
};

export default ProjectsPage;

export const projectsPageQuery = graphql`
  query ProjectsPage {
    allMarkdownRemark(
      filter: { frontmatter: { templateKey: { eq: "project-page" } } }
      sort: { fields: [frontmatter___projectStart], order: ASC }
    ) {
      ...Projects
    }
  }
`;
