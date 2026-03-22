import { lazy, Suspense, useEffect, useState } from "react";

import Hero from "./Hero";
import HomeProjects from "../components/HomeProjects";

const AboutMe = lazy(() => import("./AboutMe"));

function Home() {
    const [shouldLoadAboutMe, setShouldLoadAboutMe] = useState(false);

    useEffect(() => {
        window.lenis?.stop();
        return () => window.lenis?.start();
    }, []);

    useEffect(() => {
        const loadAboutMe = () => setShouldLoadAboutMe(true);

        if ("requestIdleCallback" in window) {
            const idleId = window.requestIdleCallback(loadAboutMe, {
                timeout: 1200,
            });

            return () => window.cancelIdleCallback(idleId);
        }

        const timeoutId = window.setTimeout(loadAboutMe, 300);
        return () => window.clearTimeout(timeoutId);
    }, []);

    return (
        <main className="home-container">
            <section
                style={{
                    minHeight: "100vh",
                    background: "transparent",
                    padding: "48px 0",
                }}
            >
                <Hero />
                <div style={{ width: "min(1200px, 94vw)", margin: "0 auto" }}>
                    <HomeProjects />
                    <Suspense fallback={null}>
                        {shouldLoadAboutMe && <AboutMe hideBreadcrumbs />}
                    </Suspense>
                </div>
            </section>
        </main>
    );
}

export default Home;
