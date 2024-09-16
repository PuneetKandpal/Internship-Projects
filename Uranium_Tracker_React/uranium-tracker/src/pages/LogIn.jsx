// import { useState } from "react";
// import { FaUser, FaLock } from "react-icons/fa"; // Changed to FaUser for username
// import { NavLink, useNavigate } from "react-router-dom";
// import axios from "axios";

// const Login = () => {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [errors, setErrors] = useState({
//     username: "",
//     password: "",
//     apiError: "",
//   });
//   const navigate = useNavigate();

//   // Validation function
//   const validate = () => {
//     let valid = true;
//     let usernameError = "";
//     let passwordError = "";

//     if (!username) {
//       usernameError = "Username is required";
//       valid = false;
//     }

//     if (!password) {
//       passwordError = "Password is required";
//       valid = false;
//     } else if (password.length < 6) {
//       passwordError = "Password must be at least 6 characters";
//       valid = false;
//     }

//     setErrors({ username: usernameError, password: passwordError });
//     return valid;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (validate()) {
//       try {
//         // Send login request to Django backend
//         const response = await axios.post(
//           "https://web-production-c2d9c.up.railway.app/login/",
//           {
//             username, // Changed to username
//             password,
//           }
//         );

//         // Get token from response
//         const token = response.data.token;

//         // Store token in local storage
//         localStorage.setItem("token", token);

//         // Redirect to a protected route
//         navigate("/");
//       } catch (error) {
//         setErrors({
//           ...errors,
//           apiError: error.response?.data?.detail || "Failed to log in",
//         });
//       }
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center px-4">
//       <div className="bg-zinc-800/20 w-full max-w-[90%] md:max-w-[60%] rounded-lg shadow-lg p-8 md:flex">
//         {/* Left Side */}
//         <div className="hidden md:flex flex-col justify-center w-full md:w-1/2 bg-green-500 rounded-l-lg p-8 text-white">
//           <h2 className="text-[24px] md:text-[28px] font-bold">
//             Welcome Back!
//           </h2>
//           <p className="mt-2">
//             To keep connected with us, please log in with your personal info.
//           </p>
//           <p className="mt-1">Don't have an account?</p>
//           <NavLink
//             to="/signup"
//             className="mt-2 w-fit bg-white text-green-500 py-2 px-6 rounded font-semibold hover:bg-gray-200"
//           >
//             Sign Up
//           </NavLink>
//         </div>

//         {/* Right Side (Form) */}
//         <div className="w-full md:w-1/2 p-8">
//           <h2 className="text-2xl font-semibold text-center mb-6">Log In</h2>

//           <form onSubmit={handleSubmit}>
//             {/* Username Field */}
//             <div className="mb-6">
//               <label className="text-zinc-300 flex items-center mb-1 text-[15px]">
//                 <FaUser className="mr-2 mt-[2px]" /> Username
//               </label>
//               <input
//                 type="text"
//                 className={`w-full px-4 py-2 text-white bg-zinc-800/50 placeholder ${
//                   errors.username ? "border-red-500" : "border-gray-300"
//                 } rounded focus:outline-none focus:ring-1 focus:ring-green-500`}
//                 value={username}
//                 onChange={(e) => setUsername(e.target.value)}
//                 placeholder="Enter your username"
//               />
//               {errors.username && (
//                 <small className="text-red-500">{errors.username}</small>
//               )}
//             </div>

//             {/* Password Field */}
//             <div className="mb-6">
//               <label className="text-zinc-300 flex items-center mb-1 text-[15px]">
//                 <FaLock className="mr-2" /> Password
//               </label>
//               <input
//                 type="password"
//                 className={`w-full px-4 py-2 text-white bg-zinc-800/50 placeholder ${
//                   errors.password ? "border-red-500" : "border-gray-300"
//                 } rounded focus:outline-none focus:ring-1 focus:ring-green-500`}
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 placeholder="Enter your password"
//               />
//               {errors.password && (
//                 <small className="text-red-500">{errors.password}</small>
//               )}
//             </div>

