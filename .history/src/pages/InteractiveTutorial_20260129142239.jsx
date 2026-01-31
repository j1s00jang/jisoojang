import "./ProjectDetail.css";
import UpNextBanner from "../components/UpNextBanner";
import Footer from "../components/Footer";

function InteractiveTutorial({ project }) {
    if (!project) return null;

    return (
        <>
            {project.concept && (
                <section className="project-detail-section">
                    <h2>Concept</h2>
                    <p className="project-detail-preline">{project.concept}</p>
                    {(project.conceptImage01 ||
                        project.conceptImage02 ||
                        project.conceptImage03) && (
                        <div className="interactive-concept-strip">
                            {project.conceptImage01 && (
                                <div className="interactive-concept-solo">
                                    <img
                                        src={project.conceptImage01}
                                        alt={`${project.name} concept`}
                                        loading="lazy"
                                    />
                                </div>
                            )}
                            {(project.conceptImage02 ||
                                project.conceptImage03 ||
                                project.conceptImage04 ||
                                project.conceptImage05) && (
                                <div className="interactive-concept-four">
                                    {[2, 3, 4, 5].map((n) => {
                                        const src =
                                            project[`conceptImage0${n}`];
                                        if (!src) return null;
                                        return (
                                            <img
                                                key={n}
                                                src={src}
                                                alt={`${project.name} concept ${n}`}
                                                loading="lazy"
                                            />
                                        );
                                    })}
                                </div>
                            )}
                            {(project.conceptImage06 ||
                                project.conceptImage07 ||
                                project.conceptImage08) && (
                                <div className="interactive-concept-rest">
                                    {[6, 7, 8].map((n) => {
                                        const src =
                                            project[`conceptImage0${n}`];
                                        if (!src) return null;
                                        return (
                                            <img
                                                key={n}
                                                src={src}
                                                alt={`${project.name} concept ${n}`}
                                                loading="lazy"
                                            />
                                        );
                                    })}
                                </div>
                            )}
                        </div>
                    )}
                    {project.conceptParagraph2 && (
                        <p className="project-detail-preline project-detail-concept-p2">
                            {project.conceptParagraph2}
                        </p>
                    )}
                </section>
            )}

            <section className="project-detail-section"></section>

            <UpNextBanner
                to="/projects/posters"
                title="Advertising Posters"
            />
            <Footer />
        </>
    );
}

export default InteractiveTutorial;
