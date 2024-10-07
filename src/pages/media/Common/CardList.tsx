import CardItem from '@/pages/media/Common/CardItem';
import {cardListProps} from '@/pages/media/Common/common.interface';

const CardList = ({data}: cardListProps) => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-3 gap-4 gap-y-16'>
      {data.map((item, index) => (
        <CardItem item={item} key={index} />
      ))}
    </div>
  );
};

export default CardList;
