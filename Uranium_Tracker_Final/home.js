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

// hero sec animation -----------------------------------------------------------------------------------------------
window.onload = function () {
  // Animate navbar coming from top to bottom
  gsap.from("nav", { y: -100, duration: 1, ease: "power2.out" });

  // Animate hero section elements
  gsap
    .timeline()
    .from(".relative.z-10 h1", {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: "power2.out",
    })
    .from(
      ".relative.z-10 .flex",
      { opacity: 0, y: 50, duration: 1, ease: "power2.out" },
      "-=0.8"
    )
    .from(
      ".relative.z-10 a",
      { opacity: 0, y: 10, duration: 1, ease: "power2.out", clearProps: "all" },
      "-=1"
    );

  // Subtle zoom-in for background image
  gsap.from(".absolute.inset-0 img", {
    scale: 1.1,
    duration: 1.5,
    ease: "power2.out",
  });
};


// marquee
const marquee = document.getElementById("stock-marquee");

marquee.addEventListener("mouseover", () => {
  marquee.stop();
});

marquee.addEventListener("mouseout", () => {
  marquee.start();
});