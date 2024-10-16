import {motion} from 'framer-motion';

const Title = () => {
  return (
    <motion.div
      initial={{opacity: 0, x: 80}}
      animate={{opacity: 1, x: 0}}
      transition={{duration: 1.2}}>
      <h1 className='text-4xl font-bold text-center mb-8'>혁신적인 인재</h1>
      <p className='text-xl text-center mb-12 px-10 sm:px-0'>
        우리는 창의적이고 혁신적인 사고를 가진 인재를 찾고 있습니다.
      </p>
    </motion.div>
  );
};

export default Title;
