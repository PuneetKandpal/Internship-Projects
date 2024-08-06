document.getElementById("signupForm").addEventListener("submit", function (e) {
  e.preventDefault();
  if (validateForm()) {
    alert("Account created successfully!");
  }
});

const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");
const togglePassword = document.getElementById("togglePassword");
const toggleConfirmPassword = document.getElementById("toggleConfirmPassword");

function togglePasswordVisibility(inputField, icon) {
  const type =
    inputField.getAttribute("type") === "password" ? "text" : "password";
  inputField.setAttribute("type", type);
  icon.classList.toggle("ri-eye-off-fill");
  icon.classList.toggle("ri-eye-fill");
}

function toggleEyeIcon(inputField, icon) {
  if (inputField.value.length > 0) {
    icon.style.display = "block";
  } else {
    icon.style.display = "none";
  }
}

password.addEventListener("input", () =>
  toggleEyeIcon(password, togglePassword)
);
confirmPassword.addEventListener("input", () =>
  toggleEyeIcon(confirmPassword, toggleConfirmPassword)
);

togglePassword.addEventListener("click", () =>
  togglePasswordVisibility(password, togglePassword)
);
toggleConfirmPassword.addEventListener("click", () =>
  togglePasswordVisibility(confirmPassword, toggleConfirmPassword)
);

function validateForm() {
  let isValid = true;

  // Validate name
  const name = document.getElementById("name");
  const nameError = document.getElementById("nameError");
  if (name.value.trim() === "") {
    nameError.textContent = "Name is required";
    nameError.style.display = "block";
    isValid = false;
  } else {
    nameError.style.display = "none";
  }

  // Validate email
  const email = document.getElementById("email");
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

  // Validate confirm password
  const confirmPasswordError = document.getElementById("confirmPasswordError");
  if (confirmPassword.value !== password.value) {
    confirmPasswordError.textContent = "Passwords do not match";
    confirmPasswordError.style.display = "block";
    isValid = false;
  } else {
    confirmPasswordError.style.display = "none";
  }

  return isValid;
}
