// Navbar ====================================

const navToggle = document.getElementById("nav-toggle");
const mobileMenu = document.getElementById("mobile-menu");

navToggle.addEventListener("click", () => {
  if (mobileMenu.classList.contains("hidden")) {
    // Open menu animation
    mobileMenu.classList.remove("hidden");
    gsap.fromTo(
      mobileMenu,
      { scaleY: 0, opacity: 0 },
      { scaleY: 1, opacity: 1, duration: 0.5, ease: "power2.out" }
    );
  } else {
    // Close menu animation
    gsap.to(mobileMenu, {
      scaleY: 0,
      opacity: 0,
      duration: 0.5,
      ease: "power2.in",
      onComplete: () => {
        mobileMenu.classList.add("hidden");
      },
    });
  }
});

// marquee
const marquee = document.getElementById("stock-marquee");

marquee.addEventListener("mouseover", () => {
  marquee.stop();
});

marquee.addEventListener("mouseout", () => {
  marquee.start();
});

// video---------------------------
// Play/Pause Functionality
document.querySelectorAll(".play-button").forEach((button) => {
  button.addEventListener("click", () => {
    const videoPlayer = button
      .closest(".video-card")
      .querySelector(".video-player");
    const playIcon = button.querySelector(".play-icon");

    if (videoPlayer.paused) {
      videoPlayer.play();
      playIcon.innerHTML = `
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 9v6m4-6v6" />
      `;
    } else {
      videoPlayer.pause();
      playIcon.innerHTML = `
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-5.508-3.16A1 1 0 008 8.893v6.214a1 1 0 001.244.964l5.508-1.91a1 1 0 00.748-.963V12.13a1 1 0 00-.748-.963z" />
      `;
    }
  });
});

// Fullscreen Toggle Functionality
document.querySelectorAll(".fullscreen-button").forEach((button) => {
  button.addEventListener("click", () => {
    const videoPlayer = button
      .closest(".video-card")
      .querySelector(".video-player");

    if (videoPlayer.requestFullscreen) {
      videoPlayer.requestFullscreen();
    } else if (videoPlayer.mozRequestFullScreen) {
      videoPlayer.mozRequestFullScreen();
    } else if (videoPlayer.webkitRequestFullscreen) {
      videoPlayer.webkitRequestFullscreen();
    } else if (videoPlayer.msRequestFullscreen) {
      videoPlayer.msRequestFullscreen();
    }
  });
});

// Price Trends Chart
const priceCtx = document.getElementById("priceChart").getContext("2d");
new Chart(priceCtx, {
  type: "line",
  data: {
    labels: ["Aug-24", "Sep-24", "Oct-24", "Nov-24"],
    datasets: [
      {
        label: "Indic$/lbs",
        data: [81.3, 81.32, 81.76, 82.51],
        borderColor: "rgb(255, 205, 86)",
        tension: 0.1,
      },
    ],
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Uranium Price Trends",
      },
    },
    scales: {
      x: {
        ticks: {
          color: "#ffffffb5", // Change x-axis ticks to #ffffffb5
        },
      },
      y: {
        ticks: {
          color: "#ffffffb5", // Change y-axis ticks to #ffffffb5
        },
        beginAtZero: false,
      },
    },
  },
});

// Add animation to elements
document.addEventListener("DOMContentLoaded", (event) => {
  document.querySelectorAll(".animate__animated").forEach((element, index) => {
    element.style.animationDelay = `${index * 0.2}s`;
  });
});

// hero section animation =======================================================================
document.addEventListener("DOMContentLoaded", () => {
  // Split the heading into individual words
  const heroHeading = document.querySelector("#hero-heading");
  heroHeading.innerHTML = heroHeading.textContent
    .split(" ")
    .map((word) => `<span class='word'>${word}</span>`)
    .join(" ");

  // GSAP timeline for staggered word animation
  const timeline = gsap.timeline({ delay: 0.5 });

  // Animate the heading words with a more elegant entrance
  timeline.fromTo(
    "#hero-heading .word",
    {
      y: 100,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      duration: 1.2,
      ease: "power4.out",
      stagger: 0.1,
    }
  );

  // Animate the atom container with a floating effect
  timeline.fromTo(
    ".atom-container",
    {
      scale: 0.8,
      opacity: 0,
      y: 100,
    },
    {
      scale: 1.1,
      opacity: 1,
      y: 0,
      duration: 1.5,
      ease: "power4.out",
    },
    "-=3"
  );

  // Smooth fade-in and float effect for the price box
  gsap.fromTo(
    "#price-box",
    {
      opacity: 0,
      y: 50,
    },
    {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power4.out",
      delay: 2,
    }
  );
});
