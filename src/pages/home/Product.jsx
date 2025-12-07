import axios from "axios";
import { useState } from "react";
import { formatMoney } from "../../utils/money";
import { ShoppingCart, Star } from "lucide-react";

export function Product({ product, loadCart }) {
  const [quantity, setQuantity] = useState(1);

  const BACKEND_URL =
    "https://ecommerce-backend-production-849a.up.railway.app";

  const addToCart = async () => {
    console.log("Add to cart clicked");

    const user_id = localStorage.getItem("user_id");
    console.log("User ID:", user_id);

    if (!user_id) {
      alert("Please login to add items");
      return;
    }

    try {
      const res = await axios.post(`${BACKEND_URL}/cart/add`, {
        user_id,
        product_id: product.id,
        quantity,
      });

      console.log("Add to Cart Response:", res.data);
      alert("Added!");

      if (typeof loadCart === "function") loadCart();
    } catch (error) {
      console.error("Add to cart error:", error);
      alert(error.response?.data?.error || "Failed to add item");
    }
  };

  return (
    <div
      className="group bg-white rounded-xl border border-gray-100 
      hover:border-gray-200 shadow-sm hover:shadow-md transition flex flex-col 
      overflow-hidden h-[380px]"
    >
      <div className="relative h-40 bg-gray-100 overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />

        <div className="absolute top-3 right-3 bg-white px-3 py-1 rounded-full shadow-md">
          <span className="text-gray-900 font-semibold text-sm">
            {formatMoney(product.price_cents)}
          </span>
        </div>
      </div>

      <div className="p-3 flex flex-col flex-1">
        <span className="text-xs text-gray-500">
          {product.category || "Product"}
        </span>

        <h3 className="mt-1 font-semibold text-gray-900 text-sm leading-tight line-clamp-2">
          {product.name}
        </h3>

        <div className="mt-auto pt-3 space-y-2">
          <div className="flex items-center gap-2 text-sm">
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            <span>{product.rating_stars}</span>
            <span className="text-xs text-gray-500">
              {product.rating_count}
            </span>
          </div>

          <select
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
            className="border border-gray-200 rounded-md p-1.5 w-full text-sm bg-white focus:ring-2"
          >
            {Array.from({ length: 10 }, (_, i) => i + 1).map((num) => (
              <option key={num} value={num}>
                {num}
              </option>
            ))}
          </select>

          <button
            onClick={addToCart}
            className="w-full bg-green-600 text-white py-2 rounded-md text-sm 
              font-medium flex items-center justify-center gap-2 hover:bg-green-700"
          >
            <ShoppingCart className="w-4 h-4" />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
