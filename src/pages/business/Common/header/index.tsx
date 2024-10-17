import Description from '@/pages/business/Common/header/Description';
import {HeaderProps} from '@/pages/business/Common/common.interface';
import {motion} from 'framer-motion';
import {useTranslation} from 'react-i18next';

const Header = ({description_key, workPerformance_key, commonAnimation}: HeaderProps) => {
  const {t} = useTranslation();
  return (
    <div className='w-full flex flex-col items-center'>
      <motion.h1 {...commonAnimation(0.2)} className='h1'>
        {t('business.header.title')}
      </motion.h1>
      <motion.div className='w-full' {...commonAnimation(0.4)}>
        <Description description_key={description_key} workPerformance_key={workPerformance_key} />
      </motion.div>
    </div>
  );
};

export default Header;
