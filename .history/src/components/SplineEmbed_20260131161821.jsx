export default function SplineEmbed() {
    return (
        <div
            style={{
                width: "min(1200px, 94vw)",
                margin: "0 auto",
                height: "min(80vh, 760px)",
                borderRadius: "28px",
                overflow: "hidden",
                background: "#f7f4ef",
                position: "relative",
            }}
        >
            <iframe
                src="https://my.spline.design/starcopycopy-VEA72XXaaBdOf6Zg8lDFNe9Q-jVA/"
                title="Spline"
                frameBorder="0"
                allow="fullscreen; autoplay"
                style={{
                    position: "absolute",
                    inset: 0,

                    // ✅ 핵심: cover처럼 채우기
                    width: "120%",
                    height: "120%",
                    left: "-10%",
                    top: "-10%",

                    display: "block",
                    border: 0,
                }}
            />
        </div>
    );
}
