import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import "./ContentSections.css"; // 네가 이미 쓰고 있으면 유지, 없으면 삭제해도 됨

function ContentSections({ sections = [], projectName = "Project" }) {
  if (!Array.isArray(sections) || sections.length === 0) return null;

  const MD = ({ text }) => (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      components={{
        p: ({ children }) => (
          <p className="project-detail-preline">{children}</p>
        ),
        li: ({ children }) => <li className="project-detail-li">{children}</li>,
        strong: ({ children }) => <strong>{children}</strong>,
      }}
    >
      {text}
    </ReactMarkdown>
  );

  return (
    <div className="content-sections">
      {sections.map((section, idx) => {
        const {
          heading,
          sectionId,
          paragraphs = [],
          images = [],
          imageLayout = "row",
          imageWrapperClass = "",
        } = section || {};

        return (
          <section
            key={idx}
            id={sectionId || undefined}
            className="project-detail-section"
          >
            {heading && <h2>{heading}</h2>}

            {/* ✅ paragraphs: Markdown으로 렌더링 */}
            {Array.isArray(paragraphs) && paragraphs.length > 0 && (
              <div className="content-section-text">
                {paragraphs.map((t, pIdx) => {
                  if (!t || typeof t !== "string") return null;
                  return (
                    <MD
                      key={pIdx}
                      text={t}
                    />
                  );
                })}
              </div>
            )}

            {/* ✅ images / iframe / video 렌더링 (네 구조에 맞춰 기본 지원) */}
            {Array.isArray(images) && images.length > 0 && (
              <div
                className={`content-section-media layout-${imageLayout} ${imageWrapperClass}`}
              >
                {images.map((img, iIdx) => {
                  // string image src
                  if (typeof img === "string") {
                    return (
                      <img
                        key={iIdx}
                        src={img}
                        alt={`${projectName} media ${iIdx + 1}`}
                        className="project-detail-mockup-image"
                      />
                    );
                  }

                  // object media
                  if (img?.type === "iframe") {
                    return (
                      <div
                        key={iIdx}
                        className="content-section-iframe"
                      >
                        {img.caption && (
                          <p className="content-section-caption">
                            {img.caption}
                          </p>
                        )}
                        <iframe
                          src={img.src}
                          width={img.width || "100%"}
                          height={img.height || 500}
                          className={img.className || ""}
                          style={{ border: 0 }}
                          allowFullScreen
                          title={`embed-${iIdx}`}
                        />
                      </div>
                    );
                  }

                  if (img?.type === "video") {
                    return (
                      <div
                        key={iIdx}
                        className="content-section-video"
                      >
                        {img.caption && (
                          <p className="content-section-caption">
                            {img.caption}
                          </p>
                        )}
                        <video
                          src={img.src}
                          className={img.className || ""}
                          controls
                        />
                      </div>
                    );
                  }

                  return null;
                })}
              </div>
            )}
          </section>
        );
      })}
    </div>
  );
}

export default ContentSections;
