import {motion} from 'framer-motion';
import {RocketLaunchIcon} from '@heroicons/react/24/outline';
import useMobileCheck from '@/hooks/useMobileCheck';

const Rocket = ({currentIndex}: {currentIndex: number}) => {
  const isMobile = useMobileCheck();

  return (
    <motion.div
      key={currentIndex}
      className='absolute bottom-0 left-0 w-full h-[0.8px] bg-white '
      initial={{width: 0}}
      animate={{width: `${isMobile ? '80%' : '100%'}`}}
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
        }}>
        <RocketLaunchIcon className='text-white h-4 w-4 rotate-[40deg]' />
      </motion.div>
    </motion.div>
  );
};

export default Rocket;
