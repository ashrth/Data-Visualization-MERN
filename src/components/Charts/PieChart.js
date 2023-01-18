import React from "react";
import "./chart.scss";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import { useEffect, useState } from "react";

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = () => {
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
    labels: chart.map((item) => item.topic),
    datasets: [
      {
        label: "Topic and Relevance",
        data: chart.map((item) => item.relevance),
        backgroundColor: [
          "rgba(197, 113, 162, 1)",
          "rgba(197, 113, 162, 0.6)",
          "rgba(197, 113, 162, 0.7)",
          "rgba(197, 113, 162, 0.7)",
          "rgba(197, 113, 162, 1)",
          "rgba(197, 113, 162, 0.6)",
        ],
        borderColor: [
          "rgba(197, 113, 162, 1)",
          "rgba(197, 113, 162, 0.6)",
          "rgba(197, 113, 162, 0.7)",
          "rgba(197, 113, 162, 0.7)",
          "rgba(197, 113, 162, 1)",
          "rgba(197, 113, 162, 0.6)",
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
    <div className="pie-chart">
      <Pie data={data} options={options} height={400} />
    </div>
  );
};

export default PieChart;
