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

import ProductSkeleton from "@Components/ProductSkeleton"; // ⭐ NEW IMPORT

export function ProductPage({ cart, loadCart }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true); // ⭐ NEW STATE

  useEffect(() => {
    const loadProducts = async () => {
      setLoading(true);

      try {
        const data = await getAllProducts();
        setProducts(data);
      } catch (error) {
        console.error("Failed to load products:", error);
      }

      setLoading(false);
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
        {/* ⭐ DISPLAY SKELETONS WHILE LOADING */}
        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 my-10">
            {[...Array(9)].map((_, i) => (
              <ProductSkeleton key={i} />
            ))}
          </div>
        ) : (
          <ProductsGrid products={products} loadCart={loadCart} />
        )}

        <AIChatBot />
        <Footer />
      </div>
    </div>
  );
}
