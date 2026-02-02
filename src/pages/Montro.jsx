import ContentSections from "../components/ContentSections";
import UpNextBanner from "../components/UpNextBanner";
import Footer from "../components/Footer";
import "./ProjectDetail.css";
import "./Montro.css";

function Montro({ project }) {
    const sections = project?.sections ?? [];
    if (!Array.isArray(sections) || sections.length === 0) return null;
    return (
        <div className="project-detail-container">
            <ContentSections
                sections={sections}
                projectName={project?.name ?? "Montro"}
            />
            <UpNextBanner
                project={project}
                to="/projects/can-design"
                title="Beverage label design"
            />
            <Footer />
        </div>
    );
}

export default Montro;
