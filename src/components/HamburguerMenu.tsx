import React from 'react';
import styled from '@emotion/styled';
import { centerContent } from '../style/modifiers';
import { colorGradient } from '../style/theme';

type Props = {
  className?: string;
  onClick: () => void;
  showClose?: boolean;
};

const Container = styled.button`
  ${centerContent};
  height: 48px;
  width: 48px;
`;

const Bar = styled.div`
  position: absolute;
  height: 2px;
  width: 32px;
  border-radius: 4px;
  background: ${colorGradient()};
  transition: 240ms ease-out;
`;

const HamburguerMenu = ({ className, onClick, showClose }: Props) => (
  <Container className={className} onClick={onClick}>
    <Bar
      style={{
          transform: !showClose ? 'translate3d(0, -10px, 0)' : 'rotate(-45deg)',
        }}
    />
    <Bar
      style={{
          transform: showClose ? 'translate3d(3px, 0, 0)' : undefined,
          opacity: showClose ? 0 : 1,
          transition: '160ms',
        }}
    />
    <Bar
      style={{
          transform: !showClose ? 'translate3d(0, 10px, 0)' : 'rotate(45deg)',
        }}
    />
  </Container>
  );

export default HamburguerMenu;
