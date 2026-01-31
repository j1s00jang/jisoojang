import "./ProjectDetail.css";

function CanDesign({ project }) {
    if (!project) return null;

    return (
        <>
            {project.concept && (
                <section className="project-detail-section">
                    <h2>Concept</h2>
                    <p className="project-detail-preline">{project.concept}</p>
                    {project.conceptImage && (
                        <div className="project-detail-mockup">
                            <img
                                src={project.conceptImage01}
                                alt={`${project.name} concept`}
                                className="project-detail-mockup-image"
                                loading="lazy"
                            />
                            <img
                                src={project.conceptImage02}
                                alt={`${project.name} concept`}
                                className="project-detail-mockup-image"
                                loading="lazy"
                            />
                        </div>
                    )}
                </section>
            )}

            {project.productMockupImage && (
                <section className="project-detail-section">
                    <h2>Product mockups</h2>
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
        </>
    );
}

export default CanDesign;
