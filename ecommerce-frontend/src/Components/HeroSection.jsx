import { Link } from "react-router";
import "./hero.css";
import { useState, useEffect } from "react";

export function HeroSection() {
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
    <section className="hero-section">
      {/* LEFT SECTION */}
      <div className="hero-left">
        <h4>STEEL BOTTLE</h4>
        <h1>
          WHICH NEEDED <br />
          <span>EVERYDAY</span>
        </h1>
        <p>
          Lorem ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
        <Link to="/products" className="hero-btn">
          SHOP NOW →
        </Link>
      </div>

      {/* RIGHT SECTION — MODERN CAROUSEL */}
      <div className="hero-right">
        <div className="stack-carousel">
          {images.map((img, i) => (
            <img
              key={i}
              src={img}
              alt=""
              className={`stack-img ${
                i === index ? "active" : ""
              }`}
              style={{ "--i": i }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
