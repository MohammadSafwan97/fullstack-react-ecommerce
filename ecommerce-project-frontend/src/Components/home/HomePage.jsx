import "./HomePage.css";
import axios from "axios";
import "./Header.css";
import { Link } from "react-router";
import Header from "./Header";
import { useEffect, useState } from "react";
import ProductGrid from "./ProductGrid";

const HomePage = ({ cart }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // ✅ define and call an async function inside useEffect

    try {
      axios.get("api/products").then((response) => {
        setProducts(response.data);
      });
      // ✅ store data in state
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  }, []); // ✅ run only once when component mounts

  return (
    <>
      <Header cart={cart} />
      <div className="home-page">
        <ProductGrid products={products} />
      </div>
    </>
  );
};

export default HomePage;
