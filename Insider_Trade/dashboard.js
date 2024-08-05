document.getElementById("theme-toggle").addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");

  const themeToggle = document.getElementById("theme-toggle");
  const logo = document.getElementById("logo");
  const heroImage = document.getElementById("heroImage");
  const footer = document.querySelector(".footer");

  if (document.body.classList.contains("dark-mode")) {
    themeToggle.src = "./images/dark_button.svg";
    logo.src = "./images/logo_dark_theme.svg";
    footer.classList.remove("footer-light");
    footer.classList.add("footer-dark");
  } else {
    themeToggle.src = "./images/light_button.svg";
    logo.src = "./images/logo_light_theme.svg";
    footer.classList.remove("footer-dark");
    footer.classList.add("footer-light");
  }
});

window.addEventListener("scroll", function () {
  const navbar = document.getElementById("navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// -----------------------------------------------------------------------------------------------
