import Breadcrumbs from "../components/Breadcrumbs";
import "../components/ContactIcon.css";
import "./AboutMe.css";
import "./ProjectDetail.css";
import memojiImage from "../assets/about_me/memoji_jisoo.png";
import toastPhoto from "../assets/about_me/toast.jpg";
import coffeePhoto from "../assets/about_me/coffee.jpg";
import puddingPhoto from "../assets/about_me/pudding.jpg";
import tradersJoesPhoto from "../assets/about_me/traders_joes.jpg";
import emailIcon from "../assets/about_me/email_icon.svg";
import emailIconWhite from "../assets/about_me/email_icon_white.svg";
import linkedinIcon from "../assets/about_me/linkedin_icon.svg";
import linkedinIconWhite from "../assets/about_me/linkedin_icon_white.svg";
import resumeIcon from "../assets/about_me/resume_icon.svg";
import resumeIconWhite from "../assets/about_me/resume_icon_white.svg";
import instaIcon from "../assets/about_me/insta_icon.svg";
import instaIconWhite from "../assets/about_me/insta_icon_white.svg";
import resumePdf from "../assets/about_me/Jisoo_Jang_Resume.pdf";

function AboutMe({ hideBreadcrumbs = false }) {
  const breadcrumbItems = [
    { label: "Home", link: "/home" },
    { label: "About me", link: "/about-me" },
  ];

  return (
    <div className="project-detail-content">
      {!hideBreadcrumbs && <Breadcrumbs items={breadcrumbItems} />}
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
              <h1 className="name-text">Jisoo</h1>
            </div>
            <div className="about-me-title">
              <p className="job-title">product designer</p>
              <p className="job-title">
                Focusing on user needs & business goals
              </p>
            </div>
          </div>
          <div className="about-me-intro-right">
            <p className="intro-text">
              <span className="intro-greeting-highlight">
                Hello, I'm Jisoo!
              </span>
              <br />
              <br />
              <span className="intro-text-body">
                I love identifying what causes friction and turning it into a
                clear, structured product. To create intuitive and inclusive
                experiences, I use AI tools strategically to move faster in the
                early stages of the design process, crafting human-centred
                interfaces that only product designers can create.
                <br />
                <br />
                Please take a moment to browse my portfolio, and reach out to me
                anytime if you have any inquiries. I’d love to hear from you!
              </span>
            </p>
          </div>
        </div>
        <div className="about-me-ilove">
          <div className="ilove-content">
            <div className="ilove-header">
              <h2 className="ilove-title">
                <span className="ilove-title-text">i love</span>
              </h2>
            </div>
            <div className="ilove-body">
              <div className="ilove-left">
                <img
                  src={toastPhoto}
                  alt="My cat Toast"
                  className="toast-photo"
                />
              </div>
              <div className="ilove-right">
                <p className="ilove-list">
                  Toast (my cat) • coffee • baking • desserts • cafés • hiking •
                  beach • active lifestyle • browsing supermarkets • cute
                  packaging
                </p>
                <div className="ilove-small-images">
                  <img
                    src={coffeePhoto}
                    alt="Coffee"
                    className="coffee-photo"
                  />
                  <img
                    src={puddingPhoto}
                    alt="Pudding I made"
                    className="baking-photo"
                  />
                  <img
                    src={tradersJoesPhoto}
                    alt="Traders Joe's packages"
                    className="packages-photo"
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
                <span className="skills-title-text">i can do</span>
              </h2>
            </div>
            <div className="skills-body">
              <div className="hard-skills">
                <h3 className="skills-section-title">hard skills /</h3>
                <div className="skills-list-container">
                  <p className="skills-list">
                    adobe creative cloud (photoshop, illustrator, indesign,
                    after effects), figma (+ Figma Make), framer, blender(3d),
                    Lovable, Uizard, base44, stitch
                  </p>
                  <p className="skills-list">
                    generative AI, google analytics, content marketing, html5,
                    css, javascript, react.js, next.js, node.js, express, expo,
                    wordpress,
                  </p>
                  <p className="skills-list">
                    prototyping, wireframing, design & colour system, responsive
                    ui design, interaction design, usability testing,
                    accessibility (wcag), packaging design, typography
                  </p>
                </div>
              </div>
              <div className="soft-skills">
                <h3 className="skills-section-title">soft skills /</h3>
                <div className="skills-list-container">
                  <p className="skills-list">
                    adaptability, time management, clear communicator,
                    cross-function collaborator, conflict resolution,
                    detail-oriented, strong prioritization, bilingual
                    (english/korean)
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
    </div>
  );
}

export default AboutMe;
