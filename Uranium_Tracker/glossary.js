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


// search 
function filterCards() {
  const input = document.getElementById('searchInput').value.toLowerCase();
  const cards = document.querySelectorAll('.card');

  cards.forEach(card => {
    const title = card.getAttribute('data-title').toLowerCase();
    if (title.includes(input)) {
      card.style.display = '';
    } else {
      card.style.display = 'none';
    }
  });
}
