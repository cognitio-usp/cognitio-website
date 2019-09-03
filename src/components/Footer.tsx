import React from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';
import { colorPrimary, colorSecondary } from '../style/theme';
import { centerContent } from '../style/modifiers';
import { rgba } from '@lucasols/utils';

const Container = styled.footer`
  position: absolute;
  bottom: 0;
  ${centerContent};
  width: 100%;
  font-size: 16px;
  height: 92px;
  background: ${colorPrimary};
`;

const ContentContainer = styled.div`
  ${centerContent};
  justify-content: space-between;
  width: 100%;
  max-width: 1120px;
  color: ${rgba('#ffffff', 0.64)};
  letter-spacing: 0.04em;
  font-weight: 300;

  a {
    color: #fff;
    transition: color 160ms;

    &:hover {
      color: ${colorSecondary};
    }
  }
`;

const Footer = () => (
  <Container>
    <ContentContainer>
      <div>
        <a href="/admin" title="Gerenciador de conteúdo">Cognitio</a> ·{' '}
        <a href="https://sites.usp.br/lsi/">
          Laboratório de Sistemas Integráveis (LSI)
        </a>{' '}
        · <a href="https://www.poli.usp.br/">Escola Politécnica da USP</a>
      </div>
      <div>
        Desenvolvido por <a href="https://lucassantos.net/">Lucas Santos</a>
      </div>
    </ContentContainer>
  </Container>
);

export default Footer;
