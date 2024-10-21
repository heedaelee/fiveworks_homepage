import {EventItem} from '@/constants/event-data';
import {NewsItem} from '@/constants/news-data';

const TextBox = ({item}: {item: NewsItem | EventItem}) => {
  return (
    <div className='p-4 flex flex-col justify-between group '>
      <h2 className='font-bold mb-8 text-[20px] relative tracking-[-0.05em] overflow-hidden whitespace-nowrap overflow-ellipsis inline-block '>
        <span className='relative'>
          {item.title}
          <span className='absolute left-0 bottom-0 w-0 h-[1.5px] bg-black transition-all duration-500 group-hover:w-full' />
        </span>
      </h2>
      <p className='text-[16px] text-gray-400'>{item.regDate}</p>
    </div>
  );
};

export default TextBox;
