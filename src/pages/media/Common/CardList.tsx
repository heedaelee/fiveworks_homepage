import CardItem from '@/pages/media/Common/CardItem/Index';
import {cardListProps} from '@/pages/media/Common/common.interface';

const CardList = ({data, type, handleCardClick}: cardListProps) => {
  return (
    <div className='grid grid-cols-1 md md:grid-cols-3 gap-4 gap-y-16'>
      {data.map((item, index) => (
        <CardItem item={item} type={type} handleCardClick={handleCardClick} key={index} />
      ))}
    </div>
  );
};

export default CardList;
