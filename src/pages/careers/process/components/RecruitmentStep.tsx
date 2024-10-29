import {FC} from 'react';
import {LucideIcon} from 'lucide-react';
import {motion} from 'framer-motion';
import {useTranslation} from 'react-i18next';

interface RecruitmentStepProps {
  icon: LucideIcon;
  title: string;
  description: string;
  description2: string;
  index: number;
  list1: string;
  list2: string;
}

const RecruitmentStep: FC<RecruitmentStepProps> = ({
  icon: Icon,
  title,
  description,
  description2,
  index,
  list1,
  list2,
}) => {
  const cardVariants = {
    hidden: {opacity: 0, y: -60},
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {delay: i * 0.5, duration: 1.2, ease: 'easeInOut'},
    }),
  };

  const {i18n} = useTranslation();

  return (
    <motion.div
      custom={index}
      variants={cardVariants}
      initial='hidden'
      whileInView='visible'
      className='text-center'>
      <Icon className='w-16 h-16 mx-auto mb-4 text-primary' />
      <div className='flex flex-col gap-3 items-center'>
        <h2 className='text-xl font-semibold mb-2'>{title}</h2>
        <p className='font-semibold'>{description}</p>
        <div className='flex flex-row'>
          {`- ${description2} ${index === 0 ? ' :' : ''} `}
          {index === 0 && (
            <>
              &nbsp;
              <a
                href='mailto:5works@5works.co.kr'
                className='text-blue-500 hover:text-blue-700 underline'>
                5works@5works.co.kr
              </a>
            </>
          )}
          &nbsp;{'-'}
        </div>
        <ul
          className={`list-disc list-inside text-gray-500 text-sm text-left ${
            index === 0 && i18n.language !== 'en' ? 'pl-12' : ''
          }`}>
          <li>{list1}</li>
          <li>{list2}</li>
        </ul>
      </div>
    </motion.div>
  );
};

export default RecruitmentStep;
