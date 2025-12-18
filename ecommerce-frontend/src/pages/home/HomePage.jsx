import { useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { ProductsGrid } from "./ProductsGrid";
import { HeroSection } from "./HeroSection";
import { api } from "@/config/api";

import "./HomePage.css";
import "./hero.css";

export function HomePage({ cart, loadCart }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getHomeData = async () => {
      try {
        const response = await api.get("/api/products");
        setProducts(response.data);
      } catch (error) {
        console.error("Failed to load products", error);
      }
    };

    getHomeData();
  }, []);

  return (
    <>
      <title>Ecommerce Project</title>

      <Header cart={cart} />

      <div className="home-page">
        <HeroSection />
        <ProductsGrid products={products} loadCart={loadCart} />
      </div>
    </>
  );
}
