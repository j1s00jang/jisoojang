import ContentSections from "../components/ContentSections";

function Scaffold({ project }) {
    if (!project?.sections?.length) return null;
    return (
        <ContentSections
            sections={project.sections}
            projectName={project.name}
        />
    );
}

export default Scaffold;
