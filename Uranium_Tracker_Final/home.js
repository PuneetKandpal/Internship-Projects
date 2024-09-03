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

// did you know sec animation
gsap.registerPlugin(ScrollTrigger);

// Animate the left section
gsap.from(".did-you-know-left", {
  scrollTrigger: {
    trigger: ".did-you-know-left",
    start: "top 80%",
    end: "bottom 20%",
    // scrub: true,
  },
  opacity: 0,
  x: -100,
  duration: 1.5,
  ease: "power2.out",
});

// Animate the images in the right section
gsap.from(".did-you-know-images > div", {
  scrollTrigger: {
    trigger: ".did-you-know-images",
    start: "top 80%",
    end: "bottom 20%",
    // scrub: true,
  },
  opacity: 0,
  scale: 0.8,
  stagger: 0.3,
  duration: 1.5,
  ease: "power2.out",
});

//card-section-animation
document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);

  // Animation for cards on scroll
  gsap.from(".card-container", {
    scrollTrigger: {
      trigger: ".card-container",
      start: "top 80%", // Trigger animation when the top of the card is 80% from the top of the viewport
      toggleActions: "play none none none", // Start animation when the card is in view
      // markers: true // Uncomment to see the trigger points for debugging
    },
    opacity: 0,
    scale: 0.9, // Slightly less scale to make the effect smoother
    duration: 1.5, // Increased duration for smoother transition
    stagger: 0.2, // Increased stagger to space out animations
    ease: "power3.out", // Smoother easing function
    delay: 0.3, // Slight delay before the animation starts
  });
});

// featured news sec animation ===================================
gsap.registerPlugin(ScrollTrigger);

gsap.from(".featured-news", {
  opacity: 0,
  y: 50,
  duration: 1,
  scrollTrigger: {
    trigger: ".featured-news",
    start: "top 80%",
    toggleActions: "play none none reverse",
  },
});

gsap.from(".news-card", {
  opacity: 0,
  x: -50,
  duration: 1,
  stagger: 0.2,
  scrollTrigger: {
    trigger: ".news-card",
    start: "top 80%",
    toggleActions: "play none none reverse",
  },
});

gsap.from(".tweets", {
  opacity: 0,
  x: 50,
  duration: 1,
  scrollTrigger: {
    trigger: ".tweets",
    start: "top 80%",
    toggleActions: "play none none reverse",
  },
});

gsap.from(".tweet-cards > div", {
  opacity: 0,
  y: 50,
  duration: 1,
  stagger: 0.3,
  scrollTrigger: {
    trigger: ".tweet-cards",
    start: "top 80%",
    toggleActions: "play none none reverse",
  },
});

// blog section Animation
gsap.registerPlugin(ScrollTrigger);

gsap.from(".title-section", {
  scrollTrigger: {
    trigger: ".title-section",
    start: "top 80%",
    end: "bottom 60%",
    toggleActions: "play none none reverse",
  },
  opacity: 0,
  y: -50,
  duration: 1,
  ease: "power2.out",
});

gsap.from(".image-animate", {
  scrollTrigger: {
    trigger: ".images-section",
    start: "top 80%",
    end: "bottom 60%",
    toggleActions: "play none none reverse",
  },
  opacity: 0,
  scale: 0.9,
  duration: 1,
  stagger: 0.2,
  ease: "power2.out",
});
