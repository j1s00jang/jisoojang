import Hero from "./Hero";
import AboutMe from "./AboutMe";
import HomeProjects from "../components/HomeProjects";
import { useEffect } from "react";

function Home() {
  useEffect(() => {
    window.lenis?.stop();
    return () => window.lenis?.start();
  }, []);

  return (
    <div className="home-container">
      <section
        style={{
          minHeight: "100vh",
          background: "transparent",
          padding: "48px 0",
        }}
      >
        <Hero />
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
