export const getPartnerImages = () => {
  const images = import.meta.glob('/src/assets/img/pages/partners/*.{png,jpg,jpeg,svg}');
  console.log(images);
  return Object.keys(images);
};