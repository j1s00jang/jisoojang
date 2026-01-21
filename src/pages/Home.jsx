import './Home.css'
import jisoosImage from '../assets/main/jisoos.png'
import portfolioImage from '../assets/main/portfolio.png'
import scaffoldLogo from '../assets/main/scaffold_logo.png'
import montroLogo from '../assets/main/montro_logo.png'
import interactiveThumbnail from '../assets/main/interactive_thumbnail.png'
import folderImage from '../assets/main/folder_image.png'

function Home() {
  return (
    <div className="home-content">
      <div className="home_content_top">
      <img src={jisoosImage} alt="Jisoo's" className="home_jisoo" />
      <img src={portfolioImage} alt="Portfolio" className="home_portfolio" />
      </div>
      <div className="home_content_bottom">
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
        src={interactiveThumbnail} 
        alt="Interactive Tutorial Thumbnail" 
        className="project-logo interactive-thumbnail"
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

