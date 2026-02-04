import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
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

// const CARD_WIDTH = 250;
// const CARD_GAP = 30;
// const REPEAT_COUNT = 3;
// const SCROLL_SPEED = 0.5;

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

  // 무한 루프를 위해 프로젝트 리스트를 복제 (2번만 복제해도 충분합니다)
  const infiniteProjects = [...PROJECTS, ...PROJECTS];
  const CARD_GAP = 30;
  const totalWidth = PROJECTS.length * (cardWidth + CARD_GAP);

  return (
    <section
      style={{
        background: "#transparent",
        padding: "64px 0",
        overflow: "hidden",
      }}
    >
      <div style={{ width: "min(1400px, 94vw)", margin: "0 auto" }}>
        <h2 style={{ textAlign: "center", marginBottom: "28px" }}>{title}</h2>

        {/* 가로 스크롤이 가능하도록 감싸는 컨테이너 */}
        <div
          style={{
            overflow: "hidden",
            width: "100%",
            position: "relative",
            cursor: "grab",
          }}
        >
          <motion.div
            style={{
              display: "flex",
              gap: `${CARD_GAP}px`,
              width: "max-content",
            }}
            animate={{
              x: [0, -totalWidth],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 35,
                ease: "linear",
              },
            }}
            // 마우스 호버 시 일시정지
            whileHover={{ animationPlayState: "paused" }}
          >
            {infiniteProjects.map((p, index) => (
              <Link
                key={`${p.id}-${index}`}
                to={`/projects/${p.slug}`}
                style={{
                  flexShrink: 0,
                  width: cardWidth,
                  borderRadius: "18px",
                  overflow: "hidden",
                  display: "block",
                }}
              >
                <div style={{ aspectRatio: "1 / 1" }}>
                  <img
                    src={p.image}
                    alt={p.title}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      pointerEvents: "none", // 드래그 방해 금지
                    }}
                  />
                </div>
              </Link>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
