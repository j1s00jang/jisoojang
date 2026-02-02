import "../pages/ProjectDetail.css";

/**
 * Template component for content-heavy project pages.
 * Renders `sections` from data: each section = optional heading + paragraphs + optional images.
 * Add/edit content in the project data file only; no JSX changes needed.
 *
 * Data shape per section:
 *   { heading?, paragraphs, images?, imageLayout?: 'row'|'stack', imageWrapperClass?, caption? }
 * - images: array of src (string), { src, alt? } for images, { type: 'video', src, className? } for videos, or { type: 'iframe', src, width?, height?, className?, caption? } for embeds
 * - imageWrapperClass: extra class on the image wrapper for custom CSS (e.g. ProjectDetail.css).
 * - caption: optional caption shown below the images in this section.
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
                            <>
                                <div className={wrapClass}>
                                    {imgs.map((item, j) => {
                                        const src =
                                            typeof item === "string"
                                                ? item
                                                : item?.src;
                                        const alt =
                                            typeof item === "object" && item?.alt
                                                ? item.alt
                                                : `${projectName} section ${j + 1}`;
                                        const isVideo =
                                            typeof item === "object" &&
                                            item?.type === "video";
                                        const isIframe =
                                            typeof item === "object" &&
                                            item?.type === "iframe";
                                        if (!src && !isIframe) return null;
                                        if (isVideo && src) {
                                            const videoClass =
                                                item?.className ??
                                                "project-detail-mockup-image";
                                            return (
                                                <video
                                                    key={j}
                                                    src={src}
                                                    controls
                                                    playsInline
                                                    className={videoClass}
                                                >
                                                    Your browser does not support
                                                    the video tag.
                                                </video>
                                            );
                                        }
                                        if (isIframe && item?.src) {
                                            const iframeClass =
                                                item?.className ??
                                                "project-detail-embed-iframe";
                                            return (
                                                <span
                                                    key={j}
                                                    className="project-detail-embed-wrap"
                                                >
                                                    <iframe
                                                        src={item.src}
                                                        width={item.width ?? 800}
                                                        height={item.height ?? 450}
                                                        style={{
                                                            border: "1px solid rgba(0, 0, 0, 0.1)",
                                                        }}
                                                        allowFullScreen
                                                        title={`${projectName} embed`}
                                                        className={iframeClass}
                                                    />
                                                    {item.caption && (
                                                        <span className="project-detail-embed-caption">
                                                            {item.caption}
                                                        </span>
                                                    )}
                                                </span>
                                            );
                                        }
                                        if (src) {
                                            return (
                                                <img
                                                    key={j}
                                                    src={src}
                                                    alt={alt}
                                                    className="project-detail-mockup-image"
                                                    loading="lazy"
                                                />
                                            );
                                        }
                                        return null;
                                    })}
                                </div>
                                {sec.caption && (
                                    <span className="project-detail-embed-caption">
                                        {sec.caption}
                                    </span>
                                )}
                            </>
                        )}
                    </section>
                );
            })}
        </>
    );
}

export default ContentSections;
