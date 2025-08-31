import React from "react";
import "./OurWork.css";

const projects = [
  {
    title: "Courtyard Residence",
    location: "Pune",
    year: "2024",
    image: "/sample-work.jpg",
  },
  {
    title: "Heritage Café",
    location: "Kolkata",
    year: "2023",
    image: "/sample-work.jpg",
  },
  {
    title: "Studio Renovation",
    location: "Jamshedpur",
    year: "2025",
    image: "/sample-work.jpg",
  },
  {
    title: "Boutique Gallery",
    location: "Kolkata",
    year: "2023",
    image: "/sample-work.jpg",
  },
  {
    title: "School Library",
    location: "Pune",
    year: "2022",
    image: "/sample-work.jpg",
  },
  {
    title: "Café Kiosk",
    location: "Jamshedpur",
    year: "2024",
    image: "/sample-work.jpg",
  },
];

export default function OurWork() {
  return (
    <main className="work-main">
      <h1 className="work-title">Our Work</h1>
      <p className="work-desc">
        Selected projects featuring lime finishes across homes, cafés, and institutions.
      </p>

      <div className="work-grid">
        {projects.map((proj, idx) => (
          <div className="work-card" key={idx}>
            <div className="work-image-wrapper">
              <img src={proj.image} alt={proj.title} />
            </div>
            <div className="work-card-details">
              <h2>{proj.title}</h2>
              <div className="work-location">
                {proj.location} · {proj.year}
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
