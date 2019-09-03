import { css } from '@emotion/core';

export const fillContainer = css`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

export const centerContent = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const centerContentCollum = css`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const show = css`
  opacity: 1;
  visibility: visible;
  pointer-events: auto;
`;

export const hide = css`
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
`;
