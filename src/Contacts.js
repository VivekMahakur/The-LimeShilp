import React from "react";
import "./Contacts.css";

export default function Contacts() {
  return (
    <main className="contacts-main">
      <h1 className="contacts-title">Contact Us</h1>
      <p className="contacts-desc">
        Get in touch with us through email, phone, or WhatsApp for inquiries, quotes, and consultations.
      </p>

      <div className="contacts-list">
        <div className="contact-card">
          <h2>Email</h2>
          <a href="mailto:info@thelimeshilp.com" className="contact-link">
            info@thelimeshilp.com
          </a>
        </div>

        <div className="contact-card">
          <h2>Phone</h2>
          <a href="tel:+919876543210" className="contact-link">
            +91 98765 43210
          </a>
        </div>

        <div className="contact-card">
          <h2>WhatsApp</h2>
          <a
            href="https://wa.me/919876543210"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
          >
            Chat with us on WhatsApp
          </a>
        </div>
      </div>
    </main>
  );
}
