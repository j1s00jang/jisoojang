import { useEffect, useRef } from "react";
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

const CARD_WIDTH = 250;
const CARD_GAP = 30;
const REPEAT_COUNT = 3;
const SCROLL_SPEED = 0.5;

export default function ProjectsSection({ title = "Projects" }) {
  const scrollRef = useRef(null);
  const isScrollingRef = useRef(false);
  const isPausedRef = useRef(false);
  const animationFrameId = useRef(null);

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

      const { scrollLeft, scrollWidth, clientWidth } = el;
      if (scrollLeft <= 10) {
        isScrollingRef.current = true;
        el.scrollLeft += singleSetWidth;
        isScrollingRef.current = false;
      } else if (scrollLeft >= scrollWidth - clientWidth - 10) {
        isScrollingRef.current = true;
        el.scrollLeft -= singleSetWidth;
        isScrollingRef.current = false;
      }
    };

    const animate = () => {
      if (!isPausedRef.current && el) {
        el.scrollLeft += SCROLL_SPEED;
      }
      animationFrameId.current = requestAnimationFrame(animate);
    };

    animationFrameId.current = requestAnimationFrame(animate);
    el.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      el.removeEventListener("scroll", handleScroll);
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, []);

  // 핸들러: 단순히 애니메이션 정지만 컨트롤
  const handleMouseEnter = () => {
    isPausedRef.current = true;
  };
  const handleMouseLeave = () => {
    isPausedRef.current = false;
  };

  return (
    <section
      style={{ background: "var(--color-primary-white)", padding: "64px 0" }}
    >
      <div style={{ width: "min(1200px, 94vw)", margin: "0 auto" }}>
        <h2 style={{ textAlign: "center", marginBottom: "28px" }}>{title}</h2>

        <div
          ref={scrollRef}
          className="home-projects-scroll"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onTouchStart={handleMouseEnter}
          onTouchEnd={handleMouseLeave}
          style={{
            display: "flex",
            gap: `${CARD_GAP}px`,
            overflowX: "auto",
            // [해결책] 스냅 기능을 아예 제거하여 튕김 현상 방지
            scrollSnapType: "none",
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
                transition: "transform 160ms ease",
                display: "block",
                // 호버 시 개별 카드가 살짝 올라가는 효과는 유지
                transform: "translateZ(0)",
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
      </div>
    </section>
  );
}
