import CarouselSlide from '@/pages/home/components/carousel/slide/CaroselSlide';
import {CarouselListProps} from '@/pages/home/components/carousel.interface';

const CarouselList = ({currentIndex, CarouselData}: CarouselListProps) => {
  return (
    <div className='embla__container flex h-full'>
      {CarouselData.map((data, index) => (
        <CarouselSlide key={index} {...data} currentIndex={currentIndex} />
      ))}
    </div>
  );
};

export default CarouselList;
