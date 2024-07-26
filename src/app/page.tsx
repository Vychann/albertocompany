"use client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React, { useState } from "react";
import Header from "./components/Header";
import Cart from "./components/Cart";
import Footer from "./components/Footer";
import Home from "./pages/Home";

interface Product {
  id: number;
  name: string;
  price: number;
  quantity: number;
}
export default function Page() {
  const [username, setUsername] = useState<string>("");
  const [cartItems, setCartItems] = useState<Product[]>([]);

  const handleLogin = (user: string) => {
    setUsername(user);
  };

  const addToCart = (product: Product) => {
    const itemIndex = cartItems.findIndex((item) => item.id === product.id);
    if (itemIndex >= 0) {
      const newCartItems = [...cartItems];
      newCartItems[itemIndex].quantity += 1;
      setCartItems(newCartItems);
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const updateQuantity = (id: number, change: number) => {
    const newCartItems = cartItems.map((item) =>
      item.id === id
        ? { ...item, quantity: Math.max(1, item.quantity + change) }
        : item
    );
    setCartItems(newCartItems);
  };

  const removeItem = (id: number) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <Router>
      <Header username={username} cartItemCount={cartItems.length} />

      <main className="main">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </main>

      <Footer />
    </Router>
  );
}

{
  /* <div className="app-container">
  <Routes>
    <Route path="/login" element={<Login onLogin={handleLogin} />} />
    <Route
      path="/mens-watches/:id"
      element={<MensProductDetail addToCart={addToCart} />}
    />
    <Route
      path="/womens-watches/:id"
      element={<WomensProductDetail addToCart={addToCart} />}
    />
    <Route
      path="/cart"
      element={
        <Cart
          cartItems={cartItems}
          updateQuantity={updateQuantity}
          removeItem={removeItem}
          clearCart={clearCart}
        />
      }
    />
    <Route path="/products" element={<Products />} />
    <Route path="/mens-watches" element={<MensWatches />} />
    <Route path="/womens-watches" element={<WomensWatches />} />
    <Route path="/sellwatch" element={<SellWatch />} />
    <Route path="/" element={<Home />} />
  </Routes>

  <footer className="bg-dark text-white text-center py-3">
    <p>&copy; 2023 Alberto Watch Company. All rights reserved.</p>
    <p>Contact us at info@albertowatch.com or call (123) 456-7890</p>
  </footer>
</div> */
}
