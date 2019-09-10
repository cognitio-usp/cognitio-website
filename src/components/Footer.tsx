import React from 'react';
import Link from '../lib/gatsby-link';
import styled from '@emotion/styled';
import { colorPrimary, colorSecondary } from '../style/theme';
import { centerContent } from '../style/modifiers';
import { rgba } from '@lucasols/utils';
import { mqTabletDown, mqMobile } from '../style/mediaQueries';
import { OutboundLink } from 'gatsby-plugin-google-analytics';

export const mqFooterMobile = '@media (max-width: 936px)';
export const footerHeight = 92;
export const footerHeightMobile = 120;

const Container = styled.footer`
  position: absolute;
  bottom: 0;
  ${centerContent};
  width: 100%;
  font-size: 16px;
  height: ${footerHeight}px;
  background: ${colorPrimary};

  ${mqTabletDown} {
    font-size: 15px;
  }

  ${mqMobile} {
    font-size: 12px;
    bottom: 64px;
  }

  ${mqFooterMobile} {
    height: ${footerHeightMobile}px;
  }
`;

const ContentContainer = styled.div`
  ${centerContent};
  text-align: center;
  /* justify-content: space-between; */
  width: 100%;
  max-width: 1120px;
  color: ${rgba('#ffffff', 0.64)};
  letter-spacing: 0.04em;
  font-weight: 300;
  line-height: 1.6;
  flex-wrap: wrap;

  ${mqFooterMobile} {
    justify-content: center;
  }

  a {
    color: #fff;
    transition: color 160ms;
    white-space: nowrap;

    &:hover {
      color: ${colorSecondary};
    }
  }

  > div {
    margin: 6px 32px;
  }
`;

const Footer = () => (
  <Container>
    <ContentContainer>
      <div css={{ marginRight: 16 }}>
        <OutboundLink href="/admin" target="_blank" title="Gerenciador de conteúdo">Cognitio</OutboundLink> ·{' '}
        <OutboundLink href="https://sites.usp.br/lsi/">
          Laboratório de Sistemas Integráveis (LSI)
        </OutboundLink>{' '}
        · <OutboundLink href="https://www.poli.usp.br/">Escola Politécnica da USP</OutboundLink>
      </div>
      <div>
        Desenvolvido por <OutboundLink href="https://lucassantos.net/">Lucas Santos</OutboundLink>
      </div>
    </ContentContainer>
  </Container>
);

export default Footer;
