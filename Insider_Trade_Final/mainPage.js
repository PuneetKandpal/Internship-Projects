window.addEventListener("scroll", function () {
  const navbar = document.getElementById("navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// -----------------------------------------------------------------------------------------------

const offset = 50; // Adjust this value to the desired offset from the top

window.addEventListener("scroll", () => {
  const sections = document.querySelectorAll("div[id]");
  const navLinks = document.querySelectorAll(".second-nav a p");

  let currentSection = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - offset; // Adjust based on your nav height
    const sectionBottom = sectionTop + section.offsetHeight;

    if (
      window.pageYOffset >= sectionTop &&
      window.pageYOffset < sectionBottom
    ) {
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

document.querySelectorAll(".second-nav a").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href").substring(1);
    const targetElement = document.getElementById(targetId);
    const elementPosition = targetElement.offsetTop - offset; // Adjust this value to the desired offset from the top

    window.scrollTo({
      top: elementPosition,
      behavior: "smooth",
    });
  });
});

// ==================================
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

// =====================================================================================================
// graph ---------------------

const ctx = document.getElementById("myChart").getContext("2d");

// Create gradient fill
const gradient = ctx.createLinearGradient(0, 0, 0, 400);
gradient.addColorStop(0, "rgba(11, 121, 148, 0.5)"); // Blue with transparency
gradient.addColorStop(1, "rgba(11, 121, 148, 0)"); // Blue with more transparency

// Data for each point, including signals
const chartData = [
  { date: "Aug 3", price: 420, volume: 1000000, signal: null },
  { date: "Aug 15", price: 425, volume: 1100000, signal: null },
  { date: "Aug 25", price: 400, volume: 1200000, signal: "up" },
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
      backgroundColor: gradient,
      borderColor: "rgba(11, 121, 148, 1)", // Blue color for the line
      borderWidth: 2,
      fill: true,
      tension: 0.4, // this makes the line curved
      pointRadius: chartData.map((point) => (point.signal ? 0 : 6)),
      pointHoverRadius: 8,
      pointStyle: chartData.map((point) => (point.signal ? "" : "circle")),
      pointBackgroundColor: chartData.map((point) => {
        return point.signal ? "transparent" : "rgba(11, 121, 148, 1)";
      }),
    },
  ],
};

const options = {
  scales: {
    x: {
      beginAtZero: false,
      ticks: {
        color: "#ffffff",
      },
    },
    y: {
      beginAtZero: false,
      ticks: {
        color: "#ffffff",
      },
    },
  },
  plugins: {
    legend: {
      display: true,
    },
    tooltip: {
      backgroundColor: "rgba(0, 0, 0, 0.5)", // More transparent tooltip background
      callbacks: {
        label: function (context) {
          const point = chartData[context.dataIndex];
          let label = `Price: $${
            point.price
          }\nVolume: ${point.volume.toLocaleString()}`;
          if (point.signal) {
            label += `\nSignal: ${point.signal}`;
          }
          return label;
        },
      },
    },
  },
  hover: {
    mode: "nearest",
    intersect: true,
  },
};

// Custom plugin to draw shadows with blue color
const shadowPlugin = {
  id: "shadowPlugin",
  beforeDatasetsDraw: (chart, args, options) => {
    const ctx = chart.ctx;
    ctx.save();
    ctx.shadowColor = "rgba(11, 121, 148, 0.5)"; // Blue shadow
    ctx.shadowBlur = 10;
    ctx.shadowOffsetX = 0;
    ctx.shadowOffsetY = 5;
  },
  afterDatasetsDraw: (chart, args, options) => {
    const ctx = chart.ctx;
    ctx.restore();
  },
};

// Custom plugin to animate points
const pointAnimationPlugin = {
  id: "pointAnimationPlugin",
  beforeEvent: (chart, args) => {
    const event = args.event;
    const datasetIndex = chart.getDatasetMeta(0).index;
    const points = chart.getDatasetMeta(datasetIndex).data;
    points.forEach((point) => {
      if (point.inRange(event.x, event.y)) {
        point.options.radius = 12;
      } else {
        point.options.radius = 6;
      }
    });
  },
};

// Custom plugin to draw signals over points
const signalPlugin = {
  id: "signalPlugin",
  afterDatasetsDraw: (chart) => {
    const ctx = chart.ctx;
    chart.data.datasets.forEach((dataset, datasetIndex) => {
      const meta = chart.getDatasetMeta(datasetIndex);
      meta.data.forEach((point, index) => {
        const signal = chartData[index].signal;
        ctx.save();
        ctx.font = "24px Arial";
        ctx.textAlign = "center";
        if (signal === "up") {
          ctx.fillStyle = "rgba(11, 121, 148, 1)"; // Blue color for up arrow
          ctx.fillText("▲", point.x, point.y); // Up arrow
        } else if (signal === "down") {
          ctx.fillStyle = "rgba(255, 99, 71, 1)"; // Red color for down arrow
          ctx.fillText("▼", point.x, point.y + 6); // Down arrow
        }
        ctx.restore();
      });
    });
  },
};

const myChart = new Chart(ctx, {
  type: "line",
  data: data,
  options: options,
  plugins: [shadowPlugin, pointAnimationPlugin, signalPlugin],
});

// ANIMATION ====================================================================================================

document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);

  const tl = gsap.timeline({ defaults: { ease: "power2.out" } });

  tl.from(".navbar", { y: -100, opacity: 0, duration: 0.8 })
    .from(
      "#company-details",
      {
        // y: -40,
        opacity: 0,
        duration: 0.9,
      },
      "-=0.5"
    )
    .from(
      ".stickynav2",
      {
        // y: -50,
        opacity: 0,
        duration: 1,
      },
      "-=0.4"
    );

  const components = [
    "#components-business-summary",
    "#components-financial-metric",
    "#component-key-matrics",
    "#component-key-stats",
    "#component-stock-chart",
    "#component-insider-trade",
    "#component-volume-analysis",
  ];

  components.forEach((selector) => {
    gsap.from(selector, {
      y: 60,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: selector,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none none",
      },
    });
  });
});
