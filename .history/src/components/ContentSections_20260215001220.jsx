import "../pages/ProjectDetail.css";
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

// ✅ iOS / mobile detection (prevents iPhone Safari crash loops from heavy iframes)
const isIOS = () => {
  if (typeof navigator === "undefined" || typeof window === "undefined")
    return false;
  return /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
};

const isSmallScreen = () => {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(max-width: 768px)").matches;
};

/**
 * Template component for content-heavy project pages.
 * Renders `sections` from data: each section = optional heading + paragraphs + optional images.
 * Add/edit content in the project data file only; no JSX changes needed.
 *
 * Data shape per section:
 *   { heading?, sectionId?, paragraphs, images?, imageLayout?: 'row'|'stack', imageWrapperClass?, caption? }
 * - images: array of src (string), { src, alt?, url? } for images, { type: 'video', src, className?, caption? } for videos,
 *          or { type: 'iframe', src, width?, height?, className?, caption?, url? } for embeds
 * - imageWrapperClass: extra class on the image wrapper for custom CSS (e.g. ProjectDetail.css).
 * - caption: optional caption shown below the images in this section.
 */
function ContentSections({ sections, projectName = "" }) {
  if (!Array.isArray(sections) || sections.length === 0) return null;
  const [zoomedImage, setZoomedImage] = useState(null);

  // ✅ On iOS or small screens, do NOT render iframes (replace with link)
  const blockIframes = isIOS() || isSmallScreen();

  // Reusable Markdown renderer for section paragraphs
  const MD = ({ children }) => (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      components={{
        p: ({ children }) => (
          <p className="project-detail-preline">{children}</p>
        ),
        ul: ({ children }) => (
          <ul className="project-detail-list">{children}</ul>
        ),
        ol: ({ children }) => (
          <ol className="project-detail-list">{children}</ol>
        ),
        li: ({ children }) => <li className="project-detail-li">{children}</li>,
        strong: ({ children }) => <strong>{children}</strong>,
      }}
    >
      {children}
    </ReactMarkdown>
  );

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
            id={sec.sectionId}
            className="project-detail-section"
            data-section={sec.heading || i}
          >
            {sec.heading && <h2>{sec.heading}</h2>}

            {/* ✅ Paragraphs rendered as Markdown */}
            {paras.map((p, j) => (
              <MD key={j}>{String(p)}</MD>
            ))}

            {imgs.length > 0 && (
              <div
                className={
                  sec.caption ? "project-detail-media-with-caption" : undefined
                }
              >
                <div className={wrapClass}>
                  {imgs.map((item, j) => {
                    const src = typeof item === "string" ? item : item?.src;

                    const alt =
                      typeof item === "object" && item?.alt
                        ? item.alt
                        : `${projectName} section ${j + 1}`;

                    const isVideo =
                      typeof item === "object" && item?.type === "video";
                    const isIframe =
                      typeof item === "object" && item?.type === "iframe";

                    if (!src && !isIframe) return null;

                    // ✅ Video (GIF-like Autoplay support)
                    if (isVideo && src) {
                      const videoClass =
                        item?.className ?? "project-detail-mockup-image";

                      const isAuto = !!item.autoPlay;

                      const videoElement = (
                        <video
                          key={`video-${j}`}
                          src={src}
                          className={videoClass}
                          autoPlay={isAuto}
                          loop={isAuto}
                          muted={isAuto}
                          playsInline={isAuto}
                          controls={!isAuto}
                          preload="auto"
                          style={{
                            width: "100%",
                            height: "auto",
                            display: "block",
                            backgroundColor: "#f0f0f0",
                          }}
                        >
                          Your browser does not support the video tag.
                        </video>
                      );

                      return (
                        <span
                          key={j}
                          className="project-detail-embed-wrap"
                        >
                          {videoElement}
                          {item.caption && (
                            <span className="project-detail-embed-caption">
                              {item.caption}
                            </span>
                          )}
                        </span>
                      );
                    }
                    // ✅ Iframe (block on iOS/mobile to prevent crash loops)
                    if (isIframe && item?.src) {
                      // Prefer a non-embed URL if provided
                      const linkHref = item?.url ?? item.src;

                      if (blockIframes) {
                        return (
                          <span
                            key={j}
                            className="project-detail-embed-wrap"
                          >
                            <a
                              href={linkHref}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="project-detail-mockup-link"
                            >
                              Open in Figma
                            </a>
                            {item.caption && (
                              <span className="project-detail-embed-caption">
                                {item.caption}
                              </span>
                            )}
                          </span>
                        );
                      }

                      const iframeClass =
                        item?.className ?? "project-detail-embed-iframe";

                      return (
                        <span
                          key={j}
                          className="project-detail-embed-wrap"
                        >
                          <iframe
                            src={item.src}
                            width={item.width ?? 800}
                            height={item.height ?? 450}
                            allowFullScreen
                            title={`${projectName} embed ${j + 1}`}
                            className={iframeClass}
                            loading="lazy"
                          />
                          {item.caption && (
                            <span className="project-detail-embed-caption">
                              {item.caption}
                            </span>
                          )}
                        </span>
                      );
                    }

                      const imgEl = (
                        <img
                          src={src}
                          alt={alt}
                          className="project-detail-mockup-image"
                          loading="lazy"
                        />
                      );

                      const linkUrl = typeof item === "object" && item?.url;

                      if (isZoomable) {
                        return (
                          <button
                            key={j}
                            type="button"
                            className="project-detail-zoom-trigger"
                            onClick={() => setZoomedImage({ src, alt })}
                            aria-label={`${alt}. Click to zoom`}
                          >
                            {imgEl}
                            <span className="project-detail-zoom-hint">
                              Click to zoom
                            </span>
                          </button>
                        );
                      }

                      return linkUrl ? (
                        <a
                          key={j}
                          href={linkUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="project-detail-mockup-link"
                        >
                          {imgEl}
                        </a>
                      ) : (
                        <span
                          key={j}
                          className="project-detail-mockup-image-wrap"
                        >
                          {imgEl}
                        </span>
                      );
                    }

                    return null;
                  })}
                </div>

                {sec.caption && (
                  <div className="project-detail-caption-wrap">
                    <span className="project-detail-embed-caption">
                      {sec.caption}
                    </span>
                  </div>
                )}
              </div>
            )}
          </section>
        );
      })}

      {zoomedImage && (
        <div
          className="project-detail-image-zoom-overlay"
          onClick={() => setZoomedImage(null)}
        >
          <div
            className="project-detail-image-zoom-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="project-detail-image-zoom-close"
              onClick={() => setZoomedImage(null)}
              aria-label="Close zoomed image"
            >
              ×
            </button>
            <img
              src={zoomedImage.src}
              alt={zoomedImage.alt}
              className="project-detail-image-zoomed"
            />
          </div>
        </div>
      )}
    </>
  );
}

export default ContentSections;
