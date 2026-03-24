import { useState, useEffect } from "react";
import { motion } from "framer-motion";

import PortUrl from "../assets/main/hero/port.svg";
import FolioUrl from "../assets/main/hero/folio.svg";
import RibbonUrl from "../assets/main/hero/ribbon.svg";

import HelloSticker from "../assets/main/hero/iam_empty.svg";
import HelloStickerProduct from "../assets/main/hero/iam_Product.svg";
import VancouverSticker from "../assets/main/hero/sticker_vancouver.svg";
import ToastSticker from "../assets/main/hero/sticker_toast.svg";
import FruitsSticker from "../assets/main/hero/sticker_fruits.svg";

import "./Hero.css";

/* Hero layout responsiveness and animation timing */
const MOBILE_BREAKPOINT_PX = 768;
const SCROLL_ANIMATION_DELAY = 2.5;

/* Framer Motion element aliases for cleaner JSX and ESLint compatibility */
const MotionDiv = motion.div;
const MotionImg = motion.img;
const MotionSpan = motion.span;

/* Sticker content and their default desktop positions */
const STICKERS = [
    {
        id: "hello",
        src: HelloSticker,
        rotate: 10,
        cycleSrcs: [HelloStickerProduct],
        style: {
            top: "16%",
            left: "65%",
            width: "clamp(6%, 12%, 14%)",
        },
    },
    {
        id: "vancouver",
        src: VancouverSticker,
        rotate: 15,
        style: {
            top: "35%",
            left: "40%",
            width: "clamp(5%, 7%, 10%)",
        },
    },
    {
        id: "toast",
        src: ToastSticker,
        rotate: -15,
        style: {
            top: "48%",
            left: "39.5%",
            width: "clamp(5%, 8%, 11%)",
        },
    },
    {
        id: "fruits",
        src: FruitsSticker,
        rotate: 20,
        style: {
            top: "48%",
            left: "64%",
            width: "clamp(5%, 7%, 9%)",
        },
    },
];

/* Extra position nudges used only on small screens */
const MOBILE_STICKER_OFFSETS = {
    hello: { left: 60, top: 6 },
    vancouver: { left: -60, top: -5 },
    toast: { left: -70 },
    fruits: { left: 50, top: -10 },
};

/* Shared floating motion for the ribbon glow and ribbon image */
const RIBBON_FLOAT_ANIMATION = {
    y: ["-10%", "-9%", "-10%"],
    rotate: [-0.5, 0.5, -0.5],
};

const LOOP_EASE = "easeInOut";

/* Combines the base sticker position with optional mobile-only offsets */
function getStickerPosition(style, offset) {
    return {
        ...style,
        ...(offset?.left != null
            ? { left: `calc(${style.left} + ${offset.left}px)` }
            : {}),
        ...(offset?.top != null
            ? { top: `calc(${style.top} + ${offset.top}px)` }
            : {}),
    };
}

