import { useState } from 'react'
import { Link } from 'react-router-dom'
import Breadcrumbs from '../components/Breadcrumbs'
import './Projects.css'
import allFolderImage from '../assets/projects/projects_all_folder.svg'
import uiuxFolderImage from '../assets/projects/projects_uiux_folder.svg'
import graphicFolderImage from '../assets/projects/projects_graphic_folder.svg'
import { projects } from '../data/projectsData'

function Projects() {
  const [activeTab, setActiveTab] = useState('all')
  
  const breadcrumbItems = [
    { label: 'Home', link: '/home' },
    { label: 'Projects', link: '/projects' }
  ]

  const folderImages = {
    'all': allFolderImage,
    'ui/ux': uiuxFolderImage,
    'graphic design': graphicFolderImage
  }

  const handleTabClick = (tab) => {
    setActiveTab(tab)
  }

  const getActiveClass = () => {
    return activeTab.replace(/\s+/g, '-').replace(/\//g, '-')
  }

  const filteredProjects = activeTab === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeTab)

  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />
      <div className="projects-content">
        <div className="projects-content-all">
          <div className={`projects-grid active-${getActiveClass()}`}>
            {filteredProjects.map(project => (
              <Link 
                key={project.id} 
                to={`/projects/${project.slug}`}
                className="project-card"
                data-category={project.category}
              >
                <div className="project-card-content">
                  <div className="project-card-thumbnail">
                    <img 
                      src={project.thumbnail} 
                      alt={`${project.name} logo`} 
                      className="project-thumbnail-image"
                    />
                  </div>
                  <div className="project-card-text">
                    <h3 className="project-card-title">{project.name}</h3>
                    <p className="project-card-description">{project.description}</p>
                  </div>
                </div>
                <div className="project-card-divider"></div>
              </Link>
            ))}
          </div>
          <div className="projects-folder-container">
            <img 
              src={folderImages[activeTab]} 
              alt={`${activeTab} projects folder`} 
              className="projects-folder-image"
            />
            <button 
              className={`project-tab-clickable project-tab-all-click active-${getActiveClass()}`}
              onClick={() => handleTabClick('all')}
              aria-label="Show all projects"
            />
            <button 
              className={`project-tab-clickable project-tab-uiux-click active-${getActiveClass()}`}
              onClick={() => handleTabClick('ui/ux')}
              aria-label="Filter by UI/UX projects"
            />
            <button 
              className={`project-tab-clickable project-tab-graphic-click active-${getActiveClass()}`}
              onClick={() => handleTabClick('graphic design')}
              aria-label="Filter by Graphic Design projects"
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default Projects

