import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { lazy, Suspense, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

import Header from "./components/Header";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import "./App.css";
import RouteScrollToTop from "./components/RouteScrollToTop";
import CursorGlow from "./components/CursorGlow";

gsap.registerPlugin(ScrollTrigger);

const Projects = lazy(() => import("./pages/Projects"));
const ProjectDetail = lazy(() => import("./pages/ProjectDetail"));
const AboutMe = lazy(() => import("./pages/AboutMe"));

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
                <Suspense fallback={null}>
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
                </Suspense>
                <ScrollToTop />
            </div>
        </Router>
    );
}

export default App;
