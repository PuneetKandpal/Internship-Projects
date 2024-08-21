document.addEventListener("DOMContentLoaded", function () {
  const profileBtn = document.getElementById("profile-btn");
  const editProfileBtn = document.getElementById("edit-profile-btn");
  const settingsBtn = document.getElementById("settings-btn");
  const editPhotoBtn = document.querySelector(".edit-photo-btn");

  // Get the name from the profile section
  const profileName = document.getElementById("profile-name").innerText;

  // Set the left panel username to the profile name
  // const leftPanelUsername = document.getElementById("left-panel-username");
  // leftPanelUsername.textContent = `Hi, ${profileName}!`;

  // Set up event listeners for navigation buttons
  profileBtn.addEventListener("click", () => {
    showContent("profile-content");
    if (window.innerWidth <= 768) toggleMenu();
  });

  editProfileBtn.addEventListener("click", () => {
    showContent("edit-profile-content");
    if (window.innerWidth <= 768) toggleMenu();
  });

  settingsBtn.addEventListener("click", () => {
    showContent("settings-content");
    if (window.innerWidth <= 768) toggleMenu();
  });

  // Add event listener for edit photo button
  editPhotoBtn.addEventListener("click", function () {
    document.getElementById("profile-photo-input").click();
  });
});

function showContent(contentId) {
  // Deactivate all nav items
  const navItems = document.querySelectorAll(".nav-item");
  navItems.forEach((item) => item.classList.remove("active"));

  // Hide all content sections
  const contentSections = document.querySelectorAll(".content-section");
  contentSections.forEach((section) => section.classList.remove("active"));

  // Activate the selected content section
  document.getElementById(contentId).classList.add("active");

  // Highlight the selected nav item
  document
    .getElementById(contentId.replace("-content", "-btn"))
    .classList.add("active");
}

function toggleMenu() {
  const menu = document.querySelector(".left-panel-menu");
  menu.classList.toggle("active");
}

function triggerFileInput() {
  document.getElementById("background-file-input").click();
}

document
  .getElementById("background-file-input")
  .addEventListener("change", function (event) {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = function (e) {
        // Update the background image
        document.getElementById("background-img").src = e.target.result;
      };

      reader.readAsDataURL(file);
    }
  });

document
  .getElementById("profile-photo-input")
  .addEventListener("change", function (event) {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = function (e) {
        // Update the profile photo
        document.querySelector(".profile-photo img").src = e.target.result;
      };

      reader.readAsDataURL(file);
    }
  });

function saveChanges() {
  const username = document.getElementById("edit-username").value;
  const name = document.getElementById("edit-name").value;
  const email = document.getElementById("edit-email").value;
  const phone = document.getElementById("edit-phone").value;

  // Log the username for debugging
  console.log(username);

  // Update Profile Info Section with icons
  document.getElementById("profile-name").innerHTML = `
      ${name}
      <span id="profile-username">${username}</span>
    `;

  document.getElementById("profile-phone").innerHTML = `
        <i class="ri-phone-fill"></i>  ${phone}`;
  document.getElementById("profile-email").innerHTML = `
        <i class="ri-mail-fill"></i>  ${email}`;

  // Update Left Panel Username (only name with greeting)
  document.getElementById("left-panel-username").textContent = `Hi, ${name}!`;

  // Switch back to Profile View
  showContent("profile-content");
}

function logout() {
  // alert("Logged out!");
  window.location.href = "home.html";
}
