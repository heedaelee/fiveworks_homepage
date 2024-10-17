import {useState, useEffect} from 'react';
import throttle from 'lodash/throttle';


const useScrollTopButton = () => {
  const [showScrollTopButton, setShowScrollTopButton] = useState(false);
  const [buttonStyle, setButtonStyle] = useState({position: 'fixed', bottom: '20px'});

  const handleScroll = () => {
    // console.log('스로틀링 호출');
    if (window.scrollY > 300) {
      setShowScrollTopButton(true);
    } else {
      setShowScrollTopButton(false);
    }

    const footerHeight = document.querySelector('footer')?.offsetHeight || 0;
    // console.log('footerHeight : ', footerHeight);
    const windowHeight = window.innerHeight; // 브라우저 창 높이
    const documentHeight = document.documentElement.scrollHeight; // 문서 전체 높이
    const scrollPosition = window.scrollY + windowHeight; // 현재 스크롤 위치 + 창 높이
    const remainingScrollHeight = documentHeight - scrollPosition; // 남은 스크롤 높이

    // 풋터 높이보다 남은 스크롤 높이가 작으면
    if (remainingScrollHeight <= footerHeight) {
      setButtonStyle({position: 'absolute', bottom: `${footerHeight + 20}px`});
    } else {
      setButtonStyle({position: 'fixed', bottom: '20px'});
    }
  };

  useEffect(() => {
    const throttledHandleScroll = throttle(handleScroll, 200);
    window.addEventListener('scroll', throttledHandleScroll);
    return () => {
      window.removeEventListener('scroll', throttledHandleScroll);
    };
  }, []);

  return {showScrollTopButton, buttonStyle};
};

export default useScrollTopButton;
