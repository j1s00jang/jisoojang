import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import ProjectDetail from "./pages/ProjectDetail";
import AboutMe from "./pages/AboutMe";
import "./App.css";
import RouteScrollToTop from "./components/RouteScrollToTop";

function App() {
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
