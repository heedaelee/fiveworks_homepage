import {TFunction} from 'i18next';
import {CalendarClock, Clock} from 'lucide-react';

export const getProcessSteps = (t: TFunction) => {
  return [
    {
      step: 1,
      title: t('careers.process.selection.steps.item1.title'),
      description: t('careers.process.selection.steps.item1.content'),
    },
    {
      step: 2,
      title: t('careers.process.selection.steps.item2.title'),
      description: t('careers.process.selection.steps.item2.content'),
    },
    {
      step: 3,
      title: t('careers.process.selection.steps.item3.title'),
      description: t('careers.process.selection.steps.item3.content'),
    },
    {
      step: 4,
      title: t('careers.process.selection.steps.item4.title'),
      description: t('careers.process.selection.steps.item4.content'),
    },
  ];
};

export const getRecruitmentSteps = (t: TFunction) => [
  {
    icon: CalendarClock,
    title: t('careers.process.recruitment.steps.item1.title'),
    description: t('careers.process.recruitment.steps.item1.content1'),
    description2: t('careers.process.recruitment.steps.item1.content2'),
    list1: t('careers.process.recruitment.steps.item1.list1'),
    list2: t('careers.process.recruitment.steps.item1.list2'),
  },
  {
    icon: Clock,
    title: t('careers.process.recruitment.steps.item2.title'),
    description: t('careers.process.recruitment.steps.item2.content1'),
    description2: t('careers.process.recruitment.steps.item2.content2'),
    list1: t('careers.process.recruitment.steps.item2.list1'),
    list2: t('careers.process.recruitment.steps.item2.list2'),
  },
];
