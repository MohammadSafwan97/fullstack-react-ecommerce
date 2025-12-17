import axios from "axios";
import { useState } from "react";
import { formatMoney } from "../../utils/money";

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
      data-testid="product-container"
      className="bg-white rounded-xl overflow-hidden
                 border border-slate-200
                 hover:shadow-lg transition-shadow
                 flex flex-col h-full"
    >
      {/* IMAGE */}
      <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
        <img
          data-testid="product-image"
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* CONTENT */}
      <div className="p-5 flex flex-col flex-1">
        {/* NAME + PRICE */}
        <div className="flex items-start justify-between mb-2 gap-3">
          <h3 className="text-slate-900 text-sm font-medium leading-snug line-clamp-2">
            {product.name}
          </h3>
          <span className="text-slate-900 text-sm font-semibold whitespace-nowrap">
            {formatMoney(product.priceCents)}
          </span>
        </div>

        {/* RATING */}
        <div className="flex items-center gap-1 mb-3">
          <img
            data-testid="product-rating-stars-image"
            src={`images/ratings/rating-${product.rating.stars * 10}.png`}
            alt="Rating"
            className="h-3.5"
          />
          <span className="text-xs text-slate-500">
            ({product.rating.count})
          </span>
        </div>

        {/* QUANTITY */}
        <div className="mb-4">
          <select
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
            className="w-full rounded-lg border border-slate-300
                       bg-white px-3 py-1.5 text-xs
                       focus:outline-none focus:ring-1
                       focus:ring-green-600"
          >
            {[1,2,3,4,5,6,7,8,9,10].map((q) => (
              <option key={q} value={q}>
                Qty {q}
              </option>
            ))}
          </select>
        </div>

        {/* PUSH BUTTON TO BOTTOM */}
        <div className="flex-1" />

        {/* CTA */}
        <button
          data-testid="add-to-cart-button"
          onClick={addToCart}
          className="w-full bg-green-700 hover:bg-green-800
                     text-white text-sm font-medium py-2.5
                     rounded-lg transition active:scale-[0.98]"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
