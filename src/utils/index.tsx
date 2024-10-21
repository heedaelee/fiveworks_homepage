export const getPartnerImages = () => {
  const images = import.meta.glob('/src/assets/img/pages/partners/*.{png,jpg,jpeg,svg}');
  const imagePaths = Object.keys(images);

  // Extract numeric prefix and sort
  const sortedImagePaths = imagePaths.sort((a, b) => {
    const getPrefix = (path: string) => {
      const match = path.match(/\/(\d+)\./);
      return match ? parseInt(match[1], 10) : 0;
    };

    return getPrefix(a) - getPrefix(b);
  });

  return sortedImagePaths;
};

// utils/getImages.ts
const imagePaths = {
  // partners: import.meta.glob('/src/assets/img/pages/partners/*.{png,jpg,jpeg,svg}'),
  businessAi: import.meta.glob('/src/assets/img/pages/business/ai/*.{png,jpg,jpeg,svg}'),
  businessSi: import.meta.glob('/src/assets/img/pages/business/si/*.{png,jpg,jpeg,svg}'),
  businessBig: import.meta.glob('/src/assets/img/pages/business/bigdata/*.{png,jpg,jpeg,svg}'),
  businessProduct: import.meta.glob('/src/assets/img/pages/business/product/*.{png,jpg,jpeg,svg}'),
  mediaNews: import.meta.glob('/src/assets/img/pages/media/news/*.{png,jpg,jpeg,svg}'),
};
/**
 *  한 페이지에 여러개의 이미지가 있을 경우, 이미지를 그룹화하여 반환하는 함수
 *  이미지가 한개인 경우에는 string, 여러개인 경우에는 string[]로 반환
 *  폴더 내에 같은 페이지의 이미지는 1_이미지명, 1_이미지명.. 이렇게 _앞에 동일 숫자를 적어준다
 */
export const getImages = (category: keyof typeof imagePaths) => {
  const images = imagePaths[category];
  // console.log('images');
  // console.log(images);
  const imageKeys = Object.keys(images);
  // console.log(imageKeys);
  const groupedImages: {[key: string]: string | string[]} = {};

  imageKeys.forEach(key => {
    const fileName = key.split('/').pop() || '';
    const match = fileName.match(/(\d+)_/);
    // console.log(match);
    if (match) {
      const number = match[1];
      if (!groupedImages[number]) {
        groupedImages[number] = [];
      }
      (groupedImages[number] as string[]).push(key);
    } else {
      groupedImages[key] = key;
    }
  });
  const result = Object.values(groupedImages).map(value => {
    return value.length === 1 ? value[0] : value;
  });

  // console.log('groupedImages');
  // console.log(groupedImages);
  return result;
};

// 기존 함수
// export const getImages = (category: keyof typeof imagePaths) => {
//   const images = imagePaths[category];
//   console.log('images');
//   console.log(images);
//   return Object.keys(images);
// };
