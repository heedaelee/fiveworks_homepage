import {EventItem} from '@/constants/event-data';
import {NewsItem} from '@/constants/news-data';

const Image = ({item}: {item: NewsItem | EventItem}) => {
  return (
    <div className='w-full h-auto overflow-hidden relative'>
      <img
        src={item.src}
        alt={item.title}
        className='w-full h-[300px] object-cover group-hover:scale-105 transform transition-transform duration-500'
      />
      <div
        className='absolute inset-0 bg-black bg-opacity-0 
        group-hover:bg-opacity-30 transition duration-1000'
      />
    </div>
  );
};

export default Image;
