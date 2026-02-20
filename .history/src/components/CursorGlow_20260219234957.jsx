import { useEffect, useRef } from "react";

function CursorGlow() {
  const glowRef = useRef(null);

  useEffect(() => {
    const glow = glowRef.current;
    if (!glow) return undefined;

    const supportsPointer = window.matchMedia(
      "(hover: hover) and (pointer: fine)"
    ).matches;
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (!supportsPointer || prefersReducedMotion) return undefined;

    let rafId = 0;
    let shown = false;
    const target = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const current = { ...target };

    const onPointerMove = (event) => {
      target.x = event.clientX;
      target.y = event.clientY;

      if (!shown) {
        shown = true;
        glow.style.opacity = "1";
      }
    };

    const onPointerLeave = () => {
      shown = false;
      glow.style.opacity = "0";
    };

    const render = () => {
      current.x += (target.x - current.x) * 0.11;
      current.y += (target.y - current.y) * 0.11;
      glow.style.left = `${current.x}px`;
      glow.style.top = `${current.y}px`;
      rafId = window.requestAnimationFrame(render);
    };

    document.addEventListener("pointermove", onPointerMove, { passive: true });
    document.addEventListener("pointerleave", onPointerLeave);
    rafId = window.requestAnimationFrame(render);

    return () => {
      window.cancelAnimationFrame(rafId);
      document.removeEventListener("pointermove", onPointerMove);
      document.removeEventListener("pointerleave", onPointerLeave);
    };
  }, []);

  return (
    <div
      ref={glowRef}
      className="cursor-glow"
      aria-hidden="true"
    />
  );
}

export default CursorGlow;
