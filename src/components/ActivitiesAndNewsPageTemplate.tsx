import css from '@emotion/css';
import styled from '@emotion/styled';
import { rgba } from '@lucasols/utils';
import { graphql, Link } from 'gatsby';
import { ellipsis } from 'polished';
import React, { FunctionComponent } from 'react';
import Helmet from 'react-helmet';
import { oc } from 'ts-optchain.macro';
import Button from './Button';
import { postsType } from './HomeHighlights';
import Icon from './Icon';
import Layout from './Layout';
import PageTitle from './PageTitle';
import PlexusContainer from './PlexusContainer';
import PostTypeTag from './PostTypeTag';
import PreviewCompatibleImage from './PreviewCompatibleImage';
import { joinWith, letterSpacing } from '../style/helpers';
import { centerContent, centerContentCollum } from '../style/modifiers';
import { colorSecondary, colorTertiary, fontSecondary } from '../style/theme';
import { ActivitiesAndNewsPageQuery } from '../typings/graphql';
import { pickRandomColor } from '../utils/pickRandomColor';
import { mqMobile } from '../style/mediaQueries';
import { formatActivitieDate } from '../utils/formatActivitieDate';

type Props = {
  data: ActivitiesAndNewsPageQuery;
  title: string;
};

const ActivitiesAndNewsContainer = styled.div`
  max-width: 1200px;
  width: 100%;
  padding: 16px;
  margin-top: 42px;

  ${centerContent};
  align-items: stretch;
  flex-wrap: wrap;
`;

const imageWrapperStyle = css`
  position: absolute !important;
  top: 0;
  left: 0;
  height: 200px;
  width: 100%;

  ${mqMobile} {
    height: 180px;
  }
`;

const ProjectCard = styled(Link)`
  ${centerContentCollum};
  position: relative;
  border: 1.5px solid ${rgba(colorSecondary, 0.4)};
  border-radius: 8px;
  overflow: hidden;
  padding: 24px;
  margin: 8px;
  padding-top: 200px;
  flex: 1 0 280px;
  max-width: 340px;
  transition: border-color 160ms;

  ${mqMobile} {
    padding-top: 180px;
  }

  &:hover {
    border-color: ${colorSecondary};
  }

  h1 {
    width: 100%;
    font-weight: 400;
    font-size: 26px;
    ${letterSpacing(4)};
    color: #000;
    margin-top: 18px;
    -webkit-line-clamp: 3;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  h2 {
    ${ellipsis()};
    ${joinWith('|', { opacity: 0.5, margin: '0 4px' })}
    margin-top: 10px;
    width: 100%;
    font-weight: 400;
    line-height: 1.4;
    font-size: 12.5px;
    color: ${colorTertiary};
    letter-spacing: 0.04em;
  }

  p {
    margin-top: 12px;
    width: 100%;
    font-size: 14px;
    line-height: 1.4;
    font-family: ${fontSecondary};
    margin-bottom: 20px;
    flex-grow: 1;

    ${mqMobile} {
      font-size: 12.99px;
    }
  }
`;

const ActivitiesAndNewsPageTemplate: FunctionComponent<Props> = ({
  data,
  title,
  children,
}) => {
  const posts = oc(data).allMarkdownRemark.edges() || [];

  return (
    <Layout pageTitle={title}>
      <Helmet>
        <title>COGNITIO · {title}</title>
      </Helmet>

      <PageTitle title={title} />

      {children}

      <ActivitiesAndNewsContainer>
        {posts.map(({ node }, i) => {
          if (!node) return undefined;

          const featuredImg = oc(
            node,
          ).frontmatter.image.childImageSharp.fluid();
          const readingTime = oc(node).fields.readingTime.text();
          const {
            activitieTitle,
            blogTitle,
            templateKey,
            blogAuthor,
            date,
            yearOnly,
            monthAndYear,
            dateTime,
            dateOnly,
            endYearOnly,
            endMonthAndYear,
            endDateTime,
            endDateOnly,
            dateFormat,
            activitieLocation,
            activitieType,
          } = oc(node).frontmatter() || {};

          const postType =
            activitieType || (templateKey && postsType[templateKey]);

          const activitieDate = formatActivitieDate({
            yearOnly,
            monthAndYear,
            dateTime,
            dateFormat,
            dateOnly,
            endDateTime,
            endDateOnly,
            endMonthAndYear,
            endYearOnly,
          });

          return (
            <ProjectCard key={i} to={oc(node).fields.slug() || 'ERROR'}>
              {featuredImg ? (
                <PreviewCompatibleImage imageInfo={featuredImg} css={imageWrapperStyle} />
              ) : (
                <PlexusContainer
                  opacity={1}
                  edgesOpacity={0.9}
                  color="#fff"
                  background={pickRandomColor()}
                  css={imageWrapperStyle}
                >
                  <Icon
                    name={templateKey === 'blog-post' ? 'blog' : 'calendar'}
                    size={80}
                    color="#fff"
                  />
                </PlexusContainer>
              )}
              {postType && (
                <PostTypeTag
                  css={css`
                    position: absolute;
                    top: 16px;
                    left: 16px;
                  `}
                >
                  {postType}
                </PostTypeTag>
              )}
              <h1 title={(activitieTitle || blogTitle) ?? ''}>{activitieTitle || blogTitle}</h1>
              <h2>
                {templateKey === 'blog-post' ? (
                  <>
                    {blogAuthor && <span>{blogAuthor}</span>}
                    {<time>{date}</time>}
                    {readingTime && (
                      <span>{`${readingTime.replace(' read', '')}`}</span>
                    )}
                  </>
                ) : (
                  <>
                    {activitieDate && <time>
                      {activitieDate}
                    </time>}
                    {activitieLocation && (
                      <span>Local: {activitieLocation}</span>
                    )}
                  </>
                )}
              </h2>
              <p>{oc(node).excerpt()}</p>
              <Button
                label={
                  templateKey === 'blog-post' ? 'Ler mais' : 'Mais detalhes'
                }
                small
              />
            </ProjectCard>
          );
        })}
      </ActivitiesAndNewsContainer>
    </Layout>
  );
};

export default ActivitiesAndNewsPageTemplate;
