import useEmblaCarousel from 'embla-carousel-react';
import './carosule.css';
import Autoplay from 'embla-carousel-autoplay';
import Fade from 'embla-carousel-fade';
import CarouselSlide from './CaroselSlide';
import {usePrevNextButtons} from './ArrowButtons';
import CarouselControls from './CarouselControls';
import {useEffect, useState} from 'react';
import {CarouselData} from './data';

const Carousel = () => {
  /* duration 화면 전환 속도, delay 한페이지 머무르는 속도 */
  const [emblaRef, emblaApi] = useEmblaCarousel({loop: true, duration: 300}, [
    Fade(),
    Autoplay({
      delay: 6000,
    }),
  ]);
  const [currentIndex, setCurrentIndex] = useState(1);

  const {prevBtnDisabled, nextBtnDisabled, onPrevButtonClick, onNextButtonClick} =
    usePrevNextButtons(emblaApi);

  useEffect(() => {
    if (emblaApi) {
      const onSelect = () => {
        // console.log('emblaApi.selectedScrollSnap()', emblaApi.selectedScrollSnap());
        const selectedIndex = emblaApi.selectedScrollSnap();
        setCurrentIndex(selectedIndex + 1);
      };

      emblaApi.on('select', onSelect);
      onSelect(); // 초기 인덱스를 설정하기 위해 호출

      return () => {
        emblaApi.off('select', onSelect);
      };
    }
  }, [emblaApi]);

  return (
    <div className='embla overflow-hidden w-full h-full absolute'>
      <div className='embla_viewport h-full' ref={emblaRef}>
        <div className='embla__container flex h-full'>
          {CarouselData.map((data, index) => (
            <CarouselSlide key={index} {...data} />
          ))}
        </div>
        <CarouselControls
          prevBtnDisabled={prevBtnDisabled}
          nextBtnDisabled={nextBtnDisabled}
          onPrevButtonClick={onPrevButtonClick}
          onNextButtonClick={onNextButtonClick}
          currentIndex={currentIndex}
          totalIndex={CarouselData.length}
        />
      </div>
    </div>
  );
};

export default Carousel;
