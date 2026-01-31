import "./ProjectDetail.css";

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

            <section className="project-detail-section">
                <h2>Products mock up</h2>
                {project.productMockupImage ? (
                    <div className="project-detail-mockup">
                        <img
                            src={project.productMockupImage}
                            alt={`${project.name} magazine mockup`}
                            className="project-detail-mockup-image"
                            loading="lazy"
                        />
                        <img
                            src={project.productMockupImage02}
                            alt={`${project.name} magazine mockup`}
                            className="project-detail-mockup-image"
                            loading="lazy"
                        />
                    </div>
                ) : null}
            </section>
        </>


export default Magazine;
