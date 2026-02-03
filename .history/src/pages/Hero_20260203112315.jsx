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
//     {
//         id: "hello",
//         src: HelloSticker,
//         cycleSrcs: [
//             HelloStickerUXUI,
//             HelloStickerProduct,
//             HelloStickerPackaging,
//         ],
//         style: {
//             top: "16%",
//             left: "65%",
//             width: "clamp(10%, 18%, 22%)",
//             transform: "rotate(10deg)",
//         },
//     },
//     {
//         id: "vancouver",
//         src: VancouverSticker,
//         style: {
//             top: "35%",
//             left: "40%",
//             width: "clamp(5%, 7%, 10%)",
//             transform: "rotate(-20deg)",
//         },
//     },
//     {
//         id: "iamjisoo",
//         src: IamJisooSticker,
//         style: {
//             top: "48%",
//             left: "39.5%",
//             width: "clamp(5%, 8%, 11%)",
//             transform: "rotate(15deg)",
//         },
//     },
//     {
//         id: "fruits",
//         src: FruitsSticker,
//         style: {
//             top: "48%",
//             left: "64%",
//             width: "clamp(5%, 7%, 9%)",
//             transform: "rotate(-20deg)",
//         },
//     },
//     {
//         id: "contactme",
//         src: ContactMeSticker,
//         style: {
//             top: "62%",
//             left: "65%",
//             width: "clamp(8%, 12%, 18%)",
//             transform: "rotate(12deg)",
//         },
//     },
// ];

// function Hero() {
//     const [hoveredId, setHoveredId] = useState(null);
//     const [helloCycleIndex, setHelloCycleIndex] = useState(0);

//     return (
//         <section
//             style={{
//                 minHeight: "100vh",
//                 background: "#f7f4ef",
//                 display: "grid",
//                 placeItems: "center",
//                 overflow: "hidden",
//             }}
//         >
//             <div
//                 style={{
//                     position: "relative",
//                     width: "100%",
//                     aspectRatio: "16 / 7",
//                     isolation: "isolate",
//                 }}
//             >
//                 <div
//                     style={{
//                         position: "absolute",
//                         top: "17%",
//                         left: "50%",
//                         transform: "translateX(-50%)",
//                         fontSize: "clamp(12px, 1.8vw, 22px)",
//                         color: "#222",
//                         opacity: 0.85,
//                         zIndex: 50,
//                         whiteSpace: "nowrap",
//                     }}
//                 >
//                     welcome to <em>Jisoo</em>’s
//                 </div>

//                 {/* FOLIO */}
//                 <div
//                     style={{
//                         position: "absolute",
//                         inset: 0,
//                         display: "grid",
//                         placeItems: "center",
//                         zIndex: 10,
//                         pointerEvents: "none",
//                     }}
//                 >
//                     <img
//                         src={FolioUrl}
//                         alt=""
//                         draggable={false}
//                         style={{
//                             width: "clamp(28%, 35%, 42%)",
//                             height: "auto",
//                             display: "block",
//                             transform: "translateY(45%)",
//                         }}
//                     />
//                 </div>

//                 {/* Purple ribbon */}
//                 <div
//                     style={{
//                         position: "absolute",
//                         inset: 0,
//                         display: "grid",
//                         placeItems: "center",
//                         zIndex: 20,
//                         pointerEvents: "none",
//                     }}
//                 >
//                     <img
//                         src={RibbonUrl}
//                         alt=""
//                         draggable={false}
//                         style={{
//                             width: "120%",
//                             height: "auto",
//                             display: "block",
//                             transform: "translateY(-10%)",
//                         }}
//                     />
//                 </div>

//                 {/* PORT */}
//                 <div
//                     style={{
//                         position: "absolute",
//                         inset: 0,
//                         display: "grid",
//                         placeItems: "center",
//                         zIndex: 30,
//                         pointerEvents: "none",
//                     }}
//                 >
//                     <img
//                         src={PortUrl}
//                         alt=""
//                         draggable={false}
//                         style={{
//                             width: "clamp(28%, 35%, 42%)",
//                             height: "auto",
//                             display: "block",
//                             transform: "translateY(0%)",
//                         }}
//                     />
//                 </div>

//                 {/* Stickers */}
//                 {stickers.map(({ id, src, cycleSrcs, style }) => {
//                     const isHello = id === "hello";
//                     const isHovered = hoveredId === id;
//                     const hasCycle = isHello && cycleSrcs?.length;

