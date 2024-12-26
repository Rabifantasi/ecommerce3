"use client";

import { useCart } from "../context/CartContext";
import CartItem from "../../app/components/Cart"; // Ensure the path is correct

const CartPage = () => {
  const { state } = useCart();

  return (
    <div className="container mx-auto p-5">
      <h1 className="text-3xl font-bold mb-5">Your Cart</h1>
      {state.items.length === 0 ? (
        <p className="text-lg">Your cart is empty.</p>
      ) : (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {state.items.map((item) => (
            <CartItem key={item.id} product={item} />
          ))}
        </div>
      )}
    </div>
  );
};

export default CartPage;