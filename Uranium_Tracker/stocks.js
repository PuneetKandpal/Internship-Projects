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

/**table */
document.addEventListener("DOMContentLoaded", () => {
  // Select all percentage cells for Change (1M) and Change (1Y)
  const percentageCells = document.querySelectorAll(
    "td:nth-child(5), td:nth-child(6)"
  );

  percentageCells.forEach((cell) => {
    const value = parseFloat(cell.textContent.replace("%", "")); // Get numeric value of percentage
    if (value > 0) {
      cell.style.color = "#50BC48"; // Apply green color for positive values
    } else if (value < 0) {
      cell.style.color = "#FF4D4F"; // Apply red color for negative values
    }
  });
});
