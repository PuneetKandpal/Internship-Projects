document.getElementById("theme-toggle").addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");

  const themeToggle = document.getElementById("theme-toggle");
  const logo = document.getElementById("logo");
  const heroImage = document.getElementById("heroImage");

  if (document.body.classList.contains("dark-mode")) {
    themeToggle.src = "./images/dark_button.svg";
    logo.src = "./images/logo_dark_theme.svg";
    // heroImage.src = "./images/dark.png";
  } else {
    themeToggle.src = "./images/light_button.svg";
    logo.src = "./images/logo_light_theme.svg";
    // heroImage.src = "./images/hero_img_light..svg";
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
