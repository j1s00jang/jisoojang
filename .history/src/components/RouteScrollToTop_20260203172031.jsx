import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Lenis from "lenis";

const RouteScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // 1. 브라우저 자체 스크롤 위치 초기화
    window.scrollTo(0, 0);

    // 2. 현재 활성화된 Lenis 인스턴스를 찾아서 즉시 최상단으로 이동
    // immediate: true 옵션이 있어야 '부드럽게'가 아니라 '즉시' 올라갑니다.
    const lenis = new Lenis();
    lenis.scrollTo(0, { immediate: true });

    // 3. 페이지가 바뀌면서 높이가 변할 수 있으므로 강제 업데이트
    setTimeout(() => {
      lenis.resize();
    }, 100);
  }, [pathname]);

  return null;
};

export default RouteScrollToTop;
