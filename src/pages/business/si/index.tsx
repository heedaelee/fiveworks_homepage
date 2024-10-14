import {data} from '@/constants/business-data';
import {getImages} from '@/utils';
import {useEffect, useState} from 'react';
import Title from '@/pages/business/Common/BusinessTitle';
import Description from '@/pages/business/Common/Description';
import TabTitles from '@/pages/business/Common/TabTitles';
import TabsContent from '@/pages/business/Common/tab_content';
import {TabContentProps} from '@/pages/business/Common/common.interface';
import {GlobalStyles} from '@/styles/globalStyles';

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

export default Si;
