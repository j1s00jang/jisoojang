import ContentSections from "../components/ContentSections";
import UpNextBanner from "../components/UpNextBanner";
import Footer from "../components/Footer";

function Scaffold({ project }) {
    const sections = project?.sections ?? [];
    if (!Array.isArray(sections) || sections.length === 0) return null;
    return (
        <div className="project-detail-sections">
            <ContentSections
                sections={sections}
                projectName={project?.name ?? "Scaffold"}
            />
            <UpNextBanner project={project} />
            <Footer />
        </div>
    );
}

export default Scaffold;
