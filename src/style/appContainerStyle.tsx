import { fillContainer, centerContent } from './modifiers';
import { colorBg } from './theme';
import css from '@emotion/css';

export const appContainerStyle = css`
  ${fillContainer};
  ${centerContent};
  overflow: hidden;

  background: ${colorBg};
`;
