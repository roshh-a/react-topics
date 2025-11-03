import React, { useState } from "react";
import { Header } from "./Components/Header";
import { ItemsList } from "./Pages/ItemsList";
import { Cart } from "./Pages/Cart";
import { CartContextProvider } from "./Context/CartContext";
import { ToastContainer } from "react-toastify";

export const HomeLayout = () => {
  const [isCartVisible, setIsCartVisible] = useState(false);

  const toggleCart = () => {
    setIsCartVisible((prev) => !prev); // This ensures always toggling based on the latest state value.
  };

  return (
    <main>
      <ToastContainer position="top-right" autoClose={3000} />
      <CartContextProvider>
        <Header onCartClick={toggleCart} />
        {isCartVisible ? <Cart /> : <ItemsList />}
      </CartContextProvider>
    </main>
  );
};
