import useMobileCheck from '@/hooks/useMobileCheck';
import {useEffect, useState} from 'react';

interface PhotoModalProps {
  selectedImage: string;
  closeModal: () => void;
  handleImageLoad: () => void;
  modalRef: React.RefObject<HTMLDivElement>;
  isImageLoaded: boolean;
  handleImageClick: (image: string) => void;
  images: string | string[];
}

const GalleryPhotoModal = ({
  selectedImage,
  closeModal,
  handleImageLoad,
  modalRef,
  isImageLoaded,
  images,
  handleImageClick,
}: PhotoModalProps) => {
  const isMultipleImages = Array.isArray(images);
  // console.log('현재 이미지 : ', selectedImage);
  // console.log('전체 이미지: ', images);

  const [currentIndex, setCurrentIndex] = useState(images.indexOf(selectedImage));
  const isMobile = useMobileCheck();

  useEffect(() => {
    handleImageClick(images[currentIndex]);
  }, [currentIndex]);

  const showPreviousImage = () => {
    if (!isMultipleImages) return;
    setCurrentIndex(prevIndex => (prevIndex > 0 ? prevIndex - 1 : prevIndex));
  };

  const showNextImage = () => {
    if (!isMultipleImages) return;
    setCurrentIndex(prevIndex => (prevIndex < images.length - 1 ? prevIndex + 1 : prevIndex));
  };

  return (
    <div
      className={`fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-[1000]`}>
      <div ref={modalRef} className='bg-white p4 rounded relative'>
        <img
          src={selectedImage}
          className='w-[400px] md:w-auto h-auto max-h-screen object-contain'
          onLoad={handleImageLoad}
          onClick={closeModal}
        />
        {isImageLoaded && (
          <>
            {isMultipleImages && !isMobile && (
              <>
                <button
                  onClick={showPreviousImage}
                  className={`absolute -left-10 top-1/2 transform -translate-y-1/2 text-white text-3xl ${currentIndex === 0 ? 'hidden' : ''}`}>
                  &#9664; {/* Left arrow */}
                </button>
                <button
                  onClick={showNextImage}
                  className={`absolute -right-10 top-1/2 transform -translate-y-1/2 text-white text-3xl ${currentIndex === images.length - 1 ? 'hidden' : ''}`}>
                  &#9654; {/* Right arrow */}
                </button>
              </>
            )}
            <button
              onClick={closeModal}
              className='hidden absolute -top-3 md:block -right-10 text-white text-3xl'>
              &times;
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default GalleryPhotoModal;
