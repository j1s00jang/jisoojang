import PortUrl from "../assets/main/hero/port.svg";
import FolioUrl from "../assets/main/hero/folio.svg";
import RibbonUrl from "../assets/main/hero/ribbon.svg";

import HelloSticker from "../assets/main/hero/iam_empty.svg";
import VancouverSticker from "../assets/main/hero/sticker_vancouver.svg";
import IamJisooSticker from "../assets/main/hero/sticker_iamjisoo.svg";
import FruitsSticker from "../assets/main/hero/sticker_fruits.svg";
import ContactMeSticker from "../assets/main/hero/sticker_contact_me.svg";

const stickers = [
    {
        id: "hello",
        src: HelloSticker,
        style: {
            top: "16%",
            left: "65%",
            width: "clamp(120px, 15vw, 220px)",
            transform: "rotate(10deg)",
        },
    },
    {
        id: "vancouver",
        src: VancouverSticker,
        style: {
            top: "46%",
            left: "46%",
            width: "clamp(60px, 8vw, 100px)",
            transform: "rotate(-8deg)",
        },
    },
    {
        id: "iamjisoo",
        src: IamJisooSticker,
        style: {
            top: "58%",
            left: "36%",
            width: "clamp(90px, 10vw, 160px)",
            transform: "rotate(6deg)",
        },
    },
    {
        id: "fruits",
        src: FruitsSticker,
        style: {
            top: "62%",
            left: "64%",
            width: "clamp(90px, 10vw, 170px)",
            transform: "rotate(8deg)",
        },
    },
    {
        id: "contactme",
        src: ContactMeSticker,
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
                        top: "17%",
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
                            width: "clamp(300px, 32vw, 480px)",
                            height: "auto",
                            display: "block",
                            transform: "translateY(45%)",
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
                            width: "120%",
                            height: "auto",
                            display: "block",
                            transform: "translateY(-10%)",
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
                            width: "clamp(300px, 32vw, 480px)",
                            height: "auto",
                            display: "block",
                            transform: "translateY(0%)",
                        }}
                    />
                </div>

                {/* 스티커들 (img로 색상 유지) */}
                {stickers.map(({ id, src, style }) => (
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
                            filter: "drop-shadow(2px 2px 4px rgba(0,0,0,0.12)) drop-shadow(0 1px 2px rgba(0,0,0,0.08))",
                        }}
                    >
                        <img
                            src={src}
                            alt=""
                            draggable={false}
                            style={{
                                width: "100%",
                                height: "auto",
                                display: "block",
                            }}
                            loading="lazy"
                        />
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Hero;
