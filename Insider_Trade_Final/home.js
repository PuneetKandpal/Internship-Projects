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
//----------Latest insider table script-------------------------
// // Animation for Latest Insider Transactions
// document.addEventListener("DOMContentLoaded", function () {
//   gsap.registerPlugin(ScrollTrigger);

//   gsap.from(".transaction-table", {
//     scrollTrigger: {
//       trigger: ".transaction-table",
//       start: "top bottom-=100",
//       toggleActions: "play none none reverse",
//     },
//     opacity: 0,
//     y: 50,
//     duration: 0.6,
//   });

//   gsap.utils.toArray(".transaction-table tr").forEach((row, i) => {
//     gsap.from(row, {
//       scrollTrigger: {
//         trigger: row,
//         start: "top bottom-=50",
//         toggleActions: "play none none reverse",
//       },
//       opacity: 0,
//       x: -20,
//       duration: 0.3,
//       delay: i * 0.05,
//     });
//   });
// });
//============================================================================================
// dropdown for table ----------------------------
document.addEventListener("DOMContentLoaded", () => {
  const rowsPerPageDropdown = document.querySelector("#entries");
  const searchInput = document.querySelector(".search-bar input");
  const tableBody = document.querySelector(".transactions-table tbody");
  const paginationLinks = document.querySelector(".pagination");

  let rowsPerPage = parseInt(rowsPerPageDropdown.value); // Default number of rows per page
  let currentPage = 1;
  let totalPages = 1;

  // Load initial data
  loadRows();

  // Event listeners
  searchInput.addEventListener("input", () => {
    currentPage = 1; // Reset to first page on new search
    loadRows();
  });
  rowsPerPageDropdown.addEventListener("change", () => {
    rowsPerPage = parseInt(rowsPerPageDropdown.value);
    loadRows();
  });
  paginationLinks.addEventListener("click", (event) => {
    if (event.target.tagName === "A") {
      event.preventDefault();
      const pageNumber = event.target.dataset.page;
      if (pageNumber) {
        currentPage = parseInt(pageNumber);
        loadRows();
      }
    }
  });

  // Function to load rows from the backend
  function loadRows() {
    const searchTerm = searchInput.value;

    fetch(
      `/api/transactions?page=${currentPage}&limit=${rowsPerPage}&search=${encodeURIComponent(
        searchTerm
      )}`
    )
      .then((response) => response.json())
      .then((data) => {
        totalPages = data.totalPages;
        updateTable(data.rows);
        updatePagination();
      })
      .catch((error) => console.error("Error loading rows:", error));
  }

  // Function to update table with new rows
  function updateTable(rows) {
    tableBody.innerHTML = "";

    if (rows.length === 0) {
      const noResultRow = document.createElement("tr");
      const noResultCell = document.createElement("td");
      noResultCell.colSpan = 9; // Adjust based on number of columns
      noResultCell.textContent = "No results found";
      noResultCell.style.textAlign = "center";
      noResultRow.appendChild(noResultCell);
      tableBody.appendChild(noResultRow);
      return;
    }

    rows.forEach((row) => {
      const rowElement = document.createElement("tr");
      rowElement.innerHTML = `
        <td class="company-head">${row.company} <p class="company-fullName">${
        row.fullName
      }</p></td>
        <td>${row.lastPrice}</td>
        <td class="${row.sevenDReturn > 0 ? "positive" : "negative"}">${
        row.sevenDReturn
      }%</td>
        <td>${row.marketCap}</td>
        <td>${row.analystTarget}</td>
        <td>${row.valuation}</td>
        <td>${row.growth}</td>
        <td>${row.divYield}</td>
        <td class="industry">${row.industry}</td>
      `;
      tableBody.appendChild(rowElement);
    });
  }

  // Function to update pagination
  function updatePagination() {
    const paginationHtml = `
      <a href="#" data-page="${currentPage - 1}" class="${
      currentPage === 1 ? "disabled" : ""
    }"><i class="ri-arrow-left-s-fill"></i></a>
      ${Array.from(
        { length: totalPages },
        (_, i) => `
        <a href="#" data-page="${i + 1}" class="${
          i + 1 === currentPage ? "active" : ""
        }">${i + 1}</a>
      `
      ).join("")}
      <a href="#" data-page="${currentPage + 1}" class="${
      currentPage === totalPages ? "disabled" : ""
    }"><i class="ri-arrow-right-s-fill"></i></a>
    `;
    paginationLinks.innerHTML = paginationHtml;
  }
});

//============================================================================================
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
