// import { useState } from "react";
// import PortUrl from "../assets/main/hero/port.svg";
// import FolioUrl from "../assets/main/hero/folio.svg";
// import RibbonUrl from "../assets/main/hero/ribbon.svg";

// import HelloSticker from "../assets/main/hero/iam_empty.svg";
// import HelloStickerUXUI from "../assets/main/hero/iam_UXUI.svg";
// import HelloStickerProduct from "../assets/main/hero/iam_Product.svg";
// import HelloStickerPackaging from "../assets/main/hero/iam_Packaging.svg";
// import VancouverSticker from "../assets/main/hero/sticker_vancouver.svg";
// import IamJisooSticker from "../assets/main/hero/sticker_iamjisoo.svg";
// import FruitsSticker from "../assets/main/hero/sticker_fruits.svg";
// import ContactMeSticker from "../assets/main/hero/sticker_contact_me.svg";

// const stickers = [
//   {
//     id: "hello",
//     src: HelloSticker,
//     cycleSrcs: [HelloStickerUXUI, HelloStickerProduct, HelloStickerPackaging],
//     style: {
//       top: "16%",
//       left: "65%",
//       width: "clamp(10%, 18%, 22%)",
//       transform: "rotate(10deg)",
//     },
//   },
//   {
//     id: "vancouver",
//     src: VancouverSticker,
//     style: {
//       top: "35%",
//       left: "40%",
//       width: "clamp(5%, 7%, 10%)",
//       transform: "rotate(-20deg)",
//     },
//   },
//   {
//     id: "iamjisoo",
//     src: IamJisooSticker,
//     style: {
//       top: "48%",
//       left: "39.5%",
//       width: "clamp(5%, 8%, 11%)",
//       transform: "rotate(15deg)",
//     },
//   },
//   {
//     id: "fruits",
//     src: FruitsSticker,
//     style: {
//       top: "48%",
//       left: "64%",
//       width: "clamp(5%, 7%, 9%)",
//       transform: "rotate(-20deg)",
//     },
//   },
//   {
//     id: "contactme",
//     src: ContactMeSticker,
//     style: {
//       top: "62%",
//       left: "65%",
//       width: "clamp(8%, 12%, 18%)",
//       transform: "rotate(12deg)",
//     },
//   },
// ];

// function Hero() {
//   const [hoveredId, setHoveredId] = useState(null);
//   const [helloCycleIndex, setHelloCycleIndex] = useState(0);

//   return (
//     <section
//       style={{
//         minHeight: "100vh",
//         background: "#f7f4ef",
//         display: "grid",
//         placeItems: "center",
//         overflow: "hidden",
//       }}
//     >
//       <div
//         style={{
//           position: "relative",
//           width: "100%",
//           aspectRatio: "16 / 7",
//           isolation: "isolate",
//         }}
//       >
//         <div
//           style={{
//             position: "absolute",
//             top: "17%",
//             left: "50%",
//             transform: "translateX(-50%)",
//             fontSize: "clamp(12px, 1.8vw, 22px)",
//             color: "#222",
//             opacity: 0.85,
//             zIndex: 50,
//             whiteSpace: "nowrap",
//           }}
//         >
//           welcome to <em>Jisoo</em>’s
//         </div>

//         {/* FOLIO */}
//         <div
//           style={{
//             position: "absolute",
//             inset: 0,
//             display: "grid",
//             placeItems: "center",
//             zIndex: 10,
//             pointerEvents: "none",
//           }}
//         >
//           <img
//             src={FolioUrl}
//             alt=""
//             draggable={false}
//             style={{
//               width: "clamp(28%, 35%, 42%)",
//               height: "auto",
//               display: "block",
//               transform: "translateY(45%)",
//             }}
//           />
//         </div>

//         {/* Purple ribbon */}
//         <div
//           style={{
//             position: "absolute",
//             inset: 0,
//             display: "grid",
//             placeItems: "center",
//             zIndex: 20,
//             pointerEvents: "none",
//           }}
//         >
//           <img
//             src={RibbonUrl}
//             alt=""
//             draggable={false}
//             style={{
//               width: "120%",
//               height: "auto",
//               display: "block",
//               transform: "translateY(-10%)",
//             }}
//           />
//         </div>

//         {/* PORT */}
//         <div
//           style={{
//             position: "absolute",
//             inset: 0,
//             display: "grid",
//             placeItems: "center",
//             zIndex: 30,
//             pointerEvents: "none",
//           }}
//         >
//           <img
//             src={PortUrl}
//             alt=""
//             draggable={false}
//             style={{
//               width: "clamp(28%, 35%, 42%)",
//               height: "auto",
//               display: "block",
//               transform: "translateY(0%)",
//             }}
//           />
//         </div>

