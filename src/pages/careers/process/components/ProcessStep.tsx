import {FC} from 'react';
import {motion} from 'framer-motion';

interface ProcessStepProps {
  step: number;
  title: string;
  description: string;
  index: number;
}

const ProcessStep: FC<ProcessStepProps> = ({step, title, description, index}) => {
  const cardVariants = {
    hidden: {opacity: 0, y: -60},
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {delay: i * 0.5, duration: 1.2, ease: 'easeInOut'},
    }),
  };
  return (
    <motion.div
      custom={index}
      variants={cardVariants}
      initial='hidden'
      whileInView='visible'
      className='flex flex-col items-center text-center w-full md:w-1/4'>
      <div className='w-16 h-16 rounded-full bg-blue-800 text-white flex items-center justify-center text-xl font-bold mb-4'>
        {step}
      </div>
      <h3 className='text-lg font-semibold mb-2'>{title}</h3>
      <p>{description}</p>
    </motion.div>
  );
};

export default ProcessStep;
