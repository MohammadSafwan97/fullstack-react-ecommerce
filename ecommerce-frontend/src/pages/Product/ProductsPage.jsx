import axios from "axios";
import { useState, useEffect, useMemo } from "react";
import { ProductsGrid } from "../home/ProductsGrid";
import { Header } from "../../components/Header";
import { api } from "@/config/api";

export function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [sort, setSort] = useState("default");

  
  useEffect(() => {
    const loadProducts = async () => {
      try {
        const res = await api.get("/api/products");
        
        setProducts(Array.isArray(res.data) ? res.data : res.data.products || []);
      } catch (err) {
        console.error("Failed to load products", err);
        setProducts([]);
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, []);

  
  const categories = useMemo(() => {
    const cats = products.map((p) => p.category).filter(Boolean);
    return ["all", ...new Set(cats)];
  }, [products]);

 
  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (search.trim()) {
      result = result.filter((p) =>
        (p.name || "").toLowerCase().includes(search.toLowerCase())
      );
    }

    if (category !== "all") {
      result = result.filter((p) => p.category === category);
    }

    if (sort === "price-low") {
      result.sort((a, b) => (a.priceCents || 0) - (b.priceCents || 0));
    } else if (sort === "price-high") {
      result.sort((a, b) => (b.priceCents || 0) - (a.priceCents || 0));
    } else if (sort === "rating") {
      result.sort(
        (a, b) => (b.rating?.stars || 0) - (a.rating?.stars || 0)
      );
    }

    return result;
  }, [products, search, category, sort]);

  if (loading) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-20 text-center text-slate-500">
        Loading products...
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
     <Header/>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-slate-900">
          Products
        </h1>
        <p className="text-slate-500 text-sm mt-1">
          Browse our latest collection
        </p>
      </div>

      {/* FILTERS */}
      <div className="bg-white border border-slate-200 rounded-xl p-4 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {/* SEARCH */}
          <div className="md:col-span-2">
            <input
              type="text"
              placeholder="Search products..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full rounded-lg border border-slate-300
                         px-4 py-2 text-sm
                         focus:outline-none focus:ring-2
                         focus:ring-green-600"
            />
          </div>

          {/* CATEGORY */}
          <div>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full rounded-lg border border-slate-300
                         px-3 py-2 text-sm
                         focus:outline-none focus:ring-2
                         focus:ring-green-600"
            >
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat === "all" ? "All Categories" : cat}
                </option>
              ))}
            </select>
          </div>

          {/* SORT */}
          <div>
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="w-full rounded-lg border border-slate-300
                         px-3 py-2 text-sm
                         focus:outline-none focus:ring-2
                         focus:ring-green-600"
            >
              <option value="default">Sort by</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Top Rated</option>
            </select>
          </div>
        </div>
      </div>

      {/* COUNT */}
      <div className="mb-4 text-sm text-slate-500">
        Showing {filteredProducts.length} products
      </div>

      {/* GRID */}
      {filteredProducts.length > 0 ? (
        <ProductsGrid products={filteredProducts} />
      ) : (
        <div className="text-center py-20 text-slate-500">
          No products found
        </div>
      )}
    </div>
  );
}
