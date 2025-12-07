import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  const BACKEND_URL = `https://ecommerce-backend-production-849a.up.railway.app/auth/signin`;

  const loginUser = async () => {
    setMsg("Processing...");

    try {
      const res = await axios.post(BACKEND_URL, {
        email,
        password,
      });

      // Save token
      localStorage.setItem("token", res.data.access_token);

      // 🔥 Save USER ID (required for Add to Cart)
      localStorage.setItem("user_id", res.data.user.id);

      setMsg("Login successful! Redirecting...");

      setTimeout(() => navigate("/"), 1200);
    } catch (err) {
      console.error(err);
      setMsg(err.response?.data?.error || "Login failed");
    }
  };

  return (
    <section className="text-gray-600 body-font relative">
      <div className="container px-5 py-24 mx-auto flex justify-center">
        {/* LEFT SIDE IMAGE */}
        <div className="hidden md:flex w-1/2 items-center justify-center pr-8">
          <img
            src="https://img.freepik.com/free-vector/tablet-login-concept-illustration_114360-7883.jpg?w=826"
            alt="login"
            className="rounded-2xl shadow-lg object-cover"
          />
        </div>

        {/* RIGHT FORM */}
        <div className="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col shadow-md">
          <h2 className="text-gray-900 text-xl mb-6 font-bold text-center">
            Login to Your Account
          </h2>

          {msg && <p className="text-center mb-4 text-indigo-600">{msg}</p>}

          <div className="relative mb-4">
            <label className="leading-7 text-sm text-gray-600">Email</label>
            <input
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 
              focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3"
            />
          </div>

          <div className="relative mb-4">
            <label className="leading-7 text-sm text-gray-600">Password</label>
            <input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 
              focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3"
            />
          </div>

          <button
            onClick={loginUser}
            className="text-white bg-indigo-500 py-2 px-6 rounded hover:bg-indigo-600"
          >
            Login
          </button>

          <div className="text-right mt-2">
            <Link
              to="/forgot-password"
              className="text-sm text-indigo-500 hover:underline"
            >
              Forgot Password?
            </Link>
          </div>

          <div className="text-center mt-4">
            <p className="text-sm text-gray-600">
              Don't have an account?{" "}
              <Link to="/signup" className="text-indigo-500 hover:underline">
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
