import { css } from '@emotion/core';
import { colorSecondary } from './theme';
import { rgba } from '@lucasols/utils';

const background = colorSecondary;
const thumb = colorSecondary;

export default css`
  ::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }

  ::-webkit-scrollbar-track {
    background-color: ${background};
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 4px;
    background-color: ${rgba(thumb, 0.5)};

    &:hover {
      background-color: ${rgba(thumb, 0.7)};
    }

    &:active {
      background-color: ${rgba(thumb, 0.9)};
    }
  }

  ::-webkit-scrollbar-corner {
    background-color: ${background};
  }
`;
