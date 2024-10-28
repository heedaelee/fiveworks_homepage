import {TFunction} from 'i18next';

import {TreePalm, HandCoins, Clock, Donut, PartyPopper, Cake, LibraryBig, Gift} from 'lucide-react';
import {ItemType} from '@/pages/careers/benefit/benefit.interface';

export const getBenefitItems = (t: TFunction): ItemType[] => [
  {Icon: TreePalm, text: t('careers.benefits.items.annual_leave')},
  {Icon: HandCoins, text: t('careers.benefits.items.annual_allowance')},
  {Icon: Clock, text: t('careers.benefits.items.flexible_hours')},
  {Icon: Donut, text: t('careers.benefits.items.snacks')},
  {Icon: PartyPopper, text: t('careers.benefits.items.celebration_allowance')},
  {Icon: Cake, text: t('careers.benefits.items.birthday_half_day')},
  {Icon: LibraryBig, text: t('careers.benefits.items.education_books')},
  {
    Icon: Gift,
    text: t('careers.benefits.items.holiday_gifts'),
  },
];
