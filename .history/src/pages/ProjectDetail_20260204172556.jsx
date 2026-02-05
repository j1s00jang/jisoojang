import { useParams, useNavigate } from "react-router-dom";
import React, { useState, useMemo } from "react";
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
import MagazineFlipbook from "../components/MagazineFlipbook";

function ProjectDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const project = projectsBySlug[slug];

  const promoVideoSrc = useMemo(() => {
    if (slug !== "scaffold" || !project?.sections) return null;
    return project.sections.find((sec) => sec.sectionId === "promo-video")
      ?.images?.[0]?.src;
  }, [slug, project]);

  const carouselImages = useMemo(() => {
    if (slug !== "can-design" || !project?.flavours) return [];
    return project.flavours.map((f) => f.labelImage).filter(Boolean);
  }, [slug, project]);

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

  const nextSlide = (e) => {
    e.stopPropagation();
    setCurrentSlide((prev) =>
      prev === carouselImages.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = (e) => {
    e.stopPropagation();
    setCurrentSlide((prev) =>
      prev === 0 ? carouselImages.length - 1 : prev - 1
    );
  };

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

            {project.headerLinks && (
              <div className="project-detail-header-links">
                {project.headerLinks.map((link, idx) => {
                  if (link.type === "anchor") {
                    return (
                      <button
                        key={idx}
                        type="button"
                        className="project-detail-header-link"
                        onClick={() => {
                          if (
                            link.anchorId === "promo-video" ||
                            link.anchorId === "design-carousel" ||
                            link.anchorId === "magazine-flipbook"
                          ) {
                            setIsModalOpen(true);
                            setCurrentSlide(0);
                          } else {
                            document
                              .getElementById(link.anchorId)
                              ?.scrollIntoView({ behavior: "smooth" });
                          }
                        }}
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

                  return (
                    <button
                      key={idx}
                      className="project-detail-header-link"
                      onClick={() =>
                        window.open(
                          link.url,
                          "_blank",
                          link.type === "liveDemo"
                            ? "width=390,height=844"
                            : undefined
                        )
                      }
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
                })}
              </div>
            )}
          </div>
        </div>

        {isModalOpen && (
          <div
            className="video-overlay"
            onClick={() => setIsModalOpen(false)}
          >
            <div
              className={`video-modal-container ${
                slug === "magazine" ? "modal-large" : ""
              }`}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="video-close-btn"
                onClick={() => setIsModalOpen(false)}
              >
                &times;
              </button>

              {/* Scaffold header link video */}
              {slug === "scaffold" && promoVideoSrc && (
                <video
                  src={promoVideoSrc}
                  controls
                  autoPlay
                  className="overlay-video-player"
                />
              )}

              {/* Can Design header link carousel */}
              {slug === "can-design" && carouselImages.length > 0 && (
                <div className="carousel-wrapper">
                  <img
                    src={carouselImages[currentSlide]}
                    alt="Design Label"
                    className="overlay-image-player"
                  />
                  <button
                    className="carousel-nav-btn prev"
                    onClick={prevSlide}
                  >
                    &#10094;
                  </button>
                  <button
                    className="carousel-nav-btn next"
                    onClick={nextSlide}
                  >
                    &#10095;
                  </button>
                  <div className="carousel-indicator">
                    {currentSlide + 1} / {carouselImages.length}
                  </div>
                </div>
              )}
              {/* Magazine header link flipbook */}
              {slug === "magazine" && (
                <div className="flipbook-modal-wrapper">
                  <MagazineFlipbook />
                </div>
              )}
            </div>
          </div>
        )}

        <div className="project-detail-body">
          {project.overview && (
            <section className="project-detail-section">
              <h2>Overview</h2>
              <MD>{project.overview}</MD>
              {project.mockupImage && (
                <div className="project-detail-mockup">
                  <img
                    src={project.mockupImage}
                    alt="mockup"
                    className="project-detail-mockup-image"
                  />
                </div>
              )}
            </section>
          )}

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
