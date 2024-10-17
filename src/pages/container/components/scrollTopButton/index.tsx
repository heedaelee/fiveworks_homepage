import {CSSProperties} from 'react';
import useScrollTopButton from './useScrollTopButton';

const ScrollTopButton = () => {
  const {showScrollTopButton, buttonStyle} = useScrollTopButton();

  const scrollToTop = () => {
    window.scrollTo({top: 0, behavior: 'smooth'});
  };

  if (!showScrollTopButton) return null;

  return (
    <button
      onClick={scrollToTop}
      className='right-5 md:right-20 p-2 w-12 h-12 bg-gray-600 opacity-40 text-white rounded-full shadow-lg cursor-pointer'
      style={buttonStyle as CSSProperties}>
      ↑
    </button>
  );
};

export default ScrollTopButton;
