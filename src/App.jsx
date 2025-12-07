import axios from "axios";
import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

import Header from "./Components/Header";
import ProtectedRoute from "./components/ProtectedRoute";

import { HomePage } from "./pages/home/HomePage";
import { ProductPage } from "./pages/home/ProductPage";
import { CheckoutPage } from "./pages/checkout/CheckoutPage";
import { OrdersPage } from "./pages/orders/OrdersPage";

import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";
import ForgotPassword from "./pages/auth/ForgotPassword";

import ProductDetail from "./Components/ProductDetail";

import { API_BASE } from "./api/products.js";
import "./App.css";

function App() {
  const [cart, setCart] = useState([]);

  const USER_ID = 1; // static for now

  const loadCart = async () => {
    try {
      const response = await axios.get(`${API_BASE}/cart/${USER_ID}`);
      setCart(response.data.items || []);
    } catch (error) {
      console.error("Error loading cart:", error);
    }
  };

  useEffect(() => {
    loadCart();
  }, []);

  return (
    <>
      {/* HEADER ALWAYS VISIBLE */}
      <Header cart={cart} />

      <Routes>
        {/* HOME */}
        <Route index element={<HomePage cart={cart} loadCart={loadCart} />} />

        {/* PRODUCTS */}
        <Route
          path="products"
          element={<ProductPage cart={cart} loadCart={loadCart} />}
        />

        {/* 🔐 PROTECTED CHECKOUT */}
        <Route
          path="checkout"
          element={
            <ProtectedRoute>
              <CheckoutPage cart={cart} loadCart={loadCart} />
            </ProtectedRoute>
          }
        />

        {/* 🔐 PROTECTED ORDERS */}
        <Route
          path="orders"
          element={
            <ProtectedRoute>
              <OrdersPage cart={cart} />
            </ProtectedRoute>
          }
        />

        {/* AUTH */}
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route path="forgot-password" element={<ForgotPassword />} />

        {/* PRODUCT DETAILS */}
        <Route
          path="/product/:id"
          element={<ProductDetail loadCart={loadCart} />}
        />
      </Routes>
    </>
  );
}

export default App;
