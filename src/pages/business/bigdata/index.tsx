import {data} from '@/constants/business-data';
import {getImages} from '@/utils';
import {useEffect, useState} from 'react';
import BusinessLayout from '../Common/BusinessLayout';

const Bigdata = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [images, setImages] = useState<(string | string[])[]>([]);

  const bigData = data.bigdata;
  const {tab, description, workPerformance} = bigData;
  useEffect(() => {
    const data = getImages('businessBig');
    console.log(data);
    setImages(data);
  }, []);

  return (
    <BusinessLayout
      description={description}
      workPerformance={workPerformance}
      tab={tab}
      activeTab={activeTab}
      setActiveTab={setActiveTab}
      images={images}
    />
  );
};

export default Bigdata;
