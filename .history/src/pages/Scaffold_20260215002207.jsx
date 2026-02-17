import ContentSections from "../components/ContentSections";
import UpNextBanner from "../components/UpNextBanner";
import Footer from "../components/Footer";
import "./ProjectDetail.css";
import "./Scaffold.css";

function Scaffold({ project, onImageZoom }) {
  const sections = project?.sections ?? [];
  if (!Array.isArray(sections) || sections.length === 0) return null;
  return (
    <div className="project-detail-container scaffold-detail-container">
      <ContentSections
        sections={sections}
        projectName={project?.name ?? "Scaffold"}
        onImageZoom={onImageZoom}
      />
      <UpNextBanner
        project={project}
        to="/projects/montro"
        title="Montro"
      />
      <Footer />
    </div>
  );
}

export default Scaffold;
