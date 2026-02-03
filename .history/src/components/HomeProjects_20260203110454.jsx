import { useEffect, useRef, useState } from "react";
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

const CARD_WIDTH = 280;
const CARD_GAP = 30;
const REPEAT_COUNT = 3;
const SCROLL_SPEED = 0.5;

export default function ProjectsSection({ title = "Projects" }) {
  const scrollRef = useRef(null);
  const isScrollingRef = useRef(false);
  const [isPaused, setIsPaused] = useState(false);

  const repeatedProjects = Array.from(
    { length: REPEAT_COUNT },
    (_, repeatIdx) =>
      PROJECTS.map((p) => ({ ...p, key: `${p.id}-${repeatIdx}` }))
  ).flat();

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const singleSetWidth = PROJECTS.length * (CARD_WIDTH + CARD_GAP);

    el.scrollLeft = singleSetWidth;

    const handleScroll = () => {
      if (isScrollingRef.current) return;

      if (el.scrollLeft <= 10) {
        isScrollingRef.current = true;
        el.scrollLeft += singleSetWidth;
        isScrollingRef.current = false;
      } else if (el.scrollLeft >= el.scrollWidth - el.clientWidth - 10) {
        isScrollingRef.current = true;
        el.scrollLeft -= singleSetWidth;
        isScrollingRef.current = false;
      }
    };

    let animationFrameId;
    const animate = () => {
      if (!isPaused) {
        el.scrollLeft += SCROLL_SPEED;
      }
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);
    el.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      el.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isPaused]); // isPaused가 변할 때 애니메이션 로직 업데이트

  return (
    <section
      style={{ background: "var(--color-primary-white)", padding: "64px 0" }}
    >
      <div style={{ width: "min(1200px, 94vw)", margin: "0 auto" }}>
        <h2 style={{ textAlign: "center", marginBottom: "28px" }}>{title}</h2>

        <div
          ref={scrollRef}
          className="home-projects-scroll"
          // 마우스 & 터치 이벤트 통합
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
          style={{
            display: "flex",
            gap: `${CARD_GAP}px`,
            overflowX: "auto",
            // 자동 스크롤과 충돌을 피하기 위해 스냅은 유저 조작 시에만 유연하게 작동하도록 설정
            scrollSnapType: isPaused ? "x mandatory" : "none",
            scrollbarWidth: "none",
            msOverflowStyle: "none",
            WebkitOverflowScrolling: "touch",
            padding: "10px 0",
          }}
        >
          {repeatedProjects.map((p) => (
            <Link
              key={p.key}
              to={`/projects/${p.slug}`}
              style={{
                flexShrink: 0,
                width: CARD_WIDTH,
                borderRadius: "18px",
                overflow: "hidden",
                scrollSnapAlign: "start",
                transition: "transform 160ms ease",
                display: "block",
              }}
            >
              <div style={{ aspectRatio: "1 / 1" }}>
                <img
                  src={p.image}
                  alt={p.title}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
            </Link>
          ))}
        </div>

        {/* 하단 버튼 생략하지 말고 넣어주세요 */}
      </div>
    </section>
  );
}
