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

// search filter

function filterCards() {
  const input = document.getElementById("searchInput").value.toLowerCase();
  const cards = document.querySelectorAll("#cardContainer .card");
  let hasMatch = false;

  cards.forEach((card) => {
    const title = card.querySelector("h1").textContent.toLowerCase();
    if (title.includes(input)) {
      card.style.display = "block";
      hasMatch = true;
    } else {
      card.style.display = "none";
    }
  });

  // Show or hide the "No results found" message
  const noResultsMessage = document.getElementById("noResults");
  if (hasMatch) {
    noResultsMessage.classList.add("hidden");
  } else {
    noResultsMessage.classList.remove("hidden");
  }
}
