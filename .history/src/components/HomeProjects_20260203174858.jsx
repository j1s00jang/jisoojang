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
              <div className="image-wrapper">
                <img
                  src={p.image}
                  alt={p.title}
                  draggable="false"
                />
              </div>
            </Link>
          ))}
        </div>
      </div>

      <style>{`
  .scroll-container {
          width: 100vw;
          overflow-x: auto;
          position: relative;
          scrollbar-width: none;
          -ms-overflow-style: none;
        }
        .scroll-container::-webkit-scrollbar { display: none; }

        .scroll-track {
          display: flex;
          gap: ${CARD_GAP}px;
          width: max-content;
          padding: 20px;
          animation: marquee linear infinite;
        }

        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-${totalWidth}px); }
        }

        .scroll-track:hover {
          animation-play-state: paused !important;
        }

        /* [네모칸 박멸 스타일] */
        .project-card {
          flex-shrink: 0;
          width: ${cardWidth}px;
          display: block;
          text-decoration: none;
          background-color: transparent !important;
          outline: none !important;
          border: none !important;
          -webkit-tap-highlight-color: transparent;
          transition: transform 0.3s ease-in-out !important;
        }

        .image-wrapper {
          width: 100%;
          aspect-ratio: 1 / 1;
          overflow: hidden;
          border-radius: 24px; /* 여기서 한 번 더 깎아줌 */
          background-color: transparent !important;
          box-shadow: 0 4px 12px rgba(0,0,0,0.08); /* 그림자를 여기에 부여 */
          transition: box-shadow 0.3s ease-in-out;
        }

        .project-card:hover {
          transform: translateY(-12px); /* 부드럽게 상승 */
        }

        .project-card:hover .image-wrapper {
          box-shadow: 0 20px 40px rgba(0,0,0,0.15); /* 호버 시 그림자만 강화 */
        }

        .image-wrapper img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        /* <a> 태그 호버 시 브라우저가 입히는 모든 잔상 강제 제거 */
        a:hover, a:focus, a:active {
          background: none !important;
          background-color: transparent !important;
        }
      `}</style>
    </section>
  );
}
