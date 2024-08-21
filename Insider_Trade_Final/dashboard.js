window.addEventListener("scroll", function () {
  const navbar = document.getElementById("navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// -----------------------------------------------------------------------------------------------

const tl = gsap.timeline({ defaults: { duration: 1, ease: "power1.out" } });

tl.from(".navbar", { y: -100, opacity: 0 })
  .from("#main h1", { x: -100, opacity: 0 }, "-=0.5")
  .from("#main p", { x: 100, opacity: 0 }, "-=0.7")
  .from("#searchBox", { scale: 0.5, opacity: 0 }, "-=1");
