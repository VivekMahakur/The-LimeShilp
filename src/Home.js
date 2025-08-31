import React from "react";
import "./App.css";

export default function Home() {
  return (
    <main id="main-content">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="main-container">
          <div className="hero-grid">
            <div>
              <h1 className="hero-title">
                The LimeShilp —<br />
                Reviving the Art of<br />
                Lime Plaster &amp; Finish
              </h1>
              <p className="hero-paragraph">
                A sustainable, breathable, and heritage-proven alternative to putty and paint. Healthier walls, timeless aesthetics.
              </p>
              <div className="hero-cta-container">
                <a href="/products" className="cta-button-primary">
                  Explore Our Products
                </a>
                <a href="/portfolio" className="cta-button-secondary">
                  See Our Work
                </a>
              </div>
            </div>
            <div className="hero-image-wrapper">
              <img
                src="/lime-plaster-wall-texture.png"
                alt="Lime plaster wall texture"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Cards */}
      <section className="why-choose-section">
        <h2 className="why-title">Why Choose Us?</h2>
        <div className="cards-grid">
          <div className="card">
            <h3>Eco-friendly</h3>
            <p>Natural materials with low embodied energy and minimal VOCs.</p>
          </div>
          <div className="card">
            <h3>Durable</h3>
            <p>Long-lasting finish that ages beautifully with time.</p>
          </div>
          <div className="card">
            <h3>Healthy Walls</h3>
            <p>Breathable surfaces reduce dampness and mold risk.</p>
          </div>
        </div>
      </section>

      {/* Serving India Section */}
      <section className="serving-india-section">
        <div className="serving-grid">
          <div className="serving-text">
            <h3>Serving India</h3>
            <p>
              Based in Kolkata, Pune, and Jamshedpur, delivering projects across India with architectural craftsmanship.
            </p>
            <a href="/about">Learn more about us →</a>
          </div>
          <div className="serving-image-wrapper">
            <img
              src="/artisan-applying-lime-finish.png"
              alt="Artisan applying lime finish"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
