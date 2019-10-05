import styled from '@emotion/styled';
import React, { useState } from 'react';
import Link from '../lib/gatsby-link';
import { letterSpacing } from '../style/helpers';
import {
  centerContent,
  centerContentCollum,
  fillContainer,
  mobileOnly,
} from '../style/modifiers';
import {
  colorGradient,
  colorPrimary,
  fontCondensed,
  colorTertiary,
  colorSecondary,
} from '../style/theme';
import { isBrowser } from '../utils/isBrowser';
import { useOnWindowScroll } from '../utils/useOnWindowScroll';
import Logotype from './Logotype';
import { mqTabletDown, mqMobile, mqMobileUp } from '../style/mediaQueries';
import { useOnWindowResize } from '../utils/useOnWindowResize';
import HamburguerMenu from './HamburguerMenu';
import { ellipsis } from 'polished';
import { rgba } from '@lucasols/utils';

type Props = {
  home?: boolean;
  currentPage?: string;
};

export const navHeight = 72 + 32;
export const navHeightTablet = 120 + 32;
export const mqNavbarTwoRows = '@media (max-width: 772px)';

const Nav = styled.nav`
  position: fixed;
  z-index: 1000;
  ${centerContent};
  top: 0;
  left: 0;
  width: 100%;
  height: ${navHeight}px;
  padding-top: 32px;
  margin-top: -32px;
  overflow: hidden;
  transform: none;
  background: #fff;
  transition: 240ms;
  will-change: transform;

  ${mqNavbarTwoRows} {
    height: ${navHeightTablet}px;
  }

  ${mqMobile} {
    padding-bottom: 64px;
    padding-top: 16px;
    margin: 0;
    bottom: -500px;
    top: auto;
    max-height: 100%;
    height: 500px;
    overflow-y: auto;
    transform: translate3d(0, -62px, 0) translateZ(0);
    box-shadow: 0px -3px 12px rgba(0, 0, 0, 0.08);
  }
`;

const ContentContainer = styled.div`
  width: calc(100% - 24px);
  max-width: 1120px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${mqNavbarTwoRows} {
    ${centerContentCollum};
  }
`;

const NavMenu = styled.div`
  font-size: 16.99px;

  ${mqTabletDown} {
    font-family: ${fontCondensed};
    font-size: 16px;
    ${centerContent};
  }

  ${mqMobile} {
    font-family: inherit;
    font-size: 21px;
    ${centerContentCollum};
  }

  a {
    position: relative;
    ${letterSpacing(4)};
    color: ${colorPrimary};
    text-transform: uppercase;
    padding: 12px 14px;
    opacity: 0.72;
    transition: opacity 160ms;

    ${mqTabletDown} {
      padding: 12px 14px;
    }

    ${mqMobile} {
      padding: 16px 12px;
      margin: 2px 0;
    }

    &:hover {
      opacity: 1;
    }

    &.active {
      opacity: 1;

      ${mqMobile} {
        color: ${colorTertiary};
      }

      &::after {
        content: '';
        position: absolute;
        bottom: 0;
        height: 3px;
        border-radius: 5px;
        left: 12px;
        right: calc(12px - -0.08em);
        background: ${colorGradient()};

        ${mqMobile} {
          content: none;
        }
      }
    }
  }
`;

const NavBrand = styled(Link)`
  svg {
    height: 100%;
  }

  height: 48px;

  ${mqTabletDown} {
    height: 42px;
    margin-top: 8px;
    margin-bottom: 12px;
  }

  ${mqMobile} {
    display: none;
  }
`;

const MobileHeader = styled.div`
  position: fixed;
  z-index: 1000;
  width: 100%;
  height: 62px;
  bottom: 0;
  padding: 0 16px;
  left: 0;
  ${centerContent};
  background: #fff;

  ${mqMobileUp} {
    display: none;
  }

  a {
    position: absolute;
    left: 12px;

    .type {
      opacity: 0;
      transition: 240ms ease-out;
      transform: translate3d(-30px, 0, 0);
    }
  }

  &.is-expanded {
    svg {
      .type {
        opacity: 1;
        transform: translate3d(0, 0, 0);
      }
    }
  }
`;

