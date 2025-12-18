
import { useState } from "react";
import { formatMoney } from "../../utils/money";
import { api } from "@/config/api";
export function Product({ product, loadCart }) {
  const [quantity, setQuantity] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const [added, setAdded] = useState(false);

  const addToCart = async () => {
    await api.post("/api/cart-items", {
      productId: product.id,
      quantity,
    });
    await loadCart();

    // Show feedback
    setAdded(true);
    setTimeout(() => setAdded(false), 1800);
  };

  return (
    <>
      {/* PRODUCT CARD */}
      <div
        data-testid="product-container"
        className="bg-white rounded-xl overflow-hidden border border-slate-200
                   hover:shadow-lg transition-shadow flex flex-col h-full"
      >
        {/* IMAGE (CLICKABLE) */}
        <button
          onClick={() => setShowModal(true)}
          className="relative aspect-[4/3] bg-slate-100 overflow-hidden group"
        >
          <img
            data-testid="product-image"
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-300
                       group-hover:scale-105"
          />

          {/* Hover hint */}
          <span className="absolute inset-0 bg-black/0 group-hover:bg-black/20
                           flex items-center justify-center text-white text-sm
                           opacity-0 group-hover:opacity-100 transition">
            View details
          </span>
        </button>

        {/* CONTENT */}
        <div className="p-5 flex flex-col flex-1">
          {/* NAME + PRICE */}
          <div className="flex justify-between gap-3 mb-2">
            <h3 className="text-slate-900 text-sm font-medium line-clamp-2">
              {product.name}
            </h3>
            <span className="text-sm font-semibold text-slate-900 whitespace-nowrap">
              {formatMoney(product.priceCents)}
            </span>
          </div>

          {/* RATING */}
          <div className="flex items-center gap-1 mb-3">
            <img
              src={`images/ratings/rating-${product.rating.stars * 10}.png`}
              className="h-3.5"
            />
            <span className="text-xs text-slate-500">
              ({product.rating.count})
            </span>
          </div>

          {/* QTY */}
          <select
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
            className="mb-4 w-full rounded-lg border border-slate-300
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

          <div className="flex-1" />

          {/* CTA */}
          <button
            onClick={addToCart}
            className="relative w-full bg-green-700 hover:bg-green-800
                       text-white text-sm font-medium py-2.5
                       rounded-lg transition active:scale-[0.98]"
          >
            {added ? "✓ Added to Cart" : "Add to Cart"}
          </button>
        </div>
      </div>

      {/* ADD TO CART TOAST */}
      {added && (
        <div className="fixed bottom-6 right-6 bg-slate-900 text-white
                        px-4 py-2 rounded-lg shadow-lg text-sm
                        animate-fade-in">
          Item added to cart
        </div>
      )}

      {/* PRODUCT DETAIL MODAL */}
      {showModal && (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center px-4">
          <div className="bg-white max-w-lg w-full rounded-2xl overflow-hidden shadow-xl">
            {/* IMAGE */}
            <div className="aspect-[4/3] bg-slate-100">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* CONTENT */}
            <div className="p-6">
              <h2 className="text-lg font-semibold text-slate-900 mb-2">
                {product.name}
              </h2>

              <p className="text-slate-600 text-sm mb-4">
                This is a premium product designed for quality and comfort.
                (You can replace this with real description later.)
              </p>

              <div className="flex justify-between items-center mb-6">
                <span className="text-lg font-bold text-slate-900">
                  {formatMoney(product.priceCents)}
                </span>

                <img
                  src={`images/ratings/rating-${product.rating.stars * 10}.png`}
                  className="h-4"
                />
              </div>

              <div className="flex gap-3">
                <button
                  onClick={() => {
                    addToCart();
                    setShowModal(false);
                  }}
                  className="flex-1 bg-green-700 hover:bg-green-800
                             text-white py-2.5 rounded-lg transition"
                >
                  Add to Cart
                </button>

                <button
                  onClick={() => setShowModal(false)}
                  className="flex-1 border border-slate-300
                             py-2.5 rounded-lg hover:bg-slate-100 transition"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
