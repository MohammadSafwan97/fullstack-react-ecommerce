import { Link } from "react-router";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full bg-gray-100 border-t border-gray-200 mt-16">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* BRAND */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <div className="w-8 h-8 bg-primary text-white flex items-center justify-center rounded-md font-bold text-lg">
              🛒
            </div>
            <span className="text-xl font-semibold text-gray-900">
              Commerce Hub
            </span>
          </div>

          <p className="text-gray-600 text-sm leading-relaxed">
            Your ultimate destination for quality products and seamless
            shopping.
          </p>

          {/* SOCIAL ICONS */}
          <div className="flex gap-4 mt-4 text-gray-600">
            <Link to="#" className="hover:text-primary transition">
              <Facebook className="w-5 h-5" />
            </Link>
            <Link to="#" className="hover:text-primary transition">
              <Twitter className="w-5 h-5" />
            </Link>
            <Link to="#" className="hover:text-primary transition">
              <Instagram className="w-5 h-5" />
            </Link>
            <Link to="#" className="hover:text-primary transition">
              <Linkedin className="w-5 h-5" />
            </Link>
          </div>
        </div>

        {/* ABOUT */}
        <div>
          <h3 className="text-gray-900 font-semibold mb-4">About</h3>
          <ul className="space-y-2 text-gray-600 text-sm">
            <li>
              <Link to="/about" className="hover:text-primary transition">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/careers" className="hover:text-primary transition">
                Careers
              </Link>
            </li>
            <li>
              <Link to="/blog" className="hover:text-primary transition">
                Blog
              </Link>
            </li>
          </ul>
        </div>

        {/* SUPPORT */}
        <div>
          <h3 className="text-gray-900 font-semibold mb-4">Support</h3>
          <ul className="space-y-2 text-gray-600 text-sm">
            <li>
              <Link to="/help" className="hover:text-primary transition">
                Help Center
              </Link>
            </li>
            <li>
              <Link to="/shipping" className="hover:text-primary transition">
                Shipping
              </Link>
            </li>
            <li>
              <Link to="/returns" className="hover:text-primary transition">
                Returns
              </Link>
            </li>
          </ul>
        </div>

        {/* LEGAL */}
        <div>
          <h3 className="text-gray-900 font-semibold mb-4">Legal</h3>
          <ul className="space-y-2 text-gray-600 text-sm">
            <li>
              <Link to="/privacy" className="hover:text-primary transition">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="/terms" className="hover:text-primary transition">
                Terms of Service
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* COPYRIGHT BAR */}
      <div className="border-t border-gray-300 py-4 text-center text-gray-600 text-sm">
        © {new Date().getFullYear()} Commerce Hub. All rights reserved.
      </div>
    </footer>
  );
}
