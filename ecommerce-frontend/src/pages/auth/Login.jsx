import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { Header } from "../../Components/Header";

export function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async () => {
    setError("");

    if (!email || !password) {
      setError("Email and password required");
      return;
    }

    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ email, password })
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Login failed");
        return;
      }

      localStorage.setItem("token", data.token);
      navigate("/");
    } catch {
      setError("Server error");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <Header />
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-gray-900">
            Welcome Back
          </h1>
          <p className="text-sm text-gray-500 mt-1">
            Login to your account
          </p>
        </div>

        <div className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-xl border border-gray-300 px-4 py-2.5 text-sm
                         focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-green-600"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-xl border border-gray-300 px-4 py-2.5 text-sm
                         focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-green-600"
            />
          </div>

          <div className="flex justify-end">
            <Link
              to="/forgot-password"
              className="text-sm text-green-700 hover:underline"
            >
              Forgot password?
            </Link>
          </div>

          {error && (
            <p className="text-sm text-red-600 text-center">{error}</p>
          )}

          <button
            type="button"
            onClick={handleLogin}
            className="w-full bg-green-700 hover:bg-green-800 text-white font-semibold
                       py-2.5 rounded-xl transition active:scale-[0.98]"
          >
            Sign In
          </button>
        </div>

        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            Don’t have an account?{" "}
            <Link
              to="/signup"
              className="text-green-700 font-medium hover:underline"
            >
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
