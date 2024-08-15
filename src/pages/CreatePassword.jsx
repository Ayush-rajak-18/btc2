import React from "react";
import { Link } from "react-router-dom";
import { FaPlane } from "react-icons/fa"; 

const CreatePassword = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <div className="absolute top-4 left-4 flex items-center">
        <FaPlane className="text-blue-700 transform -rotate-45" style={{ fontSize: "24px" }} />
        <h2 className="text-xl font-semibold text-gray-800 ml-2">my Dream Place</h2>
      </div>

      <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-xl border-gray-200 shadow-xl">
        <h2 className="mt-6 text-center text-2xl font-bold text-gray-900">Create password</h2>
        <p className="text-center text-gray-600">Use a minimum of 10 characters, including letters, lowercase letters, and numbers.</p>

        <form className="mt-8 space-y-6">
          <div className="rounded-md shadow-sm space-y-4">
            <div>
              <label htmlFor="password" className="sr-only">Password</label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="new-password"
                required
                className="relative block w-full px-3 py-2 border bg-gray-100 border-gray-300 rounded-md placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                placeholder="Password"
              />
            </div>

            <div>
              <label htmlFor="confirm-password" className="sr-only">Confirm password</label>
              <input
                id="confirm-password"
                name="confirm-password"
                type="password"
                autoComplete="new-password"
                required
                className="relative block w-full px-3 py-2 border bg-gray-100 border-gray-300 rounded-md placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                placeholder="Confirm password"
              />
            </div>
          </div>

          <button
            type="submit"
            className="relative flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-blue-500 border border-transparent rounded-md group hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Create account
          </button>
        </form>

        <p className="text-center text-sm text-gray-600 mt-6">
          By creating an account, you agree with our <Link to="/terms" className="text-blue-600 hover:text-blue-500">Terms and Conditions</Link> and <Link to="/privacy" className="text-blue-600 hover:text-blue-500">Privacy Statement</Link>.
        </p>
      </div>
    </div>
  );
};

export default CreatePassword;