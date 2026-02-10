import { Link, useLocation } from "react-router-dom";
import "./Header.css";
import logoDesktop from "/Users/jisoojang/Desktop/Final Project/jisoojang_portfolio_ver1/public/jisoo_logo.svg";
import logoMobile from "/Users/jisoojang/Desktop/Final Project/jisoojang_portfolio_ver1/public/jisoo_logo_mobile.svg";

function Header() {
  const location = useLocation();

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

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo-container">
          <Link
            to="/"
            className="logo-link"
            onClick={handleHomeClick}
          >
            {/* ✅ mobile(<=768px)에서는 mobile 로고로 자동 교체 */}
            <picture>
              <source
                media="(max-width: 768px)"
                srcSet={logoMobile}
              />
              <img
                src={logoDesktop}
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
