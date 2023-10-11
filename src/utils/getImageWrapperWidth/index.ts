export const getImageWrapperWidth = (count: number) => {
  switch (count) {
    case 2:
      return 'w-32';
    case 3:
      return 'w-52';
    case 4:
      return 'w-52';
    default:
      return 'w-60';
  }
};
