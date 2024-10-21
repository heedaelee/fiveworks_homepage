import {useTranslation} from 'react-i18next';
import {motion} from 'framer-motion';

const GroupTitle = () => {
  const {t} = useTranslation();
  const TITLE = t('intro.group.title');

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
    <div className='w-full flex flex-col items-center '>
      <motion.div className='h1' variants={containerVariants} initial='hidden' animate='visible'>
        {TITLE.split('').map((char, index) => (
          <motion.span key={index} variants={letterVariants}>
            {char}
          </motion.span>
        ))}
      </motion.div>
    </div>
  );
};

export default GroupTitle;
