import {TFunction} from 'i18next';

import {TreePalm, HandCoins, Clock, Donut, PartyPopper, Cake, LibraryBig, Gift} from 'lucide-react';
import { ItemType } from './benefit.interface';

export const getBenefitItems = (t: TFunction): ItemType[] => [
  {Icon: TreePalm, text: t('benefits.items.annual_leave')},
  {Icon: HandCoins, text: t('benefits.items.annual_allowance')},
  {Icon: Clock, text: t('benefits.items.flexible_hours')},
  {Icon: Donut, text: t('benefits.items.snacks')},
  {Icon: PartyPopper, text: t('benefits.items.celebration_allowance')},
  {Icon: Cake, text: t('benefits.items.birthday_half_day')},
  {Icon: LibraryBig, text: t('benefits.items.education_books')},
  {
    Icon: Gift,
    text: t('benefits.items.holiday_gifts'),
  },
];
