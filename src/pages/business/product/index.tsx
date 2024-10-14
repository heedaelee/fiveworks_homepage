import {data} from '@/constants/business-data';
import {getImages} from '@/utils';
import {useEffect, useState} from 'react';
import Title from '@/pages/business/Common/BusinessTitle';
import Description from '@/pages/business/Common/Description';
import TabTitles from '@/pages/business/Common/TabTitles';
import TabsContent from '@/pages/business/Common/tab_content';
import {GlobalStyles} from '@/styles/globalStyles';

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

  if (images.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div className={GlobalStyles.classes.businessContainer}>
      <div className='w-full flex flex-col items-center animate-fade-in '>
        <Title />
        <Description description={description} workPerformance={workPerformance} />
      </div>
      <div className='w-full mt-16 flex flex-col gap-9'>
        <TabTitles tab={tab} activeTab={activeTab} setActiveTab={setActiveTab} />
        <TabsContent tab={tab} activeTab={activeTab} images={images} />
      </div>
    </div>
  );
};

export default Product;
