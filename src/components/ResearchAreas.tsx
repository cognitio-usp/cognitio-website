import styled from '@emotion/styled';
import { rgba } from '@lucasols/utils';
import React from 'react';
import cognitiveScienceIcon from '../img/reasearch-areas/cognitive-science.svg';
import artificalLifeIcon from '../img/reasearch-areas/artificial-life.svg';
import neuroscienceIcon from '../img/reasearch-areas/neuroscience.svg';
import dynamicSystemIcon from '../img/reasearch-areas/dynamic-systems.svg';
import virtualRealityIcon from '../img/reasearch-areas/vr.svg';
import { circle, letterSpacing } from '../style/helpers';
import { centerContent, centerContentCollum } from '../style/modifiers';
import { colorSecondary, fontCondensed, colorTertiary } from '../style/theme';
import { mqMobile } from '../style/mediaQueries';

const researchAreasData = [
  { name: 'Ciência Cognitiva', icon: cognitiveScienceIcon },
  { name: 'Sistemas Dinâmicos', icon: dynamicSystemIcon },
  { name: 'Vida Artificial', icon: artificalLifeIcon },
  { name: 'Neurociência', icon: neuroscienceIcon },
  { name: 'Realidade Virtual', icon: virtualRealityIcon },
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
  width: 240px;
  ${centerContentCollum};

  ${mqMobile} {
    margin: 14px;
    width: 150px;
  }

  &:hover {
    color: ${colorTertiary};
  }

  > div {
    transition: 240ms;
    text-align: center;
    font-size: 22px;
    font-weight: 400;
    text-transform: uppercase;
    margin-top: 16px;
    font-family: ${fontCondensed};
    ${letterSpacing(8)};
    line-height: 1.4;

    ${mqMobile} {
      margin-top: 12px;
      font-size: 17px;
    }
  }
`;

const ResearchAreaIcon = styled.div`
  ${circle(180)};
  background-repeat: no-repeat;
  background-position: center;
  background-color: ${rgba(colorSecondary, 0.08)};
  transition: 240ms;
  border: 1.5px solid ${rgba(colorTertiary, 0)};

  ${ResearchArea}:hover & {
    border-color: ${rgba(colorTertiary, 0.8)};
  }

  ${mqMobile} {
    ${circle(140)};
    background-size: 80px;
  }
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
