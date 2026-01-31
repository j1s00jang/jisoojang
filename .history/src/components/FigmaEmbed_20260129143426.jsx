import styles from "./FigmaEmbed.module.css";

export default function FigmaEmbed({ figmaUrl, title = "Figma Prototype" }) {
    const embedUrl = `https://www.figma.com/embed?embed_host=share&url=${encodeURIComponent(figmaUrl)}`;

    return (
        <section
            className={styles.wrap}
            aria-label={title}
        >
            <div className={styles.frame}>
                <iframe
                    title={title}
                    src={embedUrl}
                    className={styles.iframe}
                    allowFullScreen
                />
            </div>
        </section>
    );
}
