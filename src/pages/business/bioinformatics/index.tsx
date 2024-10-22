import {data_key} from '@/constants/business-data';
import {getImages} from '@/utils';
import {useEffect, useState} from 'react';
import BusinessLayout from '../Common/BusinessLayout';

const Bioinformatics = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [images, setImages] = useState<(string | string[])[]>([]);

  const bioinfometricsData = data_key.bioinfometrics;
  const {tab_key, description_key, workPerformance_key} = bioinfometricsData;
  useEffect(() => {
    const data = getImages('business_bioinfometrics');
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

export default Bioinformatics;
