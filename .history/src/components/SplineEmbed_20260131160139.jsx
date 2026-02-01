export default function SplineEmbed() {
    return (
        <div
            style={{
                width: "100%",
                height: "min(70vh, 720px)", // 👈 여기로 높이 조절
                borderRadius: "24px",
                overflow: "hidden",
                background: "#00000010", // 로딩 중 빈 화면 방지용(선택)
            }}
        >
            <iframe
                src="https://my.spline.design/starcopycopy-VEA72XXaaBdOf6Zg8lDFNe9Q-jVA/"
                frameBorder="0"
                width="100%"
                height="100%"
                title="Spline Scene"
                style={{ display: "block" }}
                allow="fullscreen; autoplay"
            />
        </div>
    );
}
