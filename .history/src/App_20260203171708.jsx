import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

import Header from "./components/Header";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import ProjectDetail from "./pages/ProjectDetail";
import AboutMe from "./pages/AboutMe";
import "./App.css";
import RouteScrollToTop from "./components/RouteScrollToTop";

// GSAP 플러그인 등록
gsap.registerPlugin(ScrollTrigger);

function App() {
  useEffect(() => {
    // 1. Lenis 초기화
    const lenis = new Lenis({
      duration: 1.2, // 스크롤 속도 (숫자가 클수록 더 부드러움)
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // 쫀득한 감도
      smoothWheel: true,
    });

    // 2. Lenis와 ScrollTrigger 동기화 (매우 중요!)
    lenis.on("scroll", ScrollTrigger.update);

    // 3. GSAP Ticker에 Lenis 추가
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    // 4. 리프레시 타임 최적화
    gsap.ticker.lagSmoothing(0);

    // 컴포넌트 언마운트 시 정리 (Clean up)
    return () => {
      lenis.destroy();
      gsap.ticker.remove(lenis.raf);
    };
  }, []);

  return (
    <Router>
      <div className="app">
        <Header />
        <RouteScrollToTop />
        <Routes>
          <Route
            path="/"
            element={<Home />}
          />
          <Route
            path="/projects"
            element={<Projects />}
          />
          <Route
            path="/projects/:slug"
            element={<ProjectDetail />}
          />
          <Route
            path="/about-me"
            element={<AboutMe />}
          />
        </Routes>
        <ScrollToTop />
      </div>
    </Router>
  );
}

export default App;
