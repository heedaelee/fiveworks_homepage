interface CarouselSlideProps {
  imageUrl: string;
  title: string;
  description: string;
}

const CarouselSlide = ({imageUrl, title, description}: CarouselSlideProps) => {
  return (
    <div className='embla__slide relative flex-[0_0_100%]'>
      <img src={imageUrl} className='h-full w-full object-cover absolute' />
      <div className='absolute inset-0 bg-black opacity-50' />
      <div className='carousel-caption absolute top-[48%] left-[38%] transform -translate-x-1/2 -translate-y-1/2 text-white z-50'>
        <h5 className='font-[600] text-[40px] sm:text-[65px]'>{title}</h5>
        <p className="mt-2 sm:mt-0">{description}</p>
      </div>
    </div>
  );
};

export default CarouselSlide;
