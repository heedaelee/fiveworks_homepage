import {getPartnerImages} from '@/utils';
import {motion} from 'framer-motion';

const PartenersList = () => {
  const company_images = getPartnerImages('company');
  const education_images = getPartnerImages('education');
  const government_images = getPartnerImages('government');
  // console.log(company_images);
  // console.log(education_images);
  // console.log(government_images);
  const partnerImages = [company_images, education_images, government_images];
  return (
    <div>
      {partnerImages.map((images, index) => {
        return (
          <section className='mb-20'>
            <div className='w-fit bg-[#eeecec90] rounded-2xl p-5 shadow-md mb-8'>
              <h2 className='text-3xl font-semibold text-[#6c6b6b]'>
                {index === 0 ? 'Company' : index === 1 ? 'Education' : 'Government'}
              </h2>
            </div>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4  '>
              {images.map((image, index2) => (
                <motion.div
                  key={index2}
                  className='w-full h-auto'
                  initial={{opacity: 0, x: -20}}
                  animate={{opacity: 1, x: 0}}
                  transition={{
                    duration: 0.2,
                    delay: index * company_images.length * 0.1 + index2 * 0.1,
                  }}>
                  <img
                    src={image}
                    alt={`Partner ${index2 + 1}`}
                    className='w-full h-auto object-cover'
                  />
                </motion.div>
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
};

export default PartenersList;
