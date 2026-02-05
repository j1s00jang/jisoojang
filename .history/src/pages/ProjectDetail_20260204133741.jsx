import { useParams, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

import Breadcrumbs from "../components/Breadcrumbs";
import "./ProjectDetail.css";
import { projectsBySlug } from "../data/projectsData";
import Scaffold from "./Scaffold";
import { scaffold } from "../data/projects/scaffold";
import { canDesign } from "../data/projects/canDesign";
import Montro from "./Montro";
import CanDesign from "./CanDesign";
import Magazine from "./Magazine";
import InteractiveTutorial from "./InteractiveTutorial";
import Posters from "./Posters";

function ProjectDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();

  // 모달 통합 상태 관리
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

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

  // 데이터 추출
  const promoVideoSrc = scaffold.sections.find(
    (section) => section.sectionId === "promo-video"
  )?.images[0]?.src;

  // Can Design의 경우 캐러셀 이미지 배열 생성
  const carouselImages = canDesign.flavours?.map((f) => f.labelImage) || [];

  const breadcrumbItems = [
    { label: "Home", link: "/" },
    { label: "Projects", link: "/projects" },
    { label: project.name, link: null },
  ];

  const titleLines = project.titleLines;

  // 캐러셀 네비게이션 함수
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

            {project.headerLinks && project.headerLinks.length > 0 && (
              <div className="project-detail-header-links">
                {project.headerLinks.map((link, idx) => {
                  // 공통 핸들러: anchor 타입 처리
                  if (link.type === "anchor") {
                    return (
                      <button
                        key={idx}
                        type="button"
                        className="project-detail-header-link"
                        onClick={() => {
                          // promo-video 또는 design-carousel인 경우 오버레이 열기
                          if (
                            link.anchorId === "promo-video" ||
                            link.anchorId === "design-carousel"
                          ) {
                            setIsModalOpen(true);
                            setCurrentSlide(0); // 열 때 첫 번째 이미지로 초기화
                          } else {
                            document
                              .getElementById(link.anchorId)
                              ?.scrollIntoView({ behavior: "smooth" });
                          }
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

                  // liveDemo, external 타입은 기존 코드 유지
                  const isExternal = link.type === "external";
                  return (
                    <button
                      key={idx}
                      className="project-detail-header-link"
                      onClick={() =>
                        isExternal
                          ? window.open(link.url, "_blank")
                          : window.open(
                              link.url,
                              "_blank",
                              "width=390,height=844"
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

        {/* 통합 오버레이 모달 (비디오 & 이미지 캐러셀) */}
        {isModalOpen && (
          <div
            className="video-overlay"
            onClick={() => setIsModalOpen(false)}
          >
            <div
              className="video-modal-container"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="video-close-btn"
                onClick={() => setIsModalOpen(false)}
                aria-label="Close"
              >
                &times;
              </button>

              {/* Scaffold일 때: 비디오 재생 */}
              {slug === "scaffold" && promoVideoSrc && (
                <video
                  src={promoVideoSrc}
                  controls
                  autoPlay
                  className="overlay-video-player"
                />
              )}

              {/* Can Design일 때: 이미지 캐러셀 */}
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
            </div>
          </div>
        )}

        <div className="project-detail-body">
          {/* ... 기존 본문 섹션들 (Overview, Opportunity 등 동일) */}
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

          {/* ... 생략 (기존과 동일한 섹션 렌더링 코드들) */}
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
