import React from "react";
import ProductCard, { Product } from "./ProductCard";
import { useCart } from "../context/CartContext";

const ProductCardWithCart: React.FC<{ product: Product }> = ({ product }) => {
  const { dispatch } = useCart();

  const handleAddToCart = () => {
    dispatch({ type: "ADD_TO_CART", product });
  };

  return (
    <div>
      <ProductCard product={product} />
      <button
        className="mt-2 bg-blue-500 text-white py-2 px-4 rounded"
        onClick={handleAddToCart}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCardWithCart;
