import "./ProjectDetail.css";

function InteractiveTutorial({ project }) {
    if (!project) return null;

    return (
        <>
            <section className="project-detail-section">
                <h2>Concept</h2>
                <p className="project-detail-preline">
                    {project.concept || "Add concept content here"}
                </p>
            </section>
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
