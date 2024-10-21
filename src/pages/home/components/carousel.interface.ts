export type CarouselDataType = {
  imageUrl: string;
  title: string;
  description: string;
};

export interface CarouselListProps {
  currentIndex: number;
  CarouselData: CarouselDataType[];
}

export interface CarouselSlideProps {
  imageUrl: string;
  title: string;
  description: string;
  currentIndex: number;
}

export interface CarouselControlsProps {
  prevBtnDisabled: boolean;
  nextBtnDisabled: boolean;
  onPrevButtonClick: () => void;
  onNextButtonClick: () => void;
  currentIndex: number;
  totalIndex: number;
}

export interface CounterProps {
  currentIndex: number;
  totalIndex: number;
}

import {EmblaCarouselType} from 'embla-carousel';

export type UsePrevNextButtonsType = (emblaApi: EmblaCarouselType | undefined) => {
  prevBtnDisabled: boolean;
  nextBtnDisabled: boolean;
  onPrevButtonClick: () => void;
  onNextButtonClick: () => void;
  isVisible: boolean;
};
