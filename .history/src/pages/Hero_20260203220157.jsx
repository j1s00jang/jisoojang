import { useState, useEffect } from "react";
import { motion } from "framer-motion";

import PortUrl from "../assets/main/hero/port.svg";
import FolioUrl from "../assets/main/hero/folio.svg";
import RibbonUrl from "../assets/main/hero/ribbon.svg";

import HelloSticker from "../assets/main/hero/iam_empty.svg";
import HelloStickerUXUI from "../assets/main/hero/iam_UXUI.svg";
import HelloStickerProduct from "../assets/main/hero/iam_Product.svg";
import HelloStickerPackaging from "../assets/main/hero/iam_Packaging.svg";
import VancouverSticker from "../assets/main/hero/sticker_vancouver.svg";
import IamJisooSticker from "../assets/main/hero/sticker_iamjisoo.svg";
import FruitsSticker from "../assets/main/hero/sticker_fruits.svg";
import ContactMeSticker from "../assets/main/hero/sticker_contact_me.svg";

const stickers = [
  {
    id: "hello",
    src: HelloSticker,
    rotate: 10,
    cycleSrcs: [HelloStickerUXUI, HelloStickerProduct, HelloStickerPackaging],
    style: {
      top: "16%",
      left: "65%",
      width: "clamp(6%, 12%, 14%)",
    },
  },
  {
    id: "vancouver",
    src: VancouverSticker,
    rotate: -20,
    style: {
      top: "35%",
      left: "40%",
      width: "clamp(5%, 7%, 10%)",
    },
  },
  {
    id: "iamjisoo",
    src: IamJisooSticker,
    rotate: 15,
    style: {
      top: "48%",
      left: "39.5%",
      width: "clamp(5%, 8%, 11%)",
    },
  },
  {
    id: "fruits",
    src: FruitsSticker,
    rotate: -20,
    style: {
      top: "48%",
      left: "64%",
      width: "clamp(5%, 7%, 9%)",
    },
  },
  {
    id: "contactme",
    src: ContactMeSticker,
    rotate: 12,
    style: {
      top: "62%",
      left: "65%",
      width: "clamp(3%, 8%, 10%)",
    },
  },
];

