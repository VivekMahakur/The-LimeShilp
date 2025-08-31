import React from "react";
import "./WhyLime.css";

export default function WhyLime() {
  return (
    <main id="main-content" className="why-lime-main">
      {/* Title and intro */}
      <section className="why-lime-intro">
        <h1 className="why-lime-title">Why Lime Finish?</h1>
        <p className="why-lime-desc">
          Lime plaster and finishes provide breathable, durable, and healthier walls—a compelling alternative to putty and modern paints.
        </p>

        {/* Benefits grid */}
        <div className="why-lime-grid">
          <div className="why-lime-card">
            <h2>Breathable Walls</h2>
            <p>Allows moisture to pass, helping prevent dampness and mold.</p>
          </div>
          <div className="why-lime-card">
            <h2>Naturally Anti-bacterial</h2>
            <p>High alkalinity discourages bacterial growth.</p>
          </div>
          <div className="why-lime-card">
            <h2>Long-lasting &amp; Low Maintenance</h2>
            <p>Hardens over time, reducing frequent repainting cycles.</p>
          </div>
          <div className="why-lime-card">
            <h2>Aesthetic Finishes</h2>
            <p>From smooth to rustic textures, suits modern and heritage spaces.</p>
          </div>
          <div className="why-lime-card span-two">
            <h2>Eco-friendly &amp; Proven</h2>
            <p>Centuries of use in heritage architecture with low VOCs.</p>
          </div>
        </div>
      </section>

      {/* Before/After Section */}
      <section className="why-lime-before-after">
        <div className="why-lime-image-wrapper">
          <img
            src="/assets/b&a.png"
            alt="Before and after of lime finish wall"
          />
        </div>
        <div className="why-lime-text">
          <h2>Before / After</h2>
          <p>
            Experience the transformation: smoother textures, warmer tones, and a finish that breathes with your space.
          </p>
        </div>
      </section>
    </main>
  );
}
