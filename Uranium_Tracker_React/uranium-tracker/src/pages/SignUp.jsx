import { useState } from "react";
import { FaEnvelope, FaLock, FaUser } from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom";
import API from "../api/auth"; // Axios instance
import { useAuth } from "../context/AuthContext"; // Import AuthContext

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const { login } = useAuth(); // Use AuthContext

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
        const response = await API.post("/register/", {
          username: name,
          email,
          password,
        });
        const { token } = response.data;
        login(token); // Save token and update auth state
        navigate("/login");
      } catch (error) {
        console.error("Error signing up:", error);
        setErrors({ form: "Failed to sign up. Please try again." });
      }
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-black1">
      <form
        onSubmit={handleSubmit}
        className="bg-black2 p-6 rounded-lg shadow-lg w-full max-w-md"
      >
        <h1 className="text-2xl font-bold text-white mb-4">Sign Up</h1>
        {errors.form && <p className="text-red-500 mb-4">{errors.form}</p>}
        <div className="mb-4">
          <label htmlFor="name" className="block text-white mb-1">
            Name
          </label>
          <div className="flex items-center border border-gray-700 rounded-lg">
            <FaUser className="text-gray-400 ml-2" />
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-2 bg-black1 text-white rounded-lg outline-none"
            />
          </div>
          {errors.name && <p className="text-red-500 mt-1">{errors.name}</p>}
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-white mb-1">
            Email
          </label>
          <div className="flex items-center border border-gray-700 rounded-lg">
            <FaEnvelope className="text-gray-400 ml-2" />
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 bg-black1 text-white rounded-lg outline-none"
            />
          </div>
          {errors.email && <p className="text-red-500 mt-1">{errors.email}</p>}
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-white mb-1">
            Password
          </label>
          <div className="flex items-center border border-gray-700 rounded-lg">
            <FaLock className="text-gray-400 ml-2" />
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 bg-black1 text-white rounded-lg outline-none"
            />
          </div>
          {errors.password && (
            <p className="text-red-500 mt-1">{errors.password}</p>
          )}
        </div>
        <div className="mb-4">
          <label htmlFor="confirmPassword" className="block text-white mb-1">
            Confirm Password
          </label>
          <div className="flex items-center border border-gray-700 rounded-lg">
            <FaLock className="text-gray-400 ml-2" />
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full p-2 bg-black1 text-white rounded-lg outline-none"
            />
          </div>
          {errors.confirmPassword && (
            <p className="text-red-500 mt-1">{errors.confirmPassword}</p>
          )}
        </div>
        <button
          type="submit"
          className="bg-lime1 text-black font-semibold px-4 py-2 rounded-lg hover:bg-lime2 transition-all duration-300 w-full"
        >
          Sign Up
        </button>
        <div className="mt-4 text-white text-center">
          Already have an account?{" "}
          <NavLink to="/login" className="text-lime1 hover:underline">
            Log in
          </NavLink>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
