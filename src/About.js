import React from "react";
import "./App.css";

export default function About() {
  return (
    <main className="hero-section" style={{ textAlign: "center" }}>
      <div className="main-container">
        <h1 className="hero-title">About The LimeShilp</h1>
        <p className="hero-paragraph" style={{ maxWidth: 900, margin: "2rem auto 3rem" }}>
          Founded by architecture enthusiasts, The LimeShilp was born to revive lime plaster and finishes — time-tested, sustainable, and inherently beautiful.
        </p>

        <div className="why-choose-section" style={{ paddingTop: 0 }}>
          <div style={{ display: "flex", justifyContent: "center", gap: "4rem", flexWrap: "wrap" }}>
            <div style={{ maxWidth: 450 }}>
              <h2 className="why-title" style={{ textAlign: "left" }}>Our Story</h2>
              <p>
                We started The LimeShilp to bring back heritage finishes that respect buildings and people. Lime breathes, heals, and endures — qualities modern chemical paints struggle to match.
              </p>
            </div>
            <div style={{ maxWidth: 450 }}>
              <h2 className="why-title" style={{ textAlign: "left" }}>Our Vision</h2>
              <p>
                To make lime finishes a mainstream, healthier alternative for homes and institutions across India — balancing tradition and contemporary design.
              </p>
            </div>
          </div>
        </div>

        <div className="serving-india-section" style={{ marginTop: "3rem", padding: "2rem", borderRadius: "12px", background: "#f2fcf4", maxWidth: 900, marginLeft: "auto", marginRight: "auto" }}>
          <h3 style={{ fontWeight: "bold" }}>Expertise &amp; Locations</h3>
          <p>
            With architectural backgrounds and a craft-first approach, we operate from Kolkata, Pune, and Jamshedpur and take on projects nationwide.
          </p>
        </div>
      </div>
    </main>
  );
}
