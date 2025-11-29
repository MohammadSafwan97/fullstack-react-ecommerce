import { Link } from "react-router";
import "./hero.css";

export function HeroSection() {
  return (
    <section className="hero-section">
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

      <div className="hero-right">
        <img src="../../public/images/products.png" alt="Hero Bottles" />
      </div>
    </section>
  );
}
