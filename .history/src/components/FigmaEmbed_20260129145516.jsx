import styles from "./FigmaEmbed.module.css";

export default function FigmaEmbed({ title = "Figma Prototype", src }) {
    return (
        <section
            className={styles.wrap}
            aria-label={title}
        >
            <div className={styles.frame}>
                <iframe
                    title={title}
                    src={src}
                    className={styles.iframe}
                    allowFullScreen
                    loading="lazy"
                />
            </div>
        </section>
    );
}
