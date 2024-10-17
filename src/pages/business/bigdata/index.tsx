import {data_key} from '@/constants/business-data';
import {getImages} from '@/utils';
import {useEffect, useState} from 'react';
import BusinessLayout from '../Common/BusinessLayout';

const Bigdata = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [images, setImages] = useState<(string | string[])[]>([]);

  const bigData = data_key.bigdata;
  const {tab_key, description_key, workPerformance_key} = bigData;
  useEffect(() => {
    const data = getImages('businessBig');
    console.log(data);
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

export default Bigdata;
