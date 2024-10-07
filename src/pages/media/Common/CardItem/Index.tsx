import {CardItemProps} from '@/pages/media/Common/common.interface';
import Image from '@/pages/media/Common/CardItem/Image';
import TextBox from '@/pages/media/Common/CardItem/TextBox';

const CardItem = ({item, handleCardClick}: CardItemProps) => {
  return (
    /* 680x453 img */
    <div
      className='w-full h-auto cursor-pointer group'
      onClick={() => handleCardClick(item.link || item.src)}>
      <Image item={item} />
      <TextBox item={item} />
    </div>
  );
};

export default CardItem;
