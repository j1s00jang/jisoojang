import { Link } from "react-router-dom";
import "./UpNextBanner.css";

/**
 * Props
 * - label?: string (default: "Up Next")
 * - to: string (react-router link target)
 * - title: string (right-side clickable text)
 * - className?: string
 */
function UpNextBanner({ label = "Up Next", to, title, className = "" }) {
    return (
        <section className={`upnext ${className}`.trim()} aria-label="Up next">
            <div className="upnext-inner">
                <div className="upnext-left">{label}</div>
                <div className="upnext-right">
                    <Link to={to} className="upnext-link" aria-label={`Go to ${title}`}>
                        <span className="upnext-title">{title}</span>
                        <span className="upnext-arrow" aria-hidden="true">
                            →
                        </span>
                    </Link>
                </div>
            </div>
        </section>
    );
}

export default UpNextBanner;
