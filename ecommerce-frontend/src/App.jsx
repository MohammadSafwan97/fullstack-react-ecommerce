import axios from "axios";
import { Routes, Route } from "react-router";
import { useState, useEffect } from "react";
import { HomePage } from "./pages/home/HomePage";
import { CheckoutPage } from "./pages/checkout/CheckoutPage";
import { OrdersPage } from "./pages/orders/OrdersPage";
import {AIChatBot} from "./chatbot/AIChatBot";
import {Login} from "./pages/auth/Login";
import {Signup} from "./pages/auth/Signup";
import {ProductsPage} from "./pages/Product/ProductsPage";
import {AboutPage} from "./pages/about/AboutPage";
import {ContactPage} from "./pages/contact/ContactPage";
import "./App.css";

function App() {
  const [cart, setCart] = useState([]);

  const loadCart = async () => {
    const response = await axios.get("/api/cart-items?expand=product");
    setCart(response.data);
  };

  useEffect(() => {
    loadCart();
  }, []);

  return (
    <div>
      <Routes>
      <Route index element={<HomePage cart={cart} loadCart={loadCart} />} />
      <Route
        path="checkout"
        element={<CheckoutPage cart={cart} loadCart={loadCart} />}
      />
      <Route path="orders" element={<OrdersPage cart={cart} />} />
      <Route path="login" element={<Login/>} />
      <Route path="signup" element={<Signup/>} />
      <Route path="products" element={<ProductsPage/>} />
       <Route path="about" element={<AboutPage/>} />
      <Route path="contact" element={<ContactPage/>} />
    </Routes>
    <AIChatBot/>
    </div>
    
    
  );
}

export default App;
