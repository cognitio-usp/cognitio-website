import React, { FunctionComponent } from 'react';
import styled from '@emotion/styled';
import { colorSecondary } from '../style/theme';
import { rgba } from '@lucasols/utils';
import { letterSpacing } from '../style/helpers';
import { centerContent } from '../style/modifiers';

type Props = {
  className?: string;
};

const Container = styled.div`
  ${centerContent};
  font-size: 11px;
  text-transform: uppercase;
  padding: 0 12px;
  margin-right: auto;
  font-weight: 300;
  height: 18.5px;
  border-radius: 80px;
  letter-spacing: 0.04em;
  background: ${rgba(colorSecondary, 0.9)};

  span {
    ${letterSpacing(12)};
  }
`;

const PostTypeTag: FunctionComponent<Props> = ({ children, className }) => (
  <Container className={className}>
    <span>{children}</span>
  </Container>
);

export default PostTypeTag;
