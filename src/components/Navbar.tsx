import styled from '@emotion/styled';
import React, { useState } from 'react';
import Link from '../lib/gatsby-link/GatsbyLink';
import { letterSpacing } from '../style/helpers';
import { centerContent } from '../style/modifiers';
import { colorGradient, colorPrimary } from '../style/theme';
import { isBrowser } from '../utils/isBrowser';
import { useOnWindowScroll } from '../utils/useOnWindowScroll';
import Logotype from './Logotype';

type Props = {
  home?: boolean;
};

const Nav = styled.nav`
  position: fixed;
  z-index: 1;
  ${centerContent};
  top: 0;
  width: 100%;
  height: calc(72px + 32px);
  padding-top: 32px;
  margin-top: -32px;
  overflow: hidden;
  transform: none;
  background: #fff;
  transition: 240ms;
`;

const ContentContainer = styled.div`
  width: calc(100% - 24px);
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


const Navbar = ({ home }: Props) => {
  const [isExpanded, setIsExpanded] = useState(
    home
      ? (isBrowser ? window.scrollY < 28 : true)
      : false,
  );

  useOnWindowScroll(
    scrollPos => {
      if (home) {
        if (scrollPos.y > 28) {
          if (isExpanded) setIsExpanded(false);
        } else if (!isExpanded) {
          setIsExpanded(true);
        }
      }
    },
    [isExpanded, home],
    100,
  );

  return (
    <Nav
      style={{
        transform: isExpanded ? 'translate3d(0, 32px, 0)' : undefined,
        boxShadow: !isExpanded ? '0px 3px 4px rgba(0, 0, 0, 0.05)' : undefined,
      }}
      role="navigation"
      aria-label="main-navigation"
    >
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
          <Link to="/atividades-e-noticias" activeClassName="active">
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
};

export default Navbar;
