import {useEffect, useRef} from 'react';
import {motion} from 'framer-motion';
import ContactInfo from './contactInfo/Index';

declare global {
  interface Window {
    kakao: any;
  }
}

const Contact = () => {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.async = true;
    script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=f70658f794fd73061f82fe7aedfe42a3&autoload=false`;
    document.head.appendChild(script);

    script.onload = () => {
      window.kakao.maps.load(() => {
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
        }
      });
    };
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div className='container mx-auto px-4 py-8 md:mt-[50px] md:mb-[200px]'>
      <h1 className='text-3xl font-bold mb-4 md:pb-[80px] text-center'>CONTACT</h1>
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
