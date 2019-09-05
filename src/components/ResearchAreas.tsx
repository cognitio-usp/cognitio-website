import React from 'react';
import styled from '@emotion/styled';

import cognitiveScienceIcon from '../img/reasearch-areas/cognitive-science.svg';
import { centerContent, centerContentCollum } from '../style/modifiers';
import { circle, letterSpacing } from '../style/helpers';
import { rgba } from '@lucasols/utils';
import { colorSecondary, sectionMaxWidth, fontCondensed } from '../style/theme';

const researchAreasData = [
  { name: 'Ciência Cognitiva', icon: cognitiveScienceIcon },
  { name: 'Vida Artificial', icon: cognitiveScienceIcon },
  { name: 'Sistemas Dinâmicos', icon: cognitiveScienceIcon },
  { name: 'Realidade Virtual', icon: cognitiveScienceIcon },
  { name: 'Neurociência', icon: cognitiveScienceIcon },
];

const Container = styled.div`
  ${centerContent};
  align-items: flex-start;
  flex-wrap: wrap;
  margin: -16px 0;
  max-width: 1100px;
`;

const ResearchArea = styled.div`
  margin: 24px;
  min-width: 240px;
  ${centerContentCollum};

  > div {
    text-align: center;
    font-size: 22px;
    font-weight: 400;
    text-transform: uppercase;
    margin-top: 16px;
    font-family: ${fontCondensed};
    ${letterSpacing(8)};
    line-height: 1.4;
  }
`;

const ResearchAreaIcon = styled.div`
  ${circle(180)};
  background-repeat: no-repeat;
  background-position: center;
  background-color: ${rgba(colorSecondary, 0.08)};
`;

const ResearchAreas = () => (
  <Container>
    {researchAreasData.map((item, i) => (
      <ResearchArea key={i}>
        <ResearchAreaIcon style={{ backgroundImage: `url(${item.icon})` }} />
        <div>{item.name}</div>
      </ResearchArea>
    ))}
  </Container>
);

export default ResearchAreas;
