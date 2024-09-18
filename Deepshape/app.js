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

// features -----------------------------------------------------
lucide.createIcons();

// feature animation
gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray("[data-aos]").forEach((el) => {
  gsap.from(el, {
    opacity: 0,
    y: 50,
    duration: 1,
    ease: "power3.out",
    scrollTrigger: {
      trigger: el,
      start: "top 80%",
      end: "bottom 20%",
      toggleActions: "play none none none",
    },
  });
});
