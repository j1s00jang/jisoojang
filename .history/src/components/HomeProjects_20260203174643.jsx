import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import scaffoldImage from "../assets/main/projects/home_scaffold.png";
import montroImage from "../assets/main/projects/home_montro.png";
import canDesignImage from "../assets/main/projects/home_canDesign.png";
import magazineImage from "../assets/main/projects/home_magazine.png";
import interactiveTutorialImage from "../assets/main/projects/home_interactive.png";
import postersImage from "../assets/main/projects/home_posters.png";

const PROJECTS = [
  {
    id: "scaffold",
    slug: "scaffold",
    title: "Scaffold",
    image: scaffoldImage,
  },
  { id: "montro", slug: "montro", title: "Montro", image: montroImage },
  {
    id: "canDesign",
    slug: "can-design",
    title: "Can Design",
    image: canDesignImage,
  },
  {
    id: "magazine",
    slug: "magazine",
    title: "Magazine",
    image: magazineImage,
  },
  {
    id: "interactiveTutorial",
    slug: "interactive_tutorial",
    title: "Interactive Tutorial",
    image: interactiveTutorialImage,
  },
  { id: "posters", slug: "posters", title: "Posters", image: postersImage },
];

export default function ProjectsSection({ title = "Projects" }) {
  const [cardWidth, setCardWidth] = useState(getCardWidth());

  function getCardWidth() {
    if (window.innerWidth > 1400) return 320;
    if (window.innerWidth > 768) return 280;
    return 240;
  }

  useEffect(() => {
    const handleResize = () => setCardWidth(getCardWidth());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const infiniteProjects = [...PROJECTS, ...PROJECTS];
  const CARD_GAP = 30;
  const totalWidth = PROJECTS.length * (cardWidth + CARD_GAP);

  return (
    <section
      style={{
        background: "transparent",
        padding: "80px 0",
        overflow: "hidden",
        width: "100%",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "40px",
        }}
      >
        <h2
          style={{
            fontSize: "clamp(24px, 3vw, 36px)",
            fontWeight: "700",
            margin: 0,
          }}
        >
          {title}
        </h2>
      </div>

      <div
        className="scroll-container"
        style={{
          width: "100vw",
          overflowX: "auto",
          position: "relative",
          scrollbarWidth: "none",
        }}
      >
        <div
          className="scroll-track"
          style={{
            display: "flex",
            gap: `${CARD_GAP}px`,
            width: "max-content",
            padding: "0 20px",
            animation: `marquee 35s linear infinite`,
          }}
        >
          {infiniteProjects.map((p, index) => (
            <Link
              key={`${p.id}-${index}`}
              to={`/projects/${p.slug}`}
              className="project-card"
              // style={{
              //   flexShrink: 0,
              //   width: cardWidth,
              //   borderRadius: "24px",
              //   overflow: "hidden",
              //   display: "block",
              //   transition: "transform 0.3s ease",
              }}
            >
              <div style={{ aspectRatio: "1 / 1", overflow: "hidden" }}>
                <img
                  src={p.image}
                  alt={p.title}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  draggable="false"
                />
              </div>
            </Link>
          ))}
        </div>
      </div>

      <style>{`
  /* 1. 스크롤바 완전 제거 */
  .scroll-container::-webkit-scrollbar { display: none; }
  .scroll-container { -ms-overflow-style: none; scrollbar-width: none; }
  
  /* 2. 무한 루프 애니메이션 */
  @keyframes marquee {
    0% { transform: translateX(0); }
    100% { transform: translateX(-${totalWidth}px); }
  }

  .scroll-track:hover {
    animation-play-state: paused !important;
  }

  /* 3. 문제의 네모칸 제거 핵심 스타일 */
  .project-card {
    background-color: transparent !important; /* 배경색 절대 금지 */
    background: none !important;              /* 배경 이미지/그라디언트 금지 */
    -webkit-tap-highlight-color: transparent; /* 모바일 터치 시 푸른 칸 제거 */
    outline: none !important;                 /* 포커스 시 점선 제거 */
    border: none !important;                  /* 혹시 모를 테두리 제거 */
    text-decoration: none;
    display: block;
    transition: transform 0.3s ease !important;
  }

  /* 4. 호버 시 상태 강제 고정 */
  .project-card:hover, 
  .project-card:active, 
  .project-card:focus {
    background-color: transparent !important;
    background: none !important;
    outline: none !important;
    transform: translateY(-10px);
  }

  /* 5. 이미지 둥근 모서리 보정 */
  .project-card img {
    border-radius: 24px;
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    /* 이미지가 살짝 튀어나와 보이는 현상 방지 */
    backface-visibility: hidden; 
  }
`}</style>
    </section>
  );
}
