import React, { FunctionComponent, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Footer, { mqFooterMobile, footerHeight, footerHeightMobile } from './Footer';
import Navbar, { navHeight, navHeightTablet, mqNavbarTwoRows } from './Navbar';
import useSiteMetadata from './SiteMetadata';
import { withPrefix } from 'gatsby';
import GlobalStyle from '../style/GlobalStyle';
import DebugLayout from '../style/DebugLayout';
import styled from '@emotion/styled';
import { __DEV__ } from '../utils/isDev';
import { mqTabletDown, mqMobile } from '../style/mediaQueries';
import Logotype from './Logotype';

type Props = {
  home?: boolean;
  pageTitle?: string;
}

const Content = styled.div`
  width: 100%;
  max-width: 2000px;
  margin: 0 auto;
  margin-top: ${navHeight - 32}px;
  margin-bottom: ${footerHeight + 72}px;
  display: flex;
  align-items: center;
  flex-direction: column;
  flex-wrap: nowrap;
  overflow-x: hidden;

  ${mqNavbarTwoRows} {
    margin-top: ${navHeightTablet - 32}px;
  }

  ${mqFooterMobile} {
    margin-bottom: ${footerHeightMobile + 72}px;
  }

  ${mqMobile} {
    margin-top: 0;
    margin-bottom: ${footerHeightMobile + 72 + 64}px;
  }
`;

const MobileTopLogotype = styled.div`
  margin: 12px 0;
  display: none;

  ${mqMobile} {
    display: block;
  }
`;

const TemplateWrapper: FunctionComponent<Props> = ({ children, home, pageTitle: currentPage }) => {
  const { title, description } = useSiteMetadata();

  useEffect(() => {
    if (window.top !== window) {
      window.top.postMessage([window.location.pathname, document.title], '*');
    }
  }, [children]);

  return (
    <>
      <GlobalStyle />
      {__DEV__ && <DebugLayout />}
      <Helmet>
        <html lang="pt" />
        <title>{title}</title>
        <meta name="description" content={description} />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={`${withPrefix('/')}img/apple-touch-icon.png`}
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix('/')}img/favicon-32x32.png`}
          sizes="32x32"
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix('/')}img/favicon-16x16.png`}
          sizes="16x16"
        />
        <meta name="theme-color" content="#fff" />

        <meta property="og:type" content="business.business" />
        <meta property="og:title" content={title} />
        <meta property="og:url" content="/" />
      </Helmet>
      <Navbar home={home} currentPage={currentPage} />
      <Content>
        {currentPage !== 'Sobre' && <MobileTopLogotype><Logotype /></MobileTopLogotype>}
        {children}
      </Content>
      <Footer />
    </>
  );
};

export default TemplateWrapper;
