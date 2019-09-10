import { css, Global } from '@emotion/core';
import React from 'react';
import normalize from './normalize';
// import scrollBar from './scrollBar';
import { fontPrimary, colorSecondary } from './theme';
import { fillContainer } from './modifiers';
import { rgba } from '@lucasols/utils';

const reset = css`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    -webkit-tap-highlight-color: ${rgba(colorSecondary, 0.3)};

    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  html {
    overflow-y: scroll;
  }

  #___gatsby > div {
    position: absolute;
    min-height: 100%;
    width: 100%;
  }

  body > div {
    font-family: ${fontPrimary};

    > div * {
      transform: translate3d(0, 0, 0);
    }
  }

  a {
    color: inherit;
    text-decoration: inherit;
    cursor: pointer;

    &:visited {
      color: inherit;
    }
  }

  button {
    background: transparent;
    border: 0;
    outline: none;
    cursor: pointer;
  }
`;

const GlobalStyle = () => <Global styles={[normalize, reset]} />;

export default GlobalStyle;
