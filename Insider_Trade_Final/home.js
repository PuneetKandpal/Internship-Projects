const main = document.getElementById("main");

// menu--------------------------------------------------
document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger");
  const mobileMenu = document.querySelector(".mobile-menu");
  const navLinks = document.querySelectorAll(".mobile-menu ul li a");

  function toggleMenu() {
    hamburger.classList.toggle("active");
    mobileMenu.classList.toggle("active");
    document.body.classList.toggle("menu-open");
  }

  hamburger.addEventListener("click", toggleMenu);

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      hamburger.classList.remove("active");
      mobileMenu.classList.remove("active");
      document.body.classList.remove("menu-open");
    });
  });
});

window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// search bar------------------------------------------
const searchInput = document.getElementById("search-input");
const searchResults = document.getElementById("search-results");

// Event listener for search input
// searchInput.addEventListener("input", function () {
//   const query = this.value;
//   if (query.length > 0) {
//     const filteredItems = filterItems(query);
//     displayItems(filteredItems);
//   } else {
//     displayItems(items);
//   }
// });

// contact ------------------------------------------------------
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let phone = document.getElementById("phone").value;
  let findUs = document.getElementById("findUs").value;

  if (!name || !phone) {
    alert("Please fill in the required fields.");
    return;
  }

  // Additional validation logic can go here

  alert("Form submitted successfully!");
});

// Animations ------------------------------------------------------
// Ensure GSAP and ScrollTrigger are imported
gsap.registerPlugin(ScrollTrigger);

// Navbar animation
gsap.from(".navbar", {
  duration: 1,
  y: -100,
  opacity: 0,
  ease: "power2.out",
});

// Hero section animation
const heroTimeline = gsap.timeline({ defaults: { ease: "power2.out" } });

heroTimeline
  .from("#hero video", {
    duration: 1.2,
    opacity: 0,
  })
  .from(
    ".hero-overlay",
    {
      duration: 1.2,
      opacity: 0,
    },
    "-=1.2"
  )
  .from(
    ".hero-content h1",
    {
      duration: 1.2,
      y: 50,
      opacity: 0,
    },
    "-=1.2"
  )
  .from(
    ".hero-content p",
    {
      duration: 1.2,
      y: 50,
      opacity: 0,
    },
    "-=1.2"
  )
  .from(
    ".btn-search-container",
    {
      duration: 1.2,
      y: 50,
      opacity: 0,
    },
    "-=1.2"
  )
  .from(
    "#search-input",
    {
      duration: 1.2,
      y: 50,
      opacity: 0,
    },
    "-=1.2"
  )
  .from(
    "#search-results",
    {
      duration: 1.2,
      y: 50,
      opacity: 0,
    },
    "-=1.2"
  )
  .from(
    ".hero-button",
    {
      duration: 1.2,
      y: 50,
      opacity: 0,
    },
    "-=1.2"
  );

// search
const searchTimeline = gsap.timeline({
  scrollTrigger: {
    trigger: "#search",
    start: "top 80%",
    end: "bottom 40%",
    scrub: true,
    // markers: true,
  },
});

searchTimeline.from(".search-container", {
  opacity: 0,
  y: 50,
  duration: 1.2,
});

// How It Works
const howItWorksTimeline = gsap.timeline({
  scrollTrigger: {
    trigger: "#howItWorks",
    start: "top 90%",
    end: "bottom 70%",
    scrub: true,
    // markers: true,
  },
});

howItWorksTimeline
  .from("#howItWorks h2", {
    opacity: 0,
    y: -50,
    duration: 1,
  })
  .from(".mainbox", {
    opacity: 0,
    y: -50,
    stagger: 0.1,
    duration: 1,
  });

// features ======================================================================
const featuresTimeline = gsap.timeline({
  scrollTrigger: {
    trigger: "#features",
    start: "top 110%",
    end: "bottom 40%",
    scrub: true,
    // markers: true,
  },
});

featuresTimeline
  .from(".featureImg", {
    opacity: 0,
    x: -60,
    duration: 1.2,
  })
  .from(
    ".featureInfo h2",
    {
      opacity: 0,
      y: 50,
      duration: 1.2,
    },
    "-=1"
  )
  .from(
    ".featureInfo ul li",
    {
      opacity: 0,
      y: 20,
      stagger: 0.1,
      duration: 0.2,
    },
    "-=1"
  );

// services ================================================================

const servicesTimeline = gsap.timeline({
  scrollTrigger: {
    trigger: "#services",
    start: "top 80%",
    end: "bottom 70%",
    scrub: true,
    // markers: true,
  },
});

servicesTimeline
  .from("#services h2", {
    opacity: 0,
    y: -50,
    duration: 1.2,
  })
  .from(".serviceBox", {
    opacity: 0,
    y: 50,
    stagger: 0.3,
    duration: 1.2,
  });

// reports ===================================================================
const reportsTimeline = gsap.timeline({
  scrollTrigger: {
    trigger: "#reports",
    start: "top 100%",
    end: "bottom 90%",
    scrub: true,
    // markers: true,
  },
});

reportsTimeline
  .from("#reports h2", {
    opacity: 0,
    y: -20,
    duration: 1.2,
  })
  .from(".reportBox", {
    opacity: 0,
    y: 50,
    stagger: 0.1,
    duration: 1,
  });

// contact =============================================================================

const contactTimeline = gsap.timeline({
  scrollTrigger: {
    trigger: "#contact",
    start: "top 100%",
    end: "bottom 50%",
    scrub: true,
    // markers: true,
  },
});

contactTimeline
  .from("#contact h2", {
    opacity: 0,
    y: -50,
    duration: 1.2,
  })
  .from("#contact p", {
    opacity: 0,
    y: 30,
    duration: 1.2,
  })
  .from("#contact form", {
    opacity: 0,
    y: 50,
    duration: 1.2,
  })
  .from("#contact .contact-info", {
    opacity: 0,
    y: 50,
    duration: 1.2,
  });
