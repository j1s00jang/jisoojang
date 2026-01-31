import styles from "./FigmaEmbed.module.css";

export default function FigmaEmbed({ figmaUrl, title = "Figma Prototype" }) {
    const embedUrl = `https://www.figma.com/embed?embed_host=share&url=${encodeURIComponent("https://www.figma.com/proto/eMqTulTEWvaUaudlk26b3F/Design3-CP05-Hello--My-First-Cat-?node-id=98-104&t=fEIEYjjknlKJ727W-1")}`;

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
