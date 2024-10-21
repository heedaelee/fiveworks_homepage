interface PhotoModalProps {
  selectedImage: string;
  closeModal: () => void;
  handleImageLoad: () => void;
  modalRef: React.RefObject<HTMLDivElement>;
  isImageLoaded: boolean;
}

const GalleryPhotoModal = ({
  selectedImage,
  closeModal,
  handleImageLoad,
  modalRef,
  isImageLoaded,
}: PhotoModalProps) => {
  return (
    <div className={`fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-[1000]`}>
      <div ref={modalRef} className='bg-white p4 rounded relative'>
        <img
          src={selectedImage}
          className='w-[400px] md:w-[800px] h-auto max-h-[800px] object-contain'
          onLoad={handleImageLoad}
          onClick={closeModal}
        />
        {isImageLoaded && (
          <button
            onClick={closeModal}
            className='hidden absolute -top-3 md:block -right-10 text-white text-3xl'>
            &times;
          </button>
        )}
      </div>
    </div>
  );
};

export default GalleryPhotoModal;
