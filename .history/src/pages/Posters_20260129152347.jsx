import "./ProjectDetail.css";
import Footer from "../components/Footer";
import UpNextBanner from "../components/UpNextBanner";

function Posters({ project }) {
    if (!project) return null;

    return (
        <>
            {project.concept && (
                <section className="project-detail-section">
                    <h2>Concept</h2>
                    <p className="project-detail-preline">{project.concept}</p>
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
