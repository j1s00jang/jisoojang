import Breadcrumbs from '../components/Breadcrumbs'
import '../components/ContactIcon.css'
import './AboutMe.css'
import memojiImage from '../assets/about_me/memoji_jisoo.png'
import purpleHighlight from '../assets/about_me/purple_highlight.png'
import toastPhoto from '../assets/about_me/toast.jpg'
import coffeePhoto from '../assets/about_me/coffee.jpg'
import puddingPhoto from '../assets/about_me/pudding.jpg'
import tradersJoesPhoto from '../assets/about_me/traders_joes.jpg'
import emailIcon from '../assets/about_me/email_icon.svg'
import emailIconWhite from '../assets/about_me/email_icon_white.svg'
import linkedinIcon from '../assets/about_me/linkedin_icon.svg'
import linkedinIconWhite from '../assets/about_me/linkedin_icon_white.svg'
import resumeIcon from '../assets/about_me/resume_icon.svg'
import resumeIconWhite from '../assets/about_me/resume_icon_white.svg'
import instaIcon from '../assets/about_me/insta_icon.svg'
import instaIconWhite from '../assets/about_me/insta_icon_white.svg'
import resumePdf from '../assets/about_me/Jisoo_Jang_Resume.pdf'

function AboutMe() {
  const breadcrumbItems = [
    { label: 'Home', link: '/home' },
    { label: 'About me', link: '/about-me' }
  ]

  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />
      <div className="about-me-content">
        <div className="about-me-intro">
          <div className="about-me-intro-left">
            <div className="about-me-photo">
              <img 
                src={memojiImage} 
                alt="Jisoo's memoji" 
                className="profile-image"
              />
            </div>
            <div className="name-title">
              <img 
                src={purpleHighlight} 
                alt="" 
                className="name-purple-highlight"
              />
              <h1 className="name-text">Jisoo</h1>
            </div>
            <div className="about-me-title">
              <p className="job-title">ui/ux designer</p>
              <p className="job-title">product & packaging designer</p>
            </div>
          </div>
          <div className="about-me-intro-right">
            <p className="intro-text">
              <strong>hello</strong>, i am <strong>Jisoo!</strong><br />
              <strong>a ui/ux designer, product & packaging designer</strong> focused on building <strong>intuitive</strong>, <strong>human-focused</strong> design and <strong>experiences</strong>. With a strong interest in <strong>accessibility</strong> and <strong>inclusive</strong> design, I create products that feel <strong>clear</strong>, <strong>considerate</strong>, <strong>thoughtful</strong>, and <strong>easy</strong> to use for <strong>diverse</strong> audiences.
            </p>
          </div>
        </div>
        <div className="about-me-ilove">
          <div className="ilove-content">
            <div className="ilove-header">
              <h2 className="ilove-title">
                <img 
                  src={purpleHighlight} 
                  alt="" 
                  className="ilove-purple-highlight"
                />
                <span className="ilove-title-text">i love</span>
              </h2>
            </div>
            <div className="ilove-body">
              <div className="ilove-left">
                <img 
                  src={toastPhoto} 
                  alt="My cat Toast" 
                  className="toast-photo"
                  data-tooltip="My cat Toast (1 year old)"
                />
              </div>
              <div className="ilove-right">
                <p className="ilove-list">
                  my cat(Toast, 1y), coffee, food, dessert, home baking,
                  baking, cafe, crochet, hand embroidery,
                  nature, sky, cloud and all cute designed packages!
                </p>
                <div className="ilove-small-images">
                  <img 
                    src={coffeePhoto} 
                    alt="Coffee" 
                    className="coffee-photo"
                    data-tooltip="My favorite coffee"
                  />
                  <img 
                    src={puddingPhoto} 
                    alt="Pudding I made" 
                    className="baking-photo"
                    data-tooltip="Homemade pudding"
                  />
                  <img 
                    src={tradersJoesPhoto} 
                    alt="Traders Joe's packages" 
                    className="packages-photo"
                    data-tooltip="Cute package designs"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="about-me-skills">
          <div className="skills-content">
            <div className="skills-header">
              <h2 className="skills-title">
                <img 
                  src={purpleHighlight} 
                  alt="" 
                  className="skills-purple-highlight"
                />
                <span className="skills-title-text">i can do</span>
              </h2>
            </div>
            <div className="skills-body">
              <div className="hard-skills">
                <h3 className="skills-section-title">hard skills /</h3>
                <div className="skills-list-container">
                  <p className="skills-list">
                    adobe creative cloud (photoshop, illustrator, indesign, after effect), figma, framer, blender(3d), html5, css, javascript, react.js, next.js, node.js, express, expo, wordpress, google analytics, content marketing, seo, web security basics
                  </p>
                  <p className="skills-list">
                    prototyping, wireframing, design & colour system, responsive ui design, interaction design, usability testing, accessibility (wcag), packaging design, typography
                  </p>
                </div>
              </div>
              <div className="soft-skills">
                <h3 className="skills-section-title">soft skills /</h3>
                <div className="skills-list-container">
                  <p className="skills-list">
                    time management, clear communicator, cross-function collaborator, conflict resolution, detail-oriented, strong prioritization, bilingual (english/korean)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="about-me-contact">
          <div className="contact-content">
            <div className="contact-header">
              <h2 className="contact-title">
                <img 
                  src={purpleHighlight} 
                  alt="" 
                  className="contact-purple-highlight"
                />
                <span className="contact-title-text">get in touch</span>
              </h2>
            </div>
            <div className="contact-buttons">
              <a 
                href="mailto:jisoo.design@icloud.com" 
                className="contact-btn email-btn"
                aria-label="Send me an email!"
              >
                <div className="contact-icon-container">
                  <img 
                    src={emailIcon} 
                    alt="Email icon" 
                    className="contact-icon contact-icon-default"
                  />
                  <img 
                    src={emailIconWhite} 
                    alt="Email icon" 
                    className="contact-icon contact-icon-hover"
                  />
                </div>
                <span className="contact-btn-text">email</span>
              </a>
              <a 
                href="https://www.linkedin.com/in/jisoojang" 
                target="_blank"
                rel="noopener noreferrer"
                className="contact-btn linkedin-btn"
                aria-label="Visit Jisoo's LinkedIn page!"
              >
                <div className="contact-icon-container">
                  <img 
                    src={linkedinIcon} 
                    alt="LinkedIn icon" 
                    className="contact-icon contact-icon-default"
                  />
                  <img 
                    src={linkedinIconWhite} 
                    alt="LinkedIn icon" 
                    className="contact-icon contact-icon-hover"
                  />
                </div>
                <span className="contact-btn-text">linkedin</span>
              </a>
              <a 
                href={resumePdf} 
                target="_blank"
                rel="noopener noreferrer"
                className="contact-btn resume-btn"
                aria-label="Download my resume!"
              >
                <div className="contact-icon-container">
                  <img 
                    src={resumeIcon} 
                    alt="Resume icon" 
                    className="contact-icon contact-icon-default"
                  />
                  <img 
                    src={resumeIconWhite} 
                    alt="Resume icon" 
                    className="contact-icon contact-icon-hover"
                  />
                </div>
                <span className="contact-btn-text">resume</span>
              </a>
              <a 
                href="https://www.instagram.com/jisoojang.design/" 
                target="_blank"
                rel="noopener noreferrer"
                className="contact-btn insta-btn"
                aria-label="Visit Jisoo's Instagram page!"
              >
                <div className="contact-icon-container">
                  <img 
                    src={instaIcon} 
                    alt="Instagram icon" 
                    className="contact-icon contact-icon-default"
                  />
                  <img 
                    src={instaIconWhite} 
                    alt="Instagram icon" 
                    className="contact-icon contact-icon-hover"
                  />
                </div>
                <span className="contact-btn-text">insta</span>
              </a>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}

export default AboutMe

