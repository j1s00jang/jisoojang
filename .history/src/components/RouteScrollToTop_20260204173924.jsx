import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const RouteScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);

    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    if (window.lenis) {
      window.lenis.stop();
      window.lenis.scrollTo(0, { immediate: true });
    }
    window.scrollTo(0, 0);

    const timer = setTimeout(() => {
      window.scrollTo(0, 0);
      if (window.lenis) {
        window.lenis.start(); // 엔진 재개
        window.lenis.resize(); // 높이 재계산
      }
    }, 150);

    return () => clearTimeout(timer);
  }, [pathname]);

  return null;
};

export default RouteScrollToTop;
