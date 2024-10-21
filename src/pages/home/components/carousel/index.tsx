import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import Fade from 'embla-carousel-fade';
import {usePrevNextButtons} from './control/ArrowButtons';
import CarouselControls from './control';
import {useEffect, useState} from 'react';
import {useTranslation} from 'react-i18next';
import CarouselList from '@/pages/home/components/carousel/slide';
import {getImages} from '@/utils';

const Carousel = () => {
  const {t} = useTranslation();

  const pathNames = getImages('carousel');
  console.log('patNames : ', pathNames);

  const CarouselData = [
    {
      imageUrl: pathNames[0],
      title: 'Welcome, We are Fiveworks',
      description: t('carousel.item1.description'),
    },
    {
      imageUrl: pathNames[1],
      title: t('carousel.item2.title'),
      description: t('carousel.item2.description'),
    },
    {
      imageUrl: pathNames[2],
      title: t('carousel.item3.title'),
      description: t('carousel.item3.description'),
    },
  ];
  // const CarouselData = [
  //   {
  //     imageUrl:
  //       'https://images.unsplash.com/photo-1531973576160-7125cd663d86?q=80&w=3570&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  //     title: 'Welcome, We are Fiveworks',
  //     description: t('carousel.item1.description'),
  //   },
  //   {
  //     imageUrl:
  //       'https://images.unsplash.com/photo-1587727383733-f5222d6855b5?q=80&w=3570&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  //     title: t('carousel.item2.title'),
  //     description: t('carousel.item2.description'),
  //   },
  //   {
  //     imageUrl:
  //       'https://images.unsplash.com/photo-1619472376731-3ca648a34b69?q=80&w=3628&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  //     title: t('carousel.item3.title'),
  //     description: t('carousel.item3.description'),
  //   },
  // ];

  /* duration 화면 전환 속도, delay 한페이지 머무르는 속도 */
  const [emblaRef, emblaApi] = useEmblaCarousel({loop: true, duration: 50}, [
    Fade(),
    Autoplay({
      delay: 5000,
    }),
  ]);
  // console.log('emblaApi : ', emblaApi?.internalEngine().options);
  const [currentIndex, setCurrentIndex] = useState(1);

  const {prevBtnDisabled, nextBtnDisabled, onPrevButtonClick, onNextButtonClick} =
    usePrevNextButtons(emblaApi);

  useEffect(() => {
    if (emblaApi) {
      const onSelect = () => {
        // console.log('호출');
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
        <CarouselList CarouselData={CarouselData} currentIndex={currentIndex} />
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
