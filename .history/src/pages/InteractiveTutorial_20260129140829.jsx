import "./ProjectDetail.css";

const CONCEPT_IMAGE_KEYS = [1, 2, 3, 4, 5, 6, 7, 8];

function InteractiveTutorial({ project }) {
    if (!project) return null;

    const conceptImages = CONCEPT_IMAGE_KEYS.map(
        (n) => project[`conceptImage0${n}`],
    ).filter(Boolean);

    return (
        <>
            {project.concept && (
                <section className="project-detail-section">
                    <h2>Concept</h2>
                    <p className="project-detail-preline">{project.concept}</p>
                    {conceptImages.length > 0 && (
                        <div className="interactive-concept-strip">
                            {conceptImages.map((src, i) => (
                                <img
                                    key={i}
                                    src={src}
                                    alt={`${project.name} concept ${i + 1}`}
                                    loading="lazy"
                                />
                            ))}
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
