import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Lenis from "lenis";

const RouteScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);

    const lenis = new Lenis();
    lenis.scrollTo(0, { immediate: true });

    setTimeout(() => {
      lenis.resize();
    }, 100);
  }, [pathname]);

  return null;
};

export default RouteScrollToTop;
