import {getPartnerImages} from '@/utils';
import {motion} from 'framer-motion';

const PartenersList = () => {
  const partnerImages = getPartnerImages();
  console.log(partnerImages);
  return (
    <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
      {partnerImages.map((image, index) => (
        <motion.div
          key={index}
          className='w-full h-auto'
          initial={{opacity: 0, x: -20}}
          animate={{opacity: 1, x: 0}}
          transition={{duration: 0.2, delay: index * 0.1}}>
          <img src={image} alt={`Partner ${index + 1}`} className='w-full h-auto object-cover' />
        </motion.div>
      ))}
    </div>
  );
};

export default PartenersList;
