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

// hero animation

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

// benefit sec animation

// form
document.getElementById("simpleForm").addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent form from reloading the page

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;

  // Simulate form submission (you can replace this with actual submission code)
  if (name && email) {
    document.getElementById("resultMessage").classList.remove("hidden");
  }
});
