import {motion} from 'framer-motion';
import {useTranslation} from 'react-i18next';

const Title = () => {
  const {t} = useTranslation();

  return (
    <div>
      <motion.h1
        initial={{opacity: 0, x: 80}}
        whileInView={{opacity: 1, x: 0}}
        transition={{duration: 1.2}}
        className='text-4xl font-bold text-center mb-8'>
        {t('careers.human.title')}
      </motion.h1>
      <motion.p
        initial={{opacity: 0, x: 100}}
        whileInView={{opacity: 1, x: 0}}
        transition={{duration: 1.2, delay: 0.4}}
        className='text-xl text-center mb-12 px-10 sm:px-0'>
        {t('careers.human.subTitle')}
      </motion.p>
    </div>
  );
};

export default Title;
