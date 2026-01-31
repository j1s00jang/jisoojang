import ContentSections from "../components/ContentSections";

function Scaffold({ project }) {
    const sections = project?.sections ?? [];
    if (!Array.isArray(sections) || sections.length === 0) return null;
    return (
        <div className="project-detail-sections">
            <ContentSections
                sections={sections}
                projectName={project?.name ?? "Scaffold"}
            />
        </div>
    );
}

export default Scaffold;
