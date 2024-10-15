import Title from '@/pages/business/Common/BusinessTitle';
import Description from '@/pages/business/Common/Description';
import TabTitles from '@/pages/business/Common/TabTitles';
import TabsContent from '@/pages/business/Common/tab_content';
import {GlobalStyles} from '@/styles/globalStyles';
import {motion, AnimatePresence} from 'framer-motion';
import {TabContentProps, TabsProps} from './common.interface';

interface BusinessSectionProps {
  activeTab: number;
  setActiveTab: (value: number) => void;
  tab: TabContentProps['tab'];
  description: string;
  workPerformance: string[];
  images: (string | string[])[];
}

const BusinessSection = ({
  activeTab,
  setActiveTab,
  tab,
  description,
  workPerformance,
  images,
}: BusinessSectionProps) => {
  return (
    <div className={GlobalStyles.classes.businessContainer}>
      <div className='w-full flex flex-col items-center animate-fade-in '>
        <Title />
        <Description description={description} workPerformance={workPerformance} />
      </div>
      <motion.div
        initial={{opacity: 0, y: 50}}
        whileInView={{opacity: 1, y: 0}}
        transition={{duration: 1, delay: 0.3}}
        className='w-full mt-16 flex flex-col gap-9'>
        <TabTitles tab={tab} activeTab={activeTab} setActiveTab={setActiveTab} />
        <TabsContent tab={tab} activeTab={activeTab} images={images} />
      </motion.div>
    </div>
  );
};

export default BusinessSection;