//             {/* Forgot Password */}
//             <div className="flex justify-between items-center mb-6">
//               <a
//                 href="/forgetpassword"
//                 className="text-sm text-green-500 hover:underline"
//               >
//                 Forgot Password?
//               </a>
//             </div>

//             {/* API Error */}
//             {errors.apiError && (
//               <div className="text-red-500 text-sm mb-4">{errors.apiError}</div>
//             )}

//             {/* Submit Button */}
//             <button
//               type="submit"
//               className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600 focus:outline-none"
//             >
//               Log In
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;

import { useState } from "react";
import { FaUser, FaLock } from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify"; // Import toast functions
import "react-toastify/dist/ReactToastify.css"; // Import toast CSS
import { useAuth } from "../context/AuthContext"; // Import AuthContext

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({
    username: "",
    password: "",
    apiError: "",
  });
  const navigate = useNavigate();
  const { login } = useAuth(); // Use login function from AuthContext

  // Validation function
  const validate = () => {
    let valid = true;
    let usernameError = "";
    let passwordError = "";

    if (!username) {
      usernameError = "Username is required";
      valid = false;
    }

    if (!password) {
      passwordError = "Password is required";
      valid = false;
    } else if (password.length < 6) {
      passwordError = "Password must be at least 6 characters";
      valid = false;
    }

    setErrors({ username: usernameError, password: passwordError });
    return valid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      try {
        const response = await axios.post(
          "https://web-production-c2d9c.up.railway.app/login/",
          {
            username,
            password,
          }
        );

        const token = response.data.token;

        // Store token and update AuthContext
        login(token);

        // Show success toast
        toast.success("Login successful!", {
          position: "top-right",
          autoClose: 3000,
        });

        // Redirect to a protected route
        navigate("/");
      } catch (error) {
        setErrors({
          ...errors,
          apiError: error.response?.data?.detail || "Failed to log in",
        });
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="bg-zinc-800/20 w-full max-w-[90%] md:max-w-[60%] rounded-lg shadow-lg p-8 md:flex">
        <ToastContainer /> {/* Add ToastContainer to display toasts */}
        {/* Left Side */}
        <div className="hidden md:flex flex-col justify-center w-full md:w-1/2 bg-green-500 rounded-l-lg p-8 text-white">
          <h2 className="text-[24px] md:text-[28px] font-bold">
            Welcome Back!
          </h2>
          <p className="mt-2">
            To keep connected with us, please log in with your personal info.
          </p>
          <p className="mt-1">Don't have an account?</p>
          <NavLink
            to="/signup"
            className="mt-2 w-fit bg-white text-green-500 py-2 px-6 rounded font-semibold hover:bg-gray-200"
          >
            Sign Up
          </NavLink>
        </div>
        {/* Right Side (Form) */}
        <div className="w-full md:w-1/2 p-8">
          <h2 className="text-2xl font-semibold text-center mb-6">Log In</h2>

          <form onSubmit={handleSubmit}>
            {/* Username Field */}
            <div className="mb-6">
              <label className="text-zinc-300 flex items-center mb-1 text-[15px]">
                <FaUser className="mr-2 mt-[2px]" /> Username
              </label>
              <input
                type="text"
                className={`w-full px-4 py-2 text-white bg-zinc-800/50 placeholder ${
                  errors.username ? "border-red-500" : "border-gray-300"
                } rounded focus:outline-none focus:ring-1 focus:ring-green-500`}
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter your username"
              />
              {errors.username && (
                <small className="text-red-500">{errors.username}</small>
              )}
            </div>

            {/* Password Field */}
            <div className="mb-6">
              <label className="text-zinc-300 flex items-center mb-1 text-[15px]">
                <FaLock className="mr-2" /> Password
              </label>
              <input
                type="password"
                className={`w-full px-4 py-2 text-white bg-zinc-800/50 placeholder ${
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

            {/* Forgot Password */}
            <div className="flex justify-between items-center mb-6">
              <a
                href="/forgetpassword"
                className="text-sm text-green-500 hover:underline"
              >
                Forgot Password?
              </a>
            </div>

            {/* API Error */}
            {errors.apiError && (
              <div className="text-red-500 text-sm mb-4">{errors.apiError}</div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600 focus:outline-none"
            >
              Log In
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
