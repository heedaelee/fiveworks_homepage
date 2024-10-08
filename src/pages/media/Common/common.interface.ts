import {EventDataType, EventItem} from '@/constants/event-data';
import {NewsDataType, NewsItem} from '@/constants/news-data';

export interface cardListProps {
  data: NewsDataType | EventDataType;
  handleCardClick: (link: string) => void;
}

export interface CardItemProps {
  item: NewsItem | EventItem;
  handleCardClick: (link: string) => void;
}

