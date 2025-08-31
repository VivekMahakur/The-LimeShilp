import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const handleLinkClick = () => {
    if (menuOpen) setMenuOpen(false);
  };

  return (
    <header className="header-container">
      <div className="logo">The LimeShilp</div>

      <nav className={`nav-links ${menuOpen ? "open" : ""}`} aria-label="Primary navigation">
        <Link to="/" onClick={handleLinkClick}>Home</Link>
        <Link to="/about" onClick={handleLinkClick}>About</Link>
        <Link to="/why-lime" onClick={handleLinkClick}>Why Lime Finish</Link>
        <Link to="/products" onClick={handleLinkClick}>Products</Link>
        <Link to="/services" onClick={handleLinkClick}>Services</Link>
        <Link to="/work" onClick={handleLinkClick}>Our Work</Link>
        <Link to="/contact" onClick={handleLinkClick}>Contact</Link>
      </nav>

      <button
        className={`hamburger ${menuOpen ? "open" : ""}`}
        onClick={toggleMenu}
        aria-expanded={menuOpen}
        aria-label="Toggle menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </header>
  );
}
