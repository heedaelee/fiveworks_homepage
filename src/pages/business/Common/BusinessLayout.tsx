import {TabContentProps} from '@/pages/business/Common/common.interface';
import Header from '@/pages/business/Common/header';
import {GlobalStyles} from '@/styles/globalStyles';
import TabComponent from './tab';

interface BusinessSectionProps {
  activeTab: number;
  setActiveTab: (value: number) => void;
  tab: TabContentProps['tab'];
  description: string;
  workPerformance: string[];
  images: (string | string[])[];
}

const BusinessLayout = ({
  activeTab,
  setActiveTab,
  tab,
  description,
  workPerformance,
  images,
}: BusinessSectionProps) => {
  const commonAnimation = (delay: number) => ({
    initial: {opacity: 0, y: -20},
    whileInView: {opacity: 1, y: 0},
    transition: {duration: 1, delay: delay},
  });

  return (
    <div className={GlobalStyles.classes.businessContainer}>
      <Header
        description={description}
        workPerformance={workPerformance}
        commonAnimation={commonAnimation}
      />
      <TabComponent
        tab={tab}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        images={images}
        commonAnimation={commonAnimation}
      />
    </div>
  );
};

export default BusinessLayout;
