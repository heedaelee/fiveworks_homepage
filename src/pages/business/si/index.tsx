import {data} from '@/constants/business-data';
import {TabContentProps} from '@/pages/business/Common/common.interface';
import {getImages} from '@/utils';
import {useEffect, useState} from 'react';
import BusinessSection from '../Common/BusinessSection';

const Si = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [images, setImages] = useState<TabContentProps['images']>([]);

  const siData = data.si;
  const {tab, description, workPerformance} = siData;
  useEffect(() => {
    const data = getImages('businessSi');
    console.log(`SIdata :   ${data}`);
    setImages(data);
  }, []);

  return (
    <BusinessSection
      description={description}
      workPerformance={workPerformance}
      tab={tab}
      activeTab={activeTab}
      setActiveTab={setActiveTab}
      images={images}
    />
  );
};

export default Si;
