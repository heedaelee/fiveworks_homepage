import {useEffect, useRef} from 'react';
import {motion} from 'framer-motion';
import {MapPin, Phone, Mail} from 'lucide-react';
import logoDefault from '@/assets/img/logo-default.png';

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
        <div className='w-full md:w-1/2'>
          <motion.div
            className=' p-6 h-full flex flex-col items-center'
            initial={{opacity: 0, y: 100}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 1}}>
            <div className='h-[40%] w-full flex flex-row justify-center items-center '>
              <img src={logoDefault} alt='회사 로고' className='h-[80px] w-auto object-contain' />
            </div>
            <div className='space-y-4 text-lg mt-8 md:mt-0'>
              <div className='flex items-center'>
                <MapPin className='w-6 h-6 mr-4 text-gray-600' />
                <span>서울 특별시 강남구 봉은사로 30길 42 202호</span>
              </div>
              <div className='flex items-center'>
                <Phone className='w-6 h-6 mr-4 text-gray-600' />
                <span>02-3661-0813</span>
              </div>
              <div className='flex items-center'>
                <Mail className='w-6 h-6 mr-4 text-gray-600' />
                <span className='text-xl font-semibold'>yseom@5works.co.kr</span>
              </div>
              <div className='flex items-center'>
                <span className='text-xl font-normal'>▶ 역삼역 7번 출구 : 도보 8분</span>
              </div>
              <span className='text-xl  font-normal'>▶ 언주역 6번 출구 : 도보 5분</span>
              <div className='flex items-center'></div>
            </div>
          </motion.div>
        </div>
        <motion.div
          className='w-full md:w-1/2 h-[500px]'
          ref={mapRef}
          initial={{opacity: 0, y: -100}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 1}}></motion.div>
      </div>
    </div>
  );
  // return (
  //   <div className='container mx-auto px-4 py-8 mb-[150px] h-full'>
  //     <h1 className='text-3xl font-bold mb-4'>Contact</h1>
  //     <hr className='border-gray-300 mb-8' />
  //     <div className='container mx-auto px-4 flex flex-col md:flex-row items-center w-full h-full gap-8'>
  //       <motion.div
  //         className='w-full md:w-1/2 h-96 md:h-[600px] mb-8 md:mb-0 bg-red-300 flex flex-col py-[100px]'
  //         initial={{opacity: 0, x: 100}}
  //         animate={{opacity: 1, x: 0}}
  //         transition={{duration: 0.5, delay: 0.2}}>
  //         <h2 className='text-2xl font-bold mb-4  border-gray-200 border-[1px] h-[40%] flex justify-center items-center'>
  //           회사 정보
  //         </h2>
  //         <div className='h-[60%] w-full flex flex-col px-[200px]'>
  //           <div className='flex-[0_0_33%] border-gray-200 border-[1px] rounded-xl'>주소: 서울특별시 중구 세종대로 110</div>
  //           <div className='flex-[0_0_33%]'>전화번호: 02-1234-5678</div>
  //           <div className='flex-[0_0_33%]'>이메일: contact@company.com</div>
  //         </div>
  //         {/* <motion.p
  //           className='mb-2'
  //           initial={{opacity: 0, y: 20}}
  //           animate={{opacity: 1, y: 0}}
  //           transition={{duration: 0.3, delay: 0.4}}>
  //           주소: 서울특별시 중구 세종대로 110
  //         </motion.p>
  //         <motion.p
  //           className='mb-2'
  //           initial={{opacity: 0, y: 20}}
  //           animate={{opacity: 1, y: 0}}
  //           transition={{duration: 0.3, delay: 0.5}}>
  //           전화번호: 02-1234-5678
  //         </motion.p>
  //         <motion.p
  //           className='mb-2'
  //           initial={{opacity: 0, y: 20}}
  //           animate={{opacity: 1, y: 0}}
  //           transition={{duration: 0.3, delay: 0.6}}>
  //           이메일: contact@company.com
  //         </motion.p> */}
  //       </motion.div>
  //       <motion.div
  //         ref={mapRef}
  //         className='w-full md:w-1/2 h-96 md:h-[600px] mb-8 md:mb-0'
  //         initial={{opacity: 0, x: -100}}
  //         animate={{opacity: 1, x: 0}}
  //         transition={{duration: 0.5}}></motion.div>
  //     </div>
  //   </div>
  // );
};

export default Contact;