/* Renders a single draggable sticker and handles the hover image swap */
function HeroSticker({
    id,
    src,
    cycleSrcs,
    style,
    rotate,
    hoveredId,
    helloCycleIndex,
    setHoveredId,
    setHelloCycleIndex,
}) {
    const isHello = id === "hello";
    const isHovered = hoveredId === id;
    const hasCycle = isHello && cycleSrcs?.length;
    const activeIndex =
        hasCycle && isHovered ? 1 + (helloCycleIndex % cycleSrcs.length) : 0;

    const handleMouseEnter = () => {
        setHoveredId(id);

        if (hasCycle) {
            setHelloCycleIndex((index) => index + 1);
        }
    };

    return (
        <MotionDiv
            drag
            dragMomentum={false}
            initial={{ rotate, scale: 1 }}
            animate={{ rotate: [rotate - 1, rotate + 1, rotate - 1] }}
            transition={{ duration: 4, repeat: Infinity }}
            whileHover={{ scale: 1, zIndex: 100, rotate }}
            whileDrag={{ scale: 1, rotate, cursor: "grabbing" }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={() => setHoveredId(null)}
            className="hero-sticker"
            style={{ ...style, width: style.width }}
        >
            {hasCycle ? (
                <div className="hero-sticker__inner">
                    <img
                        src={src}
                        alt=""
                        className="hero-sticker__img"
                    />

                    {cycleSrcs.map((cycleSrc, index) => {
                        const isActive = index + 1 === activeIndex;

                        return (
                            <img
                                key={`${id}-cycle-${index}`}
                                src={cycleSrc}
                                alt=""
                                className={`hero-sticker__cycle-img ${
                                    isActive ? "is-active" : ""
                                }`}
                            />
                        );
                    })}
                </div>
            ) : (
                <img
                    src={src}
                    alt=""
                    className="hero-sticker__simple-img"
                />
            )}
        </MotionDiv>
    );
}

/* Renders the sticker collection and passes the correct position to each one */
function StickerLayer({
    isMobile,
    hoveredId,
    helloCycleIndex,
    setHoveredId,
    setHelloCycleIndex,
}) {
    return STICKERS.map((sticker) => (
        <HeroSticker
            key={sticker.id}
            {...sticker}
            style={getStickerPosition(
                sticker.style,
                isMobile ? MOBILE_STICKER_OFFSETS[sticker.id] : null,
            )}
            hoveredId={hoveredId}
            helloCycleIndex={helloCycleIndex}
            setHoveredId={setHoveredId}
            setHelloCycleIndex={setHelloCycleIndex}
        />
    ));
}

/* Main hero section that coordinates responsive state and layered visuals */
function Hero() {
    /* Detects whether the current viewport should use the mobile layout */
    const [isMobile, setIsMobile] = useState(() =>
        typeof window !== "undefined"
            ? window.innerWidth <= MOBILE_BREAKPOINT_PX
            : false,
    );

    /* Tracks which sticker is currently hovered */
    const [hoveredId, setHoveredId] = useState(null);

    /* Advances the hello sticker image cycle on each hover */
    const [helloCycleIndex, setHelloCycleIndex] = useState(0);

    /* Keeps the mobile/desktop layout in sync when the window resizes */
    useEffect(() => {
        const handleResize = () =>
            setIsMobile(window.innerWidth <= MOBILE_BREAKPOINT_PX);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <section className="hero">
            <div className="hero__inner">
                {/* Intro line above the main PORT/FOLIO wordmark */}
                <div className="hero__welcome">
                    Welcome to <b>Jisoo</b>’s
                </div>

                {/* Front half of the portfolio title */}
                <div className="hero__port-wrap">
                    <img
                        src={PortUrl}
                        className="hero__port-img"
                        alt="port"
                    />
                </div>

                {/* Back half of the portfolio title */}
                <div className="hero__folio-wrap">
                    <img
                        src={FolioUrl}
                        className="hero__folio-img"
                        alt="folio"
                    />
                </div>

                {/* Desktop-only hint that invites users to drag the stickers */}
                {!isMobile && (
                    <div className="hero__sticker-hint">
                        <MotionSpan
                            animate={{ opacity: [0.4, 1, 0.4] }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                        >
                            ✨ Try moving my stickers! ✨
                        </MotionSpan>
                    </div>
                )}

                {/* Center ribbon layer made of a glow pass and the main ribbon image */}
                <div className="hero__ribbon-wrap">
                    <div className="hero__ribbon-inner">
                        <MotionImg
                            src={RibbonUrl}
                            alt=""
                            initial={{ opacity: 0, scale: 1 }}
                            animate={{
                                opacity: [0.3, 0.7, 0.3],
                                ...RIBBON_FLOAT_ANIMATION,
                            }}
                            transition={{
                                opacity: {
                                    duration: 4,
                                    delay: 0.5,
                                    repeat: Infinity,
                                    ease: LOOP_EASE,
                                },
                                y: {
                                    duration: 2,
                                    repeat: Infinity,
                                    ease: LOOP_EASE,
                                },
                                rotate: {
                                    duration: 5,
                                    repeat: Infinity,
                                    ease: LOOP_EASE,
                                },
                            }}
                            className="hero__ribbon-glow"
                        />
                        <MotionImg
                            src={RibbonUrl}
                            alt=""
                            draggable={false}
                            initial={{
                                clipPath: "inset(0 100% 0 0)",
                                opacity: 0,
                                y: "-10%",
                            }}
                            animate={{
                                clipPath: "inset(0 0% 0 0)",
                                opacity: 1,
                                ...RIBBON_FLOAT_ANIMATION,
                            }}
                            transition={{
                                clipPath: {
                                    duration: 2,
                                    delay: 0.3,
                                    ease: LOOP_EASE,
                                },
                                opacity: { duration: 1, delay: 0.3 },
                                y: {
                                    duration: 4,
                                    repeat: Infinity,
                                    ease: LOOP_EASE,
                                },
                                rotate: {
                                    duration: 5,
                                    repeat: Infinity,
                                    ease: LOOP_EASE,
                                },
                            }}
                            className="hero__ribbon-img"
                        />
                    </div>
                </div>

                {/* Desktop sticker layer with draggable interactive elements */}
                {!isMobile && (
                    <StickerLayer
                        isMobile={isMobile}
                        hoveredId={hoveredId}
                        helloCycleIndex={helloCycleIndex}
                        setHoveredId={setHoveredId}
                        setHelloCycleIndex={setHelloCycleIndex}
                    />
                )}
            </div>

            {/* Bottom scroll indicator that fades in after the hero animation */}
            <MotionDiv
                className="hero__scroll"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                    delay: SCROLL_ANIMATION_DELAY,
                    duration: 1,
                }}
            >
                <span className="hero__scroll-text">Scroll</span>
                <div className="hero__scroll-arrows">
                    {[0, 1].map((i) => (
                        <MotionDiv
                            key={i}
                            className="hero__scroll-arrow"
                            initial={{ rotate: 45, opacity: 0 }}
                            animate={{
                                opacity: [0.2, 1, 0.2],
                                y: [0, 5, 0],
                                rotate: 45,
                            }}
                            transition={{
                                duration: 1.5,
                                repeat: Infinity,
                                delay: i * 0.2,
                                ease: LOOP_EASE,
                            }}
                        />
                    ))}
                </div>
            </MotionDiv>
        </section>
    );
}

export default Hero;
