import axios from "axios";
import { useEffect, useState } from "react";
import Header from "@Components/Header";
import HeroSection from "@Components/HeroSection";
import AIChatBot from "@Components/chatbot/AIChatBot";
import { ProductsGrid } from "./ProductsGrid";
import FeaturedCategories from "@Components/FeaturedCategories";
import { ShopByCategory } from "./ShopByCategory";
import { ExclusiveDeals } from "./ExclusiveDeals";
import { HandpickedForYou } from "./HandpickedForYou";
import { Footer } from "./Footer";
import "./HomePage.css";
import { getAllProducts } from "../../api/products.js";
export function ProductPage({ cart, loadCart }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const loadProducts = async () => {
      const data = await getAllProducts();
      setProducts(data);
    };

    loadProducts();
  }, []);

  return (
    <div className="HomePage">
      <title>Ecommerce Project</title>

      <Header cart={cart} />

      <FeaturedCategories />
      <ShopByCategory />
      <ExclusiveDeals />
      <HandpickedForYou />
      <div className="home-page">
        <ProductsGrid products={products} loadCart={loadCart} />
        <AIChatBot />
        <Footer />
      </div>
    </div>
  );
}
