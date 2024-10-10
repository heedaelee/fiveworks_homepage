// import historyImage from '@/assets/img/pages/intro-history.png';

import {getPartnerImages} from '@/utils';

const Partners = () => {
  // const partnerImages = [
  //   '/path/to/image1.jpg',
  //   '/path/to/image2.jpg',
  //   '/path/to/image3.jpg',
  //   '/path/to/image4.jpg',
  //   '/path/to/image5.jpg',
  //   '/path/to/image6.jpg',
  //   '/path/to/image7.jpg',
  //   '/path/to/image8.jpg',
  //   '/path/to/image9.jpg',
  //   '/path/to/image10.jpg',
  //   '/path/to/image11.jpg',
  //   '/path/to/image12.jpg',
  //   '/path/to/image13.jpg',
  //   '/path/to/image14.jpg',
  //   '/path/to/image15.jpg',
  // ];

  const partnerImages = getPartnerImages();
  console.log(partnerImages);

  return (
    <div className='container mx-auto flex flex-col gap-[80px] mb-[150px]'>
      <div className='w-full flex flex-col items-center animate-fade-in'>
        <h1 className='h1'>FIVEWORKS, 파트너사</h1>
      </div>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
        {partnerImages.map((image, index) => (
          <div key={index} className='w-full h-auto'>
            <img src={image} alt={`Partner ${index + 1}`} className='w-full h-auto object-cover' />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Partners;
