import {motion} from 'framer-motion';
const Title = ({title}: {title: string}) => {
  return (
    <motion.h1
      initial={{opacity: 0}}
      whileInView={{opacity: 1}}
      transition={{duration: 2, ease: 'easeInOut'}}
      className='text-3xl font-bold mb-16 text-center '>
      {title}
    </motion.h1>
  );
};

export default Title;
