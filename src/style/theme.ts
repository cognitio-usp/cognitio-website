import { rgba } from '@lucasols/utils';
import css from '@emotion/css';
import { letterSpacing } from './helpers';

/* colors hex */
export const colorPrimary = '#272727';
export const colorSecondary = '#FF9406';
export const colorTertiary = '#DD2C00';
export const colorBg = '#f8f8f8';
export const colorTextBody = '#404040';

export const colorError = '#ff1744';
export const colorWarning = '#ffea00';

/* gradients */
export const colorGradient = (
  alpha: number = 1,
  deg: number = 90,
) => `linear-gradient(${deg}deg, ${rgba(colorSecondary, alpha)} 0%, ${rgba(
  colorTertiary,
  alpha,
)} 100%);
`;

export const textGradient = css`
  background: ${colorGradient()};
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
`;

/* fonts */
export const fontPrimary = 'Roboto, sans-serif';
export const fontSecondary = 'Nunito Sans, sans-serif';
export const fontCondensed = 'Roboto Condensed, sans-serif';

export const easeInOut = 'cubic-bezier(0.4, 0, 0.2, 1)';
export const easeOut = 'cubic-bezier(0, 0, 0.2, 1)';
export const easeSharp = 'cubic-bezier(0.4, 0, 0.26 1)';

/* general */
export const sectionMaxWidth = '1200px';
