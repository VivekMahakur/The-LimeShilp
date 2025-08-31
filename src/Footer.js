import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-main">
        <div className="footer-brand">
          <div className="footer-logo">The LimeShilp</div>
          <div className="footer-tagline">
            Reviving the art of lime plaster & finish across India.
          </div>
        </div>
        <div className="footer-section">
          <div className="footer-title">Locations</div>
          <div>Kolkata</div>
          <div>Pune</div>
          <div>Jamshedpur</div>
          <div>Projects across India</div>
        </div>
        <div className="footer-section">
          <div className="footer-title">Follow Us</div>
          <div>Instagram</div>
          <div>LinkedIn</div>
          <div>Facebook</div>
        </div>
      </div>
      <div className="footer-bottom">
        <div>© 2025 The LimeShilp. All rights reserved.</div>
        <div>Built with sustainable design principles.</div>
      </div>
    </footer>
  );
}
