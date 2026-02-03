import { useParams, useNavigate } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

import Breadcrumbs from "../components/Breadcrumbs";
import "./ProjectDetail.css";
import { projectsBySlug } from "../data/projectsData";
import Scaffold from "./Scaffold";
import Montro from "./Montro";
import CanDesign from "./CanDesign";
import Magazine from "./Magazine";
import InteractiveTutorial from "./InteractiveTutorial";
import Posters from "./Posters";

function ProjectDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();

  const project = projectsBySlug[slug];

  // Reusable Markdown renderer
  const MD = ({ children, className = "project-detail-preline" }) => (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      components={{
        p: ({ children }) => <p className={className}>{children}</p>,
        li: ({ children }) => <li className="project-detail-li">{children}</li>,
        strong: ({ children }) => <strong>{children}</strong>,
      }}
    >
      {children}
    </ReactMarkdown>
  );

  if (!project) {
    return (
      <div className="project-detail-error">
        <h1>I'm sorry! The page is under construction.</h1>
        <button onClick={() => navigate("/projects")}>Back</button>
      </div>
    );
  }

  const breadcrumbItems = [
    { label: "Home", link: "/" },
    { label: "Projects", link: "/projects" },
    { label: project.name, link: null },
  ];

  const titleLines = project.titleLines;

  return (
    <div
      className={`project-detail-page ${
        ["can-design", "magazine", "interactive_tutorial", "posters"].includes(
          slug
        )
          ? "project-detail-large-screen"
          : ""
      }`}
    >
      <div className="project-detail-content">
        <Breadcrumbs items={breadcrumbItems} />

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
            <h1 className="project-detail-title">
              {Array.isArray(titleLines) && titleLines.length >= 2 ? (
                <>
                  <span className="title-highlight">{titleLines[0]}</span>
                  <br />
                  <span className="title-highlight">{titleLines[1]}</span>
                </>
              ) : (
                <span className="title-highlight">{project.name}</span>
              )}
            </h1>

            <div className="project-detail-intro-block">
              <h3 className="project-detail-intro-title">Summary</h3>
              <>
                <p className="project-detail-intro-text project-detail-preline">
                  {project.summary}
                </p>
            </div>

            {(project.id === 1 || project.id === 2) && (
              <div className="project-detail-intro-block">
                <h3 className="project-detail-intro-title">Role</h3>
                <p className="project-detail-intro-text project-detail-preline">
                  {project.role}
                </p>
              </div>
            )}

            <div className="project-detail-intro-block">
              <h3 className="project-detail-intro-title">Key Skills</h3>
              <p className="project-detail-intro-text project-detail-preline">
                {project.keySkills}
              </p>
            </div>

            {project.headerLinks && project.headerLinks.length > 0 && (
              <div className="project-detail-header-links">
                {project.headerLinks.map((link, idx) => {
                  if (link.type === "liveDemo") {
                    return (
                      <button
                        key={idx}
                        type="button"
                        className="project-detail-header-link"
                        onClick={() =>
                          window.open(
                            link.url,
                            "_blank",
                            "width=390,height=844,scrollbars=yes"
                          )
                        }
                        aria-label={link.label}
                        title={link.label}
                      >
                        <img
                          src={link.icon}
                          alt=""
                          className="project-detail-header-link-icon"
                        />
                        <span className="project-detail-header-link-label">
                          {link.label}
                        </span>
                      </button>
                    );
                  }

                  if (link.type === "external") {
                    return (
                      <a
                        key={idx}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-detail-header-link"
                        aria-label={link.label}
                        title={link.label}
                      >
                        <img
                          src={link.icon}
                          alt=""
                          className="project-detail-header-link-icon"
                        />
                        <span className="project-detail-header-link-label">
                          {link.label}
                        </span>
                      </a>
                    );
                  }

                  if (link.type === "anchor") {
                    return (
                      <button
                        key={idx}
                        type="button"
                        className="project-detail-header-link"
                        onClick={() => {
                          document
                            .getElementById(link.anchorId)
                            ?.scrollIntoView({
                              behavior: "smooth",
                            });
                        }}
                        aria-label={link.label}
                        title={link.label}
                      >
                        <img
                          src={link.icon}
                          alt=""
                          className="project-detail-header-link-icon"
                        />
                        <span className="project-detail-header-link-label">
                          {link.label}
                        </span>
                      </button>
                    );
                  }

                  return null;
                })}
              </div>
            )}
          </div>
        </div>

        <div className="project-detail-body">
          {/* ========================================
              Common Sections (All Projects)
             ======================================== */}
          {project.overview && (
            <section className="project-detail-section">
              <h2>Overview</h2>
              <MD>{project.overview}</MD>

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

          {/* ========================================
              Sections for Projects 1 & 2 (Scaffold, Montro)
             ======================================== */}
          {(project.id === 1 || project.id === 2) && project.opportunity && (
            <>
              <section className="project-detail-section opportunity-section">
                <h2>Opportunity</h2>
                <MD>{project.opportunity}</MD>
              </section>

              <section className="project-detail-section my-role-section">
                <h2>My Role</h2>
                <MD>{project.myRole}</MD>
              </section>

              <section className="project-detail-section">
                <h2>User Research</h2>
                <MD>{project.userResearch}</MD>
              </section>
            </>
          )}

          {/* Survey Results (Scaffold only) */}
          {project.scaffoldSurveyResults && (
            <section className="project-detail-section">
              <div className="project-detail-survey-images">
                <img
                  src={project.scaffoldSurveyResults}
                  alt={`${project.name} survey results page 1`}
                  className="project-detail-survey-image"
                />
                {project.scaffoldSurveyResults2 && (
                  <img
                    src={project.scaffoldSurveyResults2}
                    alt={`${project.name} survey results page 2`}
                    className="project-detail-survey-image"
                  />
                )}
              </div>
            </section>
          )}

          {/* Project-specific content */}
          {slug === "scaffold" && <Scaffold project={project} />}
          {slug === "montro" && <Montro project={project} />}
          {slug === "can-design" && <CanDesign project={project} />}
          {slug === "magazine" && <Magazine project={project} />}
          {slug === "interactive_tutorial" && (
            <InteractiveTutorial project={project} />
          )}
          {slug === "posters" && <Posters project={project} />}
        </div>
      </div>
    </div>
  );
}

export default ProjectDetail;
