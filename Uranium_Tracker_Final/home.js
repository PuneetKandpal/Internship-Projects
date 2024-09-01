const menuToggle = document.getElementById("menu-toggle");
const menu = document.getElementById("menu");

// Animate the navbar coming from top to bottom when the page loads
window.onload = function () {
  gsap.from("nav", { opacity: 0, duration: 2, ease: "power2.out" });
};

menuToggle.addEventListener("click", (event) => {
  event.stopPropagation();
  toggleMenu();
});

function toggleMenu() {
  const isMenuHidden = menu.classList.contains("hidden");

  if (isMenuHidden) {
    gsap.fromTo(
      menu,
      { height: 0 },
      { height: "100vh", duration: 0.5, ease: "power2.out" }
    );
  } else {
    gsap.fromTo(
      menu,
      { height: "100vh" },
      {
        height: 0,
        duration: 0.5,
        ease: "power2.in",
        onComplete: () => menu.classList.add("hidden"),
      }
    );
  }

  menu.classList.toggle("hidden", !isMenuHidden);
  menuToggle.innerHTML = isMenuHidden
    ? '<i class="ri-close-line"></i>'
    : '<i class="ri-menu-3-line"></i>';
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

// navbar end ===================
