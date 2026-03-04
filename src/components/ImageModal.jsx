import { useState, useCallback, useEffect, useRef } from "react";
import "./ImageModal.css";

function ImageModal({ src, alt = "", onClose }) {
  const [scale, setScale] = useState(1);
  const [displaySize, setDisplaySize] = useState({ w: 0, h: 0 });
  const imgRef = useRef(null);

  const handleZoomIn = useCallback((e) => {
    e.stopPropagation();
    setScale((prev) => Math.min(prev + 0.25, 3));
  }, []);

  const handleZoomOut = useCallback((e) => {
    e.stopPropagation();
    setScale((prev) => Math.max(prev - 0.25, 0.5));
  }, []);

  const handleBackdropClick = useCallback(() => {
    onClose();
  }, [onClose]);

  const handleKeyDown = useCallback(
    (e) => {
      if (e.key === "Escape") onClose();
    },
    [onClose]
  );

  const measureImage = useCallback(() => {
    const img = imgRef.current;
    if (!img || !img.naturalWidth) return;
    const nw = img.naturalWidth;
    const nh = img.naturalHeight;
    const maxW = window.innerWidth - 160;
    const maxH = window.innerHeight - 160;
    const ratio = Math.min(maxW / nw, maxH / nh, 1);
    setDisplaySize({
      w: Math.round(nw * ratio),
      h: Math.round(nh * ratio),
    });
  }, []);

  useEffect(() => {
    const img = imgRef.current;
    if (img?.complete && img.naturalWidth) measureImage();
  }, [src, measureImage]);

  const stopScrollPropagation = useCallback((e) => {
    e.stopPropagation();
  }, []);

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    window.lenis?.stop();
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
      window.lenis?.start();
    };
  }, [handleKeyDown]);

  const { w, h } = displaySize;
  const scrollW = Math.round(w * scale);
  const scrollH = Math.round(h * scale);

  return (
    <div
      className="image-modal-overlay"
      onClick={handleBackdropClick}
      onWheel={stopScrollPropagation}
      role="dialog"
      aria-modal="true"
      aria-label="Image viewer"
    >
      <div
        className="image-modal-container"
        onClick={(e) => e.stopPropagation()}
        onWheel={stopScrollPropagation}
      >
        <button
          className="image-modal-close"
          onClick={onClose}
          aria-label="Close"
        >
          &times;
        </button>

        <div className="image-modal-zoom-controls">
          <button
            className="image-modal-zoom-btn"
            onClick={handleZoomOut}
            aria-label="Zoom out"
          >
            −
          </button>
          <span className="image-modal-zoom-value">
            {Math.round(scale * 100)}%
          </span>
          <button
            className="image-modal-zoom-btn"
            onClick={handleZoomIn}
            aria-label="Zoom in"
          >
            +
          </button>
        </div>

        <div
          className={`image-modal-content ${
            w > 0 && (scrollW > w || scrollH > h) ? "image-modal-content-scrollable" : ""
          }`}
          onWheel={stopScrollPropagation}
          style={{
            overflow:
              w > 0 && (scrollW > w || scrollH > h) ? "auto" : "hidden",
          }}
        >
          {w > 0 ? (
            <div
              className="image-modal-scroll-inner"
              style={{
                width: scrollW,
                height: scrollH,
                minWidth: w,
                minHeight: h,
              }}
            >
              <img
                ref={imgRef}
                src={src}
                alt={alt}
                className="image-modal-image image-modal-image-scaled"
                style={{
                  width: w,
                  height: h,
                  transform: `scale(${scale})`,
                  transformOrigin: "top left",
                }}
                draggable={false}
                onClick={onClose}
                onLoad={measureImage}
              />
            </div>
          ) : (
            <img
              ref={imgRef}
              src={src}
              alt={alt}
              className="image-modal-image"
              draggable={false}
              onClick={onClose}
              onLoad={measureImage}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default ImageModal;
