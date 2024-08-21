document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById("loginForm");
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    const togglePassword = document.getElementById("togglePassword");
  
    loginForm.addEventListener("submit", function (e) {
      e.preventDefault();
      if (validateForm()) {
        alert("Logged in successfully!");
      }
    });
  
    togglePassword.addEventListener("click", () => {
      const type = password.getAttribute("type") === "password" ? "text" : "password";
      password.setAttribute("type", type);
      togglePassword.classList.toggle("ri-eye-off-fill");
      togglePassword.classList.toggle("ri-eye-fill");
    });
  
    function validateForm() {
      let isValid = true;
  
      // Validate email
      const emailError = document.getElementById("emailError");
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email.value)) {
        emailError.textContent = "Please enter a valid email address";
        emailError.style.display = "block";
        isValid = false;
      } else {
        emailError.style.display = "none";
      }
  
      // Validate password
      const passwordError = document.getElementById("passwordError");
      if (password.value.length < 8) {
        passwordError.textContent = "Password must be at least 8 characters long";
        passwordError.style.display = "block";
        isValid = false;
      } else {
        passwordError.style.display = "none";
      }
  
      return isValid;
    }
  });
  