import styles from "./FigmaEmbed.module.css";

export default function FigmaEmbed() {
    return (
        <section
            className={styles.wrap}
            aria-label="Figma Prototype"
        >
            <div className={styles.frame}>
                <iframe
                    title="Hello, My First Cat Prototype"
                    src="https://embed.figma.com/proto/eMqTulTEWvaUaudlk26b3F/Design3-CP05-Hello--My-First-Cat-?node-id=112%3A444&embed-host=share"
                    className={styles.iframe}
                    allow="fullscreen; clipboard-write"
                    allowFullScreen
                    loading="lazy"
                />
            </div>
        </section>
    );
}
