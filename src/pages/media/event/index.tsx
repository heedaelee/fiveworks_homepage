import {EventItem, eventData} from '@/constants/event-data';

import {useState} from 'react';
// import GalleryPhotoModalWrapper from './backup/GalleryPhotoModalWrapper';
import EventDetail from './eventDetail';
import {CardPramType, handleCardClickType} from '../Common/common.interface';
import EventList from './eventList';

const Event = () => {
  const [totalCnt] = useState(eventData.length);
  // const [selectedImage, setSelectedImage] = useState<EventItem['src'] | null>(null);
  const [selectedEvent, setSelectedEvent] = useState<EventItem | null>(null);
  // const [isImageLoaded, setIsImageLoaded] = useState<boolean>(false);
  // const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  /**
   * 이미지 클릭시 모달창 열기
   * */
  const handleImageClick: handleCardClickType = ({link, type}: CardPramType) => {
    if (type !== 'event') return;
    setSelectedEvent(link);
    // setIsModalOpen(true);
  };
  const handleBackClick = () => {
    setSelectedEvent(null);
  };

  return (
    <div className='container mx-auto flex flex-col gap-[60px] mb-[150px]'>
      {selectedEvent ? (
        <EventDetail event={selectedEvent} onBack={handleBackClick} />
      ) : (
        <EventList eventData={eventData} totalCnt={totalCnt} handleImageClick={handleImageClick} />
      )}
    </div>
  );
};

export default Event;
