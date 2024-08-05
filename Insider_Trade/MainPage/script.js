document.getElementById("theme-toggle").addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");

  const themeToggle = document.getElementById("theme-toggle");
  const logo = document.getElementById("logo");
  const heroImage = document.getElementById("heroImage");
  const footer = document.querySelector(".footer");
  const secNav = document.querySelector(".second-nav");

  if (document.body.classList.contains("dark-mode")) {
    themeToggle.src = "../images/dark_button.svg";
    logo.src = "../images/logo_dark_theme.svg";
    footer.classList.remove("footer-light");
    footer.classList.add("footer-dark");
    secNav.classList.remove("second-nav-light");
    secNav.classList.add("second-nav-dark");
  } else {
    themeToggle.src = "../images/light_button.svg";
    logo.src = "../images/logo_light_theme.svg";
    footer.classList.remove("footer-dark");
    footer.classList.add("footer-light");
    secNav.classList.remove("second-nav-dark");
    secNav.classList.add("second-nav-light");
  }
});

window.addEventListener("scroll", function () {
  const navbar = document.getElementById("navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// -----------------------------------------------------------------------------------------------

// second nav------------------------

window.addEventListener("scroll", () => {
  const sections = document.querySelectorAll("div[id]");
  const navLinks = document.querySelectorAll(".second-nav a p");

  let currentSection = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 80; // Adjust based on your nav height
    const sectionBottom = sectionTop + section.offsetHeight;

    if (pageYOffset >= sectionTop && pageYOffset < sectionBottom) {
      currentSection = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.parentElement.getAttribute("href") === `#${currentSection}`) {
      link.classList.add("active");
    }
  });
});


// dropdown for table ----------------------------

document.addEventListener("DOMContentLoaded", () => {
  const rowsPerPageDropdown = document.querySelector("#entries");
  let rowsPerPage = parseInt(rowsPerPageDropdown.value); // Default number of rows per page
  let currentPage = 1;
  let allRows = []; // Store all rows for reference
  let filteredRows = []; // Store filtered rows based on search

  const tableBody = document.querySelector(".transactions-table tbody");
  const paginationLinks = document.querySelectorAll(".pagination a");
  const searchInput = document.querySelector(".search-bar input");

  // Load all rows initially
  loadAllRows();

  searchInput.addEventListener("input", filterRows);
  rowsPerPageDropdown.addEventListener("change", updateRowsPerPage);
  paginationLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      if (
        link.querySelector("i") &&
        link.querySelector("i").classList.contains("ri-arrow-left-s-fill")
      ) {
        currentPage = Math.max(currentPage - 1, 1);
      } else if (
        link.querySelector("i") &&
        link.querySelector("i").classList.contains("ri-arrow-right-s-fill")
      ) {
        const totalPages = Math.ceil(filteredRows.length / rowsPerPage);
        currentPage = Math.min(currentPage + 1, totalPages);
      } else {
        currentPage = parseInt(link.textContent);
      }
      displayRows();
      updatePaginationLinks();
    });
  });

  function loadAllRows() {
    allRows = Array.from(tableBody.querySelectorAll("tr"));
    filteredRows = allRows; // Initialize filtered rows with all rows
    displayRows();
    updatePaginationLinks();
  }

  function updateRowsPerPage() {
    rowsPerPage = parseInt(rowsPerPageDropdown.value);
    filterRows();
  }

  function filterRows() {
    const searchTerm = searchInput.value.toLowerCase();

    filteredRows = allRows.filter((row) => {
      return Array.from(row.querySelectorAll("td")).some((cell) =>
        cell.textContent.toLowerCase().includes(searchTerm)
      );
    });

    if (searchTerm === "") {
      filteredRows = allRows; // Reset to all rows when search input is empty
    }

    if (filteredRows.length === 0 && searchTerm !== "") {
      alert("No results found");
      searchInput.value = ""; // Clear the search input
      filteredRows = allRows; // Reset filtered rows to all rows
      currentPage = 1;
    }

    displayRows();
    updatePaginationLinks();
  }

  function displayRows() {
    tableBody.innerHTML = "";

    if (filteredRows.length === 0) {
      const noResultRow = document.createElement("tr");
      const noResultCell = document.createElement("td");
      noResultCell.colSpan = 10; // Assuming 10 columns in the table
      noResultCell.textContent = "No results found";
      noResultCell.style.textAlign = "center";
      noResultRow.appendChild(noResultCell);
      tableBody.appendChild(noResultRow);

      return;
    }

    const start = (currentPage - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    const rowsToDisplay = filteredRows.slice(start, end);

    rowsToDisplay.forEach((row) => {
      tableBody.appendChild(row);
    });
  }

  function updatePaginationLinks() {
    const totalPages = Math.ceil(filteredRows.length / rowsPerPage);

    paginationLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.textContent == currentPage) {
        link.classList.add("active");
      }

      if (
        link.querySelector("i") &&
        link.querySelector("i").classList.contains("ri-arrow-left-s-fill")
      ) {
        link.style.display = currentPage === 1 ? "none" : "inline";
      } else if (
        link.querySelector("i") &&
        link.querySelector("i").classList.contains("ri-arrow-right-s-fill")
      ) {
        link.style.display = currentPage === totalPages ? "none" : "inline";
      } else if (isNaN(link.textContent)) {
        link.style.display = "none";
      } else {
        link.style.display = link.textContent <= totalPages ? "inline" : "none";
      }
    });
  }

  // Initial setup
  filterRows();
});

// dropdown-filter for stock chart ----------------------------
document.addEventListener("DOMContentLoaded", () => {
  const dropdown = document.querySelector(".dropdown");
  const dropdownContent = document.querySelector(".dropdown-content");
  const dropbtn = document.querySelector(".dropbtn");

  dropdownContent.addEventListener("click", (event) => {
    if (event.target.tagName === "A") {
      dropbtn.textContent = `${event.target.textContent} \u25BE`;
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const radioButtons = document.querySelectorAll('input[name="filter"]');

  radioButtons.forEach((radio) => {
    radio.addEventListener("change", () => {
      console.log(`${radio.value} selected`);
    });
  });
});
