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
  const controls = useAnimationControls(); // 애니메이션을 직접 제어하기 위함

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

  const infiniteProjects = [...PROJECTS, ...PROJECTS, ...PROJECTS]; // 3번 복제하면 더 안정적입니다.
  const CARD_GAP = 30;
  const totalWidth = PROJECTS.length * (cardWidth + CARD_GAP);

  return (
    <section
      style={{
        background: "#fff",
        padding: "80px 0",
        overflow: "hidden",
        width: "100%",
      }}
    >
      {/* 1. 제목 중앙 정렬 해결 */}
      <div
        style={{
          width: "100%",
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

      {/* 2. 가로 스크롤 컨테이너 */}
      <div
        style={{
          width: "100vw",
          overflowX: "auto", // 수동 가로 스크롤 허용
          scrollbarWidth: "none", // 파이어폭스 스크롤바 숨김
          msOverflowStyle: "none", // IE 스크롤바 숨김
          position: "relative",
        }}
        className="no-scrollbar" // 크롬/사파리용 클래스 (아래 CSS 추가)
      >
        <motion.div
          style={{
            display: "flex",
            gap: `${CARD_GAP}px`,
            width: "max-content",
            padding: "0 20px", // 양옆 여백
          }}
          animate={{
            x: [0, -totalWidth],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 20,
              ease: "linear",
            },
          }}
          // [해결] 호버 시 멈춤 로직 강화
          whileHover={{ x: undefined }} // 호버 시 애니메이션 일시적 무시 효과 방지
          onMouseEnter={(e) => {
            e.currentTarget.style.animationPlayState = "paused";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.animationPlayState = "running";
          }}
        >
          {infiniteProjects.map((p, index) => (
            <Link
              key={`${p.id}-${index}`}
              to={`/projects/${p.slug}`}
              style={{
                flexShrink: 0,
                width: cardWidth,
                borderRadius: "24px",
                overflow: "hidden",
                display: "block",
                boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
                transition: "transform 0.3s ease",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = "translateY(-10px)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform = "translateY(0)")
              }
            >
              <div style={{ aspectRatio: "1 / 1", overflow: "hidden" }}>
                <img
                  src={p.image}
                  alt={p.title}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
            </Link>
          ))}
        </motion.div>
      </div>

      {/* 크롬/사파리 스크롤바 숨김용 스타일 */}
      <style>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}
