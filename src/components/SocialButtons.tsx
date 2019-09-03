import React from 'react';
import styled from '@emotion/styled';
import Icon from './Icon';
import { centerContent, fillContainer } from '../style/modifiers';
import { colorGradient, colorSecondary, colorTertiary } from '../style/theme';
import { rectSize } from '../style/helpers';
import { openPopup } from '@lucasols/utils';

type Props = {
  pageUrl: string;
  pageTitle: string;
};

const Container = styled.div`
  ${centerContent};
  margin-top: 24px;
  padding-top: 64px;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    height: 1.5px;
    width: 232px;

    background: ${colorSecondary};
  }

  div {
    text-transform: uppercase;
    font-size: 18px;
    color: $colorTertiary;
    letter-spacing: 0.04em;
    margin-right: 16px;

    @supports (-webkit-background-clip: text) {
      background: ${colorGradient()};
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }
`;

const Button = styled.button`
  ${centerContent};
  ${rectSize(48)};
  margin: 8px;
  position: relative;
  padding: 0;
  background-color: transparent;

  &::before {
    ${fillContainer};
    content: '';
    border: solid 1.5px transparent;
    border-radius: 100px;
    opacity: 0.7;
    transition: 160ms;

    background: linear-gradient(#fff, #fff) padding-box,
      linear-gradient(to right, ${colorSecondary}, ${colorTertiary}) border-box;
  }

  &:hover::before {
    opacity: 1;
  }
`;

function onClick(url: string) {
  openPopup(url, 'Share', 500, 500);
}

const SocialButtons = ({ pageUrl, pageTitle }: Props) => (
  <Container>
    <div>Compartilhe:</div>
    <Button
      title="Compartilhe a página no Facebook"
      onClick={() => onClick(`http://www.facebook.com/share.php?u=${pageUrl}`)}
    >
      <Icon name="facebook" />
    </Button>
    <Button
      title="Compartilhe a página no LinkedIn"
      onClick={() =>
        onClick(
          `https://www.linkedin.com/sharing/share-offsite/?url=${pageUrl}`,
        )}
    >
      <Icon name="linkedIn" />
    </Button>
    <Button
      title="Compartilhe a página no Twitter"
      onClick={() =>
        onClick(
          `http://twitter.com/share?text=${pageTitle || ''}&url=${pageUrl}`,
        )}
    >
      <Icon name="twitter" />
    </Button>
  </Container>
);

export default SocialButtons;
