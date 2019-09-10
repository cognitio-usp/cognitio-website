import React from 'react';
import styled from '@emotion/styled';
import PlexusContainer from './PlexusContainer';
import { letterSpacing } from '../style/helpers';
import { mqMobile } from '../style/mediaQueries';

type Props = {
  title: string;
};

const Title = styled.h1`
  color: #fff;
  text-transform: uppercase;
  font-size: 42px;
  font-weight: 300;
  text-align: center;
  text-shadow: 0 3px 5px rgba(0, 0, 0, 0.2);
  ${letterSpacing(8)};

  ${mqMobile} {
    font-size: 36px;
  }
`;

const PageTitle = ({ title }: Props) => (
  <PlexusContainer css={{ padding: '36px 16px' }} orangeBackground>
    <Title>{title}</Title>
  </PlexusContainer>
);

export default PageTitle;
