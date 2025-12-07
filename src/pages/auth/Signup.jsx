import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");

  const navigate = useNavigate();

  const BACKEND_URL = `https://ecommerce-backend-production-849a.up.railway.app/auth/signup`;

  const collectData = async () => {
    setMsg("Processing...");

    try {
      // Step 1: Signup user
      await axios.post(BACKEND_URL, {
        full_name: name,
        email,
        password,
      });

      // Step 2: Auto-login
      const loginRes = await axios.post(
        "https://ecommerce-backend-production-849a.up.railway.app/auth/signin",
        {
          email,
          password,
        }
      );

      // Step 3: Save token + user_id
      localStorage.setItem("token", loginRes.data.access_token);

      // 🔥 Required for Add-to-Cart
      localStorage.setItem("user_id", loginRes.data.user.id);

      setMsg("Signup successful! Redirecting...");

      setTimeout(() => navigate("/"), 800);
    } catch (err) {
      console.error(err);
      setMsg(err.response?.data?.error || "Signup failed, try again.");
    }
  };

  return (
    <section className="text-gray-600 body-font relative">
      <div className="container px-5 py-24 mx-auto flex justify-center">
        {/* LEFT IMAGE */}
        <div className="hidden md:flex w-1/2 items-center justify-center pr-8">
          <img
            src="https://img.freepik.com/free-vector/ecommerce-web-page-concept-illustration_114360-8204.jpg?w=826"
            alt="signup"
            className="rounded-2xl shadow-lg object-cover"
          />
        </div>

        {/* SIGNUP FORM */}
        <div className="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col shadow-md">
          <h2 className="text-gray-900 text-xl mb-6 font-bold text-center">
            Create an Account
          </h2>

          {msg && (
            <p className="text-center mb-4 text-indigo-600 font-medium">
              {msg}
            </p>
          )}

          <div className="relative mb-4">
            <label className="leading-7 text-sm text-gray-600">Full Name</label>
            <input
              type="text"
              onChange={(e) => setName(e.target.value)}
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 
              focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3"
            />
          </div>

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
            onClick={collectData}
            className="text-white bg-indigo-500 py-2 px-6 rounded hover:bg-indigo-600"
          >
            CREATE YOUR ACCOUNT
          </button>

          <div className="text-center mt-4">
            <p className="text-sm text-gray-600">
              Already have an account?{" "}
              <Link to="/login" className="text-indigo-500 hover:underline">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signup;
