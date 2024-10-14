import {TabContentProps} from '../common.interface';
import ImageItem from './ImageItem';

export interface ImageProps extends TabContentProps {
  handleImageClick: (image: string) => void;
}

const ImageWrapper = ({activeTab, tab, images, handleImageClick}: ImageProps) => {
  return (
    <>
      {Array.isArray(images[activeTab]) ? (
        (images[activeTab] as string[]).map((image, index) => (
          <ImageItem
            key={index}
            tab={tab}
            activeTab={activeTab}
            images={images}
            handleImageClick={handleImageClick}
          />
        ))
      ) : (
        <ImageItem
          tab={tab}
          activeTab={activeTab}
          images={images}
          handleImageClick={handleImageClick}
        />
      )}
    </>
  );
};

export default ImageWrapper;
