import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { useEffect, useState } from "react";




ChartJS.register(
    ArcElement,
    Tooltip,
    Legend
    );

const DoughnutChart = () => {
const [chart, setChart]= useState([])

const getData = async () => {
  try {
    fetch("http://localhost:5000")
      .then((response) => response.json())
      .then((chart) => {
        setChart(chart)
        console.log(chart)
      })
  } catch (err) {
    console.log("Error in Loading", err)
  }
}
useEffect(()=>{
  fetch("http://localhost:5000").then((response)=> response.json()).then((chart)=>{setChart(chart)
console.log(chart)
})
getData()
},[])

  let data = {
    labels: chart.map((item)=> item.topic),
    datasets: [
      {
        label: "Topic and Start Year",
        data: chart.map((item)=> item.start_year),
        backgroundColor: [
          "rgba(197, 113, 162, 0.5)",
          "rgba(197, 113, 162, 0.6)",
          "rgba(197, 113, 162, 0.8)",
          "rgba(197, 113, 162, 0.7)",
          "rgba(199, 114, 163, 1)",
          "rgba(197, 113, 162, 0.9)",
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
    maintainAspectRatio:false,
    // scales: {
    //   y: {
    //     beginAtZero: true,
    //   },
    // },
    legend: {
      labels: {
        fontSize: 26,
      },
    },
    
  };

  return (
    <div className="doughnut-chart">
      <Doughnut data={data} options={options} height={400} />
    </div>
  );
};

export default DoughnutChart;
