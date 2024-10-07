import {Pagination} from '@/components/pagination';
import {EventItem, mockEventData} from '@/constants/event-data';
import usePagination from '@/hooks/usePagination';
import CardList from '@/pages/media/Common/CardList';
import {useState} from 'react';
import GalleryPhotoModalWrapper from './GalleryPhotoModalWrapper';

const EVENT_COUNT_PER_PAGE = 9;

const Event = () => {
  const [totalCnt] = useState(mockEventData.length);
  const [selectedImage, setSelectedImage] = useState<EventItem['src'] | null>(null);
  const [isImageLoaded, setIsImageLoaded] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const {page, count, handlePageChange, next, prev} = usePagination(
    1,
    totalCnt,
    EVENT_COUNT_PER_PAGE,
  );

  const startIndex = (page - 1) * EVENT_COUNT_PER_PAGE;
  const endIndex = startIndex + EVENT_COUNT_PER_PAGE;
  const currentItems = mockEventData.slice(startIndex, endIndex);

  /**
   * 이미지 클릭시 모달창 열기
   * */
  const handleImageClick = (image: string) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  /**
   * 모달창 닫기
   */
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  /**
   * 이미지 로드 완료시, 이미지 로드 상태 변경 -> x버튼 영향
   */
  const handleImageLoad = () => {
    setIsImageLoaded(true);
  };

  return (
    <div className='container mx-auto flex flex-col gap-[60px] mb-[150px]'>
      <div>총 {totalCnt} 개의 게시물이 있습니다.</div>
      <CardList data={currentItems} handleCardClick={handleImageClick} />
      <Pagination count={count} page={page} onChange={handlePageChange} next={next} prev={prev} />
      <GalleryPhotoModalWrapper
        isModalOpen={isModalOpen}
        selectedImage={selectedImage}
        closeModal={closeModal}
        handleImageLoad={handleImageLoad}
        isImageLoaded={isImageLoaded}
      />
    </div>
  );
};

export default Event;
