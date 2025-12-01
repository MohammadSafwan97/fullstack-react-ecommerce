import axios from "axios";
import { useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { HeroSection } from "../../components/HeroSection";
import { ProductsGrid } from "./ProductsGrid";
import { FeaturedCategories } from "../../Components/FeaturedCategories";
import "./HomePage.css";

export function HomePage({ cart, loadCart }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getHomeData = async () => {
      const response = await axios.get("/api/products");
      setProducts(response.data);
    };

    getHomeData();
  }, []);

  return (
    <div className="HomePage">
      <title>Ecommerce Project</title>

      <Header cart={cart} />
      <HeroSection />
      <FeaturedCategories />
      <div className="home-page">
        <ProductsGrid products={products} loadCart={loadCart} />
      </div>
    </div>
  );
}
