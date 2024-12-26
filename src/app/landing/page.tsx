// src/app/page.tsx or src/app/landing/page.tsx
"use client";

import Navbar from "../components/Navbar";
import HeroLanding from "../components/HeroLanding";
import Footer from "../components/Footer";
import { CartProvider } from "../context/CartContext";
import ProductCard, { Product } from "../components/ProductCard"; // Adjust the import based on your project structure
import Hero from "../components/Hero";

const sampleProduct: Product = {
  id: 1,
  title: "Sample Product",
  price: 29.99,
  description: "This is a sample product.",
  image: "/path/to/sample-image.jpg", // Update this path to your actual image
};

const LandingPage = () => {
  return (
    
      <div>
        <Navbar />
        <Hero />
        <Footer />
      </div>
    
  );
};

export default LandingPage;
