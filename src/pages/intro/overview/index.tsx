import {motion} from 'framer-motion';
import {useTranslation} from 'react-i18next';
import overviewImage from '@/assets/img/pages/home/overview/1.jpeg';

const Overview = () => {
  const {t} = useTranslation();

  return (
    <div className='container mx-auto  flex flex-col md:flex-row gap-[80px] mb-14 lg:mb-0'>
      <motion.div
        className='md:w-[60%] md:h-full'
        initial={{opacity: 0, x: -40}}
        animate={{opacity: 1, x: 0}}
        transition={{duration: 2.5, ease: 'easeInOut'}}>
        <h1 className='h1'>{t(`intro.overview.title`)}</h1>
        <p className='mt-[70px] md:mt-[100px]'>
          {t(`intro.overview.content_1`)}
          <br />
          <br />
          {t(`intro.overview.content_2`)}
          <br />
          {t(`intro.overview.content_3`)}
          <br />
          <br />
          {t(`intro.overview.content_4`)}
        </p>
      </motion.div>
      <motion.div
        className='md:w-[30%] '
        initial={{opacity: 0, x: 40}}
        animate={{opacity: 1, x: 0}}
        transition={{duration: 2.5, ease: 'easeInOut'}}>
        <img src={overviewImage} className='h-[80%]  w-full object-contain ' />
      </motion.div>
    </div>
  );
};

export default Overview;
