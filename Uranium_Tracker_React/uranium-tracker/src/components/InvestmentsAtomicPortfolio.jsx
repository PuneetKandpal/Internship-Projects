import { useDispatch, useSelector } from "react-redux";
import { fetchStocksData } from "../store/slices/apiSlice";
import Loader from "./Loader"; // Import your loader component
import { useEffect, useState } from "react";
// import Chart from "chart.js/auto";

const InvestmentsAtomicPortfolio = () => {
  const dispatch = useDispatch();
  const stocksData = useSelector((state) => state.api.stocks);
  const status = useSelector((state) => state.api.status);
  const [isLoading, setIsLoading] = useState(true); // Initialize isLoading state
  const [topGainers, setTopGainers] = useState({ labels: [], data: [] });
  const [topLosers, setTopLosers] = useState({ labels: [], data: [] });
  const [mostFollowed, setMostFollowed] = useState({ labels: [], data: [] });

  // Extract labels and data from stocksData.top_gainers
  const extractTopGainers = (topGainersData) => {
    const labels = topGainersData.map((item) => item[0]); // Extract stock symbols
    const data = topGainersData.map((item) => item[1].current_price); // Extract current prices
    return { labels, data };
  };

  // Extract labels and data from stocksData.top_losers
  const extractTopLosers = (topLosersData) => {
    const labels = topLosersData.map((item) => item[0]); // Extract stock symbols
    const data = topLosersData.map((item) => item[1].current_price); // Extract current prices
    return { labels, data };
  };

  // Extract labels and data from stocksData.top_performing_stocks
  const extractMostFollowed = (mostFollowedData) => {
    const labels = mostFollowedData.map((item) => item[0]); // Extract stock symbols
    const data = mostFollowedData.map((item) => item[1].current_price); // Extract current prices
    return { labels, data };
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

  // Fetch stocks data when component mounts
  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchStocksData());
    }

    if (status === "succeeded") {
      const extractedTopGainers = extractTopGainers(stocksData.top_gainers);
      setTopGainers(extractedTopGainers);

      const extractedTopLosers = extractTopLosers(stocksData.top_losers);
      setTopLosers(extractedTopLosers);

      const extractedMostFollowed = extractMostFollowed(
        stocksData.top_performing_stocks
      );
      setMostFollowed(extractedMostFollowed);

      setIsLoading(false); // Set loading to false when data is fetched
    }
  }, [status, dispatch, stocksData]);

  // Create charts after the data is fetched
  useEffect(() => {
    if (!isLoading) {
      const topGainersCtx = document
        .getElementById("topGainersChart")
        .getContext("2d");

      createRadarChart(
        topGainersCtx,
        topGainers.labels,
        topGainers.data,
        "Top Gainers",
        "rgba(40, 167, 69, 0.5)",
        "rgba(40, 167, 69, 1)"
      );

      const topLosersCtx = document
        .getElementById("topLosersChart")
        .getContext("2d");

      createRadarChart(
        topLosersCtx,
        topLosers.labels,
        topLosers.data,
        "Top Losers",
        "rgba(220, 53, 69, 0.5)",
        "rgba(220, 53, 69, 1)"
      );

      const mostFollowedCtx = document
        .getElementById("mostFollowedChart")
        .getContext("2d");

      createRadarChart(
        mostFollowedCtx,
        mostFollowed.labels,
        mostFollowed.data,
        "Most Followed Stocks",
        "rgba(234, 255, 0, 0.311)",
        "#d8ca00"
      );
    }
  }, [isLoading, topGainers, topLosers, mostFollowed]);

  // Show the loader while loading is true
  if (isLoading) {
    return <Loader />;
  }

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
