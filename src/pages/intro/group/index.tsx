import groupImage from '@/assets/img/pages/intro-group.png';
// import OrganizationChart from './OrganizationChart';
import OrganizationChart from './Organization-chart';
import useMobileCheck from '@/hooks/useMobileCheck';
import MobileOrganizationChart from './MobileOrganizationChart';
import {motion} from 'framer-motion';

const Group = () => {
  const isMobile = useMobileCheck();
  const text = 'AI, 빅데이터, 클라우드의 완벽한 조화';

  const containerVariants = {
    hidden: {opacity: 1},
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const letterVariants = {
    hidden: {opacity: 0, x: 100},
    visible: {opacity: 1, x: 0},
  };

  return (
    <div className='container mx-auto flex flex-col gap-[30px] md:gap-[80px]'>
      <div className='w-full flex flex-col items-center '>
        {/* <motion.h1
          className='h1'
          initial={{opacity: 0, x: 100}}
          animate={{opacity: 1, x: 0}}
          transition={{duration: 1.5, ease: 'easeInOut'}}>
          AI, 빅데이터, 클라우드의 완벽한 조화
        </motion.h1> */}
        <motion.div className='h1' variants={containerVariants} initial='hidden' animate='visible'>
          {text.split('').map((char, index) => (
            <motion.span key={index} variants={letterVariants}>
              {char}
            </motion.span>
          ))}
        </motion.div>
      </div>
      {/* <img
        src={groupImage}
        className='h-[80%] w-full object-contain mb-[200px] animate-fade-in-down'
      /> */}
      {isMobile ? <MobileOrganizationChart /> : <OrganizationChart />}
    </div>
  );
};

export default Group;