const MenuButton = styled(HamburguerMenu)`
  position: absolute;
  right: 12px;
`;

const CurrentPage = styled.div`
  font-size: 16px;
  font-weight: 300;
  text-transform: uppercase;
  text-align: center;
  ${ellipsis('calc(100% - 120px)')};
  ${letterSpacing(16)};
  transition: 160ms;

  ${mqMobileUp} {
    display: none;
  }
`;

const BgOverlay = styled.div`
  z-index: 100;
  opacity: 0;
  visibility: hidden;
  height: 100%;
  width: 100%;
  left: 0;
  top: 0;
  position: fixed;
  transition: 160ms;
  will-change: opacity, visibility;
  background: ${colorGradient(0.8)};

  @media (-webkit-min-device-pixel-ratio: 3), (min-resolution: 192dpi) {
    /* backdrop-filter: blur(5px); */
  }
`;

const Navbar = ({ currentPage, home }: Props) => {
  const [isMobile, setIsMobile] = useState(
    isBrowser ? window.innerWidth < 599 : false,
  );
  const [scrollIsOnTop, setScrollIsOnTop] = useState(
    home && !isMobile ? (isBrowser ? window.scrollY < 28 : true) : false,
  );
  const [isExpanded, setIsExpanded] = useState(false);

  useOnWindowResize(({ width }) => {
    if (width < 599) {
      if (!isMobile) setIsMobile(true);
    } else if (isMobile) {
      setIsMobile(false);
    }
  });

  useOnWindowScroll(
    scrollPos => {
      if (home && !isMobile) {
        if (scrollPos.y > 28) {
          if (scrollIsOnTop) setScrollIsOnTop(false);
        } else if (!scrollIsOnTop) {
          setScrollIsOnTop(true);
        }
      }
    },
    [scrollIsOnTop, home, isMobile],
    100,
  );

  return (
    <>
      <BgOverlay
        onClick={() => setIsExpanded(false)}
        style={
          isMobile && isExpanded
            ? { opacity: 1, visibility: 'visible' }
            : undefined
        }
      />
      <Nav
        style={{
          transform: scrollIsOnTop
            ? 'translate3d(0, 32px, 0)'
            : isMobile && isExpanded
            ? 'translate3d(0, -100%, 0) translateZ(0)'
            : undefined,
          boxShadow:
            !scrollIsOnTop && !isMobile
              ? '0px 3px 4px rgba(0, 0, 0, 0.05)'
              : undefined,
        }}
        role="navigation"
        aria-label="main-navigation"
      >
        <ContentContainer>
          <NavBrand to="/" title="Logo">
            <Logotype />
          </NavBrand>
          <NavMenu style={{ opacity: isMobile ? (isExpanded ? 1 : 0) : 1 }}>
            <Link to="/" css={mobileOnly} activeClassName="active">
              Início
            </Link>

            <Link to="/sobre/" activeClassName="active">
              Sobre
            </Link>
            <Link to="/projetos/" activeClassName="active">
              Projetos
            </Link>
            <Link to="/atividades-e-noticias/" activeClassName="active">
              Atividades
            </Link>
            {/* <Link to="/noticias/" activeClassName="active">
              Blog
            </Link> */}
            <Link to="/membros/" activeClassName="active">
              Membros
            </Link>
            <Link to="/pesquisa/" activeClassName="active">
              Pesquisa
            </Link>
            <Link to="/contato/" activeClassName="active">
              Contato
            </Link>
          </NavMenu>
        </ContentContainer>
      </Nav>
      <MobileHeader className={isExpanded ? 'is-expanded' : undefined}>
        <Link to="/">
          <Logotype height={34} />
        </Link>
        <CurrentPage style={{ opacity: isExpanded ? 0 : 1 }}>
          {currentPage}
        </CurrentPage>
        <MenuButton
          onClick={() => setIsExpanded(!isExpanded)}
          showClose={isExpanded}
        />
      </MobileHeader>
    </>
  );
};

export default Navbar;
