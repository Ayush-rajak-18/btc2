import React from "react";
import { Link } from "react-router-dom";
import { FaPlane } from "react-icons/fa";

const ForgotPassword = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <div className="absolute top-4 left-4 flex items-center">
        <FaPlane className="text-blue-700 transform -rotate-45" style={{ fontSize: "24px" }} />
        <h2 className="text-xl font-semibold text-gray-800 ml-2">my Dream Place</h2>
      </div>

      <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-xl border-gray-200 shadow-xl">
        <h2 className="mt-6 text-center text-2xl font-bold text-gray-900">Forgot Password</h2>
        <p className="text-center text-gray-600">Enter your email address and we'll send you a link to reset your password.</p>

        <form className="mt-8 space-y-6">
          <div className="rounded-md shadow-sm">
            <div>
              <label htmlFor="email" className="sr-only">Email address</label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="relative block w-full px-3 py-2 border bg-gray-100 border-gray-300 rounded-md placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                placeholder="Email address"
              />
            </div>
          </div>

          <button
            type="submit"
            className="relative flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-blue-500 border border-transparent rounded-md group hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Send Reset Link
          </button>
        </form>

        <div className="text-center text-sm text-gray-600 mt-6">
          <Link to="/signin" className="text-blue-600 hover:text-blue-500">Remembered your password? Sign in</Link>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;