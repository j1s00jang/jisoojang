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
      window.scrollTo({
        top: 0,
        behavior: "instant",
      });
    }, 10);

    return () => clearTimeout(timer);
  }, [pathname]);

  return null;
};

export default RouteScrollToTop;
