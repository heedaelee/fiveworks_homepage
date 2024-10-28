import Header from '@/pages/business/Common/header';
import {GlobalStyles} from '@/styles/globalStyles';
import TabContainer from './tab';
import {BusinessSectionProps} from '@/pages/business/Common/common.interface';

const BusinessLayout = ({
  activeTab,
  setActiveTab,
  tab_key,
  description_key,
  workPerformance_key,
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
        description_key={description_key}
        workPerformance_key={workPerformance_key}
        commonAnimation={commonAnimation}
      />
      <TabContainer
        tab_key={tab_key}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        images={images}
        commonAnimation={commonAnimation}
      />
    </div>
  );
};

export default BusinessLayout;
