import { useMemo, useState } from "react";
import "./ProjectDetail.css";

function CanDesign({ project }) {
    if (!project) return null;

    const flavours = useMemo(() => project.flavours || [], [project.flavours]);
    const [activeIndex, setActiveIndex] = useState(0);

    const goPrev = () => {
        if (!flavours.length) return;
        setActiveIndex((i) => (i - 1 + flavours.length) % flavours.length);
    };

    const goNext = () => {
        if (!flavours.length) return;
        setActiveIndex((i) => (i + 1) % flavours.length);
    };

    const getPosClass = (index) => {
        if (!flavours.length) return "";
        const prev = (activeIndex - 1 + flavours.length) % flavours.length;
        const next = (activeIndex + 1) % flavours.length;
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
                    {(project.conceptImage01 || project.conceptImage02) && (
                        <div className="project-detail-concept-images">
                            {project.conceptImage01 && (
                                <img
                                    src={project.conceptImage01}
                                    alt={`${project.name} concept`}
                                    className="project-detail-logo-anatomy"
                                    loading="lazy"
                                />
                            )}
                            {project.conceptImage02 && (
                                <img
                                    src={project.conceptImage02}
                                    alt={`${project.name} concept`}
                                    className="project-detail-logo-concept"
                                    loading="lazy"
                                />
                            )}
                        </div>
                    )}
                </section>
            )}

            {project.productMockupImage && (
                <section className="project-detail-section">
                    <h2>Packaging mockups</h2>
                    <div className="project-detail-mockup">
                        <img
                            src={project.productMockupImage}
                            alt={`${project.name} product mockup`}
                            className="project-detail-mockup-image"
                            loading="lazy"
                        />
                    </div>
                </section>
            )}

            {flavours.length > 0 && (
                <section className="project-detail-section">
                    <h2>Flavour variations</h2>

                    <div className="flavour-carousel">
                        <button
                            type="button"
                            className="flavour-carousel-arrow flavour-carousel-arrow-left"
                            onClick={goPrev}
                            aria-label="Previous flavour"
                        >
                            ‹
                        </button>

                        <div
                            className="flavour-carousel-viewport"
                            aria-live="polite"
                        >
                            {flavours.map((item, idx) => (
                                <article
                                    key={item.id}
                                    className={`flavour-carousel-item ${getPosClass(
                                        idx,
                                    )}`}
                                >
                                    <div className="flavour-carousel-label">
                                        <img
                                            src={
                                                item.labelTopImage ||
                                                item.labelImage
                                            }
                                            alt={`${item.title} label`}
                                            loading="lazy"
                                        />
                                    </div>

                                    {item.labelImage && (
                                        <div className="flavour-carousel-design">
                                            <img
                                                src={item.labelImage}
                                                alt={`${item.title} design mockup`}
                                                loading="lazy"
                                            />
                                        </div>
                                    )}

                                    <div className="flavour-carousel-cans">
                                        <img
                                            src={item.canMockup}
                                            alt={`${item.title} can mockup`}
                                            loading="lazy"
                                        />
                                    </div>

                                    <h3 className="flavour-carousel-title">
                                        {item.title}
                                    </h3>
                                    <p className="flavour-carousel-text">
                                        {item.description}
                                    </p>
                                </article>
                            ))}
                        </div>

                        <button
                            type="button"
                            className="flavour-carousel-arrow flavour-carousel-arrow-right"
                            onClick={goNext}
                            aria-label="Next flavour"
                        >
                            ›
                        </button>
                    </div>

                    <div
                        className="flavour-carousel-dots"
                        role="tablist"
                        aria-label="Flavour selector"
                    >
                        {flavours.map((item, idx) => (
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
        </>
    );
}

export default CanDesign;
