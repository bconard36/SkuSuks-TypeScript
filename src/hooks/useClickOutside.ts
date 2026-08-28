/**
 * Custom Hook to close a menu when a click event occurs outside the element
 */

import { useEffect, RefObject } from "react";

// Change Function declaraion to something more specific
// State management? Boolean Toggle?
const useClickOutside = <T extends HTMLElement>(
  ref: RefObject<T | null>,
  callback: () => void,
) => {
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
