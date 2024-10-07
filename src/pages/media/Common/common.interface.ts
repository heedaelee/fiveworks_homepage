import {NewsDataType, NewsItem} from '@/constants/news-data';

export interface cardListProps {
  data: NewsDataType;
}

export interface CardItemProps {
  item: NewsItem;
}
