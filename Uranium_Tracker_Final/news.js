// hero sec animation
gsap.registerPlugin(ScrollTrigger);

// Animate the large image section
gsap.from(".animate-large-img", {
  opacity: 0,
  y: 50,
  duration: 1.5,
  ease: "power4.out",
  scrollTrigger: {
    trigger: ".animate-large-img",
    start: "top 80%",
    toggleActions: "play none none none",
  },
});

// Animate the smaller image sections
gsap.from(".animate-small-imgs > *", {
  opacity: 0,
  y: 30,
  duration: 1,
  ease: "power4.out",
  stagger: 0.3,
  scrollTrigger: {
    trigger: ".animate-small-imgs",
    start: "top 80%",
    toggleActions: "play none none none",
  },
});
