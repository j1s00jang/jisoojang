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

  // 리렌더링을 위한 state (CSS 변경용)
  const [isHovered, setIsHovered] = useState(false);
  // 애니메이션 루프 내에서 즉각 참조하기 위한 ref
  const isPausedRef = useRef(false);

  const repeatedProjects = Array.from(
    { length: REPEAT_COUNT },
    (_, repeatIdx) =>
      PROJECTS.map((p) => ({ ...p, key: `${p.id}-${repeatIdx}` }))
  ).flat();

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const singleSetWidth = PROJECTS.length * (CARD_WIDTH + CARD_GAP);

    // [중요] 초기 위치 설정은 마운트 시 '딱 한 번'만 실행
    el.scrollLeft = singleSetWidth;

    const handleScroll = () => {
      if (isScrollingRef.current) return;
      const { scrollLeft, scrollWidth } = el;

      if (scrollLeft <= 10) {
        isScrollingRef.current = true;
        el.scrollLeft += singleSetWidth;
        isScrollingRef.current = false;
      } else if (scrollLeft >= scrollWidth - el.clientWidth - 10) {
        isScrollingRef.current = true;
        el.scrollLeft -= singleSetWidth;
        isScrollingRef.current = false;
      }
    };

    let animationFrameId;
    const animate = () => {
      // ref를 참조하므로 useEffect가 재실행되지 않아도 멈춤/재생 가능
      if (!isPausedRef.current && el) {
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
  }, []); // 의존성 배열을 비워둠으로써 리렌더링 시 위치 초기화를 막음

  // 상태 변경 함수
  const handleMouseEnter = () => {
    isPausedRef.current = true;
    setIsHovered(true);
  };
  const handleMouseLeave = () => {
    isPausedRef.current = false;
    setIsHovered(false);
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
            // 사용자가 조작 중일 때만 스냅 적용
            scrollSnapType: isHovered ? "x mandatory" : "none",
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
      </div>
    </section>
  );
}
