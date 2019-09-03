import styled from '@emotion/styled';
import { graphql } from 'gatsby';
import { ellipsis } from 'polished';
import React, { ReactNode } from 'react';
import Layout from '../components/Layout';
import PlexusContainer from '../components/PlexusContainer';
import SectionHeader from '../components/SectionHeader';
import TextSection from '../components/TextSection';
import { circle, letterSpacing, joinWith } from '../style/helpers';
import { centerContent, centerContentCollum } from '../style/modifiers';
import {
  colorTertiary,
  colorSecondary,
  fontCondensed,
  colorPrimary,
} from '../style/theme';
import { ActivitiePostByIdQuery } from '../typings/graphql';
import urlPrettier from '../utils/urlPrettier';
import Helmet from 'react-helmet';
import SocialButtons from '../components/SocialButtons';
import Icon from '../components/Icon';
import Button from '../components/Button';
import { rgba } from '@lucasols/utils';
import Tags from '../components/Tags';
import { oc } from 'ts-optchain.macro';

type Props = {
  title?: string | null;
  contentHTML?: string | null;
  content?: ReactNode;
  type?: string | null;
  datetime?: string | null;
  location?: string | null;
  relatedProjects?: NonNullable<
    NonNullable<ActivitiePostByIdQuery['markdownRemark']>['frontmatter']
  >['relatedProjects'];
  link?: {
    label?: string | null;
    url?: string | null;
  } | null;
};

const Header = styled(PlexusContainer)`
  padding-top: 56px;
  padding-bottom: 36px;
  ${centerContentCollum};
`;

const Title = styled.h1`
  ${centerContent};
  color: #fff;
  font-weight: 300;
  font-size: 42px;
  text-align: center;
  padding-bottom: 16px;
  max-width: 1000px;
  width: 100%;

  &::after {
    content: '';
    position: absolute;
    height: 1px;
    bottom: 0;
    width: 232px;
    display: block;

    background: ${colorSecondary};
  }
`;

const DetailContainer = styled.div`
  max-width: 800px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 24px;
  font-weight: 300;
`;

const Detail = styled.div`
  ${centerContent};
  font-size: 18px;
  line-height: 26px;
  margin: 0 16px;
  margin-bottom: 12px;
  color: #fff;
`;

const DetailIcon = styled(Icon)`
  margin-right: 12px;
`;

const Link = styled(Button)`
  margin-top: 16px;
`;

export const ActivitiePostTemplate = ({
  title,
  datetime,
  content,
  type,
  relatedProjects,
  contentHTML,
  location,
  link,
}: Props) => (
  <>
    <Header>
      <Tags
        css={{ marginTop: -32, marginBottom: 24 }}
        projects={[
          ...(type ? [{ label: type, toLink: '/activities' }] : []),
          ...(relatedProjects
            ? relatedProjects.map(item => ({
                label: oc(item).frontmatter.projectName('ERRO!'),
                toLink: oc(item).fields.slug('ERRO!'),
              }))
            : []),
        ]}
      />
      <Title>{title}</Title>
      <DetailContainer>
        {datetime && (
          <Detail>
            <DetailIcon name="calendar" color={colorSecondary} />
            {datetime}
          </Detail>
        )}
        {location && (
          <Detail>
            <DetailIcon name="location" color={colorSecondary} />
            {location}
          </Detail>
        )}
      </DetailContainer>
      {link && (
        <Link
          label={link.label || 'ERRO: Rótulo não definido'}
          href={link.url || undefined}
          leadingIcon="link"
        />
      )}
    </Header>

    <TextSection
      css={{ marginTop: 46 }}
      contentHTML={contentHTML}
      content={content}
    />

    <SocialButtons
      pageUrl={window.location.href}
      pageTitle={`COGNITIO · ${title}`}
    />
    {/* TODO: fix pageUrl to parent page */}
  </>
);

const ActivitiePost = ({ data }: { data: ActivitiePostByIdQuery }) => {
  const { frontmatter, html, excerpt } = data.markdownRemark!;

  return (
    <Layout>
      <Helmet titleTemplate="COGNITIO · %s">
        <title>{`${frontmatter!.activitieTitle}`}</title>
        <meta name="description" content={`${excerpt}`} />
      </Helmet>
      <ActivitiePostTemplate
        title={frontmatter!.activitieTitle}
        type={frontmatter!.activitieType}
        datetime={frontmatter!.date}
        location={frontmatter!.activitieLocation}
        contentHTML={html}
        relatedProjects={frontmatter!.relatedProjects}
        link={frontmatter!.activitieLink}
      />
    </Layout>
  );
};

// TODO: add projects

export default ActivitiePost;

export const activitiePostQuery = graphql`
  query ActivitiePostById($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      excerpt(pruneLength: 200, truncate: true)
      frontmatter {
        activitieTitle
        activitieType
        relatedProjects {
          fields {
            slug
          }
          frontmatter {
            projectName
          }
        }
        date(formatString: "DD/MM/YYYY [às] HH:mm", locale: "pt-Br")
        activitieLocation
        activitieLink {
          label
          url
        }
      }
    }
  }
`;
