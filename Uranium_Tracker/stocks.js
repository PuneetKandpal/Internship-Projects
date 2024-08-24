// Price Trends Chart
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

// Bid vs Ask Comparison Chart
const bidAskCtx = document.getElementById("bidAskChart").getContext("2d");
new Chart(bidAskCtx, {
  type: "bar",
  data: {
    labels: ["Aug-24", "Sep-24", "Oct-24", "Nov-24"],
    datasets: [
      {
        label: "Bid$/lbs",
        data: [81.0, 81.0, 81.0, 81.0],
        backgroundColor: "rgba(255, 205, 86, 0.5)",
        borderColor: "rgb(255, 205, 86)",
        borderWidth: 1,
      },
      {
        label: "Ask$/lbs",
        data: [81.75, 81.75, 82.5, 83.25],
        backgroundColor: "rgba(75, 192, 192, 0.5)",
        borderColor: "rgb(75, 192, 192)",
        borderWidth: 1,
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
        text: "Bid vs Ask Comparison",
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

// ==============================================================================================
// The Atomic Portfolio
// ==============================================================================================
// Data for the charts
const mostFollowedStocks = {
  labels: ["DNN", "NXE", "UEC", "LOT.AX", "CCJ"],
  data: [1.71, 6.4, 5.37, 0.22, 42.61],
};

const topGainers = {
  labels: ["AEC.V", "UROY", "DNN", "UEC", "DML.TO", "FMC.V"],
  data: [0.07, 2.32, 1.71, 5.37, 2.29, 0.09],
};

const topLosers = {
  labels: ["CUL.AX", "GTR.AX", "ENR.AX", "RDM.AX", "ERA.AX"],
  data: [0.0, 0.0, 0.47, 0.13, 0.02],
};

// Function to create a radar chart
function createRadarChart(
  ctx,
  labels,
  data,
  label,
  backgroundColor,
  borderColor
) {
  return new Chart(ctx, {
    type: "radar",
    data: {
      labels: labels,
      datasets: [
        {
          label: label,
          data: data,
          backgroundColor: backgroundColor,
          borderColor: borderColor,
          borderWidth: 2,
          pointBackgroundColor: borderColor,
          pointBorderColor: "#fff",
          pointHoverBackgroundColor: "#fff",
          pointHoverBorderColor: borderColor,
        },
      ],
    },
    options: {
      responsive: true,
      elements: {
        line: {
          tension: 0.4,
        },
      },
      scales: {
        r: {
          grid: {
            color: "#444",
          },
          angleLines: {
            color: "#444",
          },
          ticks: {
            display: false,
          },
        },
      },
    },
  });
}

// Create the charts
document.addEventListener("DOMContentLoaded", () => {
  const mostFollowedChart = createRadarChart(
    document.getElementById("mostFollowedChart").getContext("2d"),
    mostFollowedStocks.labels,
    mostFollowedStocks.data,
    "Most Followed Stocks",
    "rgba(255, 193, 7, 0.5)",
    "rgba(255, 193, 7, 1)"
  );

  const topGainersChart = createRadarChart(
    document.getElementById("topGainersChart").getContext("2d"),
    topGainers.labels,
    topGainers.data,
    "Top Gainers",
    "rgba(40, 167, 69, 0.5)",
    "rgba(40, 167, 69, 1)"
  );

  const topLosersChart = createRadarChart(
    document.getElementById("topLosersChart").getContext("2d"),
    topLosers.labels,
    topLosers.data,
    "Top Losers",
    "rgba(220, 53, 69, 0.5)",
    "rgba(220, 53, 69, 1)"
  );

  // GSAP Animation
  gsap.from(".chart-card, .info-card", {
    duration: 1.5,
    opacity: 0,
    y: 50,
    stagger: 0.3,
    ease: "power2.out",
  });
});
