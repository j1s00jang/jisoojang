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
  const isHoveringRef = useRef(false); // 마우스 호버 상태 감지

  const repeatedProjects = Array.from(
    { length: REPEAT_COUNT },
    (_, repeatIdx) =>
      PROJECTS.map((p) => ({ ...p, key: `${p.id}-${repeatIdx}` }))
  ).flat();

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const singleSetWidth =
      PROJECTS.length * CARD_WIDTH + PROJECTS.length * CARD_GAP;
    el.scrollLeft = singleSetWidth;

    const handleScroll = () => {
      if (isScrollingRef.current) return;
      const { scrollLeft, scrollWidth } = el;

      if (scrollLeft <= 5) {
        isScrollingRef.current = true;
        el.scrollLeft = scrollLeft + singleSetWidth;
        isScrollingRef.current = false;
      } else if (scrollLeft >= scrollWidth - el.clientWidth - 5) {
        isScrollingRef.current = true;
        el.scrollLeft = scrollLeft - singleSetWidth;
        isScrollingRef.current = false;
      }
    };

    let animationFrameId;
    const animate = () => {
      if (!isHoveringRef.current) {
        el.scrollLeft += SCROLL_SPEED;
      }
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    el.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      el.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section
      style={{ background: "var(--color-primary-white)", padding: "64px 0" }}
    >
      <div style={{ width: "min(1200px, 94vw)", margin: "0 auto" }}>
        <h2 style={{ textAlign: "center", marginBottom: "28px" }}>{title}</h2>

        <div
          ref={scrollRef}
          className="home-projects-scroll"
          // 마우스가 올라가면 멈추고, 나가면 다시 시작
          onMouseEnter={() => {
            isHoveringRef.current = true;
          }}
          onMouseLeave={() => {
            isHoveringRef.current = false;
          }}
          style={{
            display: "flex",
            gap: `${CARD_GAP}px`,
            overflowX: "auto",
            scrollSnapType: isHoveringRef.current ? "x mandatory" : "none", // 자동 스크롤 중에는 스냅 끔
            scrollbarWidth: "none",
            msOverflowStyle: "none",
            WebkitOverflowScrolling: "touch",
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
              }}
              // 호버 효과는 CSS나 inline-style로 유지
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
        {/* ... 하단 "See all projects" 버튼 생략 */}
      </div>
    </section>
  );
}

const repeatedProjects = Array.from({ length: REPEAT_COUNT }, (_, repeatIdx) =>
  PROJECTS.map((p) => ({ ...p, key: `${p.id}-${repeatIdx}` }))
).flat();

useEffect(() => {
  const el = scrollRef.current;
  if (!el) return;

  const setScrollToMiddle = () => {
    const singleSetWidth =
      PROJECTS.length * CARD_WIDTH + (PROJECTS.length - 1) * CARD_GAP;
    el.scrollLeft = singleSetWidth;
  };

  requestAnimationFrame(setScrollToMiddle);

  const handleScroll = () => {
    if (isScrollingRef.current) return;
    const singleSetWidth =
      PROJECTS.length * CARD_WIDTH + (PROJECTS.length - 1) * CARD_GAP;
    const totalWidth = singleSetWidth * REPEAT_COUNT;
    const { scrollLeft } = el;

    if (scrollLeft <= CARD_WIDTH) {
      isScrollingRef.current = true;
      el.scrollLeft = scrollLeft + singleSetWidth;
      requestAnimationFrame(() => {
        isScrollingRef.current = false;
      });
    } else if (scrollLeft >= totalWidth - singleSetWidth - CARD_WIDTH) {
      isScrollingRef.current = true;
      el.scrollLeft = scrollLeft - singleSetWidth;
      requestAnimationFrame(() => {
        isScrollingRef.current = false;
      });
    }
  };

  el.addEventListener("scroll", handleScroll, { passive: true });
  return () => el.removeEventListener("scroll", handleScroll);
}, []);
