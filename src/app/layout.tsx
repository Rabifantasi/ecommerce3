"use client";

import { ReactNode } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { CartProvider } from "./context/CartContext";
import "../styles/globals.css";
import Hero from "./components/Hero";

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="en">
      <body>
  
          <Navbar />
          <Hero/>
          <Footer />
        
      </body>
    </html>
  );
};

export default RootLayout;