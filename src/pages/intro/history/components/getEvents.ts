import {TFunction} from 'i18next';

type EventType = {
  date: string;
  content: string;
};

// 최신 데이터 위에서 부터 보여주기 위해 배열을 역순으로 정렬, 위에서 추가된 데이터가 먼저 보이게 됨
const getEvents = (t: TFunction): EventType[] => [
  {
    date: '2024.10',
    content: t('intro.history.items.content_9'),
  },
  {
    date: '2023.07',
    content: t('intro.history.items.content_8'),
  },
  {date: '2023.05', content: t('intro.history.items.content_7')},
  {date: '2023.01', content: t('intro.history.items.content_6')},
  {date: '2021.11', content: t('intro.history.items.content_5')},
  {date: '2021.02', content: t('intro.history.items.content_4')},
  {date: '2020.07', content: t('intro.history.items.content_3')},
  {date: '2020.02', content: t('intro.history.items.content_2')},
  {date: '2019.08', content: t('intro.history.items.content_1')},
];

export default getEvents;
