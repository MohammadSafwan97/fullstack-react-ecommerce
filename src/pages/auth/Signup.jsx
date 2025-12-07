import { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // <-- added
import axios from "axios";
import API_BASE from "../../utils/fetchData.js";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");

  const navigate = useNavigate(); // <-- added

  const BACKEND_URL = `https://ecommerce-backend-production-849a.up.railway.app/auth/signup`;

  const collectData = async () => {
    setMsg("Processing...");

    try {
      // 1️⃣ SIGNUP USER
      await axios.post(BACKEND_URL, {
        full_name: name,
        email,
        password,
      });

      // 2️⃣ AUTO-LOGIN USER RIGHT AFTER SIGNUP
      const loginRes = await axios.post(
        "https://ecommerce-backend-production-849a.up.railway.app/auth/signin",
        {
          email,
          password,
        }
      );

      // 3️⃣ SAVE TOKEN
      localStorage.setItem("token", loginRes.data.access_token);

      setMsg("Signup successful! Redirecting...");

      // 4️⃣ Redirect to home
      setTimeout(() => navigate("/"), 800);
    } catch (err) {
      console.error(err);
      setMsg(err.response?.data?.error || "Signup failed, try again.");
    }
  };

  const googleSignup = () => console.log("Signup with Google");
  const facebookSignup = () => console.log("Signup with Facebook");

  return (
    <section className="text-gray-600 body-font relative">
      <div className="container px-5 py-24 mx-auto flex justify-center">
        {/* LEFT SIDE IMAGE */}
        <div className="hidden md:flex w-1/2 items-center justify-center pr-8">
          <img
            src="https://img.freepik.com/free-vector/ecommerce-web-page-concept-illustration_114360-8204.jpg?w=826"
            alt="ecommerce signup"
            className="rounded-2xl shadow-lg object-cover"
          />
        </div>

        {/* RIGHT SIDE FORM */}
        <div
          className="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col
          w-full mt-10 md:mt-0 relative z-10 shadow-md"
        >
          <h2 className="text-gray-900 text-xl mb-6 font-bold title-font text-center">
            Create an Account
          </h2>

          {msg && (
            <p className="text-center mb-4 text-indigo-600 font-medium">
              {msg}
            </p>
          )}

          {/* Name */}
          <div className="relative mb-4">
            <label className="leading-7 text-sm text-gray-600">Full Name</label>
            <input
              type="text"
              onChange={(e) => setName(e.target.value)}
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 
              focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 
              leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>

          {/* Email */}
          <div className="relative mb-4">
            <label className="leading-7 text-sm text-gray-600">Email</label>
            <input
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 
              focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 
              px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>

          {/* Password */}
          <div className="relative mb-4">
            <label className="leading-7 text-sm text-gray-600">Password</label>
            <input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 
              focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 
              px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>

          {/* Signup Button */}
          <button
            onClick={collectData}
            className="text-white bg-indigo-500 border-0 py-2 px-6 
            focus:outline-none hover:bg-indigo-600 rounded text-lg"
          >
            CREATE YOUR ACCOUNT
          </button>

          {/* Already have account */}
          <div className="text-center mt-4">
            <p className="text-sm text-gray-600">
              Already have an account?{" "}
              <Link to="/login" className="text-indigo-500 hover:underline">
                Login
              </Link>
            </p>
          </div>

          {/* Divider */}
          <div className="text-center text-gray-500 my-4">
            — OR Sign Up With —
          </div>

          {/* Social Signup */}
          <div className="flex flex-col gap-3 mb-6">
            <button
              onClick={googleSignup}
              className="w-full flex items-center justify-center gap-3 border py-2 rounded 
              hover:bg-gray-100 transition"
            >
              <img
                src="https://www.svgrepo.com/show/355037/google.svg"
                className="w-5"
                alt="google"
              />
              Google
            </button>

            <button
              onClick={facebookSignup}
              className="w-full flex items-center justify-center gap-3 border py-2 rounded 
              hover:bg-gray-100 transition"
            >
              <img
                src="https://www.svgrepo.com/show/475647/facebook-color.svg"
                className="w-5"
                alt="facebook"
              />
              Facebook
            </button>
          </div>

          <p className="text-xs text-gray-500 mt-3 text-center">
            By signing up, you agree to our Terms & Privacy Policy.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Signup;
