import "./HomePage.css";
import axios from "axios";
import "../Header.css";
import { Link } from "react-router";
import Header from "../Header";
import { useEffect, useState } from "react";
import ProductGrid from "./ProductGrid";

const HomePage = ({ cart, loadCart }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchHomeData = async () => {
      const response = await axios.get("api/products");
      setProducts(response.data);
    };
    fetchHomeData();
  }, []);

  return (
    <>
      <Header cart={cart} />
      <div className="home-page">
        <ProductGrid products={products} loadCart={loadCart} />
      </div>
    </>
  );
};

export default HomePage;
