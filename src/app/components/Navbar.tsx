// src/app/components/Navbar.tsx
"use client"; // Add this line if you are using hooks

import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between">
        <h1 className="text-xl font-bold">Zanatta</h1>
        <div>
          <Link href="/hero" className="mr-4">Home</Link>
          <Link href="/products" className="mr-4">Products</Link>
          <Link href="/cart">Cart</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;