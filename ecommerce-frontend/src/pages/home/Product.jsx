import axios from "axios";
import { useState } from "react";
import { formatMoney } from "../../utils/money";
import { ShoppingCart, Star } from "lucide-react";

export function Product({ product, loadCart }) {
  const [quantity, setQuantity] = useState(1);

  const addToCart = async () => {
    await axios.post("/api/cart-items", {
      productId: product.id,
      quantity,
    });
    await loadCart();
  };

  return (
    <div
      className="
        group bg-white rounded-xl 
        border border-gray-100
        hover:border-gray-200
        shadow-sm hover:shadow-md
        transition-all duration-300 
        flex flex-col 
        overflow-hidden
        h-[380px]
      "
    >
      {/* IMAGE */}
      <div className="relative h-40 bg-gray-100 overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="
            w-full h-full object-cover 
            transition-transform duration-300 
            group-hover:scale-105
          "
        />

        {/* PRICE BADGE */}
        <div className="absolute top-3 right-3 bg-white px-3 py-1 rounded-full shadow-md">
          <span className="text-gray-900 font-semibold text-sm">
            {formatMoney(product.priceCents)}
          </span>
        </div>
      </div>

      {/* CONTENT */}
      <div className="p-3 flex flex-col flex-1">
        {/* CATEGORY + NAME */}
        <span className="text-xs text-gray-500">
          {product.category || "Product"}
        </span>

        <h3
          className="
            mt-1 font-semibold text-gray-900 
            text-sm leading-tight line-clamp-2 
            hover:text-gray-600 cursor-pointer
          "
        >
          {product.name}
        </h3>

        {/* BOTTOM SECTION (Rating + Quantity + Button) */}
        <div className="mt-auto pt-3 space-y-2">
          {/* RATING NOW CLOSE TO BUTTON */}
          <div className="flex items-center gap-2 text-sm">
            <div className="flex items-center gap-1.5">
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              <span className="text-gray-700">{product.rating.stars}</span>
            </div>
            <span className="text-xs text-gray-500">
              ({product.rating.count})
            </span>
          </div>

          {/* QUANTITY SELECTOR */}
          <select
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
            className="
              border border-gray-200 rounded-md 
              p-1.5 w-full text-sm 
              bg-white focus:ring-2 focus:ring-green-300
            "
          >
            {Array.from({ length: 10 }, (_, i) => i + 1).map((num) => (
              <option key={num} value={num}>
                {num}
              </option>
            ))}
          </select>

          {/* ADD TO CART BUTTON */}
          <button
            onClick={addToCart}
            className="
              w-full bg-green-600 text-white 
              py-2 rounded-md text-sm font-medium 
              flex items-center justify-center gap-2 
              transition hover:bg-green-700
            "
          >
            <ShoppingCart className="w-4 h-4" />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
