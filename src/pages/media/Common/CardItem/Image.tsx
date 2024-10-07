import {NewsItem} from '@/constants/news-data';
import {ImageProps} from '@/pages/media/Common/common.interface';

const Image = ({item}: {item: NewsItem}) => {
  return (
    <div className='w-full h-auto overflow-hidden relative'>
      <img
        src={item.src}
        alt={item.title}
        className='w-full h-auto object-cover group-hover:scale-105 transform transition-transform duration-500'
      />
      <div
        className='absolute inset-0 bg-black bg-opacity-0 
        group-hover:bg-opacity-30 transition duration-1000'
      />
    </div>
  );
};

export default Image;
