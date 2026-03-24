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
    const isMobile = cardWidth === 240;

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
    const CARD_GAP = isMobile ? 0 : 30;
    const totalWidth = PROJECTS.length * (cardWidth + CARD_GAP);

    return (
        <section
            style={{
                background: "transparent",
                padding: isMobile ? "40px 0 32px" : "80px 0",
                overflow: "hidden",
                width: isMobile ? "100vw" : "100%",
                marginLeft: isMobile ? "calc(50% - 50vw)" : 0,
                marginRight: isMobile ? "calc(50% - 50vw)" : 0,
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

            <div className="scroll-container">
                <div
                    className="scroll-track"
                    style={{ animationDuration: "35s" }}
                >
                    {infiniteProjects.map((p, index) => (
                        <Link
                            key={`${p.id}-${index}`}
                            to={`/projects/${p.slug}`}
                            className="project-card"
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
          width: 100%;
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
          padding: 40px 20px; /* 위아래 패딩을 넉넉히 주어 잘림 방지 */
          animation: marquee linear infinite;
        }

        @media (max-width: 768px) {
          .scroll-container {
            width: 100%;
            margin-left: 0;
            margin-right: 0;
          }

          .scroll-track {
            padding: 32px 0;
          }
        }

        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-${totalWidth}px); }
        }

        .scroll-track:hover {
          animation-play-state: paused !important;
        }

        .project-card {
          flex-shrink: 0;
          width: ${cardWidth}px;
          display: block;
          
          text-decoration: none !important;
          background-color: transparent !important;
          background: transparent !important;
          border: none !important;
          outline: none !important;
          box-shadow: none !important;
          -webkit-tap-highlight-color: transparent !important;
          
          transition: transform 0.4s cubic-bezier(0.165, 0.84, 0.44, 1) !important;
        }

        .project-card:hover, .project-card:focus, .project-card:active {
          background-color: transparent !important;
          background: transparent !important;
          outline: none !important;
          transform: translateY(-15px);
        }

        .image-wrapper {
          width: 100%;
          aspect-ratio: 1 / 1;
          overflow: hidden;
          border-radius: 24px;
          background-color: transparent;
          box-shadow: 0 4px 12px rgba(0,0,0,0.05); 
          transition: box-shadow 0.4s ease;
          pointer-events: none;
        }

        .image-wrapper img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }
      `}</style>
        </section>
    );
}
