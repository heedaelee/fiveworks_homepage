import {data_key} from '@/constants/business-data';
// import {getImages} from '@/utils';
import {useEffect, useState} from 'react';
import BusinessLayout from '../Common/BusinessLayout';
import image1 from '@/assets/img/pages/business/biometrics/1_Biometrics.jpg';
const Biometrics = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [images, setImages] = useState<(string | string[])[]>([]);

  const biometricsData = data_key.biometrics;
  const {tab_key, description_key, workPerformance_key} = biometricsData;
  useEffect(() => {
    setImages([image1]);
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

export default Biometrics;
