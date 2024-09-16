import React, { useState } from "react";
import { FaEnvelope } from "react-icons/fa";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  // Validation and form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      setError("Email is required");
      setMessage("");
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setError("Email address is invalid");
      setMessage("");
    } else {
      setError("");
      // Simulate sending a reset link
      setMessage("Password reset link has been sent to your email");
      // You can call an API here to send the reset link
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center ">
      <div className="bg-zinc-800/20 rounded-lg shadow-lg p-8 flex">
        {/* Left Side */}
        <div className="hidden md:flex flex-col justify-center w-1/2 bg-green-400 rounded-l-lg p-8 text-white">
          <h2 className="text-2xl font-bold">Forgot Password?</h2>
          <p className="mt-2">
            Enter your email to reset your password and we'll send you the
            instructions.
          </p>
        </div>

        {/* Right Side (Form) */}
        <div className="w-full md:w-1/2 p-8">
          <h2 className="text-2xl font-semibold text-center mb-6">
            Reset Your Password
          </h2>

          <form onSubmit={handleSubmit}>
            {/* Email Field */}
            <div className="mb-4">
              <label className="text-zinc-300 flex items-center mb-2 text-[15px]">
                <FaEnvelope className="mr-2" /> Email
              </label>
              <input
                type="email"
                className={`w-full text-white px-4 py-2 bg-zinc-800/50 placeholder ${
                  error ? "border-red-500" : "border-gray-300"
                } rounded focus:outline-none focus:ring-1 focus:ring-green-500 `}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
              />
              {error && <small className="text-red-500">{error}</small>}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600 focus:outline-none"
            >
              Send Reset Link
            </button>
          </form>

          {/* Success or Error Message */}
          {message && (
            <p className="mt-4 text-green-500 text-center">{message}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
