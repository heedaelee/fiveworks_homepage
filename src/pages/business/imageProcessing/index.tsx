import {data_key} from '@/constants/business-data';
import {useEffect, useState} from 'react';
import BusinessLayout from '../Common/BusinessLayout';
import image1 from '@/assets/img/pages/business/imageProcessing/1_imageProcessing.jpg';
import image2 from '@/assets/img/pages/business/imageProcessing/2_imageProcessing2.jpg';

const ImageProcessing = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [images, setImages] = useState<(string | string[])[]>([]);

  const imageProcessingData = data_key.ImageProcessing;
  const {tab_key, description_key, workPerformance_key} = imageProcessingData;
  useEffect(() => {
    // console.log(data);
    // 탭당 이미지 1개씩 있을경우는 하나의 배열에, 한 탭에 이미지가 2개 일 경우는 배열에 배열로 넣어준다.
    setImages([image1, image2]);
  }, []);

  return (
    <BusinessLayout
      description_key={description_key}
      workPerformance_key={workPerformance_key}
      tab_key={tab_key}
      activeTab={activeTab}
      setActiveTab={setActiveTab}
      images={images}
    />
  );
};

export default ImageProcessing;
