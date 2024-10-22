const ImageItem: React.FC<{
  image: string;
  title: string;
  onClick: () => void;
  className?: string;
}> = ({image, title, onClick, className}) => (
  <div className={`relative group ${className}`} onClick={onClick}>
    <img src={image} alt={title} className='w-full h-auto object-cover' />
    <div className='absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer'>
      <span className='text-white text-4xl'>+</span>
    </div>
  </div>
);

export default ImageItem;
