import React from "react";
import Image from "next/image"; // Import Image for optimized images
import { useCart } from "../context/CartContext"; // Import useCart for cart state management

// Define the Product interface
export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
}

const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  const { dispatch } = useCart(); // Access dispatch from useCart

  // Handler for adding product to the cart
  const handleAddToCart = () => {
    dispatch({ type: "ADD_TO_CART", product });
  };

  return (
    <div className="border p-4">
      {/* Optimized Image with Next.js Image component */}
      <Image
        src={product.image}
        alt={product.title}
        width={300} // Specify width
        height={200} // Specify height
        className="w-full h-48 object-cover"
      />
      <h2 className="text-lg font-bold">{product.title}</h2>
      <p className="text-gray-600 mb-2 line-clamp-2">{product.description}</p> {/* Truncated description */}
      <p className="font-bold">${product.price.toFixed(2)}</p>
      <button
        className="mt-2 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg"
        onClick={handleAddToCart} // Call handler when button is clicked
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard; // Export the component
