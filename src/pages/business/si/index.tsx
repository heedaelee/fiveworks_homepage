import {data_key} from '@/constants/business-data';
import {TabContentProps} from '@/pages/business/Common/common.interface';
import {getImages} from '@/utils';
import {useEffect, useState} from 'react';
import BusinessLayout from '../Common/BusinessLayout';

const Si = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [images, setImages] = useState<TabContentProps['images']>([]);

  const siData = data_key.si;
  const {tab_key, description_key, workPerformance_key} = siData;
  useEffect(() => {
    const data = getImages('businessSi');
    // console.log(`SIdata :   ${data}`);
    setImages(data);
  }, []);

  return (
    <BusinessLayout
      description_key={description_key}
      workPerformance_key={workPerformance_key}
      tab_key={tab_key}
      activeTab={activeTab}
      setActiveTab={setActiveTab}
      images={images}
    />
  );
};

export default Si;