function Hero() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [hoveredId, setHoveredId] = useState(null);
  const [helloCycleIndex, setHelloCycleIndex] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section
      style={{
        minHeight: "100vh",
        background: "#f7f4ef",
        display: "grid",
        placeItems: "center",
        overflow: "hidden",
        touchAction: "none",
      }}
    >
      <div
        style={{
          position: "relative",
          width: "100%",
          aspectRatio: isMobile ? "1 / 1" : "16 / 7",
          transition: "aspect-ratio 0.3s ease",
          isolation: "isolate",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: isMobile ? "10%" : "18%",
            left: "50%",
            transform: "translateX(-50%)",
            fontSize: isMobile
              ? "clamp(14px, 4vw, 18px)"
              : "clamp(14px, 1.4vw, 18px)",
            color: "#2E2B28",
            textAlign: "center",
            opacity: 0.85,
            zIndex: 50,
            whiteSpace: "nowrap",
          }}
        >
          {" "}
          Welcome to <b>Jisoo</b>’s
        </div>

        <div
          style={{
            position: "absolute",
            top: isMobile ? "85%" : "78%",
            left: "50%",
            transform: "translateX(-50%)",
            fontSize: isMobile
              ? "clamp(10px, 3vw, 14px)"
              : "clamp(9px, 1.1vw, 15px)",
            color: "#7b61ff",
            fontWeight: "500",
            textAlign: "center",
            zIndex: 50,
            whiteSpace: "nowrap",
          }}
        >
          <motion.span
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            ✨ Try moving my stickers! ✨
          </motion.span>
        </div>

        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "grid",
            placeItems: "center",
            zIndex: 10,
          }}
        >
          <img
            src={FolioUrl}
            style={{
              width: isMobile ? "80%" : "35%",
              transform: "translateY(40%)",
            }}
          />
        </div>
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "grid",
            placeItems: "center",
            zIndex: 20,
            pointerEvents: "none",
          }}
        >
          <motion.img
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
              y: ["-10%", "-9%", "-10%"],
              rotate: [-0.5, 0.5, -0.5],
            }}
            transition={{
              clipPath: { duration: 2, delay: 0.3, ease: "easeInOut" },
              opacity: { duration: 1, delay: 0.3 },
              y: {
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              },
              rotate: {
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }}
            style={{
              width: "120%",
              height: "auto",
              display: "block",
            }}
          />
        </div>
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "grid",
            placeItems: "center",
            zIndex: 30,
          }}
        >
          <img
            src={PortUrl}
            style={{ width: isMobile ? "80%" : "35%" }}
          />
        </div>

        {stickers.map(({ id, src, cycleSrcs, style, rotate }) => {
          const isHello = id === "hello";
          const isHovered = hoveredId === id;
          const hasCycle = isHello && cycleSrcs?.length;

          const activeIndex =
            hasCycle && isHovered
              ? 1 + (helloCycleIndex % cycleSrcs.length)
              : 0;

          const allSrcs = hasCycle ? [src, ...cycleSrcs] : [src];

          const handleHelloEnter = () => {
            setHoveredId(id);
            if (isHello && cycleSrcs) setHelloCycleIndex((i) => i + 1);
          };

          return (
            <motion.div
              key={id}
              drag
              dragMomentum={false}
              onPointerUp={(e) => {
                if (id === "contactme") {
                  window.location.href = "mailto:jisoo.design@icloud.com";
                }
              }}
              initial={{ rotate: rotate || 0, scale: 1 }}
              animate={{
                rotate: [rotate - 1, rotate + 1, rotate - 1],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
              }}
              whileHover={{
                scale: 1,
                zIndex: 100,
                rotate: rotate || 0,
              }}
              whileDrag={{
                scale: 1,
                rotate: rotate || 0,
                cursor: "grabbing",
              }}
              onMouseEnter={isHello ? handleHelloEnter : () => setHoveredId(id)}
              onMouseLeave={() => setHoveredId(null)}
              style={{
                position: "absolute",
                zIndex: 40,
                ...style,
                cursor: "grab",
                filter: "drop-shadow(2px 4px 6px rgba(0,0,0,0.15))",
                touchAction: "none",
              }}
            >
              {hasCycle ? (
                <div
                  style={{
                    position: "relative",
                    width: "100%",
                    aspectRatio: "580 / 339",
                  }}
                >
                  {allSrcs.map((s, i) => {
                    const isActive = i === activeIndex;
                    return (
                      <img
                        key={`${id}-img-${i}`}
                        src={s}
                        alt=""
                        style={{
                          position: "absolute",
                          inset: 0,
                          width: "100%",
                          height: "100%",
                          objectFit: "contain",
                          zIndex: isActive ? 2 : 1,
                          transition: "opacity 0.15s ease-in-out",
                          pointerEvents: "none",
                        }}
                      />
                    );
                  })}
                </div>
              ) : (
                <img
                  src={src}
                  alt=""
                  style={{
                    width: "100%",
                    height: "auto",
                    pointerEvents: "none",
                  }}
                />
              )}
            </motion.div>
          );
        })}
      </div>
      {/* arrow */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
        style={{
          position: "absolute",
          bottom: "30px",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          zIndex: 60,
          pointerEvents: "none",
          gap: "10px",
        }}
      >
        <span
          style={{
            fontSize: "10px",
            letterSpacing: "0.25em",
            color: "#2E2B28",
            fontWeight: "700",
            textTransform: "uppercase",
            opacity: 0.8,
          }}
        >
          Scroll
        </span>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "2px",
          }}
        >
          {[0, 1].map((i) => (
            <motion.div
              key={i}
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
                ease: "easeInOut",
              }}
              style={{
                width: "10px",
                height: "10px",
                borderRight: "2px solid #2E2B28",
                borderBottom: "2px solid #2E2B28",
              }}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default Hero;
