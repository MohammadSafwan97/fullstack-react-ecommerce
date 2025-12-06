// src/pages/products/FiltersSidebar.jsx
import { useState } from "react";

export default function FiltersSidebar({
  category,
  setCategory,
  brand,
  setBrand,
  minPrice,
  setMinPrice,
  maxPrice,
  setMaxPrice,
  color,
  setColor,
  applyFilters,
  clearFilters,
}) {
  const [showCategory, setShowCategory] = useState(true);
  const [showBrand, setShowBrand] = useState(true);
  const [showPrice, setShowPrice] = useState(true);
  const [showColor, setShowColor] = useState(true);

  const categories = [
    "Electronics",
    "Home Goods",
    "Apparel",
    "Books",
    "Sports & Outdoors",
  ];
  const colors = ["black", "green", "gray", "blue", "red"];

  return (
    <div className="space-y-6">
      <div className="text-lg font-semibold">Filters</div>
      <div className="bg-white p-4 rounded-lg shadow">
        {/* Category */}
        <div className="mb-4">
          <div className="flex items-center justify-between mb-3">
            <h4 className="font-medium">Category</h4>
            <button
              onClick={() => setShowCategory((s) => !s)}
              className="text-sm text-gray-500"
            >
              ▾
            </button>
          </div>
          {showCategory && (
            <div className="flex flex-col gap-2">
              {categories.map((c) => (
                <label
                  key={c}
                  className="inline-flex items-center gap-2 text-sm"
                >
                  <input
                    type="checkbox"
                    checked={category === c}
                    onChange={() => setCategory(category === c ? "" : c)}
                    className="form-checkbox"
                  />
                  <span className="capitalize">{c}</span>
                </label>
              ))}
              <button
                className="text-xs mt-2 text-blue-600"
                onClick={() => setCategory("")}
              >
                Clear category
              </button>
            </div>
          )}
        </div>

        {/* Brand */}
        <div className="mb-4">
          <div className="flex items-center justify-between mb-3">
            <h4 className="font-medium">Brand</h4>
            <button
              onClick={() => setShowBrand((s) => !s)}
              className="text-sm text-gray-500"
            >
              ▾
            </button>
          </div>

          {showBrand && (
            <>
              <input
                value={brand}
                onChange={(e) => setBrand(e.target.value)}
                placeholder="Search brand..."
                className="w-full border rounded px-3 py-2 text-sm mb-2"
              />
              <div className="flex flex-col gap-2 text-sm text-gray-600 max-h-40 overflow-auto pr-2">
                {[
                  "SonicFlow",
                  "HealthGear",
                  "ChargeMax",
                  "ConnectPro",
                  "TypeMaster",
                  "GameView",
                  "SkyExplorer",
                  "SecureEye",
                ].map((b) => (
                  <label key={b} className="inline-flex items-center gap-2">
                    <input type="checkbox" className="form-checkbox" />
                    <span>{b}</span>
                  </label>
                ))}
              </div>
            </>
          )}
        </div>

        {/* Price */}
        <div className="mb-4">
          <div className="flex items-center justify-between mb-3">
            <h4 className="font-medium">Price Range</h4>
            <button
              onClick={() => setShowPrice((s) => !s)}
              className="text-sm text-gray-500"
            >
              ▾
            </button>
          </div>

          {showPrice && (
            <>
              <div className="flex items-center gap-2 mb-2">
                <input
                  type="number"
                  min="0"
                  value={minPrice}
                  onChange={(e) => setMinPrice(e.target.value)}
                  placeholder="0"
                  className="w-1/2 border rounded px-2 py-1 text-sm"
                />
                <input
                  type="number"
                  min="0"
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(e.target.value)}
                  placeholder="500"
                  className="w-1/2 border rounded px-2 py-1 text-sm"
                />
              </div>
              <input
                type="range"
                min="0"
                max="500"
                value={maxPrice || 500}
                onChange={(e) => setMaxPrice(e.target.value)}
                className="w-full"
              />
            </>
          )}
        </div>

        {/* Color */}
        <div className="mb-4">
          <div className="flex items-center justify-between mb-3">
            <h4 className="font-medium">Color</h4>
            <button
              onClick={() => setShowColor((s) => !s)}
              className="text-sm text-gray-500"
            >
              ▾
            </button>
          </div>

          {showColor && (
            <>
              <div className="flex items-center gap-3 mb-3">
                {colors.map((c) => (
                  <button
                    key={c}
                    onClick={() => setColor((prev) => (prev === c ? "" : c))}
                    className={`w-7 h-7 rounded-full border ${
                      color === c ? "ring-2 ring-offset-1 ring-blue-400" : ""
                    }`}
                    style={{ background: mapColor(c) }}
                    aria-label={c}
                  />
                ))}
              </div>
              <hr />
              <button
                onClick={applyFilters}
                className="mt-4 w-full px-3 py-2 bg-blue-600 text-white rounded"
              >
                Apply Filters
              </button>
              <button
                onClick={clearFilters}
                className="mt-2 w-full px-3 py-2 border rounded"
              >
                Reset
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

function mapColor(name) {
  switch (name) {
    case "black":
      return "#111827";
    case "green":
      return "#10b981";
    case "gray":
      return "#9ca3af";
    case "blue":
      return "#2563eb";
    case "red":
      return "#ef4444";
    default:
      return "#ddd";
  }
}
