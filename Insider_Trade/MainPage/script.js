document.getElementById("theme-toggle").addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");

  const themeToggle = document.getElementById("theme-toggle");
  const logo = document.getElementById("logo");
  const heroImage = document.getElementById("heroImage");
  const footer = document.querySelector(".footer");
  const secNav = document.querySelector(".second-nav");

  if (document.body.classList.contains("dark-mode")) {
    themeToggle.src = "../images/dark_button.svg";
    logo.src = "../images/logo_dark_theme.svg";
    footer.classList.remove("footer-light");
    footer.classList.add("footer-dark");
    secNav.classList.remove("second-nav-light");
    secNav.classList.add("second-nav-dark");
  } else {
    themeToggle.src = "../images/light_button.svg";
    logo.src = "../images/logo_light_theme.svg";
    footer.classList.remove("footer-dark");
    footer.classList.add("footer-light");
    secNav.classList.remove("second-nav-dark");
    secNav.classList.add("second-nav-light");
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

// second nav------------------------

window.addEventListener("scroll", () => {
  const sections = document.querySelectorAll("div[id]");
  const navLinks = document.querySelectorAll(".second-nav a p");

  let currentSection = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 80; // Adjust based on your nav height
    const sectionBottom = sectionTop + section.offsetHeight;

    if (pageYOffset >= sectionTop && pageYOffset < sectionBottom) {
      currentSection = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.parentElement.getAttribute("href") === `#${currentSection}`) {
      link.classList.add("active");
    }
  });
});
