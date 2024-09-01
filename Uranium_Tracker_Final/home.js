// navbar
const menuToggle = document.getElementById("menu-toggle");
const menu = document.getElementById("menu");

menuToggle.addEventListener("click", (event) => {
  event.stopPropagation();
  toggleMenu();
});

function toggleMenu() {
  menu.classList.toggle("hidden");
  menuToggle.innerHTML = menu.classList.contains("hidden")
    ? '<i class="ri-menu-3-line"></i>'
    : '<i class="ri-close-line"></i>';
}

// Close menu when clicking outside
document.addEventListener("click", (event) => {
  const isClickInsideMenu = menu.contains(event.target);
  const isClickOnToggle = menuToggle.contains(event.target);

  if (
    !isClickInsideMenu &&
    !isClickOnToggle &&
    !menu.classList.contains("hidden")
  ) {
    toggleMenu();
  }
});

// Adjust menu visibility on window resize
window.addEventListener("resize", () => {
  if (window.innerWidth >= 768) {
    menu.classList.remove("hidden");
    menuToggle.innerHTML = '<i class="ri-menu-line"></i>';
  } else if (!menu.classList.contains("hidden")) {
    toggleMenu();
  }
});
