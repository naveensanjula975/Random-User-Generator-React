import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./HeaderBar.css";

const NAV_LINKS = [
  { to: "/",         label: "Home",         icon: "🏠", exact: true  },
  { to: "/namelist", label: "Users",         icon: "👥", exact: false },
  { to: "/namelistc",label: "Users (Class)", icon: "🏛️", exact: false },
  { to: "/about",    label: "About",         icon: "ℹ️", exact: false },
];

function HeaderBar() {
  const location = useLocation();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  /* Close drawer on route change */
  useEffect(() => {
    setDrawerOpen(false);
  }, [location.pathname]);

  /* Detect scroll for shadow effect */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Prevent body scroll when drawer is open */
  useEffect(() => {
    document.body.style.overflow = drawerOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [drawerOpen]);

  const isActive = (link) => {
    if (link.exact) return location.pathname === link.to;
    return location.pathname.startsWith(link.to);
  };

  return (
    <header className={`header${scrolled ? " scrolled" : ""}`} role="banner">
      <div className="container header__inner">
        {/* Brand */}
        <Link to="/" className="header__brand" aria-label="People Directory home">
          <div className="header__brand-icon" aria-hidden="true">👤</div>
          <span className="header__brand-name">
            People<span>Directory</span>
          </span>
        </Link>

        {/* Desktop navigation */}
        <nav className="header__nav" role="navigation" aria-label="Main navigation">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`header__nav-link${isActive(link) ? " active" : ""}`}
              aria-current={isActive(link) ? "page" : undefined}
            >
              <span className="header__nav-icon" aria-hidden="true">{link.icon}</span>
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Hamburger toggle */}
        <button
          id="mobile-menu-toggle"
          className="header__hamburger"
          onClick={() => setDrawerOpen((v) => !v)}
          aria-expanded={drawerOpen}
          aria-controls="mobile-drawer"
          aria-label={drawerOpen ? "Close menu" : "Open menu"}
        >
          {drawerOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile drawer */}
      <nav
        id="mobile-drawer"
        className={`header__drawer${drawerOpen ? " open" : ""}`}
        aria-label="Mobile navigation"
        aria-hidden={!drawerOpen}
      >
        {NAV_LINKS.map((link) => (
          <Link
            key={link.to}
            to={link.to}
            className={`header__drawer-link${isActive(link) ? " active" : ""}`}
            aria-current={isActive(link) ? "page" : undefined}
          >
            <span className="header__drawer-icon" aria-hidden="true">{link.icon}</span>
            {link.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}

export default HeaderBar;
