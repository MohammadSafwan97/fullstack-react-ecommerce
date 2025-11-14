import "./App.css";
import axios from "axios";
import HomePage from "./Components/home/HomePage";
import Checkout from "./Components/checkout/Checkout";
import OrdersPage from "./Components/orders/OrdersPage";
import Tracking from "./Components/Tracking";
import { Route, Routes } from "react-router";
import { useEffect, useState } from "react";

function App() {
  const [cart, setCart] = useState([]);

  const loadCart = async () => {
    let response = await axios.get("api/cart-items?expand=product");
    setCart(response.data);
  };

  useEffect(() => {
    loadCart();
  }, []);

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={<HomePage cart={cart} loadCart={loadCart} />}
        />
        <Route path="checkout" element={<Checkout cart={cart} />} />
        <Route path="orders" element={<OrdersPage cart={cart} />} />
        <Route path="tracking" element={<Tracking />} />
      </Routes>
    </>
  );
}

export default App;
