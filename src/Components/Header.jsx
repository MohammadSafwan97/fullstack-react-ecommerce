import { Link } from "react-router";
import { useState } from "react";
export function Header({ cart }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  let totalQuantity = cart.reduce((sum, item) => sum + item.quantity, 0);
  return (
    <>
      {" "}
      <header className="w-full bg-white shadow-md fixed top-0 left-0 z-50">
        {" "}
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          {" "}
          {/* LOGO */}{" "}
          <Link to="/" className="flex items-center gap-2">
            {" "}
            <svg
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#16a34a"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {" "}
              <circle cx="9" cy="21" r="1" /> <circle cx="20" cy="21" r="1" />{" "}
              <path d="M1 1h4l2.68 13.39A2 2 0 0 0 9.62 16h8.76a2 2 0 0 0 1.94-1.61L23 6H6" />{" "}
            </svg>{" "}
            <span className="text-2xl font-semibold text-gray-900">
              {" "}
              Safwan<span className="text-green-700">Express</span>{" "}
            </span>{" "}
          </Link>{" "}
          {/* NAVIGATION (Desktop) */}{" "}
          <nav className="hidden md:flex gap-10 text-gray-700 font-medium">
            {" "}
            <Link to="/" className="hover:text-green-700">
              {" "}
              Home{" "}
            </Link>{" "}
            <Link to="/products" className="hover:text-green-700">
              {" "}
              Products{" "}
            </Link>{" "}
            <Link to="/orders" className="hover:text-green-700">
              {" "}
              Orders{" "}
            </Link>{" "}
            <Link to="/about" className="hover:text-green-700">
              {" "}
              About Us{" "}
            </Link>{" "}
            <Link to="/contact" className="hover:text-green-700">
              {" "}
              Contact Us{" "}
            </Link>{" "}
          </nav>{" "}
          {/* RIGHT SECTION */}{" "}
          <div className="flex items-center gap-4">
            {" "}
            {/* IMPROVED SEARCH BAR */}{" "}
            <div className="hidden lg:flex items-center bg-gray-100 rounded-full px-4 py-2 border border-gray-300 shadow-sm focus-within:ring-2 focus-within:ring-green-500">
              {" "}
              <input
                type="text"
                placeholder="Search products..."
                className="bg-transparent outline-none w-40 placeholder-gray-500"
              />{" "}
              <button className="text-green-700 font-medium hover:underline">
                {" "}
                Search{" "}
              </button>{" "}
            </div>{" "}
            {/* LOGIN BUTTON */}{" "}
            <Link
              to="/login"
              className="hidden md:block px-5 py-1.5 border border-green-700 rounded-full text-green-700 hover:bg-green-700 hover:text-white transition"
            >
              {" "}
              Login{" "}
            </Link>{" "}
            {/* CART ICON (Improved) */}{" "}
            <Link to="/checkout" className="relative">
              {" "}
              <div className="w-10 h-10 bg-green-700 rounded-full flex items-center justify-center hover:bg-green-700 transition shadow-md">
                {" "}
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  {" "}
                  <circle cx="9" cy="21" r="1" />{" "}
                  <circle cx="20" cy="21" r="1" />{" "}
                  <path d="M1 1h4l2.68 13.39A2 2 0 0 0 9.62 16h8.76a2 2 0 0 0 1.94-1.61L23 6H6" />{" "}
                </svg>{" "}
              </div>{" "}
              {/* BADGE */}{" "}
              {totalQuantity > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs font-semibold rounded-full px-2 py-0.5 shadow">
                  {" "}
                  {totalQuantity}{" "}
                </span>
              )}{" "}
            </Link>{" "}
            {/* MOBILE MENU BUTTON */}{" "}
            <button
              className="text-3xl md:hidden text-green-700"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {" "}
              {isMenuOpen ? "✖" : "☰"}{" "}
            </button>{" "}
          </div>{" "}
        </div>{" "}
        {/* MOBILE MENU */}{" "}
        {isMenuOpen && (
          <div className="md:hidden bg-white shadow-lg border-t flex flex-col py-4 px-6 space-y-3">
            {" "}
            <Link
              to="/"
              onClick={() => setIsMenuOpen(false)}
              className="hover:text-green-700"
            >
              {" "}
              Home{" "}
            </Link>{" "}
            <Link
              to="/products"
              onClick={() => setIsMenuOpen(false)}
              className="hover:text-green-700"
            >
              {" "}
              Products{" "}
            </Link>{" "}
            <Link
              to="/orders"
              onClick={() => setIsMenuOpen(false)}
              className="hover:text-green-700"
            >
              {" "}
              Orders{" "}
            </Link>{" "}
            <Link
              to="/about"
              onClick={() => setIsMenuOpen(false)}
              className="hover:text-green-700"
            >
              {" "}
              About Us{" "}
            </Link>{" "}
            <Link
              to="/contact"
              onClick={() => setIsMenuOpen(false)}
              className="hover:text-green-700"
            >
              {" "}
              Contact Us{" "}
            </Link>{" "}
            <Link
              to="/login"
              className="w-full text-center py-2 rounded-md border border-green-700 text-green-700 hover:bg-green-700 hover:text-white transition"
              onClick={() => setIsMenuOpen(false)}
            >
              {" "}
              Login{" "}
            </Link>{" "}
          </div>
        )}{" "}
      </header>{" "}
      {/* Space so content doesn't hide behind fixed header */}{" "}
      <div className="h-24"></div>{" "}
    </>
  );
}
