import React from 'react';
import Layout from '../components/Layout';
import css from '@emotion/css';

const NotFoundPage = () => (
  <Layout>
    <div
      css={css`
        margin-top: 36px;
        text-align: center;

        p {
          margin-top: 16px;
        }
      `}
    >
      <h1>
        ERRO 404{' '}
        <span role="img" aria-label="emoji pensativo">
          🤔
        </span>
      </h1>
      <p>A página que você está tentando acessar não existe.</p>
    </div>
  </Layout>
);

export default NotFoundPage;
