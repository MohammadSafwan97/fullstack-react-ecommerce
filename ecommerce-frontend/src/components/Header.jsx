import { Link } from "react-router";
import { useState, useEffect } from "react";
import { api } from "@/config/api";

export function Header({ cart = [] }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [loadingUser, setLoadingUser] = useState(true);

  const totalQuantity = cart.reduce(
    (sum, item) => sum + (item.quantity || 0),
    0
  );

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      setLoadingUser(false);
      return;
    }

    const fetchUser = async () => {
      try {
        const res = await api.get("/api/auth/user", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUser(res.data.user);
      } catch (err) {
        localStorage.removeItem("token");
        setUser(null);
      } finally {
        setLoadingUser(false);
      }
    };

    fetchUser();
  }, []);

  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
    window.location.href = "/";
  };

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 bg-white border-b shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#16a34a"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="9" cy="21" r="1" />
              <circle cx="20" cy="21" r="1" />
              <path d="M1 1h4l2.68 13.39A2 2 0 0 0 9.62 16h8.76a2 2 0 0 0 1.94-1.61L23 6H6" />
            </svg>

            <span className="text-xl font-bold text-gray-900">
              Safwan<span className="text-green-700">Express</span>
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-8 text-gray-700 font-medium">
            {["Home", "Products", "About", "Contact"].map((item) => (
              <Link
                key={item}
                to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                className="hover:text-green-700 transition-colors"
              >
                {item}
              </Link>
            ))}

            {user && (
              <Link
                to="/orders"
                className="hover:text-green-700 transition-colors"
              >
                Orders
              </Link>
            )}
          </nav>

          <div className="flex items-center gap-4">
            {!loadingUser && (
              <>
                {user ? (
                  <button
                    onClick={logout}
                    className="hidden md:inline-flex items-center px-4 py-1.5 border border-red-600 text-red-600 rounded-full hover:bg-red-600 hover:text-white transition"
                  >
                    Logout
                  </button>
                ) : (
                  <Link
                    to="/login"
                    className="hidden md:inline-flex items-center px-4 py-1.5 border border-green-700 text-green-700 rounded-full hover:bg-green-700 hover:text-white transition"
                  >
                    Login
                  </Link>
                )}
              </>
            )}

            <Link to="/checkout" className="relative group">
              <div className="w-10 h-10 bg-green-700 rounded-full flex items-center justify-center shadow group-hover:bg-green-800 transition">
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
                  <circle cx="9" cy="21" r="1" />
                  <circle cx="20" cy="21" r="1" />
                  <path d="M1 1h4l2.68 13.39A2 2 0 0 0 9.62 16h8.76a2 2 0 0 0 1.94-1.61L23 6H6" />
                </svg>
              </div>

              {totalQuantity > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs font-semibold px-2 rounded-full">
                  {totalQuantity}
                </span>
              )}
            </Link>

            <button
              aria-label="Open menu"
              className="md:hidden text-2xl text-green-700 focus:outline-none"
              onClick={() => setIsMenuOpen((prev) => !prev)}
            >
              ☰
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-white border-t shadow-sm px-6 py-4 space-y-3">
            {["Home", "Products", "About", "Contact"].map((item) => (
              <Link
                key={item}
                to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                onClick={() => setIsMenuOpen(false)}
                className="block text-gray-700 hover:text-green-700"
              >
                {item}
              </Link>
            ))}

            {user && (
              <Link
                to="/orders"
                onClick={() => setIsMenuOpen(false)}
                className="block text-gray-700 hover:text-green-700"
              >
                Orders
              </Link>
            )}

            {user ? (
              <button
                onClick={logout}
                className="w-full mt-3 py-2 border border-red-600 text-red-600 rounded hover:bg-red-600 hover:text-white transition"
              >
                Logout
              </button>
            ) : (
              <Link
                to="/login"
                className="block w-full mt-3 py-2 border border-green-700 text-green-700 text-center rounded hover:bg-green-700 hover:text-white transition"
              >
                Login
              </Link>
            )}
          </div>
        )}
      </header>

      <div className="h-20" />
    </>
  );
}
