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
    to: business.bioinformatics,
    subItems: [
      {to: business.bioinformatics, label: 'menulist.business.items.bioinformatics'},
      {to: business.biometrics, label: 'menulist.business.items.biometrics'},
      {to: business.imageProcessing, label: 'menulist.business.items.imageProcessing'},
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
