export interface DescriptionProps {
  description: string;
  workPerformance: string[];
}

export interface TabContentProps {
  tab: {title: string; summary: string; subTitles: string[]}[];
  activeTab: number;
  images: (string | string[])[];
}

export interface TabsProps {
  tab: {title: string}[];
  activeTab: number;
  setActiveTab: (index: number) => void;
}
