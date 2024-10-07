import {CardItemProps} from '@/pages/media/Common/common.interface';

const CardItem = ({item}: CardItemProps) => {
  const handleCardClick = (url: string) => {
    console.log('card clicked', url);
    window.open(url, '_blank');
  };

  return (
    /* 680x453 img */
    <div className='w-full h-auto cursor-pointer group' onClick={() => handleCardClick(item.link)}>
      <div className='w-full h-auto overflow-hidden relative'>
        <img
          src={item.src}
          alt={item.title}
          className='w-full h-auto object-cover group-hover:scale-105 transform transition-transform duration-500'
        />
        <div
          className='absolute inset-0 bg-black bg-opacity-0 
        group-hover:bg-opacity-30 transition duration-1000'></div>
      </div>
      <div className='p-4 flex flex-col justify-between'>
        <h2 className='font-bold mb-8 text-[20px] relative w-max tracking-[-0.05em]	'>
          {item.title}
          <span className='absolute left-0 bottom-0 w-0 h-[1.5px] bg-black transition-all duration-500 group-hover:w-full'></span>
        </h2>
        <p className='text-[16px] text-gray-400'>{item.regDate}</p>
      </div>
    </div>
  );
};

export default CardItem;
