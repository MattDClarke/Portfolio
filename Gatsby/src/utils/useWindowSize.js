import { useState, useEffect } from 'react';
import debounce from './debounce';

export default function useWindowSize() {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });
  useEffect(() => {
    // Handler to call on window resize
    const handleResize = debounce((e) => {
      setWindowSize({
        width: e?.target?.window?.innerWidth,
        height: e?.target?.window?.innerHeight,
      });
    }, 250);
    // Add event listener
    window.addEventListener('resize', (e) => handleResize(e));
    // Call handler right away so state gets updated with initial window size
    handleResize();
    // Remove event listener on cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []); // Empty array ensures that effect is only run on mount
  return windowSize;
}
