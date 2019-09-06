import { useRef, useLayoutEffect } from 'react';
import { isBrowser } from './isBrowser';

type PosObj = { x: number; y: number };
type Effect = (currPos: PosObj, prevPos: PosObj) => void;

function getScrollPosition() {
  return !isBrowser ? { x: 0, y: 0 } : { x: window.scrollX, y: window.scrollY };
}

export function useOnWindowScroll(effect: Effect, deps?: any[], wait?: number) {
  const position = useRef(getScrollPosition());

  let throttleTimeout: null | number = null;

  const callBack = () => {
    const currPos = getScrollPosition();
    effect(currPos, position.current);
    position.current = currPos;
    throttleTimeout = null;
  };

  useLayoutEffect(() => {
    if (!isBrowser) {
      return;
    }

    const handleScroll = () => {
      if (wait) {
        if (throttleTimeout === null) {
          throttleTimeout = window.setTimeout(callBack, wait);
        }
      } else {
        callBack();
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, deps);
}
