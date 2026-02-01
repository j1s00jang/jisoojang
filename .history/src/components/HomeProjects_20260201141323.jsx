import { useMemo, useState } from "react";
import scaffoldImage from "../assets/main/home_scaffold.png";
import montroImage from "../assets/main/home_montro.png";
import canDesignImage from "../assets/main/home_canDesign.png";
import magazineImage from "../assets/main/home_magazine.png";

const PROJECTS = [
    {
        id: "scaffold",
        title: "Scaffold",
        image: scaffoldImage,
        href: "#",
    },
    {
        id: "montro",
        title: "Montro",
        image: montroImage,
        href: "#",
    },
    {
        id: "canDesign",
        title: "Can Design",
        image: canDesignImage,
        href: "#",
    },
    {
        id: "magazine",
        title: "Magazine",
        image: magazineImage,
        href: "#",
    },
];

export default function ProjectsSection({
    title = "Projects",
    initialCount = 4,
    step = 4,
}) {
    const [visibleCount, setVisibleCount] = useState(initialCount);

    const visibleProjects = useMemo(
        () => PROJECTS.slice(0, visibleCount),
        [visibleCount]
    );

    const canLoadMore = visibleCount < PROJECTS.length;

    return (
        <section
            style={{
                background: "#f7f4ef",
                padding: "64px 0",
            }}
        >
            <div style={{ width: "min(1200px, 94vw)", margin: "0 auto" }}>
                <h2
                    style={{
                        textAlign: "center",
                        fontSize: "clamp(20px, 2.2vw, 28px)",
                        margin: "0 0 28px",
                        letterSpacing: "0.2px",
                    }}
                >
                    {title}
                </h2>

                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
                        gap: "22px",
                    }}
                >
                    {visibleProjects.map((p) => (
                        <a
                            key={p.id}
                            href={p.href}
                            style={{
                                display: "block",
                                borderRadius: "18px",
                                overflow: "hidden",
                                background: "#fff",
                                boxShadow: "0 12px 30px rgba(0,0,0,0.10)",
                                transform: "translateZ(0)",
                                transition:
                                    "transform 160ms ease, box-shadow 160ms ease",
                                textDecoration: "none",
                                color: "inherit",
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform =
                                    "translateY(-4px)";
                                e.currentTarget.style.boxShadow =
                                    "0 18px 45px rgba(0,0,0,0.14)";
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform =
                                    "translateY(0px)";
                                e.currentTarget.style.boxShadow =
                                    "0 12px 30px rgba(0,0,0,0.10)";
                            }}
                        >
                            <div
                                style={{
                                    aspectRatio: "1 / 1",
                                    background: "#eee",
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
                        </a>
                    ))}
                </div>

                <div
                    style={{
                        display: "grid",
                        placeItems: "center",
                        marginTop: "32px",
                    }}
                >
                    <button
                        type="button"
                        disabled={!canLoadMore}
                        onClick={() =>
                            setVisibleCount((c) =>
                                Math.min(c + step, PROJECTS.length)
                            )
                        }
                        style={{
                            background: "transparent",
                            border: "0",
                            cursor: canLoadMore ? "pointer" : "default",
                            opacity: canLoadMore ? 1 : 0.4,
                            fontSize: "16px",
                            padding: "10px 14px",
                            textDecoration: "underline",
                            textUnderlineOffset: "6px",
                        }}
                    >
                        Load more
                    </button>
                </div>

                {/* ✅ 모바일 대응 (간단) */}
                <style>{`
          @media (max-width: 980px) {
            section div[style*="grid-template-columns: repeat(4"] {
              grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
            }
          }
          @media (max-width: 520px) {
            section div[style*="grid-template-columns: repeat(4"] {
              grid-template-columns: 1fr !important;
            }
          }
        `}</style>
            </div>
        </section>
    );
}