//                     const handleHelloEnter = () => {
//                         setHoveredId(id);
//                         if (isHello && cycleSrcs) {
//                             setHelloCycleIndex((i) => i + 1);
//                         }
//                     };

//                     const displaySrc =
//                         hasCycle && isHovered
//                             ? cycleSrcs[helloCycleIndex % cycleSrcs.length]
//                             : src;

//                     const allSrcs = hasCycle ? [src, ...cycleSrcs] : [src];
//                     const activeIndex =
//                         hasCycle && isHovered
//                             ? 1 + (helloCycleIndex % cycleSrcs.length)
//                             : 0;

//                     return (
//                         <div
//                             key={id}
//                             onMouseEnter={
//                                 isHello
//                                     ? handleHelloEnter
//                                     : () => setHoveredId(id)
//                             }
//                             onMouseLeave={() => setHoveredId(null)}
//                             style={{
//                                 position: "absolute",
//                                 zIndex: 40,
//                                 ...style,
//                                 transformOrigin: "center",
//                                 opacity: 1,
//                                 mixBlendMode: "normal",
//                                 isolation: "isolate",
//                                 filter: "drop-shadow(2px 2px 4px rgba(0,0,0,0.12)) drop-shadow(0 1px 2px rgba(0,0,0,0.08))",
//                                 cursor: hasCycle ? "pointer" : "default",
//                             }}
//                         >
//                             {hasCycle ? (
//                                 <div
//                                     style={{
//                                         position: "relative",
//                                         width: "100%",
//                                         aspectRatio: "580 / 339",
//                                     }}
//                                 >
//                                     {allSrcs.map((s, i) => (
//                                         <img
//                                             key={i}
//                                             src={s}
//                                             alt=""
//                                             draggable={false}
//                                             loading="lazy"
//                                             style={{
//                                                 position: "absolute",
//                                                 inset: 0,
//                                                 width: "100%",
//                                                 height: "100%",
//                                                 objectFit: "contain",
//                                                 opacity:
//                                                     i === activeIndex ? 1 : 0,
//                                                 transition: "ease",
//                                                 pointerEvents: "none",
//                                             }}
//                                         />
//                                     ))}
//                                 </div>
//                             ) : (
//                                 <img
//                                     src={displaySrc}
//                                     alt=""
//                                     draggable={false}
//                                     style={{
//                                         width: "100%",
//                                         height: "auto",
//                                         display: "block",
//                                     }}
//                                     loading="lazy"
//                                 />
//                             )}
//                         </div>
//                     );
//                 })}
//             </div>
//         </section>
//     );
// }

// export default Hero;

import { useState, useRef, useEffect } from "react";
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
    cycleSrcs: [HelloStickerUXUI, HelloStickerProduct, HelloStickerPackaging],
    factor: 0.04, // 시차 이동 계수 (숫자가 클수록 더 많이 움직임)
    style: {
      top: "16%",
      left: "65%",
      width: "clamp(10%, 18%, 22%)",
      transform: "rotate(10deg)",
    },
  },
  {
    id: "vancouver",
    src: VancouverSticker,
    factor: 0.02,
    style: {
      top: "35%",
      left: "40%",
      width: "clamp(5%, 7%, 10%)",
      transform: "rotate(-20deg)",
    },
  },
  {
    id: "iamjisoo",
    src: IamJisooSticker,
    factor: 0.05,
    style: {
      top: "48%",
      left: "39.5%",
      width: "clamp(5%, 8%, 11%)",
      transform: "rotate(15deg)",
    },
  },
  {
    id: "fruits",
    src: FruitsSticker,
    factor: 0.03,
    style: {
      top: "48%",
      left: "64%",
      width: "clamp(5%, 7%, 9%)",
      transform: "rotate(-20deg)",
    },
  },
  {
    id: "contactme",
    src: ContactMeSticker,
    factor: 0.06,
    style: {
      top: "62%",
      left: "65%",
      width: "clamp(8%, 12%, 18%)",
      transform: "rotate(12deg)",
    },
  },
];

