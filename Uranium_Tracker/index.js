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
document.querySelectorAll('.play-button').forEach((button) => {
  button.addEventListener("click", () => {
    const videoPlayer = button.closest('.video-card').querySelector('.video-player');
    const playIcon = button.querySelector('.play-icon');

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
document.querySelectorAll('.fullscreen-button').forEach((button) => {
  button.addEventListener("click", () => {
    const videoPlayer = button.closest('.video-card').querySelector('.video-player');

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
