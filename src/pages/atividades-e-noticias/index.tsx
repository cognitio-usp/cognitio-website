import css from '@emotion/css';
import styled from '@emotion/styled';
import { rgba } from '@lucasols/utils';
import { graphql, Link } from 'gatsby';
import { ellipsis } from 'polished';
import React from 'react';
import Helmet from 'react-helmet';
import { oc } from 'ts-optchain.macro';
import Button from '../../components/Button';
import { postsType } from '../../components/HomeHighlights';
import Icon from '../../components/Icon';
import Layout from '../../components/Layout';
import PageTitle from '../../components/PageTitle';
import PlexusContainer from '../../components/PlexusContainer';
import PostTypeTag from '../../components/PostTypeTag';
import PreviewCompatibleImage from '../../components/PreviewCompatibleImage';
import { joinWith, letterSpacing } from '../../style/helpers';
import { centerContent, centerContentCollum } from '../../style/modifiers';
import { colorSecondary, colorTertiary, fontSecondary } from '../../style/theme';
import { ActivitiesAndNewsPageQuery } from '../../typings/graphql';
import { pickRandomColor } from '../../utils/pickRandomColor';
import { mqMobile } from '../../style/mediaQueries';

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
    font-size: 28px;
    ${letterSpacing(4)};
    color: #000;
    margin-top: 18px;
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

const ActivitiesAndNewsPage = ({
  data,
}: {
  data: ActivitiesAndNewsPageQuery;
}) => {
  const posts = oc(data).allMarkdownRemark.edges() || [];

  return (
    <Layout pageTitle="Atividades e Notícias">
      <Helmet>
        <title>COGNITIO · Atividades e Notícias</title>
      </Helmet>

      <PageTitle title="Atividades e Notícias" />

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
            activitieLocation,
            activitieType,
          } = oc(node).frontmatter() || {};

          const postType =
            activitieType || (templateKey && postsType[templateKey]);

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
              <h1>{activitieTitle || blogTitle}</h1>
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
                    {<time>{date}</time>}
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

export default ActivitiesAndNewsPage;

export const activitiesandnewsPageQuery = graphql`
  query ActivitiesAndNewsPage {
    allMarkdownRemark(
      filter: {
        frontmatter: { templateKey: { in: ["blog-post", "activitie-post"] } }
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
