import {Pagination} from '@/components/pagination';
import {EventItem, eventData} from '@/constants/event-data';
import usePagination from '@/hooks/usePagination';
import CardList from '@/pages/media/Common/CardList';
import {useState} from 'react';
// import GalleryPhotoModalWrapper from './backup/GalleryPhotoModalWrapper';
import {useTranslation} from 'react-i18next';
import EventContent from './EventContent';

const EVENT_COUNT_PER_PAGE = 9;

const Event = () => {
  const [totalCnt] = useState(eventData.length);
  // const [selectedImage, setSelectedImage] = useState<EventItem['src'] | null>(null);
  const [selectedEvent, setSelectedEvent] = useState<EventItem | null>(null);
  // const [isImageLoaded, setIsImageLoaded] = useState<boolean>(false);
  // const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const {page, count, handlePageChange, next, prev} = usePagination(
    1,
    totalCnt,
    EVENT_COUNT_PER_PAGE,
  );

  const startIndex = (page - 1) * EVENT_COUNT_PER_PAGE;
  const endIndex = startIndex + EVENT_COUNT_PER_PAGE;
  const currentItems = eventData.slice(startIndex, endIndex);

  /**
   * 이미지 클릭시 모달창 열기
   * */
  const handleImageClick = (item: string | EventItem) => {
    if (typeof item === 'string') return;
    console.log('item : ', item);
    setSelectedEvent(item);
    // setIsModalOpen(true);
  };
  const handleBackClick = () => {
    setSelectedEvent(null);
  };

  const {t} = useTranslation();

  return (
    <div className='container mx-auto flex flex-col gap-[60px] mb-[150px]'>
      {selectedEvent ? (
        <EventContent event={selectedEvent} onBack={handleBackClick} />
      ) : (
        <>
          {totalCnt !== 0 ? (
            <>
              <div>{t('media.totalItems', {totalCnt})}</div>
              <CardList data={currentItems} type='event' handleCardClick={handleImageClick} />
              <Pagination
                count={count}
                page={page}
                onChange={handlePageChange}
                next={next}
                prev={prev}
              />
            </>
          ) : (
            <div>게시물이 없습니다.</div>
          )}
        </>
      )}
    </div>
  );
};

export default Event;
