import React from "react";
import { useCart } from "../context/CartContext";

const CartPage = () => {
  const { state } = useCart();

  if (!state) {
    console.error("Cart state is undefined. Is CartProvider wrapping the component?");
    return <p className="text-center text-xl mt-10">Error: Unable to load cart.</p>;
  }

  if (state.items.length === 0) {
    return <p className="text-center text-xl mt-10">Your cart is empty!</p>;
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
      <ul>
        {state.items.map(item => (
          <li key={item.id} className="flex items-center mb-4 border p-4 bg-gray-200">
            <img
              src={item.image || "https://via.placeholder.com/150"} // Fallback image for debugging
              alt={item.title}
              className="w-20 h-20 object-cover rounded mr-4"
            />
            <div>
              <h2 className="font-bold">{item.title}</h2>
              <p>${item.price.toFixed(2)}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CartPage;
