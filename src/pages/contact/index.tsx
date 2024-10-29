import {useEffect, useRef} from 'react';
import {motion} from 'framer-motion';
import ContactInfo from './contactInfo/Index';

declare global {
  interface Window {
    kakao: any;
  }
}

const Contact = () => {
  // 카카오맵 레퍼런스
  const mapRef = useRef<HTMLDivElement>(null);

  const loadKakaoMapScript = (callback: () => void) => {
    const script = document.createElement('script');
    script.async = true;
    script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${import.meta.env.VITE_KAKAO_MAP_KEY}&autoload=false`;
    document.head.appendChild(script);
    script.onload = () => {
      window.kakao.maps.load(callback);
    };
    return script;
  };

  /**
   * 카카오맵 초기화
   */
  const initializeMap = (mapRef: React.RefObject<HTMLDivElement>) => {
    if (mapRef.current) {
      const options = {
        center: new window.kakao.maps.LatLng(37.504873, 127.035834),
        level: 3,
      };
      const map = new window.kakao.maps.Map(mapRef.current, options);

      // 지도 유형 컨트롤 추가
      const mapTypeControl = new window.kakao.maps.MapTypeControl();
      map.addControl(mapTypeControl, window.kakao.maps.ControlPosition.TOPRIGHT);

      // 줌 컨트롤 추가
      const zoomControl = new window.kakao.maps.ZoomControl();
      map.addControl(zoomControl, window.kakao.maps.ControlPosition.RIGHT);

      const marker = new window.kakao.maps.Marker({
        position: options.center,
      });
      marker.setMap(map);
      // 커스텀 오버레이 추가 (이름 표시)
      const content = `
                  <div 
                    style="padding:4px; font-size:13px; background-color:white; color:#0988f8; text-decoration:underline; border:1px solid lightGray; cursor:pointer;" 
                    onclick="window.open('https://kko.kakao.com/BcIh24vO1M', '_blank')"
                  >
                    파이브웍스
                  </div>`;
      const overlay = new window.kakao.maps.CustomOverlay({
        content: content,
        map: map,
        position: options.center,
        yAnchor: 2.3, // yAnchor 값을 1보다 크게 설정하여 오버레이를 위로 올림
      });
      overlay.setMap(map);
    }
  };

  //  카카오맵 스크립트 로드
  useEffect(() => {
    const script = loadKakaoMapScript(() => {
      window.kakao.maps.load(() => initializeMap(mapRef));
    });
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div className='container mx-auto px-4 py-8 md:mt-[50px] md:mb-[200px]'>
      <h1 className='text-3xl font-bold mb-4 md:pb-[80px] text-center'>Contact</h1>
      <div className='flex flex-col md:flex-row gap-8'>
        <ContactInfo />
        <motion.div
          className='w-full md:w-1/2 h-[500px]'
          ref={mapRef}
          initial={{opacity: 0, y: -100}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 1}}></motion.div>
      </div>
    </div>
  );
};

export default Contact;
