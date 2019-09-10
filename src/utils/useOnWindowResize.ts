import { useRef, useLayoutEffect, useEffect } from 'react';
import { isBrowser } from './isBrowser';

type SizeObj = { width: number; height: number };
type Effect = (currPos: SizeObj, prevPos: SizeObj) => void;

function getSize() {
  return !isBrowser ? { width: 0, height: 0 } : { width: window.innerWidth, height: window.innerHeight };
}

export function useOnWindowResize(effect: Effect, deps?: any[], wait?: number) {
  const size = useRef(getSize());

  let throttleTimeout: null | number = null;

  const callBack = () => {
    const currSize = getSize();
    effect(currSize, size.current);
    size.current = currSize;
    throttleTimeout = null;
  };

  useEffect(() => {
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

    window.addEventListener('resize', handleScroll);

    return () => window.removeEventListener('resize', handleScroll);
  }, deps);
}
