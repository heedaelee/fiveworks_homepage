import {data} from '@/constants/business-data';
import {getImages} from '@/utils';
import {useEffect, useState} from 'react';
import BusinessSection from '../Common/BusinessSection';

const Ai = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [images, setImages] = useState<(string | string[])[]>([]);

  const aiData = data.ai;
  const {tab, description, workPerformance} = aiData;
  useEffect(() => {
    const data = getImages('businessAi');
    console.log(data);
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

export default Ai;
