import { useState } from 'react'
import Breadcrumbs from '../components/Breadcrumbs'
import './Projects.css'
import allFolderImage from '../assets/projects/projects_all_folder.svg'
import uiuxFolderImage from '../assets/projects/projects_uiux_folder.svg'
import graphicFolderImage from '../assets/projects/projects_graphic_folder.svg'
import devFolderImage from '../assets/projects/projects_dev_folder.svg'
import scaffoldLogo from '../assets/main/scaffold_logo.png'
import montroLogo from '../assets/main/montro_logo.png'
import planItLogo from '../assets/main/plan-it_logo.png'

function Projects() {
  const [activeTab, setActiveTab] = useState('all')
  
  const breadcrumbItems = [
    { label: 'Home', link: '/home' },
    { label: 'Projects', link: '/projects' }
  ]

  const folderImages = {
    'all': allFolderImage,
    'ui/ux': uiuxFolderImage,
    'graphic design': graphicFolderImage,
    'development': devFolderImage
  }

  const projects = [
    { 
      id: 1, 
      name: 'Scaffold', 
      category: 'ui/ux',
      thumbnail: scaffoldLogo,
      description: 'All-in-one funding platform for tradespeople that consolidates financial resources with AI support.'
    },
    { 
      id: 2, 
      name: 'Montro', 
      category: 'ui/ux',
      thumbnail: montroLogo,
      description: 'Description for Montro project.'
    },
    { 
      id: 3, 
      name: 'Can Design', 
      category: 'graphic design',
      thumbnail: scaffoldLogo,
      description: 'Description for Can Design project.'
    },
    { 
      id: 4, 
      name: 'magazine', 
      category: 'graphic design',
      thumbnail: scaffoldLogo,
      description: 'Description for magazine project.'
    },
    { 
      id: 5, 
      name: 'posters', 
      category: 'graphic design',
      thumbnail: scaffoldLogo,
      description: 'Description for posters project.'
    },
    { 
      id: 6, 
      name: 'Plan-it', 
      category: 'development',
      thumbnail: planItLogo,
      description: 'Description for Plan-it project.'
    }
  ]

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
              <div 
                key={project.id} 
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
              </div>
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
            <button 
              className={`project-tab-clickable project-tab-dev-click active-${getActiveClass()}`}
              onClick={() => handleTabClick('development')}
              aria-label="Filter by Development projects"
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default Projects

