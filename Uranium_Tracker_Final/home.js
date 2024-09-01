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

// price chart sec animation
document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);

  // Animation for Uranium Prices Section
  gsap.from(".uranium-prices", {
    scrollTrigger: {
      trigger: ".uranium-section",
      start: "top 60%", // Adjust start point
      toggleActions: "play none none none", // When to play the animation
      // markers: true,
    },
    x: -100,
    opacity: 0,
    duration: 1,
    ease: "power2.out",
  });

  // Animation for Uranium Info Section
  gsap.from(".uranium-info", {
    scrollTrigger: {
      trigger: ".uranium-section",
      start: "top 80%", // Adjust start point
      toggleActions: "play none none none",
    },
    x: 100,
    opacity: 0,
    duration: 1,
    ease: "power2.out",
  });

  // Animation for Uranium Heading
  gsap.from(".uranium-heading", {
    scrollTrigger: {
      trigger: ".uranium-section",
      start: "top 90%", // Adjust start point
      toggleActions: "play none none none",
    },
    y: 50,
    opacity: 0,
    duration: 0.8,
    ease: "power2.out",
    delay: 0.2,
  });
});


// table and news sec 
// GSAP and ScrollTrigger Animations
gsap.registerPlugin(ScrollTrigger);

// Table Section Animation
gsap.from("#uranium-table-section", {
  scrollTrigger: {
    trigger: "#uranium-table-section",
    start: "top 80%", // Starts the animation when the top of the section reaches 80% of the viewport
    end: "bottom 20%",
    toggleActions: "play none none reverse",
  },
  opacity: 0,
  y: 50,
  duration: 1.5,
  ease: "power2.out",
});

// News Section Animation
gsap.from("#uranium-news-section", {
  scrollTrigger: {
    trigger: "#uranium-news-section",
    start: "top 80%",
    end: "bottom 20%",
    toggleActions: "play none none reverse",
  },
  opacity: 0,
  x: 50,
  duration: 1.5,
  ease: "power2.out",
});