import { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginUser = () => {
    console.log(email, password);
  };

  const googleLogin = () => console.log("Login with Google");
  const facebookLogin = () => console.log("Login with Facebook");

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

        {/* RIGHT SIDE FORM */}
        <div
          className="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col
          w-full mt-10 md:mt-0 relative z-10 shadow-md"
        >
          <h2 className="text-gray-900 text-xl mb-6 font-bold title-font text-center">
            Login to Your Account
          </h2>

          {/* Email */}
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

          {/* Password */}
          <div className="relative mb-4">
            <label className="leading-7 text-sm text-gray-600">Password</label>
            <input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500
              focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3
              leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>

          {/* Login Button */}
          <button
            onClick={loginUser}
            className="text-white bg-indigo-500 border-0 py-2 px-6 
            focus:outline-none hover:bg-indigo-600 rounded text-lg"
          >
            Login
          </button>

          {/* Forgot Password */}
          <div className="text-right mt-2">
            <Link
              to="/forgot-password"
              className="text-sm text-indigo-500 hover:underline"
            >
              Forgot Password?
            </Link>
          </div>

          {/* Don't have account */}
          <div className="text-center mt-4">
            <p className="text-sm text-gray-600">
              Don't have an account?{" "}
              <Link to="/signup" className="text-indigo-500 hover:underline">
                Sign Up
              </Link>
            </p>
          </div>

          {/* Divider */}
          <div className="text-center text-gray-500 my-4">
            — OR Login With —
          </div>

          {/* Social Logins */}
          <div className="flex flex-col gap-3">
            <button
              onClick={googleLogin}
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
              onClick={facebookLogin}
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
        </div>
      </div>
    </section>
  );
};

export default Login;
