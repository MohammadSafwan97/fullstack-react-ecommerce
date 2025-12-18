import { useState, useMemo } from "react";
import { ProductsGrid } from "../home/ProductsGrid";


export function ProductsPage({ products = [], loadCart }) {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [sort, setSort] = useState("default");

  // Get unique categories
  const categories = useMemo(() => {
    const cats = products.map((p) => p.category).filter(Boolean);
    return ["all", ...new Set(cats)];
  }, [products]);

  // Filter + sort products
  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Search
    if (search.trim()) {
      result = result.filter((p) =>
        p.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    // Category
    if (category !== "all") {
      result = result.filter((p) => p.category === category);
    }

    // Sort
    if (sort === "price-low") {
      result.sort((a, b) => a.priceCents - b.priceCents);
    } else if (sort === "price-high") {
      result.sort((a, b) => b.priceCents - a.priceCents);
    } else if (sort === "rating") {
      result.sort((a, b) => b.rating.stars - a.rating.stars);
    }

    return result;
  }, [products, search, category, sort]);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* PAGE HEADER */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-slate-900">
          Products
        </h1>
        <p className="text-slate-500 text-sm mt-1">
          Browse our latest collection
        </p>
      </div>

      {/* CONTROLS */}
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

      {/* RESULT COUNT */}
      <div className="mb-4 text-sm text-slate-500">
        Showing {filteredProducts.length} products
      </div>

      {/* PRODUCTS GRID */}
      {filteredProducts.length > 0 ? (
        <ProductsGrid products={filteredProducts} loadCart={loadCart} />
      ) : (
        <div className="text-center py-20 text-slate-500">
          No products found
        </div>
      )}
    </div>
  );
}
