import { Link } from "react-router";
import { useState, useEffect } from "react";
import "./hero.css";
export default function HeroSection() {
  const images = [
    "/images/products/artistic-bowl-set-6-piece.jpg",
    "/images/products/bathroom-mat.jpg",
    "/images/products/athletic-skateboard-shoes-gray.jpg",
    "/images/products/blackout-curtains-set-teal.jpg",
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 2500);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="w-full bg-white py-16">
      <div className=" hero-left max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* LEFT SECTION — ORIGINAL TEXT STYLE PRESERVED */}
        <div className="hero-text space-y-4">
          <h4 className="text-primary text-base font-semibold tracking-wide">
            STEEL BOTTLE
          </h4>

          <h1 className="text-5xl font-extrabold text-gray-900 leading-tight">
            WHICH NEEDED <br />
            <span className="text-primary">EVERYDAY</span>
          </h1>

          <p className="text-gray-600 max-w-md text-lg leading-relaxed">
            Lorem ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>

          <Link
            to="/products"
            className="
              inline-block mt-4
              bg-primary text-white px-8 py-3 
              rounded-md font-semibold text-base
              shadow hover:bg-primary/90 transition
            "
          >
            SHOP NOW →
          </Link>
        </div>

        {/* RIGHT SECTION — FADE CAROUSEL */}
        <div className="relative h-80 w-full overflow-hidden rounded-xl shadow-md">
          {images.map((img, i) => (
            <img
              key={i}
              src={img}
              alt=""
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
                i === index ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
