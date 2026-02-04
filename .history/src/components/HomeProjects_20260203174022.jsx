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
              style={{
                flexShrink: 0,
                width: cardWidth,
                borderRadius: "24px",
                overflow: "hidden",
                display: "block",
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

      <style>{`
        /* 1. 스크롤바 숨기기 */
        .scroll-container::-webkit-scrollbar { display: none; }
        
        /* 2. 무한 루프 애니메이션 */
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-${totalWidth}px); }
        }

        .scroll-track:hover {
          animation-play-state: paused !important;
        }

        /* 3. 카드 네모칸 및 하이라이트 제거 */
        .project-card {
          /* 배경색과 테두리가 보이지 않도록 강제 설정 */
          background: transparent !important;
          -webkit-tap-highlight-color: transparent; /* 모바일 하이라이트 제거 */
          outline: none;
          text-decoration: none;
          /* 그림자를 넣고 싶다면 카드 자체에 넣어줘야 자연스럽습니다 */
          transition: transform 0.3s ease, box-shadow 0.3s ease !important;
        }

        .project-card:hover {
          transform: translateY(-10px);
          /* 위로 올라갈 때 그림자도 같이 진해져야 공중에 뜬 느낌이 납니다 */
          background: transparent !important;
        }

        /* 4. 이미지 둥근 모서리 보정 */
        .project-card img {
          border-radius: 24px;
          display: block;
        }
      `}</style>
    </section>
  );
}
