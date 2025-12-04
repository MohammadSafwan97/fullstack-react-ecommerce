import axios from "axios";
import { useEffect, useState } from "react";

import Header from "@components/Header";
import HeroSection from "@components/HeroSection";
import FeaturedCategories from "@components/FeaturedCategories";

import ShopByCategory from "./ShopByCategory";
import ExclusiveDeals from "./ExclusiveDeals";
import HandpickedForYou from "./HandpickedForYou";
import ProductsGrid from "./ProductsGrid";
import Footer from "./Footer";

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
      <ShopByCategory />
      <ExclusiveDeals />
      <HandpickedForYou />

      <div className="home-page">
        <ProductsGrid products={products} loadCart={loadCart} />
        <Footer />
      </div>
    </div>
  );
}
