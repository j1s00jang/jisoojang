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
        <h1>I'm sorry! The page is under construction.</h1>
        <button onClick={() => navigate('/projects')}>Back</button>
      </div>
    )
  }

  const breadcrumbItems = [
    { label: 'Home', link: '/' },
    { label: 'Projects', link: '/projects' },
    { label: project.name, link: null }
  ]

  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />
      <div className="project-detail-content">
        <div className="project-detail-header">
          {project.screenImage && (
            <div className="project-detail-screen">
              <img 
                src={project.screenImage} 
                alt={`${project.name} screen`} 
                className="project-detail-screen-image"
              />
            </div>
          )}
          <div className="project-detail-info">
            <h1 className="project-detail-title">{project.name}</h1>
            <p className="project-detail-summary">{project.summary}Summary</p>
            <p className="project-detail-role">{project.role}</p>
            <p className="project-detail-keySkills">{project.keySkills}</p>
          </div>
        </div>
        <div className="project-detail-body">
  {/* 👇 Common section all projects have */}
  <section className="project-detail-section">
    <h2>Overview</h2>
    <p>Common section content!</p>
  </section>
  <section className="project-detail-section">
    <h2>User Research</h2>
    <p>Add contents here</p>
  </section>

  {/* 👇 Project-specific content (conditional) */}
  {slug === 'scaffold' ? (
    <Scaffold />
  ) : (
    <section className="project-detail-section"> 
    {/* something other project has but scaffold doesn't have. */}
      <h2>Prototyping & Testing</h2>
      <p>Add contents here</p>
    </section>
  )}
</div>
      </div>
    </>
  )
}

export default ProjectDetail
