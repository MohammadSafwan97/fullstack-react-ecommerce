import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { ShoppingCart, ChevronLeft, ChevronRight, Star } from "lucide-react";

export default function ProductDetail() {
  const { id } = useParams();

  const [product, setProduct] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  // defaults for options
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedSize, setSelectedSize] = useState("");
  const [qty, setQty] = useState(1);

  useEffect(() => {
    const loadProduct = async () => {
      try {
        const res = await axios.get(
          `https://ecommerce-backend-production-849a.up.railway.app/products/${id}`
        );
        setProduct(res.data);

        // optional: set defaults if present
        if (res.data.colors) setSelectedColor(res.data.colors[0]);
        if (res.data.sizes) setSelectedSize(res.data.sizes[0]);
      } catch (err) {
        console.error("Error loading product:", err);
      }
    };

    loadProduct();
  }, [id]);

  if (!product) return <p className="p-6">Loading...</p>;

  // fallback values if backend does not provide these fields
  const images = product.images || [product.image];
  const reviews = product.reviews || [];
  const colors = product.colors || ["DEFAULT"];
  const sizes = product.sizes || ["ONE SIZE"];

  const nextImage = () => setCurrentIndex((prev) => (prev + 1) % images.length);

  const prevImage = () =>
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);

  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* LEFT IMAGES */}
        <div>
          <div className="relative w-full h-[420px] rounded-xl overflow-hidden shadow">
            <img
              src={images[currentIndex]}
              className="w-full h-full object-cover"
            />

            <button
              onClick={prevImage}
              className="absolute top-1/2 left-4 -translate-y-1/2 bg-white p-2 rounded-full shadow"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <button
              onClick={nextImage}
              className="absolute top-1/2 right-4 -translate-y-1/2 bg-white p-2 rounded-full shadow"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* THUMBNAILS */}
          <div className="flex gap-3 mt-4">
            {images.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-20 h-20 rounded-md overflow-hidden border ${
                  currentIndex === idx ? "border-blue-600" : "border-gray-300"
                }`}
              >
                <img src={img} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>

        {/* RIGHT SIDE INFO */}
        <div>
          <h1 className="text-3xl font-bold text-gray-900">
            {product.name || product.title}
          </h1>

          <p className="text-blue-600 text-xl font-semibold mt-2">
            ${((product.price_cents || product.price * 100) / 100).toFixed(2)}
          </p>

          <p className="text-gray-700 mt-4">{product.description}</p>

          {/* COLORS */}
          <div className="mt-6">
            <h4 className="text-sm font-semibold mb-2">Color</h4>
            <div className="flex gap-3">
              {colors.map((c) => (
                <button
                  key={c}
                  onClick={() => setSelectedColor(c)}
                  className={`px-4 py-1 rounded-md border ${
                    selectedColor === c
                      ? "bg-gray-900 text-white"
                      : "bg-white text-gray-800 border-gray-300"
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>

          {/* SIZES */}
          <div className="mt-6">
            <h4 className="text-sm font-semibold mb-2">Size</h4>
            <div className="flex gap-3">
              {sizes.map((s) => (
                <button
                  key={s}
                  onClick={() => setSelectedSize(s)}
                  className={`px-4 py-1 rounded-md border ${
                    selectedSize === s
                      ? "bg-gray-900 text-white"
                      : "bg-white text-gray-800 border-gray-300"
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          {/* QUANTITY */}
          <div className="mt-6">
            <h4 className="text-sm font-semibold mb-2">Quantity</h4>
            <div className="flex items-center gap-4">
              <button
                onClick={() => qty > 1 && setQty(qty - 1)}
                className="px-3 py-1 border rounded-md"
              >
                -
              </button>
              <span className="text-lg font-semibold">{qty}</span>
              <button
                onClick={() => setQty(qty + 1)}
                className="px-3 py-1 border rounded-md"
              >
                +
              </button>
            </div>
          </div>

          {/* ADD TO CART */}
          <button className="mt-8 w-full bg-blue-600 text-white py-3 rounded-md flex items-center justify-center gap-2 font-semibold hover:bg-blue-700">
            <ShoppingCart className="w-5 h-5" />
            Add to cart
          </button>
        </div>
      </div>

      {/* REVIEWS */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-3">
          Customer Reviews
        </h2>

        <div className="flex items-center gap-2 text-yellow-500">
          <Star className="fill-yellow-500" />
          <p className="text-gray-800 font-semibold">
            {product.rating || 4.5} out of 5 ({reviews.length} reviews)
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          {reviews.map((r, idx) => (
            <div key={idx} className="p-5 border bg-white rounded-xl shadow">
              <h4 className="font-semibold">{r.author}</h4>
              <p className="text-gray-700 text-sm mt-2">{r.text}</p>
              <p className="text-xs text-gray-500 mt-2">{r.date}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
