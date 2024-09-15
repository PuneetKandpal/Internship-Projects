import { useDispatch, useSelector } from "react-redux";
import { fetchNuclearData } from "../store/slices/apiSlice";
import { useEffect } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const NuclearTotalOperableReactor = () => {
  const dispatch = useDispatch();
  const nuclearData = useSelector((state) => state.api.nuclear);
  const status = useSelector((state) => state.api.status);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchNuclearData());
    }
  }, [status, dispatch]);

  const chartData = {
    labels: nuclearData?.data?.top_10_countries[0]?.data.map(
      (country) => country.name
    ),
    datasets: [
      {
        label: "Capacity (MWe)",
        data: nuclearData?.data?.top_10_countries[0]?.data.map(
          (country) => country.y
        ),
        backgroundColor: (context) => {
          const ctx = context.chart.ctx;
          const gradient = ctx.createLinearGradient(0, 0, 400, 0);
          gradient.addColorStop(0, "rgba(34, 202, 236, 0.8)"); // Cyan color
          gradient.addColorStop(1, "rgba(94, 220, 184, 0.8)"); // Green color
          return gradient;
        },
        hoverBackgroundColor: "#00a16b", // Yellow color on hover
        borderColor: "rgba(255, 255, 255, 0.3)",
        borderWidth: 0,
      },
    ],
  };

  const options = {
    responsive: true,
    indexAxis: "y", // Makes it horizontal
    plugins: {
      legend: {
        position: "top",
        labels: {
          color: "rgba(255, 255, 255, 0.8)", // White for dark theme
        },
      },
      title: {
        display: true,
        text: "",
        color: "rgba(255, 255, 255, 0.8)", // Title in white
        font: {
          size: 18,
          family: "Arial",
        },
      },
    },
    scales: {
      x: {
        ticks: {
          color: "rgba(255, 255, 255, 0.8)", // X axis labels white
        },
      },
      y: {
        ticks: {
          color: "rgba(255, 255, 255, 0.8)", // Y axis labels white
        },
      },
    },
  };

  return (
    <div className="py-16 bg-zinc-800/20 px-6 md:px-20 md:py-20 md:pt-24  min-h-screen">
      <h2 className="uranium-news-headline flex items-center ml-[-2px] text-[1rem] md:text-[1.4rem] frank mb-3 lg:mb-3 font-semibold text-white capitalize">
        <i className="ri-menu-4-fill text-lime2 text-bold text-xl mr-2"></i>
        Total Operable Reactor Net Capacity (Top 10)
      </h2>
      {nuclearData && (
        <div className="w-[70%] p-0 rounded-md ">
          <Bar data={chartData} options={options} />
        </div>
      )}
    </div>
  );
};

export default NuclearTotalOperableReactor;