import {ROUTE_PATHS} from './routes';

export interface SubMenuItem {
  to: string;
  label: string;
}

export interface MenuItem {
  to: string;
  label: string;
  subItems: SubMenuItem[];
}

const {intro, business, media, careers, contact} = ROUTE_PATHS;

export const MENU_LIST: MenuItem[] = [
  {
    label: 'menulist.intro.title',
    to: intro.overview,
    subItems: [
      {to: intro.overview, label: 'menulist.intro.items.overview'},
      {to: intro.group, label: 'menulist.intro.items.group'},
      {to: intro.history, label: 'menulist.intro.items.history'},
      {to: intro.partners, label: 'menulist.intro.items.partners'},
    ],
  },
  {
    label: 'menulist.business.title',
    to: business.ai,
    subItems: [
      {to: business.ai, label: 'menulist.business.items.ai'},
      {to: business.si, label: 'menulist.business.items.si'},
      {to: business.bigdata, label: 'menulist.business.items.bigdata'},
      {to: business.product, label: 'menulist.business.items.product'},
    ],
  },
  {
    label: 'menulist.media.title',
    to: media.news,
    subItems: [
      {to: media.news, label: 'menulist.media.items.news'},
      {to: media.event, label: 'menulist.media.items.event'},
    ],
  },
  {
    label: 'menulist.careers.title',
    to: careers.human,
    subItems: [
      {to: careers.human, label: 'menulist.careers.items.human'},
      {to: careers.process, label: 'menulist.careers.items.process'},
      {to: careers.benefit, label: 'menulist.careers.items.benefit'},
    ],
  },
  {
    label: 'menulist.contact.title',
    to: contact.contact,
    subItems: [{to: contact.contact, label: 'menulist.contact.items.contact'}],
  },
];
/* export const MENU_LIST: MenuItem[] = [
  {
    label: '회사소개',
    to: intro.overview,
    subItems: [
      {to: intro.overview, label: 'Overview'},
      {to: intro.group, label: '조직도'},
      {to: intro.history, label: '연혁'},
      {to: intro.partners, label: '파트너'},
    ],
  },
  {
    label: '사업영역',
    to: business.ai,
    subItems: [
      {to: business.ai, label: 'AI'},
      {to: business.si, label: 'SI'},
      {to: business.bigdata, label: 'Big Data'},
      {to: business.product, label: '제품 개발'},
    ],
  },
  {
    label: '미디어센터',
    to: media.news,
    subItems: [
      {to: media.news, label: 'News'},
      {to: media.event, label: 'Event'},
    ],
  },
  {
    label: '채용',
    to: careers.human,
    subItems: [
      {to: careers.human, label: '인재상'},
      {to: careers.process, label: '채용절차'},
      {to: careers.benefit, label: '복리후생'},
    ],
  },
  {
    label: 'CONTACT',
    to: contact.contact,
    subItems: [{to: contact.contact, label: 'CONTACT'}],
  },
];
 */
