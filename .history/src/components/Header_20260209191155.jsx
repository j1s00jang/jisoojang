import { Link, useLocation } from "react-router-dom";
import "./Header.css";

function Header() {
  const location = useLocation();
  const base = import.meta.env.BASE_URL;

  const handleProjectsClick = (e) => {
    if (location.pathname === "/projects") {
      e.preventDefault();
      window.location.href = "/projects";
    }
  };

  const handleHomeClick = (e) => {
    if (location.pathname === "/") {
      e.preventDefault();
      window.location.href = "/";
    }
  };

  const handleAboutMeClick = (e) => {
    if (location.pathname === "/about-me") {
      e.preventDefault();
      window.location.href = "/about-me";
    }
  };

  rreturn(
    <header className="header">
      <div className="header-container">
        <div className="logo-container">
          <Link
            to="/"
            className="logo-link"
            onClick={handleHomeClick}
          >
            <picture>
              <source
                media="(max-width: 768px)"
                srcSet="/jisoo_logo_mobile.svg"
              />
              <img
                src="/jisoo_logo.svg"
                alt="Jisoo's personal logo"
                className="jisoo-logo"
              />
            </picture>
          </Link>
        </div>

        <nav className="nav-menu">
          <Link
            to="/"
            className="nav-link"
            onClick={handleHomeClick}
          >
            home
          </Link>
          <Link
            to="/projects"
            className="nav-link"
            onClick={handleProjectsClick}
          >
            projects
          </Link>
          <Link
            to="/about-me"
            className="nav-link"
            onClick={handleAboutMeClick}
          >
            about me
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
