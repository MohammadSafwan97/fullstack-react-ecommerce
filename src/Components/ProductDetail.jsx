import { useState } from "react";
import { ShoppingCart, ChevronLeft, ChevronRight, Star } from "lucide-react";

export default function ProductDetail() {
  // Dummy product data
  const product = {
    id: 1,
    title: "Classic Leather Backpack",
    price: 129.99,
    description:
      "Discover the perfect blend of timeless style and modern functionality with our Classic Leather Backpack. Crafted from premium full-grain leather, this backpack offers exceptional durability and a luxurious feel. Its spacious main compartment, padded laptop sleeve, and multiple organizational pockets make it ideal for daily commutes, weekend getaways, or as a sophisticated accessory for any adventure.",
    colors: ["BROWN", "BLACK", "TAN"],
    sizes: ["SMALL", "MEDIUM", "LARGE"],
    rating: 4.5,
    images: [
      "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?q=80&w=1200",
      "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?q=80&w=1200",
      "https://images.unsplash.com/photo-1600180758890-6fc4b1b8b81a?q=80&w=1200",
      "https://images.unsplash.com/photo-1618354699889-a110d0f52f51?q=80&w=1200",
    ],
    reviews: [
      {
        author: "Alice Smith",
        stars: 5,
        text: "Absolutely love this backpack! The leather quality is superb and it's incredibly spacious. Highly recommend!",
        date: "2023-10-26",
      },
      {
        author: "Bob Johnson",
        stars: 4,
        text: "Great backpack, very stylish and comfortable to wear. Laptop fits perfectly.",
        date: "2023-10-20",
      },
      {
        author: "Charlie Brown",
        stars: 5,
        text: "Using this for months now, still looks new. Fantastic craftsmanship.",
        date: "2023-09-15",
      },
      {
        author: "Diana Prince",
        stars: 4,
        text: "Good quality and very practical. Only minor complaint is stiff zippers.",
        date: "2023-09-01",
      },
    ],
  };

  // State
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
  const [qty, setQty] = useState(1);

  const nextImage = () =>
    setCurrentIndex((prev) => (prev + 1) % product.images.length);
  const prevImage = () =>
    setCurrentIndex(
      (prev) => (prev - 1 + product.images.length) % product.images.length
    );

  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* LEFT IMAGES */}
        <div>
          <div className="relative w-full h-[420px] rounded-xl overflow-hidden shadow">
            <img
              src={product.images[currentIndex]}
              className="w-full h-full object-cover"
            />

            {/* arrows */}
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

          {/* thumbnails */}
          <div className="flex gap-3 mt-4">
            {product.images.map((img, idx) => (
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

          <p className="text-gray-500 text-sm mt-2">
            View images from different angles.
          </p>
        </div>

        {/* RIGHT SIDE INFO */}
        <div>
          <h1 className="text-3xl font-bold text-gray-900">{product.title}</h1>

          <p className="text-blue-600 text-xl font-semibold mt-2">
            ${product.price.toFixed(2)}
          </p>

          <p className="text-gray-700 mt-4">{product.description}</p>

          {/* Colors */}
          <div className="mt-6">
            <h4 className="text-sm font-semibold mb-2">Color</h4>
            <div className="flex gap-3">
              {product.colors.map((c) => (
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

          {/* Sizes */}
          <div className="mt-6">
            <h4 className="text-sm font-semibold mb-2">Size</h4>
            <div className="flex gap-3">
              {product.sizes.map((s) => (
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

          {/* Quantity */}
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

          {/* Add to Cart */}
          <button
            className="
              mt-8 w-full bg-blue-600 text-white py-3 rounded-md 
              flex items-center justify-center gap-2 font-semibold hover:bg-blue-700
            "
          >
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
            {product.rating} out of 5 ({product.reviews.length} reviews)
          </p>
        </div>

        {/* Review List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          {product.reviews.map((r, idx) => (
            <div key={idx} className="p-5 border bg-white rounded-xl shadow">
              <h4 className="font-semibold">{r.author}</h4>
              <p className="text-gray-700 text-sm mt-2">{r.text}</p>
              <p className="text-xs text-gray-500 mt-2">{r.date}</p>

              <div className="flex text-yellow-500 mt-2">
                {Array.from({ length: r.stars }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-500" />
                ))}
              </div>
            </div>
          ))}
        </div>

        <p className="text-gray-500 text-sm mt-6">More reviews coming soon.</p>
      </div>
    </div>
  );
}
