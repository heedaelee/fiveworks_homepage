import {TFunction} from 'i18next';

export interface Department {
  name: string;
  children?: (Department | string)[];
}

export const getDepartments = (t: TFunction): Department[] => [
  {
    name: 'CEO',
    children: [
      {
        name: t('intro.group.items.dataSolution.title'),
      },
      {
        name: t('intro.group.items.bigdata.title'),
      },
      {
        name: t('intro.group.items.management.title'),
      },
      {
        name: t('intro.group.items.ai.title'),
      },
      {
        name: t('intro.group.items.public.title'),
      },
    ],
  },
];
