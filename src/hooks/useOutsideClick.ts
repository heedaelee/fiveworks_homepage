import {useEffect, useRef} from 'react';

const useOutsideClick = (callback: () => void) => {
  const ref = useRef<HTMLElement>(null);

  // Handle click outside of the element
  const handleClickOutside = (event: MouseEvent) => {
    if (ref.current && !ref.current.contains(event.target as Node)) {
      callback();
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [callback]);

  return ref;
};

export default useOutsideClick;