//         {/* Stickers */}
//         {stickers.map(({ id, src, cycleSrcs, style }) => {
//           const isHello = id === "hello";
//           const isHovered = hoveredId === id;
//           const hasCycle = isHello && cycleSrcs?.length;

//           const handleHelloEnter = () => {
//             setHoveredId(id);
//             if (isHello && cycleSrcs) {
//               setHelloCycleIndex((i) => i + 1);
//             }
//           };

//           const displaySrc =
//             hasCycle && isHovered
//               ? cycleSrcs[helloCycleIndex % cycleSrcs.length]
//               : src;

//           const allSrcs = hasCycle ? [src, ...cycleSrcs] : [src];
//           const activeIndex =
//             hasCycle && isHovered
//               ? 1 + (helloCycleIndex % cycleSrcs.length)
//               : 0;

//           return (
//             <div
//               key={id}
//               onMouseEnter={isHello ? handleHelloEnter : () => setHoveredId(id)}
//               onMouseLeave={() => setHoveredId(null)}
//               style={{
//                 position: "absolute",
//                 zIndex: 40,
//                 ...style,
//                 transformOrigin: "center",
//                 opacity: 1,
//                 mixBlendMode: "normal",
//                 isolation: "isolate",
//                 filter:
//                   "drop-shadow(2px 2px 4px rgba(0,0,0,0.12)) drop-shadow(0 1px 2px rgba(0,0,0,0.08))",
//                 cursor: hasCycle ? "pointer" : "default",
//               }}
//             >
//               {hasCycle ? (
//                 <div
//                   style={{
//                     position: "relative",
//                     width: "100%",
//                     aspectRatio: "580 / 339",
//                   }}
//                 >
//                   {allSrcs.map((s, i) => (
//                     <img
//                       key={i}
//                       src={s}
//                       alt=""
//                       draggable={false}
//                       loading="lazy"
//                       style={{
//                         position: "absolute",
//                         inset: 0,
//                         width: "100%",
//                         height: "100%",
//                         objectFit: "contain",
//                         opacity: i === activeIndex ? 1 : 0,
//                         transition: "ease",
//                         pointerEvents: "none",
//                       }}
//                     />
//                   ))}
//                 </div>
//               ) : (
//                 <img
//                   src={displaySrc}
//                   alt=""
//                   draggable={false}
//                   style={{
//                     width: "100%",
//                     height: "auto",
//                     display: "block",
//                   }}
//                   loading="lazy"
//                 />
//               )}
//             </div>
//           );
//         })}
//       </div>
//     </section>
//   );
// }

// export default Hero;

import { useState } from "react";
import { motion } from "framer-motion"; // framer-motion 추가
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
  const [hoveredId, setHoveredId] = useState(null);
  const [helloCycleIndex, setHelloCycleIndex] = useState(0);

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
          aspectRatio: "16 / 7",
          isolation: "isolate",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "10%",
            left: "50%",
            transform: "translateX(-50%)",
            fontSize: "clamp(10px, 1.4vw, 18px)",
            color: "#222",
            textAlign: "center",
            opacity: 0.85,
            zIndex: 50,
            lineHeight: 1,
            whiteSpace: "nowrap",
          }}
        >
          Welcome to <b>Jisoo</b>’s
          <br />
          <span
            style={{
              fontSize: "0.85em",
              display: "block",
              marginTop: "4px",
              fontStyle: "italic",
            }}
          >
            Play with my stickers! 🪄✨
          </span>
        </div>

        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "grid",
            placeItems: "center",
            zIndex: 10,
            pointerEvents: "none",
          }}
        >
          <img
            src={FolioUrl}
            alt=""
            style={{
              width: "clamp(28%, 35%, 42%)",
              transform: "translateY(45%)",
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
            }}
            animate={{
              clipPath: "inset(0 0% 0 0)",
              opacity: 1,
            }}
            transition={{
              duration: 3,
              delay: 1,
              ease: "easeInOut",
            }}
            style={{
              width: "120%",
              height: "auto",
              display: "block",
              transform: "translateY(-10%)",
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
            pointerEvents: "none",
          }}
        >
          <img
            src={PortUrl}
            alt=""
            style={{ width: "clamp(28%, 35%, 42%)" }}
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
    </section>
  );
}

export default Hero;
