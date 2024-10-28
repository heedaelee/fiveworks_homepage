type pathType = 'company' | 'education' | 'government';
export const getPartnerImages = async (category: pathType) => {
  const imagePaths = {
    company: import.meta.glob('/src/assets/img/pages/partners/company/*.{png,jpg,jpeg,svg}'),
    education: import.meta.glob('/src/assets/img/pages/partners/education/*.{png,jpg,jpeg,svg}'),
    government: import.meta.glob('/src/assets/img/pages/partners/government/*.{png,jpg,jpeg,svg}'),
  };

  const images = imagePaths[category];
  const imagePathsArray = Object.keys(images);
  // Extract numeric prefix and sort
  const sortedImagePaths = imagePathsArray.sort((a, b) => {
    const getPrefix = (path: string) => {
      const match = path.match(/\/(\d+)\./);
      return match ? parseInt(match[1], 10) : 0;
    };

    return getPrefix(a) - getPrefix(b);
  });

  //NOTE: Load images and get their URLs
  const imageUrls = await Promise.all(
    sortedImagePaths.map(key => images[key]().then((mod: any) => mod.default)),
  );

  return imageUrls;
};
