import React from "react";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { FaPlane } from "react-icons/fa"; 

const SignIn = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
   
      <div className="absolute top-4 left-4 flex items-center">
      <FaPlane className="text-blue-700 transform -rotate-45" style={{ fontSize: "24px" }} /> 
        <h2 className="text-xl font-semibold text-gray-800">my Dream Place</h2>
      </div>

      <div className="w-full max-w-md p-8 space-y-8 bg-white  rounded-xl border-gray-200 shadow-xl  rounded-xl shadow-xl">
       <div>
          <h2 className="mt-6 text-center text-2xl font-bold text-gray-800">
            Sign in
          </h2>
        </div>
        <form className="mt-8 space-y-6">
          <input type="hidden" name="remember" defaultValue="true" />
          <div className="rounded-md shadow-sm -space-y-px ">
            <div className="mb-4 ">
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="relative block w-full px-3 py-2 border border-gray-300 bg-gray-100 rounded-md placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                placeholder="Email address"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="relative block w-full px-3 py-2 border border-gray-300 bg-gray-100 rounded-md placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                placeholder="Password"
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <label
                htmlFor="remember-me"
                className="block ml-2 text-sm text-gray-900"
              >
                Keep me signed in
              </label>
            </div>

            <div className="text-sm">
              <Link
                to="/forgot-password"
                className="font-medium text-blue-600 hover:text-blue-500"
              >
                Forgot password?
              </Link>
            </div>
          </div>

          <div className="space-y-4">
            <button
              type="submit"
              className="relative flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-blue-500 border border-transparent rounded-md group hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Continue with email
            </button>
            <div className="flex items-center justify-center">
              <span className="text-sm text-gray-500">or use one of these options</span>
            </div>
            <button
              type="button"
              className="relative flex items-center justify-center w-full px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-300 rounded-md group hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
            >
              <FcGoogle className="mr-2 text-2xl" />
              Continue with Google
            </button>
            <button
              type="button"
              className="relative flex items-center justify-center w-full px-4 py-2 text-sm font-medium text-white bg-blue-700 border border-transparent rounded-md group hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              <FaFacebook className="mr-2 text-xl" />
              Continue with Facebook
            </button>
          </div>
        </form>
        <div className="flex justify-center mt-6 text-sm text-gray-600">
          <span>Don't have an account? </span>
          <Link
            to="/register"
            className="ml-1 font-medium text-blue-600 hover:text-blue-500"
          >
            Register
          </Link>
       </div>
      </div>
    </div>
  );
};

export default SignIn;