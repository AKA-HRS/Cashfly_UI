import React from "react";

export function Signup() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="backdrop-filter backdrop-blur-lg bg-white bg-opacity-10 border border-gray-200 rounded-xl shadow-lg p-10 max-w-lg w-full">
        <h2 className="text-2xl font-bold text-center text-white mb-6">
          Sign Up for CashFly
        </h2>
        <form className="space-y-6">
          <div>
            <label
              className="block text-white text-sm font-medium mb-1"
              htmlFor="name"
            >
              Full Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              className="w-full px-3 py-2 bg-white bg-opacity-50 rounded-md border border-gray-300 focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
          <div>
            <label
              className="block text-white text-sm font-medium mb-1"
              htmlFor="email"
            >
              Email Address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="w-full px-3 py-2 bg-white bg-opacity-50 rounded-md border border-gray-300 focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
          <div>
            <label
              className="block text-white text-sm font-medium mb-1"
              htmlFor="password"
            >
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              required
              className="w-full px-3 py-2 bg-white bg-opacity-50 rounded-md border border-gray-300 focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
          <div>
            <label
              className="block text-white text-sm font-medium mb-1"
              htmlFor="confirmPassword"
            >
              Confirm Password
            </label>
            <input
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              required
              className="w-full px-3 py-2 bg-white bg-opacity-50 rounded-md border border-gray-300 focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
          <div>
            <button
              type="submit"
              className="w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300"
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
