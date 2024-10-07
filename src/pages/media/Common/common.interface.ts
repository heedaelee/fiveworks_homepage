import {NewsDataType, NewsItem} from '@/constants/news-data';

export interface cardListProps {
  data: NewsDataType;
  handleCardClick: (link: string) => void;
}

export interface CardItemProps {
  item: NewsItem;
  handleCardClick: (link: string) => void;
}