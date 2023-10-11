export const getImageWrapperWidth = (count: number) => {
  switch (count) {
    case 2:
      return '160px';
    case 3:
      return '200px';
    case 4:
      return '200px';
    default:
      return '290px';
  }
};
