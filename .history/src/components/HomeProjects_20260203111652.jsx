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

const CARD_WIDTH = 250;
const CARD_GAP = 30;
const REPEAT_COUNT = 3;
const SCROLL_SPEED = 0.5;

export default function ProjectsSection({ title = "Projects" }) {
  const scrollRef = useRef(null);
  const isScrollingRef = useRef(false);
  const isPausedRef = useRef(false);
  const animationFrameId = useRef(null);

  const getCardWidth = () => {
    if (window.innerWidth > 1400) return 320;
    if (window.innerWidth > 768) return 280;
    return 240;
  };

  const [cardWidth, setCardWidth] = useState(getCardWidth());

  const repeatedProjects = Array.from(
    { length: REPEAT_COUNT },
    (_, repeatIdx) =>
      PROJECTS.map((p) => ({ ...p, key: `${p.id}-${repeatIdx}` }))
  ).flat();

  useEffect(() => {
    const handleResize = () => {
      setCardWidth(getCardWidth());
    };

    window.addEventListener("resize", handleResize);

    const el = scrollRef.current;
    if (!el) return;

    const singleSetWidth = PROJECTS.length * (cardWidth + CARD_GAP);
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
      window.removeEventListener("resize", handleResize);
      el.removeEventListener("scroll", handleScroll);
      if (animationFrameId.current)
        cancelAnimationFrame(animationFrameId.current);
    };
  }, [cardWidth]);

  return (
    <section
      style={{
        background: "var(--color-primary-white)",
        padding: "64px 0",
        overflow: "hidden",
      }}
    >
      <div style={{ width: "min(1400px, 94vw)", margin: "0 auto" }}>
        <h2 style={{ textAlign: "center", marginBottom: "28px" }}>{title}</h2>

        <div
          ref={scrollRef}
          onMouseEnter={() => {
            isPausedRef.current = true;
          }}
          onMouseLeave={() => {
            isPausedRef.current = false;
          }}
          onTouchStart={() => {
            isPausedRef.current = true;
          }}
          onTouchEnd={() => {
            isPausedRef.current = false;
          }}
          style={{
            display: "flex",
            gap: `${CARD_GAP}px`,
            overflowX: "auto",
            scrollSnapType: "none",
            scrollbarWidth: "none",
            msOverflowStyle: "none",
            WebkitOverflowScrolling: "touch",
            padding: "20px 0",
          }}
        >
          {repeatedProjects.map((p) => (
            <Link
              key={p.key}
              to={`/projects/${p.slug}`}
              style={{
                flexShrink: 0,
                width: cardWidth,
                borderRadius: "18px",
                overflow: "hidden",
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
