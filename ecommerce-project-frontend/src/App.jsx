import "./App.css";
import HomePage from "./Components/HomePage";
import Checkout from "./Components/Checkout";
import Orders from "./Components/Orders";
import Tracking from "./Components/Tracking";
import { Route, Routes } from "react-router";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="checkout" element={<Checkout />} />
        <Route path="orders" element={<Orders />} />
        <Route path="tracking" element={<Tracking />} />
      </Routes>
    </>
  );
}

export default App;
