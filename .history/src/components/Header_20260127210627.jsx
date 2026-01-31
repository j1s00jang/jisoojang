// import { Link, useLocation } from "react-router-dom";
// import "./Header.css";

// function Header() {
//     const location = useLocation();

//     const handleProjectsClick = (e) => {
//         if (location.pathname === "/projects") {
//             e.preventDefault();
//             window.location.href = "/projects";
//         }
//     };

//     const handleHomeClick = (e) => {
//         if (location.pathname === "/") {
//             e.preventDefault();
//             window.location.href = "/";
//         }
//     };

//     const handleAboutMeClick = (e) => {
//         if (location.pathname === "/about-me") {
//             e.preventDefault();
//             window.location.href = "/about-me";
//         }
//     };

//     return (
//         <header className="header">
//             <div className="header-container">
//                 <div className="logo-container">
//                     <Link
//                         to="/"
//                         className="logo-link"
//                         onClick={handleHomeClick}
//                     >
//                         <img
//                             src="/jisoo_logo.svg"
//                             alt="Jisoo's personal logo"
//                             className="jisoo-logo"
//                         />
//                     </Link>
//                 </div>
//                 <nav className="nav-menu">
//                     <Link
//                         to="/"
//                         className="nav-link"
//                         onClick={handleHomeClick}
//                     >
//                         home
//                     </Link>
//                     <Link
//                         to="/projects"
//                         className="nav-link"
//                         onClick={handleProjectsClick}
//                     >
//                         projects
//                     </Link>
//                     <Link
//                         to="/about-me"
//                         className="nav-link"
//                         onClick={handleAboutMeClick}
//                     >
//                         about me
//                     </Link>
//                 </nav>
//             </div>
//         </header>
//     );
// }

// export default Header;


import { Link, useLocation } from "react-router-dom";
import { useLayoutEffect, useRef } from "react";
import "./Header.css";

function Header() {
  const location = useLocation();
  const headerRef = useRef(null);

  useLayoutEffect(() => {
    const el = headerRef.current;
    if (!el) return;

    const setNavH = () => {
      const h = el.getBoundingClientRect().height;
      document.documentElement.style.setProperty("--nav-h", `${Math.ceil(h)}px`);
    };

    setNavH();

    const ro = new ResizeObserver(setNavH);
    ro.observe(el);

    window.addEventListener("resize", setNavH);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", setNavH);
    };
  }, []);

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
    <header ref={headerRef} className="header">
      <div className="header-container">
        <div className="logo-container">
          <Link to="/" className="logo-link" onClick={handleHomeClick}>
            <img
              src="/jisoo_logo.svg"
              alt="Jisoo's personal logo"
              className="jisoo-logo"
            />
          </Link>
