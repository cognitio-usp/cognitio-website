import React from 'react';
import styled from '@emotion/styled';
import Button from './Button';
import { centerContent } from '../style/modifiers';
import { letterSpacing } from '../style/helpers';
import { colorSecondary } from '../style/theme';
import { rgba } from '@lucasols/utils';
import css from '@emotion/css';

type Props = {
  label: string;
  className?: string;
  noBottomBorder?: boolean;
  moreButton?: {
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

  > span {
    ${letterSpacing(30)};
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
    css={
      !noBottomBorder &&
      css`
        border-bottom: 1px solid ${rgba(colorSecondary, 0.4)};
      `
    }
  >
    <span>{label}</span>
    {moreButton && (
      <Button
        small
        css={{ marginLeft: 16, marginRight: -64 }}
        {...moreButton}
      />
    )}
  </Container>
);

export default SectionHeader;
