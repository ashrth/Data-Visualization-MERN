import React from "react";
import "./stackedbarbar.scss";
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale } from "chart.js";
import { Bar } from "react-chartjs-2";
import { useEffect, useState } from "react";

ChartJS.register(
    CategoryScale,
    LinearScale,
    
    BarElement);

const BarChart = () => {
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
const labels= chart.map((item)=> item.end_year)
const datap=chart.map((item)=> item.intensity)
  let data = {
    labels: labels,
    datasets: [
      {
        label: "Year and Intensity",
        data: datap ,
        backgroundColor: [
          "rgba(232, 113, 72, 0.6)",
          "rgba(232, 113, 72, 0.7)",
          "rgba(232, 113, 72, 0.6)",
          "rgba(232, 113, 72, 0.7)",
          "rgba(232, 113, 72, 0.6)",
          "rgba(232, 113, 72, 0.7)",
          
        ],
        borderColor: [
          "rgba(232, 113, 72, 0.5)",
          "rgba(232, 113, 72, 0.6)",
          "rgba(232, 113, 72, 0.5)",
          "rgba(232, 113, 72, 0.6)",
          "rgba(232, 113, 72, 0.5)",
          "rgba(232, 113, 72, 0.6)",
          
        ],
        borderWidth: 1,
      },
    ],
  };

  let options = {
    maintainAspectRatio:false,
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

const datefilter=()=>{
  const labels2 =[...labels];
  console.log(labels2);
  const startdate= document.getElementById('startdate')
  const enddate= document.getElementById('enddate')

  const indexstart= labels2.indexOf(startdate.value)
  const indexend= labels2.indexOf(enddate.value)


  const filter=labels2.slice(indexstart, indexend +1)
  getData.data.labels= filter
  getData.update()
  
}


  return (
    <div className="bar-chart">
      <Bar data={data} options={options} height={400} />
      <div className="inputboxes"> 
      <input onChange={datefilter} type='date' id='startdate' />
      <input onChange={datefilter} type='date' id='enddate' />
      </div>
      
    </div>
  );
};

export default BarChart;
