import { useMemo, useState } from "react";
import "./ProjectDetail.css";
import Footer from "../components/Footer";
import UpNextBanner from "../components/UpNextBanner";

function CanDesign({ project }) {
    if (!project) return null;

    const flavours = useMemo(() => project.flavours || [], [project.flavours]);
    const [activeIndex, setActiveIndex] = useState(0);

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

                    {project.conceptParagraph2 && (
                        <p className="project-detail-preline project-detail-concept-p2">
                            {project.conceptParagraph2}
                        </p>
                    )}

                    {project.conceptImage03 && (
                        <img
                            src={project.conceptImage03}
                            alt={`${project.name} concept`}
                            className="project-detail-concept-image"
                            loading="lazy"
                        />
                    )}
                    {project.conceptImage04 && (
                        <img
                            src={project.conceptImage04}
                            alt={`${project.name} concept`}
                            className="project-detail-concept-image"
                            loading="lazy"
                        />
                    )}
                    {project.conceptImage05 && (
                        <img
                            src={project.conceptImage05}
                            alt={`${project.name} concept`}
                            className="project-detail-concept-image"
                            loading="lazy"
                        />
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
                                    onClick={() => {
                                        if (idx !== activeIndex) {
                                            setActiveIndex(idx);
                                        }
                                    }}
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
                    </div>
                </section>
            )}

            <UpNextBanner
                to="/projects/magazine"
                title="Magazine & E-book"
            />
            <Footer />
        </>
    );
}

export default CanDesign;
