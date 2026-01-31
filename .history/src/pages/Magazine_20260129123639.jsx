import "./ProjectDetail.css";
import Footer from "../components/Footer";
import UpNextBanner from "../components/UpNextBanner";

function Magazine({ project }) {
    if (!project) return null;

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
                </section>
            )}

            {project.productMockupImage && (
                <section className="project-detail-section">
                    <h2>Products mock up</h2>
                    <div className="project-detail-mockup">
                        <img
                            src={project.productMockupImage}
                            alt={`${project.name} product mockup`}
                            className="project-detail-mockup-image"
                            loading="lazy"
                        />
                        {project.productMockupImage02 && (
                            <img
                                src={project.productMockupImage02}
                                alt={`${project.name} product mockup`}
                                className="project-detail-mockup-image"
                                loading="lazy"
                            />
                        )}
                    </div>
                </section>
            )}

            <UpNextBanner
                to="/projects/interactive_tutorial"
                title="Interactive Tutorial"
            />
            <Footer />
        </>
    );
}

export default Magazine;
