import React from "react";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  PointElement,
} from "chart.js";
import { Line } from "react-chartjs-2";
import "./stackedbarbar.scss";
import { useEffect, useState } from "react";

ChartJS.register(CategoryScale, LineElement, PointElement);

const LineChart = () => {
  const [chart, setChart] = useState([]);

  const getData = async () => {
    try {
      fetch("http://localhost:5000")
        .then((response) => response.json())
        .then((chart) => {
          setChart(chart);
          console.log(chart);
        });
    } catch (err) {
      console.log("Error in Loading", err);
    }
  };
  useEffect(() => {
    fetch("http://localhost:5000")
      .then((response) => response.json())
      .then((chart) => {
        setChart(chart);
        console.log(chart);
      });
    getData();
  }, []);

  let data = {
    labels: chart.map((item) => item.sector),
    datasets: [
      {
        label: "Added and Sector",
        data: chart.map((item) => item.likelihood),
        backgroundColor: [
          "rgba(210, 205, 0, 0.9)",
          "rgba(210, 205, 0, 0.9)",
          "rgba(210, 205, 0, 0.9)",
          "rgba(210, 205, 0, 0.9)",
          "rgba(210, 205, 0, 0.9)",
          "rgba(210, 205, 0, 0.9)",
        ],
        borderColor: [
          "rgba(210, 205, 0, 0.9)",
          "rgba(210, 205, 0, 0.9)",
          "rgba(210, 205, 0, 0.9)",
          "rgba(210, 205, 0, 0.9)",
          "rgba(210, 205, 0, 0.9)",
          "rgba(210, 205, 0, 0.9)",
        ],
        borderWidth: 1,
      },
    ],
  };

  let options = {
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
    legend: {
      labels: {
        fontSize: 26,
      },
    },
  };

  return (
    <div className="line-chart">
      <Line data={data} options={options} height={400} />
    </div>
  );
};

export default LineChart;
