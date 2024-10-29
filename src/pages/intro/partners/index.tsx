// import historyImage from '@/assets/img/pages/intro-history.png';

import {useTranslation} from 'react-i18next';
import PartenersList from '@/pages/intro/partners/PartnersList';

const Partners = () => {
  const {t} = useTranslation();
  // console.log(partnerImages);

  return (
    <div className='container mx-auto flex flex-col gap-[80px] mb-[150px]'>
      <div className='w-full flex flex-col items-center animate-fade-in'>
        <h1 className='h1'>{`Fiveworks ${t(`intro.partner.title`)}`}</h1>
      </div>
      <PartenersList />
    </div>
  );
};

export default Partners;
