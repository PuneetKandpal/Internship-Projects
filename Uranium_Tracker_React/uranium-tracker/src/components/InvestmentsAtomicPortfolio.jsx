import { useEffect } from "react";

const InvestmentsAtomicPortfolio = () => {
  const mostFollowedStocks = {
    labels: ["DNN", "NXE", "UEC", "LOT.AX", "CCJ"],
    data: [1.71, 6.4, 5.37, 0.22, 42.61],
  };

  const topGainers = {
    labels: ["AEC.V", "UROY", "DNN", "UEC", "DML.TO", "FMC.V", "LMRXF", "NXE"],
    data: [0.07, 2.32, 1.71, 5.37, 2.29, 0.09, 0.42, 6.4],
  };

  const topLosers = {
    labels: [
      "CUL.AX",
      "GTR.AX",
      "ENR.AX",
      "RDM.AX",
      "ERA.AX",
      "DYL.AX",
      "PDN.AX",
      "TOE.AX",
    ],
    data: [0.0, 0.0, 0.47, 0.13, 0.02, 1.0, 9.73, 0.24],
  };

  const createRadarChart = (
    ctx,
    labels,
    data,
    label,
    backgroundColor,
    borderColor
  ) => {
    return new Chart(ctx, {
      type: "radar",
      data: {
        labels,
        datasets: [
          {
            label,
            data,
            backgroundColor,
            borderColor,
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
  };

  useEffect(() => {
    const mostFollowedCtx = document
      .getElementById("mostFollowedChart")
      .getContext("2d");
    const topGainersCtx = document
      .getElementById("topGainersChart")
      .getContext("2d");
    const topLosersCtx = document
      .getElementById("topLosersChart")
      .getContext("2d");

    createRadarChart(
      mostFollowedCtx,
      mostFollowedStocks.labels,
      mostFollowedStocks.data,
      "Most Followed Stocks",
      "rgba(255, 193, 7, 0.5)",
      "rgba(255, 193, 7, 1)"
    );

    createRadarChart(
      topGainersCtx,
      topGainers.labels,
      topGainers.data,
      "Top Gainers",
      "rgba(40, 167, 69, 0.5)",
      "rgba(40, 167, 69, 1)"
    );

    createRadarChart(
      topLosersCtx,
      topLosers.labels,
      topLosers.data,
      "Top Losers",
      "rgba(220, 53, 69, 0.5)",
      "rgba(220, 53, 69, 1)"
    );
  }, []);

  return (
    <div id="portfolio" className="bg-zinc-800/30 p-8 mt-5 mb-8 rounded-md">
      <h2 className="frank text-[1rem] md:text-[1.25rem] lg:mb-6 font-semibold inter tracking-tight text-white">
        The Atomic Portfolio
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-8 bg-black1 p-8">
        <div className="chart-card h-[300px]">
          <canvas id="mostFollowedChart" className="h-full w-full"></canvas>
        </div>
        <div className="chart-card h-[300px]">
          <canvas id="topGainersChart" className="h-full w-full"></canvas>
        </div>
        <div className="chart-card h-[300px]">
          <canvas id="topLosersChart" className="h-full w-full"></canvas>
        </div>
      </div>
    </div>
  );
};

export default InvestmentsAtomicPortfolio;
