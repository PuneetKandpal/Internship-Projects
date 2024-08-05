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

// ==================================
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

// ===================================
// graph ---------------------
const ctx = document.getElementById("myChart").getContext("2d");

// Data for each point, including signals
const chartData = [
  { date: "Aug 3", price: 320, volume: 1000000, signal: null },
  { date: "Aug 15", price: 325, volume: 1100000, signal: null },
  { date: "Aug 25", price: 340, volume: 1200000, signal: "up" },
  { date: "Sep 10", price: 360, volume: 1500000, signal: null },
  { date: "Sep 20", price: 355, volume: 1300000, signal: null },
  { date: "Oct 5", price: 375, volume: 1400000, signal: null },
  { date: "Oct 17", price: 390, volume: 1600000, signal: null },
  { date: "Nov 7", price: 400, volume: 1700000, signal: null },
  { date: "Dec 1", price: 410, volume: 1800000, signal: "down" },
  { date: "Dec 16", price: 405, volume: 1700000, signal: null },
  { date: "Jan 6", price: 415, volume: 2000000, signal: null },
  { date: "Jan 20", price: 425, volume: 2100000, signal: "up" },
  { date: "Feb 14", price: 408.75, volume: 20401200, signal: "down" },
  { date: "Mar 10", price: 395, volume: 1600000, signal: null },
  { date: "Apr 1", price: 380, volume: 1500000, signal: null },
  { date: "Apr 15", price: 370, volume: 1400000, signal: null },
  { date: "May 5", price: 420, volume: 2100000, signal: "up" },
  { date: "May 17", price: 410, volume: 2050000, signal: null },
  { date: "Jun 2", price: 405, volume: 2000000, signal: null },
  { date: "Jun 22", price: 380, volume: 1800000, signal: "down" },
  { date: "Jul 4", price: 370, volume: 1700000, signal: null },
  { date: "Jul 18", price: 360, volume: 1600000, signal: "down" },
];

const data = {
  labels: chartData.map((point) => point.date),
  datasets: [
    {
      label: "MSFT Stock Price",
      data: chartData.map((point) => point.price),
      backgroundColor: "rgba(0, 123, 255, 0.1)",
      borderColor: "rgba(0, 123, 255, 1)",
      borderWidth: 2,
      fill: true,
      tension: 0.4, // this makes the line curved
      pointRadius: chartData.map((point) => (point.signal ? 0 : 6)),
      pointHoverRadius: 8,
      pointStyle: chartData.map((point) => (point.signal ? "" : "circle")),
      pointBackgroundColor: chartData.map((point) => {
        return point.signal ? "transparent" : "rgba(0, 123, 255, 1)";
      }),
    },
  ],
};

const options = {
  scales: {
    x: {
      beginAtZero: false,
      ticks: {
        color: "white",
      },
    },
    y: {
      beginAtZero: false,
      ticks: {
        color: "white",
      },
    },
  },
  plugins: {
    legend: {
      display: true,
    },
    tooltip: {
      callbacks: {
        label: function (context) {
          const point = chartData[context.dataIndex];
          return `Price: $${
            point.price
          }\nVolume: ${point.volume.toLocaleString()}\nSignal: ${
            point.signal || "none"
          }`;
        },
      },
    },
  },
};

const myChart = new Chart(ctx, {
  type: "line",
  data: data,
  options: options,
  plugins: [
    {
      id: "customPointStyle",
      afterDraw: (chart) => {
        const ctx = chart.ctx;
        chart.data.datasets.forEach((dataset, datasetIndex) => {
          const meta = chart.getDatasetMeta(datasetIndex);
          meta.data.forEach((point, index) => {
            const signal = chartData[index].signal;
            ctx.save();
            ctx.font = "24px Arial";
            ctx.textAlign = "center";
            if (signal === "up") {
              ctx.fillStyle = "green";
              ctx.fillText("▲", point.x, point.y); // Up arrow
            } else if (signal === "down") {
              ctx.fillStyle = "red";
              ctx.fillText("▼", point.x, point.y + 6); // Down arrow
            }
            ctx.restore();
          });
        });
      },
    },
  ],
});
