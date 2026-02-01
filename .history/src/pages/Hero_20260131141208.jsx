import PortfolioSvg from "../assets/main/hero/portfolio.svg?react";
import RibbonSvg from "../assets/main/hero/ribbon.svg?react"; // 보라색 웨이브(리본) SVG
import HelloSticker from "../assets/main/hero/icon_empty.svg?react";
import VancouverSticker from "../assets/main/hero/sticker_vancouver.svg?react";
import IamJisooSticker from "../assets/main/hero/sticker_iamjisoo.svg?react";
import FruitsSticker from "../assets/main/hero/sticker_fruits.svg?react";
import ContactMeSticker from "../assets/main/hero/sticker_contact_me.svg?react";

const stickers = [
    {
        id: "hello",
        Comp: HelloSticker,
        style: {
            top: "18%",
            left: "66%",
            width: "clamp(120px, 18vw, 220px)",
            transform: "rotate(10deg)",
        },
    },
    {
        id: "vancouver",
        Comp: VancouverSticker,
        style: {
            top: "40%",
            left: "43%",
            width: "clamp(60px, 8vw, 110px)",
            transform: "rotate(-8deg)",
        },
    },
    {
        id: "iamjisoo",
        Comp: IamJisooSticker,
        style: {
            top: "55%",
            left: "36%",
            width: "clamp(70px, 10vw, 130px)",
            transform: "rotate(6deg)",
        },
    },
    {
        id: "fruits",
        Comp: FruitsSticker,
        style: {
            top: "56%",
            left: "63%",
            width: "clamp(70px, 10vw, 140px)",
            transform: "rotate(8deg)",
        },
    },
    {
        id: "contactme",
        Comp: ContactMeSticker,
        style: {
            top: "66%",
            left: "67%",
            width: "clamp(70px, 10vw, 140px)",
            transform: "rotate(-6deg)",
        },
    },
];

export default function Hero() {
    return (
        <section
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
                    width: "min(1200px, 94vw)",
                    height: "min(520px, 70vh)",
                }}
            >
                {/* 상단 문구 */}
                <div
                    style={{
                        position: "absolute",
                        top: "18%",
                        left: "50%",
                        transform: "translateX(-50%)",
                        fontSize: "clamp(14px, 1.6vw, 22px)",
                        color: "#222",
                        opacity: 0.85,
                        letterSpacing: "0.2px",
                        zIndex: 3,
                    }}
                >
                    welcome to <em>Jisoo</em>’s
                </div>

                {/* 리본(웨이브) - PORTFOLIO 뒤 */}
                <div
                    style={{
                        position: "absolute",
                        inset: 0,
                        display: "grid",
                        placeItems: "center",
                        zIndex: 1,
                        pointerEvents: "none",
                    }}
                >
                    <div
                        style={{ width: "120%", transform: "translateY(10%)" }}
                    >
                        <RibbonSvg style={{ width: "100%", height: "auto" }} />
                    </div>
                </div>

                {/* PORTFOLIO 메인 */}
                <div
                    style={{
                        position: "absolute",
                        left: "50%",
                        top: "52%",
                        transform: "translate(-50%, -50%)",
                        width: "min(900px, 92%)",
                        zIndex: 2,
                    }}
                >
                    <PortfolioSvg
                        style={{
                            width: "100%",
                            height: "auto",
                            display: "block",
                        }}
                    />
                </div>

                {/* 스티커들 */}
                {stickers.map(({ id, Comp, style }) => (
                    <div
                        key={id}
                        style={{
                            position: "absolute",
                            zIndex: 4,
                            ...style,
                            transformOrigin: "center",
                        }}
                    >
                        <Comp
                            style={{
                                width: "100%",
                                height: "auto",
                                display: "block",
                            }}
                        />
                    </div>
                ))}
            </div>
        </section>
    );
}
