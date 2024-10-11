import {motion} from 'framer-motion';

const Overview = () => {
  return (
    <div className='container mx-auto  flex flex-col md:flex-row gap-[80px] mb-14 lg:mb-0'>
      <motion.div
        className='md:w-[60%] md:h-full'
        initial={{opacity: 0, x: -40}}
        animate={{opacity: 1, x: 0}}
        transition={{duration: 2.5, ease: 'easeInOut'}}>
        <h1 className='h1'>혁신을 선도하는 FIVE WORKS</h1>
        <p className='mt-[70px] md:mt-[100px]'>
          파이브웍스는 Biometrics, RPA, 영상처리 기술을 기반으로 각종 Web/APP Solution 및 KIOSK SW를
          개발하고 있습니다.
          <br />
          <br />
          파이브웍스는 5년간 다양한 사업군의 프로젝트를 통해 확보된 기술을 바탕으로 자체솔루션을
          연구 및 개발을 진행하고 있으며, 매년 평균 50%이상의 성장을 하고 있는 회사입니다. 대표자 및
          임원이 직원들의 고충을 누구보다 이해하고 있으며, 직원들의 근속 및 발전을 위해 지원과
          노력을 아끼지 않고있습니다.
          <br />
          파이브웍스는 짧은 기간내에 매출 및 인원증가를 하고 있으며 매출 30억이상을 목표로
          연구개발에 매진하고 있습니다. 5년안에는 투자 및 상장을 통한 같이 노력한 직원들의
          성과보상에 대하여 노력할 것입니다.
          <br />
          <br />
          앞으로도 많은 관심과 성원을 기대하겠습니다.
        </p>
      </motion.div>
      <motion.div
        className='md:w-[30%]'
        initial={{opacity: 0, x: 40}}
        animate={{opacity: 1, x: 0}}
        transition={{duration: 2.5, ease: 'easeInOut'}}>
        <img
          src={
            'https://images.unsplash.com/photo-1579487785973-74d2ca7abdd5?q=80&w=3688&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          }
          className='h-[80%] w-full object-contain'
        />
      </motion.div>
    </div>
  );
};

export default Overview;
