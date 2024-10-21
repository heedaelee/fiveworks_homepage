export interface BusinessSectionProps {
  activeTab: number;
  setActiveTab: (value: number) => void;
  tab_key: string;
  description_key: string;
  workPerformance_key: string;
  images: (string | string[])[];
}

export interface DescriptionProps {
  description_key: string;
  workPerformance_key: string;
}

export interface PerformanceListProps {
  items: string[];
}

export interface TabContentProps {
  tab: TabType[];
  activeTab: number;
  images: (string | string[])[];
  commonAnimation: (delay: number) => {
    initial: {opacity: number; y: number};
    whileInView: {opacity: number; y: number};
    transition: {duration: number; delay: number};
  };
}

export type TabType = {title: string; summary: string; subTitles: string[]};

export interface TabTitleType {
  tab: {title: string}[];
  activeTab: number;
  setActiveTab: (index: number) => void;
}

export type HeaderProps = DescriptionProps & Pick<TabContentProps, 'commonAnimation'>;
export type TabIndexProps = Omit<BusinessSectionProps, keyof DescriptionProps> &
  Pick<TabContentProps, 'commonAnimation'>;
