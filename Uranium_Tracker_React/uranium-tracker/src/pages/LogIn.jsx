import React, { useState } from 'react';
import { FaEnvelope, FaLock } from 'react-icons/fa';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({ email: '', password: '' });

  // Validation function
  const validate = () => {
    let valid = true;
    let emailError = '';
    let passwordError = '';

    if (!email) {
      emailError = 'Email is required';
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      emailError = 'Email address is invalid';
      valid = false;
    }

    if (!password) {
      passwordError = 'Password is required';
      valid = false;
    } else if (password.length < 6) {
      passwordError = 'Password must be at least 6 characters';
      valid = false;
    }

    setErrors({ email: emailError, password: passwordError });
    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      // Handle successful login logic here
      console.log('Login successful');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white rounded-lg shadow-lg p-8 flex">
        {/* Left Side */}
        <div className="hidden md:flex flex-col justify-center w-1/2 bg-green-400 rounded-l-lg p-8 text-white">
          <h2 className="text-2xl font-bold">Welcome Back!</h2>
          <p className="mt-2">To keep connected with us please login with your personal info</p>
          <button className="mt-4 bg-white text-green-500 py-2 px-4 rounded font-semibold hover:bg-gray-200">
            Sign In
          </button>
        </div>
        
        {/* Right Side (Form) */}
        <div className="w-full md:w-1/2 p-8">
          <h2 className="text-2xl font-semibold text-center mb-6">Log In</h2>

          <form onSubmit={handleSubmit}>
            {/* Email Field */}
            <div className="mb-4">
              <label className="text-gray-700 flex items-center mb-2">
                <FaEnvelope className="mr-2" /> Email
              </label>
              <input
                type="text"
                className={`w-full px-4 py-2 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded focus:outline-none focus:ring-2 focus:ring-green-500`}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
              />
              {errors.email && <small className="text-red-500">{errors.email}</small>}
            </div>

            {/* Password Field */}
            <div className="mb-4">
              <label className="text-gray-700 flex items-center mb-2">
                <FaLock className="mr-2" /> Password
              </label>
              <input
                type="password"
                className={`w-full px-4 py-2 border ${errors.password ? 'border-red-500' : 'border-gray-300'} rounded focus:outline-none focus:ring-2 focus:ring-green-500`}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
              />
              {errors.password && <small className="text-red-500">{errors.password}</small>}
            </div>

            {/* Forgot Password */}
            <div className="flex justify-between items-center mb-6">
              <a href="/forgot-password" className="text-sm text-green-500 hover:underline">Forgot Password?</a>
            </div>

            {/* Submit Button */}
            <button type="submit" className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600 focus:outline-none">
              Log In
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
