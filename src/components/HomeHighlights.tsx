import React from 'react';
import styled from '@emotion/styled';
import SectionHeader from './SectionHeader';
import Button from './Button';
import {
  IndexPageTemplateQuery,
} from '../typings/graphql';
import { Link } from 'gatsby';
import PlexusContainer, { Svg } from './PlexusContainer';
import css from '@emotion/css';
import { centerContent, fillContainer } from '../style/modifiers';
import { colorTertiary, colorSecondary, colorPrimary, colorGradient, postTypeTag } from '../style/theme';
import { rgba } from '@lucasols/utils';
import { letterSpacing } from '../style/helpers';
import { getImage } from '../utils/getImage';
import GatsbyImage from 'gatsby-image';
import PostTypeTag from './PostTypeTag';

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

  p, h1 {
    text-shadow: 0 3px 5px rgba(0, 0, 0, 0.2);
  }

  .gatsby-image-wrapper, ${Svg} {
    transition: transform 800ms;
  }

  &:hover {
    .gatsby-image-wrapper, ${Svg} {
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
    opacity: 0.9;
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
  }

  p {
    margin-top: 16px;
    font-size: 16px;
    line-height: 1.4;
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
  '1fr / minmax(0, 2fr) minmax(0, 1fr)',
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
      <SectionHeader label="Destaques" noBottomBorder css={{ marginBottom: 0 }} />
      <Container css={{ gridTemplate: gridTemplate[highlights.length - 1] }}>
        {highlights.map(({ node: { excerpt, fields, frontmatter } }, i) => {
          if (!frontmatter || !fields) return undefined;

          const {
            blogTitle,
            projectName,
            activitieTitle,
            activitieType,
            templateKey,
            blogFeaturedImage,
            projectThumb,
          } = frontmatter;

          const postType =
            activitieType || (templateKey && postsType[templateKey]);
          const thumb = getImage(blogFeaturedImage) || getImage(projectThumb);

          return (
            <Highlight
              key={i}
              to={fields.slug!}
              css={{ gridRow: i === 0 ? '1 / span 2' : undefined }}
            >
              {thumb && thumb.src ? (
                <>
                  <GatsbyImage fluid={thumb} alt="" css={fillContainer} style={{ position: 'absolute' }} />
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
