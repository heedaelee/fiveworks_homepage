import {ImageProps} from './ImageWrapper';

const ImageItem = ({activeTab, tab, images, handleImageClick}: ImageProps) => {
  return (
    <div className='relative group' onClick={() => handleImageClick(images[activeTab] as string)}>
      <img
        src={images[activeTab] as string}
        alt={tab[activeTab].title}
        className='w-full h-auto object-cover'
      />
      <div className='absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer'>
        <span className='text-white text-4xl'>+</span>
      </div>
    </div>
  );
};
export default ImageItem;
