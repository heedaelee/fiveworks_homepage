import {TabContentProps} from '../../common.interface';
import ImageItem from './ImageItem';

export interface ImageProps extends Omit<TabContentProps, 'commonAnimation'> {
  handleImageClick: (image: string) => void;
}

const ImageWrapper = ({activeTab, tab, images, handleImageClick}: ImageProps) => {
  return (
    <>
      {/* 다중이미지 */}
      {Array.isArray(images[activeTab]) ? (
        (images[activeTab] as string[]).map((image, index) => {
          return (
            <ImageItem
              key={index}
              image={image}
              title={`${tab[activeTab].title} ${index + 1}`}
              onClick={() => handleImageClick(image)}
              className='mb-16'
            />
          );
        })
      ) : (
        /* 단일이미지 */
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
