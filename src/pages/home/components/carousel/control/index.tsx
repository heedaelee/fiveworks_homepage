import {CarouselControlsProps} from '@/pages/home/components/carousel.interface';
import {NextButton, PrevButton} from '@/pages/home/components/carousel/control/ArrowButtons';
import Counter from '@/pages/home/components/carousel/control/Counter';

const CarouselControls = ({
  prevBtnDisabled,
  nextBtnDisabled,
  onPrevButtonClick,
  onNextButtonClick,
  currentIndex,
  totalIndex,
}: CarouselControlsProps) => {
  return (
    <div className='embla__controls absolute top-[45%] left-[65%] sm:left-[70%] w-[130px] h-[80px] sm:w-[200px] sm:h-[100px] flex flex-row items-center '>
      <div className='relative w-full flex flex-row justify-around'>
        <PrevButton
          className={`w-4 text-white `}
          onClick={onPrevButtonClick}
          disabled={prevBtnDisabled}
        />
        <Counter currentIndex={currentIndex} totalIndex={totalIndex} />
        <NextButton
          className={`w-4 text-white  `}
          onClick={onNextButtonClick}
          disabled={nextBtnDisabled}
        />
      </div>
    </div>
  );
};

export default CarouselControls;
