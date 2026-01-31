import { useMemo, useRef, useState, useLayoutEffect } from "react";
import HTMLFlipBook from "react-pageflip";
import { gsap } from "gsap";
import styles from "./MagazineFlipbook.module.css";

export default function MagazineFlipbook() {
    const bookRef = useRef(null);
    const wrapRef = useRef(null);
    const [page, setPage] = useState(0);

    const pages = useMemo(
        () =>
            Array.from(
                { length: 12 },
                (_, i) =>
                    `/projects/magazine/MagazineFlipbook/Jisoo_Jang_Magazine${String(i + 1).padStart(2, "0")}.webp`,
            ),
        [],
    );

    useLayoutEffect(() => {
        if (!wrapRef.current) return;
        gsap.fromTo(
            wrapRef.current,
            { autoAlpha: 0, y: 16 },
            { autoAlpha: 1, y: 0, duration: 0.5, ease: "power2.out" },
        );
    }, []);

    const totalPages = pages.length;

    const goPrev = () => bookRef.current?.pageFlip()?.flipPrev();
    const goNext = () => bookRef.current?.pageFlip()?.flipNext();

    return (
        <section
            className={styles.wrap}
            ref={wrapRef}
        >
            <div className={styles.toolbar}>
                <button
                    type="button"
                    className={styles.btn}
                    onClick={goPrev}
                >
                    Prev
                </button>

                <div className={styles.counter}>
                    Page <strong>{page + 1}</strong> / {totalPages}
                </div>

                <button
                    type="button"
                    className={styles.btn}
                    onClick={goNext}
                >
                    Next
                </button>
            </div>

            <div className={styles.bookFrame}>
                <HTMLFlipBook
                    ref={bookRef}
                    className={styles.book}
                    width={520}
                    height={680}
                    size="stretch"
                    minWidth={320}
                    maxWidth={900}
                    minHeight={420}
                    maxHeight={1200}
                    maxShadowOpacity={0.25}
                    showCover={true}
                    mobileScrollSupport={true} // ✅ 모바일 스와이프/스크롤 지원
                    onFlip={(e) => setPage(e.data)} // ✅ 현재 페이지 업데이트
                >
                    {pages.map((src, idx) => (
                        <div
                            className={styles.page}
                            key={src}
                        >
                            <img
                                className={styles.img}
                                src={src}
                                alt={`Magazine page ${idx + 1}`}
                                loading="lazy"
                                draggable={false}
                            />
                        </div>
                    ))}
                </HTMLFlipBook>
            </div>

            <p className={styles.hint}>
                Swipe to flip pages on mobile, or use the buttons.
            </p>
        </section>
    );
}
