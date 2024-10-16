import {TabContentProps, TabProps} from '../common.interface';
import {motion} from 'framer-motion';
import TabTitles from './tab_title';
import TabsContent from './tab_content';
import {useTranslation} from 'react-i18next';

const TabComponent = ({tab, activeTab, setActiveTab, images, commonAnimation}: TabProps) => {
  const {t} = useTranslation();
  const translatedTabs = t(tab, {returnObjects: true}) as TabContentProps['tab'];

  return (
    <div className='w-full mt-16 flex flex-col gap-9'>
      <motion.div {...commonAnimation(0.2)}>
        <TabTitles tab={translatedTabs} activeTab={activeTab} setActiveTab={setActiveTab} />
      </motion.div>
      <TabsContent
        tab={translatedTabs}
        activeTab={activeTab}
        images={images}
        commonAnimation={commonAnimation}
      />
    </div>
  );
};

export default TabComponent;
