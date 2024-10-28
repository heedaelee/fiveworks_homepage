import {useTranslation} from 'react-i18next';
import {motion} from 'framer-motion';
import {getBenefitItems} from './getBenefitItems';
import BenefitCardList from './BenefitCardList';

const Benefits = () => {
  const {t} = useTranslation();
  const benefitItems = getBenefitItems(t);

  return (
    <div className='container mx-auto px-4 py-8 mb-[150px]'>
      <motion.h1
        initial={{opacity: 0, y: -20}}
        whileInView={{opacity: 1, y: 0}}
        transition={{duration: 2, ease: 'easeInOut'}}
        className='text-3xl font-bold mb-4'>
        {t('careers.benefits.title')}
      </motion.h1>
      <hr className='border-gray-300 mb-8' />

      <BenefitCardList benefitItems={benefitItems} />
    </div>
  );
};

export default Benefits;
