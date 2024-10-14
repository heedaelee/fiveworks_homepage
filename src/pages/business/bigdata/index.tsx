import {data} from '@/pages/business/Common/business-data';
import {getImages} from '@/utils';
import {useEffect, useState} from 'react';
import Title from '@/pages/business/Common/BusinessTitle';
import Description from '@/pages/business/Common/Description';
import Tabs from '@/pages/business/Common/Tabs';
import TabsContent from '@/pages/business/Common/tab_content';
import {GlobalStyles} from '@/styles/globalStyles';

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
        <Tabs tab={tab} activeTab={activeTab} setActiveTab={setActiveTab} />
        <TabsContent tab={tab} activeTab={activeTab} images={images} />
      </div>
    </div>
  );
};

export default Bigdata;
