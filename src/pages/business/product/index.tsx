import {data} from '@/constants/business-data';
import {getImages} from '@/utils';
import {useEffect, useState} from 'react';
import BusinessSection from '../Common/BusinessSection';

const Product = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [images, setImages] = useState<(string | string[])[]>([]);

  const productData = data.product;
  const {tab, description, workPerformance} = productData;
  useEffect(() => {
    const data = getImages('businessProduct');
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

export default Product;
