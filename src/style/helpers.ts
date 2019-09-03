import css, { Interpolation } from '@emotion/css';
import { InterpolationWithTheme } from '@emotion/core';

export function rectSize(size: number) {
  return css`
    width: ${size}px;
    height: ${size}px;
  `;
}

export function circle(size: number) {
  return css`
    width: ${size}px;
    height: ${size}px;
    border-radius: ${size}px;
  `;
}

/**
 *
 * @param emSize size in em unit
 */
export function letterSpacing(percentage: number) {
  return css`
    letter-spacing: ${percentage / 100}em;
    margin-right: -${percentage / 100}em;
  `;
}

export function joinWith(separator: string, options?: Interpolation) {
  return css`
    > *::after {
      content: '${separator}';
      ${options && css(options)};
    }

    > *:last-child:after {
      content: '';
    }
  `;
}
