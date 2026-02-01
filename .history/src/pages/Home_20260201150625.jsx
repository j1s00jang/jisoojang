import Hero from "./Hero";
import AboutMe from "./AboutMe";
import SplineEmbed from "../components/SplineEmbed";
import HomeProjects from "../components/HomeProjects";

function Home() {
    return (
        <div className="home-container">
            <section
                style={{
                    minHeight: "100vh",
                    background: "transparent",
                    padding: "48px 0",
                }}
            >
                {/* <Hero /> */}
                <SplineEmbed />
                <div style={{ width: "min(1200px, 94vw)", margin: "0 auto" }}>
                    <h1 style={{ margin: "0 0 16px" }}></h1>
                    <HomeProjects />
                    <AboutMe hideBreadcrumbs />
                </div>
            </section>
        </div>
    );
}

export default Home;