function Hero() {
  const [hoveredId, setHoveredId] = useState(null);
  const [helloCycleIndex, setHelloCycleIndex] = useState(0);

  // 마우스 위치 상태 관리
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    // 화면 중심으로부터의 거리 계산 (-0.5 ~ 0.5 범위)
    const x = e.clientX / window.innerWidth - 0.5;
    const y = e.clientY / window.innerHeight - 0.5;
    setMousePos({ x, y });
  };

  return (
    <section
      onMouseMove={handleMouseMove}
      style={{
        minHeight: "100vh",
        background: "#f7f4ef",
        display: "grid",
        placeItems: "center",
        overflow: "hidden",
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
        {/* Welcome Text */}
        <div
          style={{
            position: "absolute",
            top: "17%",
            left: "50%",
            transform: `translateX(calc(-50% + ${
              mousePos.x * 10
            }px)) translateY(${mousePos.y * 10}px)`,
            fontSize: "clamp(12px, 1.8vw, 22px)",
            color: "#222",
            opacity: 0.85,
            zIndex: 50,
            whiteSpace: "nowrap",
            transition: "transform 0.1s ease-out",
          }}
        >
          welcome to <em>Jisoo</em>’s
        </div>

        {/* FOLIO (가장 뒤쪽 레이어, 계수 20) */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "grid",
            placeItems: "center",
            zIndex: 10,
            pointerEvents: "none",
            transform: `translate(${mousePos.x * 20}px, ${
              mousePos.y * 20 + 45
            }%)`,
            transition: "transform 0.2s ease-out",
          }}
        >
          <img
            src={FolioUrl}
            alt=""
            style={{ width: "clamp(28%, 35%, 42%)", height: "auto" }}
          />
        </div>

        {/* Purple ribbon (중간 레이어, 계수 40) */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "grid",
            placeItems: "center",
            zIndex: 20,
            pointerEvents: "none",
            transform: `translate(${mousePos.x * 40}px, ${
              mousePos.y * 40 - 10
            }%)`,
            transition: "transform 0.15s ease-out",
          }}
        >
          <img
            src={RibbonUrl}
            alt=""
            style={{ width: "120%", height: "auto" }}
          />
        </div>

        {/* PORT (가장 앞쪽 레이어, 계수 60) */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "grid",
            placeItems: "center",
            zIndex: 30,
            pointerEvents: "none",
            transform: `translate(${mousePos.x * 60}px, ${mousePos.y * 60}px)`,
            transition: "transform 0.1s ease-out",
          }}
        >
          <img
            src={PortUrl}
            alt=""
            style={{ width: "clamp(28%, 35%, 42%)", height: "auto" }}
          />
        </div>

        {/* Stickers */}
        {stickers.map(({ id, src, cycleSrcs, style, factor }) => {
          const isHello = id === "hello";
          const isHovered = hoveredId === id;
          const hasCycle = isHello && cycleSrcs?.length;

          const handleHelloEnter = () => {
            setHoveredId(id);
            if (isHello && cycleSrcs) setHelloCycleIndex((i) => i + 1);
          };

          const allSrcs = hasCycle ? [src, ...cycleSrcs] : [src];
          const activeIndex =
            hasCycle && isHovered
              ? 1 + (helloCycleIndex % cycleSrcs.length)
              : 0;

          // 개별 스티커의 transform 계산 (기존 rotate + 시차 이동)
          const parallaxX = mousePos.x * window.innerWidth * factor;
          const parallaxY = mousePos.y * window.innerHeight * factor;

          return (
            <div
              key={id}
              onMouseEnter={isHello ? handleHelloEnter : () => setHoveredId(id)}
              onMouseLeave={() => setHoveredId(null)}
              style={{
                position: "absolute",
                zIndex: 40,
                ...style,
                transform: `${style.transform} translate(${parallaxX}px, ${parallaxY}px)`,
                transformOrigin: "center",
                transition: "transform 0.1s ease-out", // 부드러운 이동
                filter: "drop-shadow(2px 2px 4px rgba(0,0,0,0.12))",
                cursor: hasCycle ? "pointer" : "default",
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
                  {allSrcs.map((s, i) => (
                    <img
                      key={i}
                      src={s}
                      alt=""
                      style={{
                        position: "absolute",
                        inset: 0,
                        width: "100%",
                        height: "100%",
                        objectFit: "contain",
                        opacity: i === activeIndex ? 1 : 0,
                        transition: "opacity 0.2s ease",
                      }}
                    />
                  ))}
                </div>
              ) : (
                <img
                  src={src}
                  alt=""
                  style={{ width: "100%", height: "auto", display: "block" }}
                />
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Hero;
