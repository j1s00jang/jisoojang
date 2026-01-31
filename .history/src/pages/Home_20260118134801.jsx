import './Home.css'
import jisoosImage from '../assets/main/jisoos.png'
import portfolioImage from '../assets/main/portfolio.png'
import scaffoldLogo from '../assets/main/scaffold_logo.png'
import montroLogo from '../assets/main/montro_logo.png'
import planItLogo from '../assets/main/plan-it_logo.png'
import folderImage from '../assets/main/folder_image.png'

function Home() {
  return (
    <div className="home-content">
      <div className="main_content_top">
      <img src={jisoosImage} alt="Jisoo's" className="main_jisoo" />
      <img src={portfolioImage} alt="Portfolio" className="main_portfolio" />
      </div>
      <div className="main_content_bottom">
      <img 
        src={scaffoldLogo} 
        alt="Scaffold Logo" 
        className="project-logo scaffold-logo"
      />
      <img 
        src={montroLogo} 
        alt="Montro Logo" 
        className="project-logo montro-logo"
      />
      <img 
        src={planItLogo} 
        alt="Plan-it Logo" 
        className="project-logo planit-logo"
      />
      <img 
        src={folderImage} 
        alt="Folder" 
        className="home-folder-image"
      />
      </div>
    </div>
  )
}

export default Home

