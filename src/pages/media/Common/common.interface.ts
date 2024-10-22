import {EventDataType, EventItem} from '@/constants/event-data';
import {NewsDataType, NewsItem} from '@/constants/news-data';

export interface cardListProps {
  data: NewsDataType | EventDataType;
  type: 'news' | 'event';
  handleCardClick: handleCardClickType;
}

export interface CardItemProps {
  item: NewsItem | EventItem;
  type: 'news' | 'event';
  handleCardClick: handleCardClickType;
}

export type handleCardClickType = (param: CardPramType) => void;
export type CardPramType = {type: 'news'; link: string} | {type: 'event'; link: EventItem};
