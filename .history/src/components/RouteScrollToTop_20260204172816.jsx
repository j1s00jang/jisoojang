import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const RouteScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // 1. 즉시 브라우저 스크롤을 최상단으로 보냅니다.
    window.scrollTo(0, 0);

    // 2. 만약 Lenis가 전역(window)에 등록되어 있다면 scrollTo를 호출합니다.
    // 하지만 현재 App.js 구조상 클린업이 필요하므로 가장 확실한 방법은
    // 브라우저의 스크롤 복구 기능을 수동(manual)으로 설정하는 것입니다.
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    // 3. 아주 미세한 지연을 주어 DOM이 완전히 렌더링된 후 다시 한번 상단으로 보냅니다.
    const timer = setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: "instant", // 부드러운 효과 없이 즉시 이동
      });
    }, 10);

    return () => clearTimeout(timer);
  }, [pathname]);

  return null;
};

export default RouteScrollToTop;
