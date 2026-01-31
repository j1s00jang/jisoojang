import "../pages/ProjectDetail.css";

/**
 * Template component for content-heavy project pages.
 * Renders `sections` from data: each section = optional heading + paragraphs + optional images.
 * Add/edit content in the project data file only; no JSX changes needed.
 *
 * Data shape per section:
 *   { heading?, paragraphs, images?, imageLayout?: 'row'|'stack', imageWrapperClass? }
 * - imageWrapperClass: extra class on the image wrapper for custom CSS (e.g. ProjectDetail.css).
 */
function ContentSections({ sections, projectName = "" }) {
    if (!Array.isArray(sections) || sections.length === 0) return null;

    return (
        <>
            {sections.map((sec, i) => {
                const paras = Array.isArray(sec.paragraphs)
                    ? sec.paragraphs
                    : [sec.paragraphs].filter(Boolean);
                const imgs = Array.isArray(sec.images) ? sec.images : [];
                const layout = sec.imageLayout === "stack" ? "stack" : "row";
                const layoutClass =
                    layout === "stack"
                        ? "project-detail-mockup project-detail-mockup-stack"
                        : "project-detail-mockup";
                const wrapClass = [layoutClass, sec.imageWrapperClass]
                    .filter(Boolean)
                    .join(" ");

                return (
                    <section
                        key={i}
                        className="project-detail-section"
                        data-section={sec.heading || i}
                    >
                        {sec.heading && <h2>{sec.heading}</h2>}
                        {paras.map((p, j) => (
                            <p
                                key={j}
                                className="project-detail-preline"
                            >
                                {p}
                            </p>
                        ))}
                        {imgs.length > 0 && (
                            <div className={wrapClass}>
                                {imgs.map((item, j) => {
                                    const src =
                                        typeof item === "string"
                                            ? item
                                            : item?.src;
                                    const alt =
                                        typeof item === "object" && item?.alt
                                            ? item.alt
                                            : `${projectName} section image ${j + 1}`;
                                    if (!src) return null;
                                    return (
                                        <img
                                            key={j}
                                            src={src}
                                            alt={alt}
                                            className="project-detail-mockup-image"
                                            loading="lazy"
                                        />
                                    );
                                })}
                            </div>
                        )}
                    </section>
                );
            })}
        </>
    );
}

export default ContentSections;
