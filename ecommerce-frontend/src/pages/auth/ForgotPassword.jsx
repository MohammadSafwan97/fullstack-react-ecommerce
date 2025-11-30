import { useState } from "react";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const handleReset = () => {
    console.log("Reset link sent to:", email);
  };

  return (
    <section className="text-gray-600 body-font relative">
      <div className="container px-5 py-24 mx-auto flex justify-center">
        {/* LEFT SIDE IMAGE */}
        <div className="hidden md:flex w-1/2 items-center justify-center pr-8">
          <img
            src="https://img.freepik.com/free-vector/forgot-password-concept-illustration_114360-1095.jpg?w=826"
            alt="forgot password"
            className="rounded-2xl shadow-lg object-cover"
          />
        </div>

        {/* RIGHT SIDE FORM */}
        <div
          className="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col 
          w-full mt-10 md:mt-0 relative z-10 shadow-md"
        >
          <h2 className="text-gray-900 text-xl mb-6 font-bold title-font text-center">
            Forgot Password?
          </h2>

          <p className="text-gray-600 text-sm text-center mb-6">
            Enter your email address and we will send you a password reset link.
          </p>

          {/* Email Input */}
          <div className="relative mb-4">
            <label className="leading-7 text-sm text-gray-600">Email</label>
            <input
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 
              focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3
              leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>

          {/* Send Reset Link */}
          <button
            onClick={handleReset}
            className="text-white bg-indigo-500 border-0 py-2 px-6 
            focus:outline-none hover:bg-indigo-600 rounded text-lg"
          >
            Send Reset Link
          </button>

          {/* Back to Login */}
          <div className="text-center mt-4">
            <p className="text-sm text-gray-600">
              Remember your password?{" "}
              <Link to="/login" className="text-indigo-500 hover:underline">
                Back to Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForgotPassword;
