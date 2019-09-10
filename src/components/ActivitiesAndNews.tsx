import css from '@emotion/css';
import styled from '@emotion/styled';
import { rgba } from '@lucasols/utils';
import Link from '../lib/gatsby-link';
import React from 'react';
import { oc } from 'ts-optchain.macro';
import { joinWith, letterSpacing } from '../style/helpers';
import { colorSecondary, colorTertiary } from '../style/theme';
import { PostsFragment } from '../typings/graphql';
import { postsType } from './HomeHighlights';
import PostTypeTag from './PostTypeTag';
import SectionHeader from './SectionHeader';
import { mqMobile } from '../style/mediaQueries';

type Props = {
  posts?: PostsFragment;
  moreButton?: boolean;
  sectionTitle: string;
};

const Container = styled.div`
  padding: 0 24px;
  width: 100%;
  max-width: 1000px;

  display: grid;
  gap: 16px;
  align-items: stretch;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));

  ${mqMobile} {
    grid-template-columns: 1fr;
  }
`;

const Card = styled(Link)`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  border: 1.5px solid ${rgba(colorSecondary, 0.4)};
  border-radius: 8px;
  transition: 160ms;
  flex-grow: 1;
  overflow: hidden;
  padding: 24px 28px;
  transition: border-color 160ms;

  &:hover {
    border-color: ${colorSecondary};
  }

  h1 {
    font-size: 32px;
    margin-bottom: 6px;
    font-weight: 400;
    ${letterSpacing(4)};

    ${mqMobile} {
      font-size: 26px;
    }
  }

  h2 {
    ${joinWith('|', { opacity: 0.5, margin: '0 8px' })}
    font-weight: 300;
    font-size: 12.5px;
    color: ${colorTertiary};
    letter-spacing: 0.04em;
    margin-bottom: 10px;
  }

  p {
    font-size: 12.99px;
    line-height: 1.5;

    &::after {
      color: ${colorTertiary};
      text-decoration: underline;
      margin-left: 4px;
      white-space: nowrap;
    }
  }
`;

const ActivitiesAndNews = ({ posts, moreButton, sectionTitle }: Props) =>
  (posts && posts.edges.length > 0 ? (
    <>
      <SectionHeader
        label={sectionTitle}
        moreButton={moreButton && { label: 'Ver todas', to: '/atividades-e-noticias' }}
      />
      <Container>
        {posts.edges.map(({ node: { excerpt, fields, frontmatter } }, i) => {
          if (!frontmatter || !fields) return undefined;

          const {
            blogTitle,
            blogAuthor,
            date,
            activitieTitle,
            activitieLocation,
            activitieType,
            templateKey,
          } = frontmatter;

          const postType =
            activitieType || (templateKey && postsType[templateKey]);

          return (
            <Card key={i} to={oc(fields).slug('error')}>
              {postType && (
                <PostTypeTag css={{ marginBottom: 8 }}>{postType}</PostTypeTag>
              )}
              <h1>{blogTitle || activitieTitle}</h1>
              <h2>
                {templateKey === 'blog-post' ? (
                  <>
                    {blogAuthor && <span>{blogAuthor}</span>}
                    {<time>{date.replace(/,.+/, '')}</time>}
                    {oc(fields).readingTime.text() && (
                      <span>{`Leitura de ${oc(fields).readingTime.text('').replace(
                        ' read',
                        '',
                      )}`}</span>
                    )}
                  </>
                ) : (
                  <>
                    {<time>Data: {date}</time>}
                    {activitieLocation && <span>Local: {activitieLocation}</span>}
                  </>
                )}
              </h2>
              {excerpt && (
                <p
                  css={css`
                    &::after {
                      content: '${templateKey === 'blog-post'
                        ? 'Continuar lendo'
                        : 'Ver mais detalhes'}';
                    }
                  `}
                >
                  {excerpt}
                </p>
              )}
            </Card>
          );
        })}
      </Container>
    </>
  ) : null);

export default ActivitiesAndNews;
