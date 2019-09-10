import css from '@emotion/css';
import styled from '@emotion/styled';
import Link from '../lib/gatsby-link';
import React from 'react';
import { letterSpacing } from '../style/helpers';
import { centerContent, fillContainer } from '../style/modifiers';
import { colorSecondary } from '../style/theme';
import { IndexPageTemplateQuery } from '../typings/graphql';
import Button from './Button';
import PlexusContainer, { Svg } from './PlexusContainer';
import PostTypeTag from './PostTypeTag';
import SectionHeader from './SectionHeader';
import PreviewCompatibleImage from './PreviewCompatibleImage';
import { oc } from 'ts-optchain.macro';
import { mqMobile, mqTabletDown } from '../style/mediaQueries';

type Props = {
  mainHighlight: IndexPageTemplateQuery['mainHighlight'];
  highlight2: IndexPageTemplateQuery['highlight2'];
  highlight3: IndexPageTemplateQuery['highlight3'];
};

const Container = styled.div`
  display: grid;
  gap: 10px;
  height: 512px;
  padding: 0 10px;
  max-width: 1920px;
  width: 100%;
  color: #fff;
`;

const Highlight = styled(Link)`
  ${centerContent};
  position: relative;
  overflow: hidden;

  p,
  h1 {
    text-shadow: 0 3px 5px rgba(0, 0, 0, 0.2);
  }

  .gatsby-image-wrapper,
  ${Svg} {
    transition: transform 800ms;
  }

  &:hover {
    .gatsby-image-wrapper,
    ${Svg} {
      transform: scale(1.08);
    }
  }
`;

const PostType = styled(PostTypeTag)`
  position: absolute;
  top: 16px;
  left: 16px;
`;

const ColorOverlay = styled.div<{}>`
  ${fillContainer};
  background-color: rgba(0, 0, 0, 0.6);
  transition: opacity 600ms;

  ${Highlight}:hover & {
    opacity: 0.8;
  }
`;

const InfoMainHighlight = css`
  position: absolute;
  bottom: 36px;
  right: 36px;
  left: 36px;

  h1 {
    font-size: 36px;
    font-weight: 500;
    ${letterSpacing(4)};
    /* color: ${colorSecondary}; */

    ${mqTabletDown} {
      font-size: 28px;
    }
  }

  p {
    margin-top: 16px;
    font-size: 16px;
    line-height: 1.4;

    ${mqTabletDown} {
      font-size: 14px;
    }
  }
`;

const InfoSecondaryHighlight = css`
  ${fillContainer};
  ${centerContent};
  padding: 20px;

  h1 {
    ${letterSpacing(4)};
    font-size: 28px;
    font-weight: 400;
    color: #fff;
    text-align: center;

    ${mqTabletDown} {
      font-size: 24px;
    }
  }

  p {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 16px;
    font-size: 12px;
    line-height: 1.4;
    background: rgba(0, 0, 0, 0.3);
    transition: 240ms ease-out;
    transform: translate3d(0, 100%, 0);

    ${Highlight}:hover & {
      transform: translate3d(0, 0, 0);
    }
  }
`;

export const postsType: { [k: string]: string } = {
  'blog-post': 'Notícia',
  'project-page': 'Projeto',
};

const gridTemplate = [
  '1fr / 1fr',
  '1fr / minmax(0, 1.5fr) minmax(0, 1fr)',
  '1fr 1fr / minmax(0, 1.5fr) minmax(0, 1fr)',
] as const;

const HomeHighlights = ({ mainHighlight, highlight2, highlight3 }: Props) => {
  const highlights = [
    ...mainHighlight.edges,
    ...highlight2.edges,
    ...highlight3.edges,
  ];

  return highlights.length !== 0 ? (
    <>
      <SectionHeader
        label="Destaques"
        noBottomBorder
        css={{ marginBottom: 0 }}
      />
      <Container
        css={css`
          grid-template: ${gridTemplate[highlights.length - 1]};

          ${highlights.length === 2 && `
            @media (max-width: 800px) {
              height: 600px;
              grid-template: minmax(0, 2fr) repeat(auto-fit, minmax(0, 1fr)) / 1fr;
            }
          `}

          ${highlights.length === 3 && `
            ${mqMobile} {
              height: 800px;
              grid-template: minmax(0, 1fr) repeat(auto-fit, minmax(0, 1fr)) / 1fr;
            }
          `}
        `}
      >
        {highlights.map(({ node: { excerpt, fields, frontmatter } }, i) => {
          if (!frontmatter || !fields) return undefined;

          const {
            blogTitle,
            projectName,
            activitieTitle,
            activitieType,
            templateKey,
            image,
          } = frontmatter;

          const postType =
            activitieType || (templateKey && postsType[templateKey]);
          const thumb = oc(image).childImageSharp.fluid();

          return (
            <Highlight
              key={i}
              to={fields.slug || 'ERRO!'}
              css={{
                gridRow:
                  i === 0
                    ? highlights.length === 3
                      ? '1 / span 2'
                      : '1 / span 1'
                    : undefined,
              }}
            >
              {thumb ? (
                <>
                  <PreviewCompatibleImage
                    imageInfo={thumb}
                    fillContainer
                    contain={templateKey === 'project-page'}
                  />
                  <ColorOverlay />
                </>
              ) : (
                <PlexusContainer css={fillContainer} opacity={1} />
              )}
              {postType && <PostType>{postType}</PostType>}

              <div css={i === 0 ? InfoMainHighlight : InfoSecondaryHighlight}>
                <h1>{blogTitle || projectName || activitieTitle}</h1>
                {excerpt && <p>{excerpt}</p>}
                {i === 0 && fields.slug && (
                  <Button label="Acessar" css={{ marginTop: 16 }} />
                )}
              </div>
            </Highlight>
          );
        })}
      </Container>
    </>
  ) : null;
};

export default HomeHighlights;
