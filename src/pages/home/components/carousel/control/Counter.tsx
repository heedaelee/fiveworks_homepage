import {CounterProps} from '@/pages/home/components/carousel.interface';

const Counter = ({currentIndex, totalIndex}: CounterProps) => {
  return (
    <div className='flex flex-row items-baseline gap-2 text-white'>
      <div key={currentIndex} className='text-[50px] sm:text-[70px] carousel-number-fade-in'>
        {currentIndex}
      </div>
      <div className='text-[20px] carousel-number-fade-in'>/</div>
      <div className='text-[20px] carousel-number-fade-in'>{totalIndex}</div>
    </div>
  );
};

export default Counter;
