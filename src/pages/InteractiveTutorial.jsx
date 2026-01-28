import { projectsBySlug } from '../data/projectsData'
import { useParams } from 'react-router-dom'
import './ProjectDetail.css'

function InteractiveTutorial() {
  const { slug } = useParams()
  const project = projectsBySlug[slug]

  return (
    <>
      <section className="project-detail-section">
        <h2>Concept</h2>
        <p style={{ whiteSpace: 'pre-line' }}>{project?.concept || 'Add concept content here'}</p>
      </section>
      <section className="project-detail-section">
        <h2>Products mock up</h2>
        {project?.productMockupImage && (
          <div className="project-detail-mockup">
            <img
              src={project.productMockupImage}
              alt={`${project.name} product mockup`}
              className="project-detail-mockup-image"
            />
          </div>
        )}
      </section>
    </>
  )
}

export default InteractiveTutorial
