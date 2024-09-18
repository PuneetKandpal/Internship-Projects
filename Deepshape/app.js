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
gsap.registerPlugin(ScrollTrigger);

// Text and Title Animation
gsap.from(".py-20 [data-aos='fade']", {
  opacity: 0,
  y: 50,
  duration: 1,
  ease: "power3.out",
  stagger: 0.3,
  scrollTrigger: {
    trigger: ".py-20",
    start: "top 75%",
    end: "bottom 25%",
    toggleActions: "play none none none",
  },
});

// Card Animation
gsap.from(".grid .card[data-aos='scale']", {
  opacity: 0,
  scale: 0.9,
  duration: 1,
  ease: "power3.out",
  stagger: 0.3,
  scrollTrigger: {
    trigger: ".py-20",
    start: "top 75%",
    end: "bottom 25%",
    toggleActions: "play none none none",
  },
});
