import React from 'react';
import { Link } from 'gatsby';
import Logotype from './Logotype';
import styled from '@emotion/styled';
import { centerContent } from '../style/modifiers';
import { letterSpacing } from '../style/helpers';
import { colorPrimary, colorGradient } from '../style/theme';

const Nav = styled.nav`
  ${centerContent};
  width: 100%;
  height: 72px;
`;

const ContentContainer = styled.div`
  width: 100%;
  max-width: 1120px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NavMenu = styled.div`
  font-size: 16.99px;

  a {
    position: relative;
    ${letterSpacing(4)}
    color: ${colorPrimary};
    text-transform: uppercase;
    padding: 12px 18px;
    opacity: 0.72;
    transition: opacity 160ms;

    &:hover {
      opacity: 1;
    }

    &.active {
      opacity: 1;

      &::after {
        content: '';
        position: absolute;
        bottom: 0;
        height: 3px;
        border-radius: 5px;
        left: 12px;
        right: calc(12px - -0.08em);
        background: ${colorGradient()};
      }
    }
  }
`;

// TODO: variable height on homepage
// TODO: fixed nav
const Navbar = () => (
  <Nav role="navigation" aria-label="main-navigation">
    <ContentContainer>
      <Link css={{ height: 48 }} to="/" title="Logo">
        <Logotype />
      </Link>
      <NavMenu>
        <Link to="/sobre" activeClassName="active">
          Sobre
        </Link>
        <Link to="/projetos" activeClassName="active">
          Projetos
        </Link>
        <Link to="/atividades-e-notícias" activeClassName="active">
          Atividades
        </Link>
        <Link to="/membros" activeClassName="active">
          Membros
        </Link>
        <Link to="/pesquisa" activeClassName="active">
          Pesquisa
        </Link>
        <Link to="/contato" activeClassName="active">
          Contato
        </Link>
      </NavMenu>
    </ContentContainer>
  </Nav>
);

export default Navbar;
