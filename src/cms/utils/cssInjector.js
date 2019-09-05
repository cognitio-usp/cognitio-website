import React from 'react';
import createCache from '@emotion/cache';
import { CacheProvider, Global, css } from '@emotion/core';
import GlobalStyle from '../../style/GlobalStyle';

export class CSSInjector extends React.Component {
  constructor() {
    super();
    const iframe = document.getElementsByTagName('iframe')[1];
    const iframeHead = iframe.contentDocument.head;
    this.cache = createCache({ container: iframeHead });

    const link = document.createElement('link');
    link.href =
      'https://fonts.googleapis.com/css?family=Nunito+Sans:300,400,400i,500|Roboto:300,400i,400,500|Roboto+Condensed:300,400i,400,500&display=swap';
    link.rel = 'stylesheet';

    iframeHead.append(link);
  }

  render() {
    return (
      <CacheProvider value={this.cache}>
        <GlobalStyle />
        <Global
          styles={css`
            .frame-content {
              margin: 0 auto;
              display: flex;
              align-items: center;
              flex-direction: column;
              flex-wrap: nowrap;
            }
          `}
        />
        {this.props.children}
      </CacheProvider>
    );
  }
}
