export interface DescriptionProps {
  description: string;
  workPerformance: string[];
}

export interface TabContentProps {
  tab: {title: string; summary: string; subTitles: string[]}[];
  activeTab: number;
  images: (string | string[])[];
  commonAnimation: (delay: number) => {
    initial: {opacity: number; y: number};
    whileInView: {opacity: number; y: number};
    transition: {duration: number; delay: number};
  };
}

export interface TabsProps {
  tab: {title: string}[];
  activeTab: number;
  setActiveTab: (index: number) => void;
}

export type HeaderProps = DescriptionProps & Pick<TabContentProps, 'commonAnimation'>;
export type TabProps = TabContentProps & Pick<TabProps, 'setActiveTab'>;
