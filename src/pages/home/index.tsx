import React, {useEffect, useRef} from 'react';

import Carousel from '@/pages/home/components/carousel';

const Home = () => {
  return (
    <div className='bg-gray-50 h-full overflow-x-hidden flex flex-row relative'>
      <Carousel />
    </div>
  );
};

export default Home;
