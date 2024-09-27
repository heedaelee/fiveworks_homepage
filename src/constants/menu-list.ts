import {ROUTE_PATHS} from './routes';

export interface SubMenuItem {
  to: string;
  label: string;
}

export interface MenuItem {
  to: string;
  label: string;
  subItems?: SubMenuItem[];
}

const {intro, business, media, careers, contact} = ROUTE_PATHS;

export const MENU_LIST: MenuItem[] = [
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
    subItems: [{to: contact.contact, label: '오시는길'}],
  },
];
