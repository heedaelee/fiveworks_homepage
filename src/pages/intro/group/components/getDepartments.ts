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
        name: t('intro.group.items.vicePresident'),
        children: [
          {
            name: t('intro.group.items.dataSolution.title'),
            children: [
              t('intro.group.items.dataSolution.items.solutionA'),
              t('intro.group.items.dataSolution.items.solutionB'),
              t('intro.group.items.dataSolution.items.solutionC'),
              t('intro.group.items.dataSolution.items.solutionD'),
            ],
          },
          {
            name: t('intro.group.items.management.title'),
            children: [
              t('intro.group.items.management.items.management'),
              t('intro.group.items.management.items.strategy'),
            ],
          },
          {
            name: t('intro.group.items.ai.title'),
            children: [t('intro.group.items.ai.items.ai')],
          },
          {
            name: t('intro.group.items.public.title'),
            children: [
              t('intro.group.items.public.items.bigData'),
              t('intro.group.items.public.items.publicBusiness'),
            ],
          },
        ],
      },
    ],
  },
];
