import { css, Global } from '@emotion/core';
import { useGetSet } from '@lucasols/utils';
import hotkey from 'hotkeys-js';
import React, { useEffect } from 'react';

const debugLayoutStyle = css`
  *:not(g):not(path) {
    color: hsla(210, 100%, 100%, 0.9) !important;
    background: hsla(210, 100%, 50%, 0.5) !important;
    outline: solid 3px hsla(210, 100%, 100%, 0.5) !important;

    box-shadow: none !important;
    filter: none !important;
  }
`;

const DebugLayout = () => {
  const [getDebugLayout, setDebugLayout] = useGetSet(false);

  useEffect(() => {
    hotkey('shift+d', () => {
      setDebugLayout(!getDebugLayout());
    });
  }, []);

  return <Global styles={[getDebugLayout() && debugLayoutStyle]} />;
};

export default DebugLayout;
