import { useState } from 'react';
import { FaEnvelope, FaLock, FaUser } from 'react-icons/fa';

const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState({ name: '', email: '', password: '', confirmPassword: '' });

  // Validation function
  const validate = () => {
    let valid = true;
    let nameError = '';
    let emailError = '';
    let passwordError = '';
    let confirmPasswordError = '';

    if (!name) {
      nameError = 'Name is required';
      valid = false;
    }

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

    if (!confirmPassword) {
      confirmPasswordError = 'Confirm Password is required';
      valid = false;
    } else if (password !== confirmPassword) {
      confirmPasswordError = 'Passwords do not match';
      valid = false;
    }

    setErrors({ name: nameError, email: emailError, password: passwordError, confirmPassword: confirmPasswordError });
    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      // Handle successful signup logic here
      console.log('Sign Up successful');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white w-[70%] rounded-lg shadow-lg p-8 flex">
        {/* Left Side */}
        <div className="hidden md:flex flex-col justify-center w-1/2 bg-lime2 rounded-l-lg p-8 text-white">
          <h2 className="text-2xl font-bold">Join Us!</h2>
          <p className="mt-2">Create an account to enjoy all the features of our service.</p>
          <button className="mt-4 bg-white text-lime2 py-2 px-4 rounded font-semibold hover:bg-gray-200">
            Sign In
          </button>
        </div>

        {/* Right Side (SignUp Form) */}
        <div className="w-full md:w-1/2 p-8">
          <h2 className="text-2xl font-semibold text-center mb-6">Sign Up</h2>

          <form onSubmit={handleSubmit}>
            {/* Name Field */}
            <div className="mb-4">
              <label className="text-gray-700 flex items-center mb-2">
                <FaUser className="mr-2" /> Name
              </label>
              <input
                type="text"
                className={`w-full px-4 py-2 border ${errors.name ? 'border-red-500' : 'border-gray-300'} rounded focus:outline-none focus:ring-2 focus:ring-lime2`}
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
              />
              {errors.name && <small className="text-red-500">{errors.name}</small>}
            </div>

            {/* Email Field */}
            <div className="mb-4">
              <label className="text-gray-700 flex items-center mb-2">
                <FaEnvelope className="mr-2" /> Email
              </label>
              <input
                type="text"
                className={`w-full px-4 py-2 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded focus:outline-none focus:ring-2 focus:ring-lime2`}
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
                className={`w-full px-4 py-2 border ${errors.password ? 'border-red-500' : 'border-gray-300'} rounded focus:outline-none focus:ring-2 focus:ring-lime2`}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
              />
              {errors.password && <small className="text-red-500">{errors.password}</small>}
            </div>

            {/* Confirm Password Field */}
            <div className="mb-4">
              <label className="text-gray-700 flex items-center mb-2">
                <FaLock className="mr-2" /> Confirm Password
              </label>
              <input
                type="password"
                className={`w-full px-4 py-2 border ${errors.confirmPassword ? 'border-red-500' : 'border-gray-300'} rounded focus:outline-none focus:ring-2 focus:ring-lime2`}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Confirm your password"
              />
              {errors.confirmPassword && <small className="text-red-500">{errors.confirmPassword}</small>}
            </div>

            {/* Submit Button */}
            <button type="submit" className="w-full bg-lime2 text-white py-2 rounded hover:bg-green-600 focus:outline-none">
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
