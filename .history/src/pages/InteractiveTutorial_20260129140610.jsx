import "./ProjectDetail.css";

const CONCEPT_IMAGES_3_TO_8 = [3, 4, 5, 6, 7, 8];

function InteractiveTutorial({ project }) {
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
                    {CONCEPT_IMAGES_3_TO_8.map((n) => {
                        const src = project[`conceptImage0${n}`];
                        if (!src) return null;
                        return (
                            <img
                                key={`concept-0${n}`}
                                src={src}
                                alt={`${project.name} concept`}
                                className="project-detail-concept-image"
                                loading="lazy"
                            />
                        );
                    })}
                </section>
            )}

            <section className="project-detail-section">
                <h2>Products mock up</h2>
                {project.productMockupImage ? (
                    <div className="project-detail-mockup">
                        <img
                            src={project.productMockupImage}
                            alt={`${project.name} product mockup`}
                            className="project-detail-mockup-image"
                            loading="lazy"
                        />
                    </div>
                ) : (
                    <p className="project-detail-preline">Add mockup image.</p>
                )}
            </section>
        </>
    );
}

export default InteractiveTutorial;
