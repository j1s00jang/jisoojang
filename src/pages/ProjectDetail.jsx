import { useParams, useNavigate } from 'react-router-dom'
import Breadcrumbs from '../components/Breadcrumbs'
import './ProjectDetail.css'
import { projectsBySlug } from '../data/projectsData'
import Scaffold from './Scaffold'

function ProjectDetail() {
  const { slug } = useParams()
  const navigate = useNavigate()

  const project = projectsBySlug[slug]

  if (!project) {
    return (
      <div className="project-detail-error">
        <h1>Project not found</h1>
        <button onClick={() => navigate('/projects')}>Back to Projects</button>
      </div>
    )
  }

  const breadcrumbItems = [
    { label: 'Home', link: '/' },
    { label: 'Projects', link: '/projects' },
    // { labe: 'UI/UX', link: '/projects/uiux' }, // add later
    { label: project.name, link: null }
  ]

  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />
      <div className="project-detail-content">
        <div className="project-detail-header">
          <div className="project-detail-logo">
            <img 
              src={project.thumbnail} 
              alt={`${project.name} logo`} 
              className="project-detail-thumbnail"
            />
          </div>
          <div className="project-detail-info">
            <h1 className="project-detail-title">{project.name}</h1>
            <p className="project-detail-description">{project.description}</p>
          </div>
        </div>
        
        <div className="project-detail-body">
          {slug === 'scaffold' ? (
            <Scaffold />
          ) : (
            <section className="project-detail-section">
              <h2>Project Overview</h2>
              <p>Add your project details here...</p>
            </section>
          )}
        </div>
      </div>
    </>
  )
}

export default ProjectDetail
