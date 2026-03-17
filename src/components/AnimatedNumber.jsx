import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * Animates a number from 0 to the target value when it enters the viewport.
 * @param {string} value - e.g. "75%", "55.6", "1,234"
 * @param {number} duration - animation duration in seconds
 * @param {string} className - optional CSS class
 */
function AnimatedNumber({ value, duration = 2, className = "" }) {
  const ref = useRef(null);

  const match = String(value).match(/^([\d.,]+)(.*)$/);
  const suffix = match?.[2] ?? "";
  const initialText = "0" + suffix;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const targetNum = match ? parseFloat(match[1].replace(/,/g, "")) : 0;
    const decimals = (String(targetNum).split(".")[1] || "").length;

    const obj = { val: 0 };
    const tween = gsap.to(obj, {
      val: targetNum,
      duration,
      ease: "power2.out",
      scrollTrigger: {
        trigger: el,
        start: "top 85%",
        toggleActions: "play none none none",
      },
      onUpdate: () => {
        const n = decimals > 0 ? obj.val.toFixed(decimals) : Math.round(obj.val);
        el.textContent = n + suffix;
      },
    });

    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, [value, duration]);

  return (
    <span ref={ref} className={className}>
      {initialText}
    </span>
  );
}

export default AnimatedNumber;
