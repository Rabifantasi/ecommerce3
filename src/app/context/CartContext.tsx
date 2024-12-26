import React, { createContext, useReducer, useContext, ReactNode } from "react";

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
}

interface CartState {
  items: Product[];
}

const initialState: CartState = { items: [] };

type Action =
  | { type: "ADD_TO_CART"; product: Product }
  | { type: "REMOVE_FROM_CART"; id: number };

const cartReducer = (state: CartState, action: Action): CartState => {
  switch (action.type) {
    case "ADD_TO_CART":
      return { ...state, items: [...state.items, action.product] };
    case "REMOVE_FROM_CART":
      return { ...state, items: state.items.filter(item => item.id !== action.id) };
    default:
      return state;
  }
};

const CartContext = createContext<{ state: CartState; dispatch: React.Dispatch<Action> } | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
