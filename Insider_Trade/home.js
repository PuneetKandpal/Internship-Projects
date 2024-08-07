const main = document.getElementById("main");

document.getElementById("theme-toggle").addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");

  const themeToggle = document.getElementById("theme-toggle");
  const logo = document.getElementById("logo");
  const heroImage = document.getElementById("heroImage");
  const footer = document.querySelector(".footer");

  if (document.body.classList.contains("dark-mode")) {
    themeToggle.src = "./images/light_button.svg";
    // logo.src = "./images/logo_dark_theme.svg";
    footer.classList.remove("footer-light");
    footer.classList.add("footer-dark");
  } else {
    themeToggle.src = "./images/dark_button.svg";
    // logo.src = "./images/logo_light_theme.svg";
    footer.classList.remove("footer-dark");
    footer.classList.add("footer-light");
  }
});

// window.addEventListener("scroll", function () {
//   const navbar = document.getElementById("navbar");
//   if (window.scrollY > 50) {
//     navbar.classList.add("scrolled");
//   } else {
//     navbar.classList.remove("scrolled");
//   }
// });

// menu--------------------------------------------------
const hamburger = document.querySelector(".hamburger");
const mobileMenu = document.querySelector(".mobile-menu");

hamburger.addEventListener("click", toggleMenu);

function toggleMenu() {
  hamburger.classList.toggle("active");
  mobileMenu.classList.toggle("active");
  document.body.classList.toggle("menu-open");
}

const navLinks = document.querySelectorAll(".mobile-menu ul li a");

navLinks.forEach((link) => link.addEventListener("click", closeMenu));

function closeMenu() {
  hamburger.classList.remove("active");
  mobileMenu.classList.remove("active");
  document.body.classList.remove("menu-open");
}

window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// Log to check if elements are properly selected
console.log("Hamburger:", hamburger);
console.log("Mobile Menu:", mobileMenu);

// contact ------------------------------------------------------
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let phone = document.getElementById("phone").value;
  let findUs = document.getElementById("findUs").value;

  if (!name || !phone) {
    alert("Please fill in the required fields.");
    return;
  }

  // Additional validation logic can go here

  alert("Form submitted successfully!");
});
