import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, useAnimationControls } from "framer-motion";

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
        background: "#transparent",
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
            // [핵심] CSS 애니메이션 직접 사용 (위치가 튀지 않음)
            animation: `marquee 25s linear infinite`,
          }}
        >
          {infiniteProjects.map((p, index) => (
            <Link
              key={`${p.id}-${index}`}
              to={`/projects/${p.slug}`}
              className="project-card"
              style={{
                flexShrink: 0,
                width: cardWidth,
                borderRadius: "24px",
                overflow: "hidden",
                display: "block",
                boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
                transition: "transform 0.3s ease",
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

      {/* [해결] 애니메이션 제어를 위한 전용 스타일 태그 */}
      <style>{`
        .scroll-container::-webkit-scrollbar { display: none; }
        
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-${totalWidth}px); }
        }

        /* 호버 시 트랙(부모)을 멈추면 자식 위치는 그대로 유지됨 */
        .scroll-track:hover {
          animation-play-state: paused !important;
        }

        /* 개별 카드 호버 효과 */
        .project-card:hover {
          transform: translateY(-10px);
        }
      `}</style>
    </section>
  );
}
