import useOutsideClick from '@/hooks/useOutsideClick';
import GalleryPhotoModal from './GalleryPhotoModal';
import {useEffect} from 'react';


interface GalleryPhotoModalProps {
  isModalOpen: boolean;
  selectedImage: string | null;
  closeModal: () => void;
  handleImageLoad: () => void;
  isImageLoaded: boolean;
}

const GalleryPhotoModalWrapper = ({
  isModalOpen,
  selectedImage,
  closeModal,
  handleImageLoad,
  isImageLoaded,
}: GalleryPhotoModalProps) => {
  /**
   * 모달창 외부 클릭시 모달창 닫기
   */
  const modalRef = useOutsideClick(closeModal);

  /**
   * Esc 키를 눌러 모달창 닫기
   */
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeModal();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [closeModal]);

  if (!isModalOpen || !selectedImage) return null;

  return (
    <GalleryPhotoModal
      closeModal={closeModal}
      handleImageLoad={handleImageLoad}
      selectedImage={selectedImage}
      modalRef={modalRef as React.RefObject<HTMLDivElement>}
      isImageLoaded={isImageLoaded}
    />
  );
};

export default GalleryPhotoModalWrapper;
