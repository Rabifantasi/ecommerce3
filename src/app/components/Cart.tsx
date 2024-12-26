"use client";

import { useCart } from "../context/CartContext";

const CartItem = ({ product }: { product: any }) => {
  const { dispatch } = useCart();

  const handleRemove = () => {
    dispatch({ type: "REMOVE_FROM_CART", id: product.id }); // Use product.id instead of product
  };

  return (
    <div className="flex justify-between items-center border-b p-4">
      <div>
        <h2 className="text-xl">{product.title}</h2>
        <p>${product.price}</p>
      </div>
      <button
        onClick={handleRemove}
        className="text-red-600 hover:underline"
      >
        Remove
      </button>
    </div>
  );
};

export default CartItem;