import "./App.css";
import axios from "axios";
import HomePage from "./Components/HomePage";
import Checkout from "./Components/Checkout";
import Orders from "./Components/Orders";
import Tracking from "./Components/Tracking";
import { Route, Routes } from "react-router";
import { useEffect, useState } from "react";

function App() {
  const [cart, setCart] = useState([]);
  useEffect(() => {
    axios.get("api/cart-items?expand=product").then((response) => {
      setCart(response.data);
    });
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage cart={cart} />} />
        <Route path="checkout" element={<Checkout cart={cart} />} />
        <Route path="orders" element={<Orders />} />
        <Route path="tracking" element={<Tracking />} />
      </Routes>
    </>
  );
}

export default App;
