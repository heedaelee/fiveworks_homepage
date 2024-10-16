import {FC} from 'react';
import {LucideIcon} from 'lucide-react';
import {motion} from 'framer-motion';

interface RecruitmentStepProps {
  icon: LucideIcon;
  title: string;
  description: JSX.Element;
  index: number;
}

const RecruitmentStep: FC<RecruitmentStepProps> = ({icon: Icon, title, description, index}) => {
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
      className='text-center'>
      <Icon className='w-16 h-16 mx-auto mb-4 text-primary' />
      <h2 className='text-xl font-semibold mb-2'>{title}</h2>
      <p>{description}</p>
    </motion.div>
  );
};

export default RecruitmentStep;
