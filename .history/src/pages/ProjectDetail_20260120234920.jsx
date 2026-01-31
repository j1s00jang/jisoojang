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
            <p className="project-detail-summary-title">Summary</p>
            <p className="project-detail-summary">{project.summary}</p>
            <p className="project-detail-role-title">Role</p>
            <p className="project-detail-role">{project.role}</p>
            <p className="project-detail-keySkills-title">Key Skills</p>
            <p className="project-detail-keySkills">{project.keySkills}</p>
          </div>
        </div>
        <div className="project-detail-body">
  {/* 👇 Common section all projects have */}
  {project.overview && (
    <section className="project-detail-section">
      <h2>Overview</h2>
      <p style={{ whiteSpace: 'pre-line' }}>{project.overview}</p>
      {project.mockupImage && (
        <div className="project-detail-mockup"> 
          <img 
            src={project.mockupImage} 
            alt={`${project.name} mockup image`} 
            className="project-detail-mockup-image"
          />
        </div>
      )}
    </section>
  )}
  <section className="project-detail-section opportunity-section">
    <h2>Opportunity</h2>
    <p style={{ whiteSpace: 'pre-line' }}>{project.opportunity}</p>
    </section>
    <section className="project-detail-section my-role-section">
      <h2>My Role</h2>
      <p style={{ whiteSpace: 'pre-line' }}>{project.myRole}</p>
    </section>
    <section className="project-detail-section">
      <h2>User Research</h2>
      <p style={{ whiteSpace: 'pre-line' }}>{project.userResearch}</p>
    </section>
    <section className="project-detail-section">
      <div className="project-detail-survey-results-container">
        {project.scaffoldSurveyResults && (
          <div className="project-detail-survey-results">
            <img 
              src={project.scaffoldSurveyResults} 
              alt={`${project.name} survey results`} 
              className="project-detail-survey-results-image"
            />
          </div>
        )}
        {project.scaffoldSurveyResults2 && (
          <div className="project-detail-survey-results">
            <img 
              src={project.scaffoldSurveyResults2} 
              alt={`${project.name} survey results`} 
              className="project-detail-survey-results-image"
            />
          </div>
        )}
      </div>
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
