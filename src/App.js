import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";
import About from "./About";
import WhyLime from "./WhyLime";
import Products from "./Products";
import Services from "./Services";
import OurWork from "./OurWork";
import Contacts from "./Contacts";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/why-lime" element={<WhyLime />} />
        <Route path="/products" element={<Products />} />
        <Route path="/services" element={<Services />} />
        <Route path="/work" element={<OurWork />} />
        <Route path="/contact" element={<Contacts />} />
        {/* Additional routes can be added here */}
      </Routes>
      <Footer />
    </>
  );
}

export default App;
