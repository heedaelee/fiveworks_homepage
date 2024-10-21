import {EventDataType, EventItem} from '@/constants/event-data';
import {NewsDataType, NewsItem} from '@/constants/news-data';

export interface cardListProps {
  data: NewsDataType | EventDataType;
  type: 'news' | 'event';
  handleCardClick: (link: string | EventItem) => void;
}

export interface CardItemProps {
  item: NewsItem | EventItem;
  type: 'news' | 'event';
  handleCardClick: (link: string | EventItem) => void;
}
