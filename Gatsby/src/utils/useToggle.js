import { useState } from 'react';

export default function useToggleState(initialVal = false) {
  const [state, setState] = useState(initialVal);
  // const [isToggle, setIsToggle] = useState(true);
  const toggle = (isToggle) => {
    // Can set toggle to false if false passed in
    if (isToggle === false) {
      setState(false);
    } else {
      // dnt set the state var directly
      setState((st) => !st);
    }
  };
  // return piece of state and a function to toggle it
  return [state, toggle];
}
