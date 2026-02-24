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
import CursorGlow from "./components/CursorGlow";

gsap.registerPlugin(ScrollTrigger);

function App() {
    useEffect(() => {
        const lenis = new Lenis({
            duration: 1,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            smoothWheel: true,
        });

        window.lenis = lenis;

        lenis.on("scroll", ScrollTrigger.update);

        gsap.ticker.add((time) => {
            lenis.raf(time * 1000);
        });

        gsap.ticker.lagSmoothing(0);

        return () => {
            lenis.destroy();
            gsap.ticker.remove(lenis.raf);
        };
    }, []);

    return (
        <Router>
            <div className="app">
                <CursorGlow />
                <RouteScrollToTop />
                <Header />
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
