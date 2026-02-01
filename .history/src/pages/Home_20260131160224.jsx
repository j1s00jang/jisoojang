import Hero from "./Hero";
import Projects from "./Projects";
import AboutMe from "./AboutMe";
import SplineEmbed from "../components/SplineEmbed";

function Home() {
    return (
        <div className="home-container">
            <section style={{ minHeight: "100vh", background: "#f7f4ef", padding: "48px 0" }}>
      <div style={{ width: "min(1200px, 94vw)", margin: "0 auto" }}>
        <h1 style={{ margin: "0 0 16px" }}>Landing</h1>
        <SplineEmbed />
        </div>
    );
}

export default Home;
