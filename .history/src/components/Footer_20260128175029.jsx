import "./Footer.css";

function Footer() {
    return (
        <footer className="footer" role="contentinfo">
            <div className="footer-inner">
                <div className="footer-left">
                    <a
                        href="mailto:jisoo.design@icloud.com"
                        className="footer-link"
                        aria-label="Send email"
                    >
                        jisoo.design@icloud.com
                    </a>
                    <span className="footer-sep">*</span>
                    <a
                        href="https://www.linkedin.com/in/jisoojang"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="footer-link"
                        aria-label="LinkedIn profile"
                    >
                        LinkedIn
                    </a>
                    <span className="footer-sep">*</span>
                    <a
                        href="https://www.instagram.com/jisoojang.design/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="footer-link"
                        aria-label="Instagram profile"
                    >
                        Instagram
                    </a>
                </div>
                <div className="footer-right">
                    <span className="footer-copy">
                        Website design and content © 2026 Jisoo Jang
                    </span>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
