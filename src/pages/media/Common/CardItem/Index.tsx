import {CardItemProps} from '@/pages/media/Common/common.interface';
import Image from '@/pages/media/Common/CardItem/Image';
import TextBox from '@/pages/media/Common/CardItem/TextBox';
import {NewsItem} from '@/constants/news-data';
import {EventItem} from '@/constants/event-data';
import {GlobalStyles} from '@/styles/globalStyles';

// 타입 가드 함수
// function isNewsItem(item: NewsItem | EventItem): item is NewsItem {
//   return (item as NewsItem).link !== undefined;
// }

const CardItem = ({item, type, handleCardClick}: CardItemProps) => {
  // const link = isNewsItem(item) ? item.link : item.src;

  const handleClick = () => {
    if (type === 'news') {
      handleCardClick((item as NewsItem).link);
    } else if (type === 'event') {
      handleCardClick(item as EventItem);
    }
  };
  return (
    /* 680x453 img */
    <div
      className={`w-full h-auto cursor-pointer ${GlobalStyles.classes.box_shadow}`}
      onClick={handleClick}>
      <Image item={item} />
      <TextBox item={item} />
    </div>
  );
};

export default CardItem;
