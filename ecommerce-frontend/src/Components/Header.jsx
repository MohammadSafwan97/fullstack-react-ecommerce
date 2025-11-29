import { Link } from "react-router";
import { useState } from "react";
import "./Header.css";

export function Header({ cart }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  let totalQuantity = 0;
  cart.forEach((cartItem) => (totalQuantity += cartItem.quantity));

  return (
    <>
      <header className="header clean-header">
        {/* LEFT — LOGO */}
        <div className="nav-left">
          <Link to="/" className="nav-logo-wrap">
            <svg
              className="nav-icon"
              width="30"
              height="30"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#202020"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="9" cy="21" r="1" />
              <circle cx="20" cy="21" r="1" />
              <path d="M1 1h4l2.68 13.39A2 2 0 0 0 9.62 16h8.76a2 2 0 0 0 1.94-1.61L23 6H6" />
            </svg>

            <span className="nav-logo-text">
              Safwan<span className="express">Express</span>
            </span>
          </Link>
        </div>

        {/* CENTER — NAVIGATION (Desktop Only) */}
        <nav className="nav-center desktop-nav">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/products" className="nav-link">Products</Link>
          <Link to="/about" className="nav-link">About Us</Link>
          <Link to="/contact" className="nav-link">Contact Us</Link>
        </nav>

        {/* RIGHT — SEARCH, PROFILE, CART */}
        <div className="nav-right">
          <div className="nav-search">
            <input type="text" placeholder="Search here" />
            <button>Search</button>
          </div>

          <Link to="/signin" className="nav-btn-circle ">Login</Link>

          <Link to="/checkout" className="nav-btn-cart">
            🛒
            {totalQuantity > 0 && (
              <span className="cart-badge">{totalQuantity}</span>
            )}
          </Link>

          {/* HAMBURGER BUTTON (Mobile Only) */}
          <button
            className="hamburger"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? "✖" : "☰"}
          </button>
        </div>
      </header>

      {/* MOBILE MENU DROPDOWN */}
      <div className={`mobile-menu ${isMenuOpen ? "open" : ""}`}>
        <Link to="/" className="mobile-link" onClick={() => setIsMenuOpen(false)}>Home</Link>
        <Link to="/products" className="mobile-link" onClick={() => setIsMenuOpen(false)}>Products</Link>
        <Link to="/about" className="mobile-link" onClick={() => setIsMenuOpen(false)}>About Us</Link>
        <Link to="/contact" className="mobile-link" onClick={() => setIsMenuOpen(false)}>Contact Us</Link>
      </div>
    </>
  );
}
