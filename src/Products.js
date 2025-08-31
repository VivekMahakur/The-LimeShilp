import React from "react";
import "./Products.css";

const products = [
  {
    id: 1,
    title: "Lime Finish",
    description: "Our flagship product inspired by heritage craft—engineered for modern performance and natural beauty.",
    imageSrc: "/lime-finish-wall.png",
    features: [
      "Breathable, reducing dampness",
      "Available in smooth and rustic textures",
      "Suitable for interiors and selective exteriors",
      "Low VOCs and eco-friendly",
      "Cost-effective vs. putty + paint over lifecycle",
    ],
    colors: ["Chalk White", "Limestone Beige", "Soft Sand", "Olive Tint"],
    usage: "Interior walls and ceilings; protected exterior areas with appropriate substrate prep.",
  },
  {
    id: 2,
    title: "Lime Plaster",
    description: "Traditional lime plaster for durable, breathable wall finishes with excellent longevity and natural aesthetics.",
    imageSrc: "/lime-plaster-sample.jpg",
    features: [
      "Excellent vapor permeability",
      "Resists cracking better than cement",
      "Ideal for heritage building restoration",
      "Natural mold resistance",
      "Requires minimal maintenance",
    ],
    colors: ["Classic White", "Earthy Beige", "Muted Gray"],
    usage: "Suitable for interior and exterior walls on heritage and modern buildings.",
  },
  {
    id: 3,
    title: "Lime Wash",
    description: "A decorative lime-based wash that adds color and texture while allowing walls to breathe.",
    imageSrc: "/lime-wash-sample.jpg",
    features: [
      "Enhances natural texture",
      "Non-toxic and low VOC",
      "Easy to apply and maintain",
      "Gives soft matte finish",
      "Sustainable and eco-friendly",
    ],
    colors: ["Soft Yellow", "Warm Terracotta", "Light Green"],
    usage: "Perfect for interior walls and ceilings with natural color variations.",
  },
  {
    id: 4,
    title: "Lime Render",
    description: "Robust lime render providing a protective, breathable, and visually appealing external surface.",
    imageSrc: "/lime-render-sample.jpg",
    features: [
      "Protects masonry and brickwork",
      "Allows moisture escape preventing damage",
      "Weather-resistant finish",
      "Compatible with natural substrates",
      "Traditional craftsmanship meets durability",
    ],
    colors: ["Off White", "Light Sand", "Stone Gray"],
    usage: "Recommended for exterior surfaces needing durable protection and breathability.",
  },
];

export default function Products() {
  return (
    <main className="products-main">
      {products.map((product) => (
        <section className="products-hero" key={product.id}>
          <h1 className="products-title">{product.title}</h1>
          <p className="products-desc">{product.description}</p>
          <div className="products-content">
            <div className="products-image-wrapper">
              <img src={product.imageSrc} alt={`${product.title} wall`} />
            </div>
            <div className="products-details">
              <h2 className="products-subtitle">Key Features</h2>
              <ul>
                {product.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>

              <h3 className="products-label">Colors &amp; Textures</h3>
              <div className="products-chip-row">
                {product.colors.map((color, idx) => (
                  <span key={idx} className="products-chip">{color}</span>
                ))}
              </div>

              <h3 className="products-label" style={{ marginTop: "1.7rem" }}>Usage</h3>
              <p>{product.usage}</p>

              <div className="products-action-row">
                <a href="/contact" className="products-btn-primary">Request a Quote</a>
                <a href="/portfolio" className="products-btn-secondary">View Portfolio</a>
              </div>
            </div>
          </div>
        </section>
      ))}
    </main>
  );
}
