export const isMobile = () => {
  // 서버 컴포넌트에서는 window가 없으므로 window가 없을 경우 false를 반환한다.
  if (typeof window === 'undefined') return false;
  return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
};
