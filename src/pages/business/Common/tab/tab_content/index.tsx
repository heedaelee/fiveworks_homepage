import {useState} from 'react';
import {motion} from 'framer-motion';
import {TabContentProps} from '@/pages/business/Common/common.interface';
import GalleryPhotoModalWrapper from '@/pages/media/event/backup/GalleryPhotoModalWrapper';
import {EventItem} from '@/constants/event-data';
import ImageWrapper from '@/pages/business/Common/tab/tab_content/ImageWrapper';

const TabContent = ({tab, activeTab, images, commonAnimation}: TabContentProps) => {
  const [selectedImage, setSelectedImage] = useState<EventItem['src'] | null>(null);
  const [isImageLoaded, setIsImageLoaded] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  /**
   * 이미지 클릭시 모달창 열기
   * */
  const handleImageClick = (image: string) => {
    // console.log('image', image);
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
    <div className='w-full p-0 md:p-6 flex flex-col gap-16'>
      {/* <motion.div {...commonAnimation(0.2)}>
        <Content tab={tab} activeTab={activeTab} />
      </motion.div> */}
      <motion.div {...commonAnimation(0.3)}>
        <ImageWrapper
          tab={tab}
          activeTab={activeTab}
          images={images}
          handleImageClick={handleImageClick}
        />
      </motion.div>
      {isModalOpen && (
        <GalleryPhotoModalWrapper
          isModalOpen={isModalOpen}
          selectedImage={selectedImage}
          closeModal={closeModal}
          handleImageLoad={handleImageLoad}
          isImageLoaded={isImageLoaded}
        />
      )}
    </div>
  );
};

export default TabContent;
