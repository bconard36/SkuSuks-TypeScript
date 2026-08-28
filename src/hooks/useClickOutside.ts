/**
 * Custom Hook to close a menu when a click event occurs outside the element
 */

type Ref = {
  current: HTMLElement | null;
};

import { useEffect } from "react";

// Change Function declaraion to something more specific
// State management? Boolean Toggle?
const useClickOutside = (ref: Ref, callback: Function) => {
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref?.current && !ref.current.contains(event.target as Node)) {
        callback();
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [ref, callback]);
};

export default useClickOutside;
