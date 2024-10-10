import {NextButton, PrevButton} from './ArrowButtons';

interface CarouselControlsProps {
  prevBtnDisabled: boolean;
  nextBtnDisabled: boolean;
  onPrevButtonClick: () => void;
  onNextButtonClick: () => void;
  currentIndex: number;
  totalIndex: number;
}

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
        <div className='flex flex-row items-baseline gap-2 text-white'>
          <div key={currentIndex} className='text-[50px] sm:text-[70px] carousel-number-fade-in'>
            {currentIndex}
          </div>
          <div className='text-[20px] carousel-number-fade-in'>/</div>
          <div className='text-[20px] carousel-number-fade-in'>{totalIndex}</div>
        </div>
        <NextButton
          className={`w-4 text-white  `}
          onClick={onNextButtonClick}
          disabled={nextBtnDisabled}
        />
        {/* <div
        className={`embla__dots hidden md:flex absolute bottom-[5%] left-[50%] ${Z_INDEX.CAROUSEL_BUTTON}`}>
        {}
      </div> */}
      </div>
    </div>
  );
};

export default CarouselControls;
