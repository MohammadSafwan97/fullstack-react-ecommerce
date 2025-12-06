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

export function HomePage({ cart, loadCart }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getHomeData = async () => {
      const response = await axios.get(
        "https://ecommerce-backend-production-849a.up.railway.app/products"
      );
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
