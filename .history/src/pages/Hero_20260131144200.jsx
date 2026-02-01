import PortUrl from "../assets/main/hero/port.svg";
import FolioUrl from "../assets/main/hero/folio.svg";
import RibbonUrl from "../assets/main/hero/ribbon.svg";

import HelloSticker from "../assets/main/hero/iam_empty.svg?react";
import VancouverSticker from "../assets/main/hero/sticker_vancouver.svg?react";
import IamJisooSticker from "../assets/main/hero/sticker_iamjisoo.svg?react";
import FruitsSticker from "../assets/main/hero/sticker_fruits.svg?react";
import ContactMeSticker from "../assets/main/hero/sticker_contact_me.svg?react";

const PORT_URL_SCALE = 0.5;
const FOLIO_SCALE = 0.5;

const stickers = [
    {
        id: "hello",
        Comp: HelloSticker,
        style: {
            top: "16%",
            left: "70%",
            width: "clamp(140px, 18vw, 260px)",
            transform: "rotate(10deg)",
        },
    },
    {
        id: "vancouver",
        Comp: VancouverSticker,
        style: {
            top: "46%",
            left: "46%",
            width: "clamp(70px, 8vw, 120px)",
            transform: "rotate(-8deg)",
        },
    },
    {
        id: "iamjisoo",
        Comp: IamJisooSticker,
        style: {
            top: "58%",
            left: "36%",
            width: "clamp(90px, 10vw, 160px)",
            transform: "rotate(6deg)",
        },
    },
    {
        id: "fruits",
        Comp: FruitsSticker,
        style: {
            top: "62%",
            left: "64%",
            width: "clamp(90px, 10vw, 170px)",
            transform: "rotate(8deg)",
        },
    },
    {
        id: "contactme",
        Comp: ContactMeSticker,
        style: {
            top: "68%",
            left: "69%",
            width: "clamp(90px, 10vw, 170px)",
            transform: "rotate(-6deg)",
        },
    },
];

function Hero() {
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
                    aspectRatio: "16 / 7",
                    maxHeight: "70vh",
                    isolation: "isolate",
                }}
            >
                {/* 상단 문구 */}
                <div
                    style={{
                        position: "absolute",
                        top: "14%",
                        left: "50%",
                        transform: "translateX(-50%)",
                        fontSize: "clamp(14px, 1.6vw, 22px)",
                        color: "#222",
                        opacity: 0.85,
                        zIndex: 50,
                        whiteSpace: "nowrap",
                    }}
                >
                    welcome to <em>Jisoo</em>’s
                </div>

                {/* FOLIO (뒤) */}
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
                        draggable={false}
                        style={{
                            width: "clamp(520px, 72vw, 980px)",
                            height: "auto",
                            display: "block",
                        }}
                    />
                </div>

                {/* Ribbon (중간) */}
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
                    <img
                        src={RibbonUrl}
                        alt=""
                        draggable={false}
                        style={{
                            width: "125%",
                            height: "auto",
                            display: "block",
                            transform: "translateY(10%)",
                        }}
                    />
                </div>

                {/* PORT (앞) */}
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
                        draggable={false}
                        style={{
                            width: "clamp(520px, 72vw, 980px)",
                            height: "auto",
                            display: "block",
                        }}
                    />
                </div>

                {/* 스티커들 (색 안정화) */}
                {stickers.map(({ id, Comp, style }) => (
                    <div
                        key={id}
                        style={{
                            position: "absolute",
                            zIndex: 40,
                            ...style,
                            transformOrigin: "center",
                            opacity: 1,
                            mixBlendMode: "normal",
                            isolation: "isolate",
                            filter: "none",
                        }}
                    >
                        <Comp
                            style={{
                                width: "100%",
                                height: "auto",
                                display: "block",
                                opacity: 1,
                            }}
                        />
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Hero;
