import { useMemo, useState } from "react";
import "./ProjectDetail.css";
import Footer from "../components/Footer";
import UpNextBanner from "../components/UpNextBanner";

function Posters({ project }) {
    if (!project) return null;

    const items = useMemo(() => project.posters || [], [project.posters]);
    const [activeIndex, setActiveIndex] = useState(0);

    const goPrev = () => {
        if (!items.length) return;
        setActiveIndex((i) => (i - 1 + items.length) % items.length);
    };

    const goNext = () => {
        if (!items.length) return;
        setActiveIndex((i) => (i + 1) % items.length);
    };

    const getPosClass = (index) => {
        if (!items.length) return "";
        const prev = (activeIndex - 1 + items.length) % items.length;
        const next = (activeIndex + 1) % items.length;
        if (index === activeIndex) return "is-active";
        if (index === prev) return "is-prev";
        if (index === next) return "is-next";
        return "is-hidden";
    };

    return (
        <>
            {project.concept && (
                <section className="project-detail-section">
                    <h2>Concept</h2>
                    <p className="project-detail-preline">{project.concept}</p>
                </section>
            )}

            {items.length > 0 && (
                <section className="project-detail-section">
                    <h2>Posters</h2>

                    <div className="flavour-carousel">
                        <button
                            type="button"
                            className="flavour-carousel-arrow flavour-carousel-arrow-left"
                            onClick={goPrev}
                            aria-label="Previous poster"
                        >
                            ‹
                        </button>

                        <div
                            className="flavour-carousel-viewport"
                            aria-live="polite"
                        >
                            {items.map((item, idx) => (
                                <article
                                    key={item.id}
                                    className={`flavour-carousel-item ${getPosClass(idx)}`}
                                    onClick={() => {
                                        if (idx !== activeIndex) {
                                            setActiveIndex(idx);
                                        }
                                    }}
                                >
                                    <div className="flavour-carousel-cans">
                                        <img
                                            src={item.image}
                                            alt={`${project.name} – ${item.title}`}
                                            loading="lazy"
                                        />
                                    </div>
                                    <h3 className="flavour-carousel-title">
                                        {item.title}
                                    </h3>
                                </article>
                            ))}
                        </div>

                        <button
                            type="button"
                            className="flavour-carousel-arrow flavour-carousel-arrow-right"
                            onClick={goNext}
                            aria-label="Next poster"
                        >
                            ›
                        </button>
                    </div>

                    <div
                        className="flavour-carousel-dots"
                        role="tablist"
                        aria-label="Poster selector"
                    >
                        {items.map((item, idx) => (
                            <button
                                key={item.id}
                                type="button"
                                className={`flavour-carousel-dot ${
                                    idx === activeIndex ? "is-active" : ""
                                }`}
                                onClick={() => setActiveIndex(idx)}
                                aria-label={`Show ${item.title}`}
                                aria-pressed={idx === activeIndex}
                            />
                        ))}
                    </div>
                </section>
            )}

            <UpNextBanner
                to="/projects"
                title="View all projects"
            />
            <Footer />
        </>
    );
}

export default Posters;
