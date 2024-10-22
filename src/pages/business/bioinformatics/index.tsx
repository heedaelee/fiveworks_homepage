import {data_key} from '@/constants/business-data';
import {getImages} from '@/utils';
import {useEffect, useState} from 'react';
import BusinessLayout from '../Common/BusinessLayout';

const Bioinformatics = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [images, setImages] = useState<(string | string[])[]>([]);

  const bioinfomaticsData = data_key.bioinfomatics;
  const {tab_key, description_key, workPerformance_key} = bioinfomaticsData;
  useEffect(() => {
    const data = getImages('business_bioinfomatics');
    console.log('imgData: ', data);
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

export default Bioinformatics;
