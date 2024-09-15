import { useState } from "react";
import { FaEnvelope, FaLock, FaUser } from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom";
import API from "../api/auth"; // Axios instance

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validate = () => {
    let valid = true;
    let newErrors = {};

    if (!name) {
      newErrors.name = "Name is required";
      valid = false;
    }

    if (!email) {
      newErrors.email = "Email is required";
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Email address is invalid";
      valid = false;
    }

    if (!password) {
      newErrors.password = "Password is required";
      valid = false;
    } else if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
      valid = false;
    }

    if (password !== confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      try {
        // Send sign-up request to backend
        const response = await API.post("/signup/", {
          name,
          email,
          password,
        });

        // Get token from response
        const token = response.data.token;

        // Store token in local storage
        localStorage.setItem("token", token);

        // Redirect user to a protected page
        navigate("/");
      } catch (error) {
        const errorMessage =
          error.response?.data?.detail || "Failed to sign up";

        if (error.response?.data?.email) {
          setErrors({
            ...errors,
            apiError: "Email already in use.",
          });
        } else {
          setErrors({
            ...errors,
            apiError: errorMessage,
          });
        }
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 md:p-0">
      <div className="bg-zinc-800/20 w-full md:w-[60%] rounded-lg shadow-lg p-8 flex flex-col md:flex-row">
        <div className="hidden md:flex flex-col justify-center w-full md:w-1/2 bg-green-500 rounded-l-lg p-8 text-white">
          <h2 className="text-[29px] font-bold">Join Us!</h2>
          <p className="mt-2">
            Create an account to enjoy all the features of our service.
          </p>
          <p className="mt-1">Already have an account?</p>
          <NavLink
            to="/login"
            className="mt-2 w-fit bg-white text-green-500 py-2 px-6 rounded font-semibold hover:bg-gray-200"
          >
            Log In
          </NavLink>
        </div>

        <div className="w-full md:w-1/2 p-4 md:p-8">
          <h2 className="text-2xl font-semibold text-center mb-6">Sign Up</h2>

          <form onSubmit={handleSubmit}>
            {/* Name Field */}
            <div className="mb-6">
              <label className="text-zinc-300 flex items-center mb-1 text-[15px]">
                <FaUser className="mr-2" /> Name
              </label>
              <input
                type="text"
                className={`w-full px-4 py-[7px] bg-zinc-800/50 text-white placeholder ${
                  errors.name ? "border-red-500" : "border-gray-300"
                } rounded focus:outline-none focus:ring-1 focus:ring-green-500`}
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
              />
              {errors.name && (
                <small className="text-red-500">{errors.name}</small>
              )}
            </div>

            {/* Email Field */}
            <div className="mb-6">
              <label className="text-zinc-300 flex items-center mb-1 text-[15px]">
                <FaEnvelope className="mr-2 mt-[2px]" /> Email
              </label>
              <input
                type="text"
                className={`w-full px-4 py-[7px] bg-zinc-800/50 text-white placeholder ${
                  errors.email ? "border-red-500" : "border-gray-300"
                } rounded focus:outline-none focus:ring-1 focus:ring-green-500`}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
              />
              {errors.email && (
                <small className="text-red-500">{errors.email}</small>
              )}
            </div>

            {/* Password Field */}
            <div className="mb-6">
              <label className="text-zinc-300 flex items-center mb-1 text-[15px]">
                <FaLock className="mr-2" /> Password
              </label>
              <input
                type="password"
                className={`w-full px-4 py-[7px] bg-zinc-800/50 text-white placeholder ${
                  errors.password ? "border-red-500" : "border-gray-300"
                } rounded focus:outline-none focus:ring-1 focus:ring-green-500`}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
              />
              {errors.password && (
                <small className="text-red-500">{errors.password}</small>
              )}
            </div>

            {/* Confirm Password Field */}
            <div className="mb-6">
              <label className="text-zinc-300 flex items-center mb-1 text-[15px]">
                <FaLock className="mr-2" /> Confirm Password
              </label>
              <input
                type="password"
                className={`w-full px-4 py-[7px] bg-zinc-800/50 text-white placeholder ${
                  errors.confirmPassword ? "border-red-500" : "border-gray-300"
                } rounded focus:outline-none focus:ring-1 focus:ring-green-500`}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Confirm your password"
              />
              {errors.confirmPassword && (
                <small className="text-red-500">{errors.confirmPassword}</small>
              )}
            </div>

            {errors.apiError && (
              <div className="text-red-500 text-sm mb-4">{errors.apiError}</div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600 focus:outline-none"
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
