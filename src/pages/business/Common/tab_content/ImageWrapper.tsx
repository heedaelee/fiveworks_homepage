import {TabContentProps} from '../common.interface';
import ImageItem from './ImageItem';

export interface ImageProps extends TabContentProps {
  handleImageClick: (image: string) => void;
}

const ImageWrapper = ({activeTab, tab, images, handleImageClick}: ImageProps) => {
  return (
    <>
      {Array.isArray(images[activeTab]) ? (
        (images[activeTab] as string[]).map((image, index) => {
          return (
            <ImageItem
              key={index}
              image={image}
              title={`${tab[activeTab].title} ${index + 1}`}
              onClick={() => handleImageClick(image)}
            />
          );
        })
      ) : (
        <ImageItem
          image={images[activeTab] as string}
          title={tab[activeTab].title}
          onClick={() => handleImageClick(images[activeTab] as string)}
        />
      )}
    </>
  );
};

export default ImageWrapper;
