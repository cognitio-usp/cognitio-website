/* eslint-disable react/no-danger */
import React, { FunctionComponent, ReactNode } from 'react';
import styled from '@emotion/styled';
import {
  fontSecondary,
  colorTextBody,
  colorTertiary,
  colorSecondary,
  fontCondensed,
  fontPrimary,
} from '../style/theme';
import { rgba } from '@lucasols/utils';
import { mqMobile } from '../style/mediaQueries';

type Props = {
  className?: string;
  content?: ReactNode;
  contentHTML?: string | null;
};

const Container = styled.div`
  max-width: calc(778px + 20px);
  padding: 0 24px;
  width: 100%;
  font-size: 18px;
  line-height: 1.6;
  font-family: ${fontSecondary};
  color: ${colorTextBody};
`;

const Content = styled.div`
  p {
    margin-bottom: 26px;
  }

  code {
    background: #eee;
    padding: 0 6px;
    border-radius: 4px;
  }

  blockquote {
    border-left: 2px solid ${colorSecondary};
    padding-left: 14px;
    margin-left: -16px;
    font-size: 18px;
    letter-spacing: 0.01em;
    background: ${rgba(colorSecondary, 0.08)};
    border-radius: 4px;
    margin-top: 32px;
    margin-bottom: 32px;
    padding: 18px 28px 2px;

    font-style: italic;

    p {
      margin-bottom: 16px;
    }
  }

  a {
    text-decoration: underline;
    color: ${colorTertiary};
  }

  h1,
  h2 {
    font-family: ${fontPrimary};
    font-weight: 500;
    margin-top: 32px;
    margin-bottom: 12px;
    color: #000;
    line-height: 1.3;

    ${mqMobile} {
      font-size: 28px;
    }
  }

  h2 {
    font-weight: 400;
  }

  pre {
    display: inline-block;
    width: 100%;

    code {
      margin: 16px 0;
      font-size: 16px;
      padding: 16px 24px;
      display: block;
      overflow-x: auto;
    }
  }

  ul,
  ol {
    padding-left: 24px;
    list-style: none;
    margin-top: -6px;
    margin-bottom: 26px;
  }

  li {
    margin-bottom: 4px;

    &::before {
      display: inline-block;
      color: #777;
      width: 24px;
      margin-left: -24px;
    }
  }

  ul li::before {
    content: '•';
  }

  ol li {
    counter-increment: li;

    &::before {
      content: counter(li) '.';
    }
  }

  hr {
    display: inline-block;
    width: 100%;
    margin: 24px 0;
    border: 0;
    height: 1.5px;
    background: ${rgba(colorSecondary, 0.5)};
  }

  .gatsby-resp-image-figure,
  .youtube,
  div > img {
    margin: 36px 0;
  }

  .youtube {
    position: relative;
    padding-bottom: 56.25%;
    height: 0;
    overflow: hidden;
    max-width: 100%;

    iframe {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  }

  figcaption {
    text-align: center;
    font-size: 16px;
    font-style: italic;
    margin-top: 8px;
  }

  div > img {
    width: 100%;
  }
`;

const TextSection: FunctionComponent<Props> = ({
  className,
  content,
  contentHTML,
  children,
}) => (
  <Container className={className}>
    {children}
    <Content
      dangerouslySetInnerHTML={
        contentHTML ? { __html: contentHTML } : undefined
      }
    >
      {content}
    </Content>
  </Container>
);

export default TextSection;
