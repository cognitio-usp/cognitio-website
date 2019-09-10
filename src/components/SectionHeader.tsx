import React from 'react';
import styled from '@emotion/styled';
import Button from './Button';
import { centerContent } from '../style/modifiers';
import { letterSpacing } from '../style/helpers';
import { colorSecondary } from '../style/theme';
import { rgba } from '@lucasols/utils';
import css from '@emotion/css';
import { mqMobile } from '../style/mediaQueries';

type Props = {
  label: string;
  className?: string;
  noBottomBorder?: boolean;
  moreButton?:
    | false
    | {
        label: string;
        to?: string;
        href?: string;
      };
};

const Container = styled.h1`
  ${centerContent};
  margin-top: 72px;
  height: 60px;
  width: 100%;

  text-align: center;
  font-size: 18px;
  font-weight: 500;
  color: #000;
  text-transform: uppercase;
  margin-bottom: 24px;
  line-height: 1.4;

  ${mqMobile} {
    font-size: 16px;
  }

  > span {
    ${letterSpacing(30)};

    ${mqMobile} {
      ${letterSpacing(20)};
    }
  }
`;

const MoreButton = styled(Button)`
  margin-left: 16px;
  margin-right: -64px;

  ${mqMobile} {
    margin-right: 0;
  }
`;

const SectionHeader = ({
  label,
  moreButton,
  noBottomBorder,
  className,
}: Props) => (
  <Container
    className={className}
    css={css`
      ${!noBottomBorder &&
        `border-bottom: 1px solid ${rgba(colorSecondary, 0.4)};`}
      ${moreButton &&
        css`
          > span {
            ${mqMobile} {
              ${letterSpacing(8)};
            }
          }
        `}
    `}
  >
    <span>{label}</span>
    {moreButton && (
      <MoreButton
        small
        {...moreButton}
      />
    )}
  </Container>
);

export default SectionHeader;
