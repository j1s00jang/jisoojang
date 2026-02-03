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

const CARD_WIDTH = 280;
const CARD_GAP = 22;
const REPEAT_COUNT = 3;

export default function ProjectsSection({ title = "Projects" }) {
  const scrollRef = useRef(null);
  const isScrollingRef = useRef(false);

  const repeatedProjects = Array.from(
    { length: REPEAT_COUNT },
    (_, repeatIdx) =>
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

  return (
    <section
      style={{
        background: "var(--color-primary-white)",
        padding: "64px 0",
      }}
    >
      <div style={{ width: "min(1200px, 94vw)", margin: "0 auto" }}>
        <h2
          style={{
            textAlign: "center",
            fontSize: "clamp(16px, 1.6vw, 24px)",
            color: "var(--color-primary-black)",
            margin: "0 0 28px",
            letterSpacing: "0.2px",
          }}
        >
          {title}
        </h2>

        <div
          ref={scrollRef}
          style={{
            display: "flex",
            gap: `${CARD_GAP}px`,
            overflowX: "auto",
            overflowY: "hidden",
            scrollSnapType: "x mandatory",
            scrollbarWidth: "none",
            msOverflowStyle: "none",
            padding: "8px 0",
            margin: "0 -8px",
          }}
          className="home-projects-scroll"
        >
          {repeatedProjects.map((p) => (
            <Link
              key={p.key || p.id}
              to={`/projects/${p.slug}`}
              style={{
                flexShrink: 0,
                width: CARD_WIDTH,
                display: "block",
                borderRadius: "18px",
                overflow: "hidden",
                background: "var(--color-primary-white)",
                transform: "translateZ(0)",
                transition: "transform 160ms ease, box-shadow 160ms ease",
                textDecoration: "none",
                color: "inherit",
                scrollSnapAlign: "start",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-5px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0px)";
              }}
            >
              <div
                style={{
                  aspectRatio: "1 / 1",
                  background: "var(--color-primary-white)",
                }}
              >
                <img
                  src={p.image}
                  alt={p.title}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block",
                  }}
                  loading="lazy"
                />
              </div>
            </Link>
          ))}
        </div>

        <div
          style={{
            display: "grid",
            placeItems: "center",
            marginTop: "32px",
          }}
        >
          <Link
            to="/projects"
            style={{
              background: "var(--color-primary-white)",
              border: "0",
              cursor: "pointer",
              fontSize: "16px",
              padding: "10px 14px",
              textDecoration: "underline",
              textUnderlineOffset: "6px",
              color: "inherit",
            }}
          >
            See all projects
          </Link>
        </div>

        <style>{`
          .home-projects-scroll::-webkit-scrollbar {
            display: none;
          }
          @media (max-width: 600px) {
            .home-projects-scroll a {
              width: 240px !important;
            }
          }
        `}</style>
      </div>
    </section>
  );
}
