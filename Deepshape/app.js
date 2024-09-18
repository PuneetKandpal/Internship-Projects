document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById("hamburger");
  const mobileMenu = document.getElementById("mobile-menu");
  const closeMenu = document.getElementById("close-menu");

  hamburger.addEventListener("click", () => {
    mobileMenu.style.transform = "translateX(0)";
  });

  closeMenu.addEventListener("click", () => {
    mobileMenu.style.transform = "translateX(100%)";
  });
});

// features
lucide.createIcons();
