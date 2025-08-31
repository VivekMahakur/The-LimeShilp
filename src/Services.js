import React from "react";
import "./Services.css";

const services = [
  {
    title: "Lime Plaster & Finish Application",
    desc: "End-to-end application of lime-based finishes for residential and commercial projects.",
  },
  {
    title: "Restoration & Renovation",
    desc: "Specialized lime work for heritage buildings and sensitive refurbishments.",
  },
  {
    title: "Sustainability Consultation",
    desc: "Guidance on healthy, breathable finishes and substrate preparation.",
  },
  {
    title: "Custom Textures & Premium Finishes",
    desc: "Bespoke textures and layered finishes tailored to design briefs.",
  },
];

export default function Services() {
  return (
    <main className="services-main">
      <h1 className="services-title">Services</h1>
      <p className="services-desc">
        Architectural craftsmanship with breathable, durable, and elegant lime finishes.
      </p>
      <div className="services-grid">
        {services.map((s, idx) => (
          <div className="services-card" key={idx}>
            <h2>{s.title}</h2>
            <p>{s.desc}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
