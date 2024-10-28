import {TabIndexProps, TabType} from '@/pages/business/Common/common.interface';
import {motion} from 'framer-motion';
import TabTitles from '@/pages/business/Common/tab/tab_title';
import TabContent from '@/pages/business/Common/tab/tab_content';
import {useTranslation} from 'react-i18next';

const TabContainer = ({tab_key, activeTab, setActiveTab, images, commonAnimation}: TabIndexProps) => {
  const {t} = useTranslation();
  const translatedTabs = t(tab_key, {returnObjects: true}) as TabType[];

  // console.log('translatedTabs : ');
  // console.log(translatedTabs);
  // console.log('tabIndex', images);
  return (
    <div className='w-full mt-16 flex flex-col gap-9'>
      <motion.div {...commonAnimation(0.2)}>
        <TabTitles tab={translatedTabs} activeTab={activeTab} setActiveTab={setActiveTab} />
      </motion.div>
      <TabContent
        tab={translatedTabs}
        activeTab={activeTab}
        images={images}
        commonAnimation={commonAnimation}
      />
    </div>
  );
};

export default TabContainer;
