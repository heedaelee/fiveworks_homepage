import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import Fade from 'embla-carousel-fade';
import {usePrevNextButtons} from './control/ArrowButtons';
import CarouselControls from './control';
import {useEffect, useState} from 'react';
import {useTranslation} from 'react-i18next';
import CarouselList from '@/pages/home/components/carousel/slide';

const Carousel = () => {
  const [pathNames, setPathNames] = useState<string[]>([]);
  const {t} = useTranslation();

  const images = import.meta.glob('/src/assets/img/pages/home/carousel/*.{png,jpg,jpeg,svg}');

  useEffect(() => {
    const loadImages = async () => {
      const paths = Object.keys(images);
      const urls = await Promise.all(
        paths.map(path => images[path]().then((mod: any) => mod.default)),
      );
      setPathNames(urls);
    };

    loadImages();
  }, []);

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
