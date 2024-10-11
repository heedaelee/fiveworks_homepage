import {motion} from 'framer-motion';
// import { FaRocket } from 'react-icons/fa'; // 로켓 아이콘을 사용하기 위해 react-icons 패키지를 사용합니다.
import {RocketLaunchIcon} from '@heroicons/react/24/outline';

interface CarouselSlideProps {
  imageUrl: string;
  title: string;
  description: string;
}

const CarouselSlide = ({imageUrl, title, description}: CarouselSlideProps) => {
  return (
    <div className='embla__slide relative flex-[0_0_100%]'>
      <img src={imageUrl} className='h-full w-full object-cover absolute' />
      <div className='absolute inset-0 bg-black opacity-50' />
      <div className='carousel-caption absolute top-[48%] left-[38%] transform -translate-x-1/2 -translate-y-1/2 text-white z-50'>
        <h5 className='font-[600] text-[40px] sm:text-[65px]'>{title}</h5>
        <p className='mt-2 sm:mt-0 mb-1'>{description}</p>
        <motion.div
          className='absolute bottom-0 left-0 w-full h-[0.8px] bg-white '
          initial={{width: 0}}
          animate={{width: '100%'}}
          transition={{
            duration: 5,
            ease: 'linear',
            repeat: Infinity,
            repeatType: 'loop',
          }}>
          <motion.div
            className='absolute top-[-10px] right-0'
            initial={{x: 0}}
            animate={{x: '100%'}}
            transition={{
              duration: 5,
              ease: 'linear',
              repeat: Infinity,
              repeatType: 'loop',
            }}
            >
            <RocketLaunchIcon className='text-white h-4 w-4 rotate-[40deg]' />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default CarouselSlide;
