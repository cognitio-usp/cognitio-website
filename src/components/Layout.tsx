import React, { FunctionComponent } from 'react';
import { Helmet } from 'react-helmet';
import Footer from './Footer';
import Navbar from './Navbar';
import useSiteMetadata from './SiteMetadata';
import { withPrefix } from 'gatsby';
import GlobalStyle from '../style/GlobalStyle';
import DebugLayout from '../style/DebugLayout';
import styled from '@emotion/styled';
import { __DEV__ } from '../utils/isDev';

const Content = styled.div`
  width: 100%;
  max-width: 2000px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  flex-wrap: nowrap;
`;

const TemplateWrapper: FunctionComponent = ({ children }) => {
  const { title, description } = useSiteMetadata();

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

        <link
          rel="mask-icon"
          href={`${withPrefix('/')}img/safari-pinned-tab.svg`}
          color="#ff4400"
        />
        <meta name="theme-color" content="#fff" />

        <meta property="og:type" content="business.business" />
        <meta property="og:title" content={title} />
        <meta property="og:url" content="/" />
        <meta
          property="og:image"
          content={`${withPrefix('/')}img/og-image.jpg`}
        />
      </Helmet>
      <Navbar />
      <Content>{children}</Content>
      <Footer />
    </>
  );
};

export default TemplateWrapper;
