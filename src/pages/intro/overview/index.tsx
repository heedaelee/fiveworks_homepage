import {motion} from 'framer-motion';
import {useTranslation} from 'react-i18next';

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
