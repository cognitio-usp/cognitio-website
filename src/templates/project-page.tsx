import styled from '@emotion/styled';
import { graphql } from 'gatsby';
import React, { ReactNode } from 'react';
import Helmet from 'react-helmet';
import { oc } from 'ts-optchain.macro';
import ActivitiesAndNews from '../components/ActivitiesAndNews';
import Layout from '../components/Layout';
import PlexusContainer from '../components/PlexusContainer';
import TextSection from '../components/TextSection';
import { circle, letterSpacing } from '../style/helpers';
import { centerContent } from '../style/modifiers';
import {
  Frontmatter,
  ImageSharpFluid,
  ProjectPageByIdQuery,
  MemberCardFragment,
} from '../typings/graphql';
import Members from '../components/Members';
import PreviewCompatibleImage from '../components/PreviewCompatibleImage';

type Props = {
  name: Frontmatter['projectName'];
  thumb?: ImageSharpFluid | null;
  start: Frontmatter['projectStart'];
  end: Frontmatter['projectEnd'];
  members?: (MemberCardFragment | null)[] | null;
  formerMembers?: (MemberCardFragment | null)[] | null;
  posts: ProjectPageByIdQuery['posts'];
  contentHTML?: string | null;
  content?: ReactNode;
};

const Header = styled(PlexusContainer)`
  padding-top: 36px;
  padding-bottom: 36px;
  margin-bottom: 54px;
`;

const ProjectLogo = styled.div`
  ${circle(210)};
  margin-right: 40px;
  background: #fff;
  overflow: hidden;
`;

const HeaderLeftContent = styled.div`
  text-shadow: 0px 3px 5px rgba(0, 0, 0, 0.3);
  max-width: 700px;

  h1 {
    margin-top: 54px;
    ${letterSpacing(6)};
    color: #fff;
    font-weight: 300;
    line-height: 1.1;
    font-size: 54px;
  }

  h2 {
    ${letterSpacing(4)};
    color: #fff;
    font-weight: 300;
    font-size: 18px;
    margin-bottom: 16px;
    margin-top: 12px;
  }
`;

const HeaderContentContainer = styled.div`
  ${centerContent};
  max-width: 900px;
  width: 100%;
`;

export const ProjectPageTemplate = ({
  name,
  thumb,
  start,
  end,
  posts,
  members,
  formerMembers,
  contentHTML,
  content,
}: Props) => {
  const startIsValid = start && start !== 'Invalid date';
  const endDateIsValid = end && end !== 'Invalid date';

  const formerMembersIds = formerMembers
    ? formerMembers.map(item => oc(item).id())
    : [];
  const filteredMembers =
    members &&
    members.filter(item => !formerMembersIds.includes(oc(item).id()));

  return (
    <>
      <Header orangeBackground>
        <HeaderContentContainer>
          {thumb && (
            <ProjectLogo>
              <PreviewCompatibleImage
                padding="0 12px"
                imageInfo={thumb}
                contain
                fillContainer
              />
            </ProjectLogo>
          )}
          <HeaderLeftContent css={{ textAlign: !thumb ? 'center' : undefined }}>
            <h1>{name}</h1>
            {startIsValid && (
              <h2
                title={
                  endDateIsValid ? 'Duração do projeto' : 'Início do projeto'
                }
              >
                {start}
                {endDateIsValid ? ` – ${end}` : ''}
              </h2>
            )}
          </HeaderLeftContent>
        </HeaderContentContainer>
      </Header>

      <TextSection contentHTML={contentHTML} content={content} />

      <Members sort members={filteredMembers} />

      <Members sort sectionLabel="Ex-membros" members={formerMembers} />

      <ActivitiesAndNews
        sectionTitle="Atividades e Notícias do Projeto"
        posts={posts}
      />
    </>
  );
};

const ProjectPage = ({ data }: { data: ProjectPageByIdQuery }) => {
  const { posts } = data;

  return (
    <Layout>
      <Helmet titleTemplate="COGNITIO · %s">
        <title>{`${oc(data).markdownRemark.frontmatter.projectName()}`}</title>
        <meta
          name="description"
          content={`${oc(data).markdownRemark.excerpt()}`}
        />
      </Helmet>
      <ProjectPageTemplate
        name={oc(data).markdownRemark.frontmatter.projectName()}
        thumb={oc(
          data,
        ).markdownRemark.frontmatter.projectThumb.childImageSharp.fluid()}
        start={oc(data).markdownRemark.frontmatter.projectStart()}
        end={oc(data).markdownRemark.frontmatter.projectEnd()}
        members={oc(data).markdownRemark.frontmatter.projectMembers()}
        formerMembers={oc(
          data,
        ).markdownRemark.frontmatter.projectFormerMembers()}
        contentHTML={oc(data).markdownRemark.html()}
        posts={posts}
      />
    </Layout>
  );
};

export default ProjectPage;

export const ProjectPageQuery = graphql`
  query ProjectPageById($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      excerpt(pruneLength: 200, truncate: true)
      frontmatter {
        projectName
        projectThumb {
          childImageSharp {
            fluid(maxWidth: 500, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        projectStart(formatString: "MMM [de] YYYY", locale: "pt-br")
        projectEnd(formatString: "MMM [de] YYYY", locale: "pt-br")
        projectMembers {
          ...MemberCard
        }
        projectFormerMembers {
          ...MemberCard
        }
      }
    }

    posts: allMarkdownRemark(
      filter: {
        frontmatter: { relatedProjects: { elemMatch: { id: { eq: $id } } } }
      }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      ...Posts
    }
  }
`;
