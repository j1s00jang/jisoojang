import Hero from "./Hero";
import Projects from "./Projects";
import AboutMe from "./AboutMe";

function Home() {
    return (
        <div className="home-container">
            <Hero />
            <Projects />
            <AboutMe />
        </div>
    );
}

export default Home;
