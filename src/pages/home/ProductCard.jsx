// src/pages/products/ProductCard.jsx
import axios from "axios";
import { ShoppingCart, Eye } from "lucide-react";
import { formatMoney } from "../../utils/money";
import { Link } from "react-router-dom";

export default function ProductCard({ product, loadCart }) {
  const addToCart = async () => {
    try {
      await axios.post("/api/cart-items", {
        productId: product.id,
        quantity: 1,
      });
      if (typeof loadCart === "function") await loadCart();
    } catch (err) {
      console.error("Add to cart failed", err);
    }
  };

  return (
    <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-4 flex flex-col">
      <Link to={`/product/${product.id}`} className="block">
        <div className="w-full h-44 rounded-md overflow-hidden bg-gray-50">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover"
          />
        </div>
      </Link>

      <div className="mt-3 flex-1">
        <p className="text-xs text-gray-400">{product.brand}</p>
        <Link to={`/product/${product.id}`} className="block">
          <h3 className="mt-1 font-semibold text-sm leading-snug text-gray-800">
            {product.name}
          </h3>
        </Link>

        <div className="mt-3">
          <span className="text-blue-600 font-semibold text-base">
            {formatMoney(Math.round(product.price * 100))}
          </span>
        </div>
      </div>

      <div className="mt-4 flex items-center gap-3">
        <button
          onClick={addToCart}
          className="flex items-center gap-2 px-3 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded text-sm"
        >
          <ShoppingCart className="w-4 h-4" />
          Add to Cart
        </button>

        <Link
          to={`/product/${product.id}`}
          className="p-2 text-gray-500 rounded hover:bg-gray-100"
        >
          <Eye className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
