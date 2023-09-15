'use client'
import { useEffect } from "react"
import { Chart } from "chart.js";
import './line.css'
function LineChart() {
  useEffect(() => {
    var ctx = document.getElementById('myChart').getContext('2d');
    var myChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: [" Week 1", "Week 2", "Week 3", "Week 4"],
        datasets: [{
          data: [86, 114, 106, 106, 107, 111, 133],
          borderColor: "#3e95cd",
          label:"Guest",
          backgroundColor: "#7bb6dd",
          fill: false,
        }, {
          data: [70, 90, 44, 60, 83, 90, 100],
          borderColor: "#3cba9f",
          label:"User",
          backgroundColor: "#71d1bd",
          fill: false,
        }, 
        ]
      },
    });
  }, [])
  return (
    <>
      {/* line chart */}
      <div className="chart_container"> 
       
      <div className="container">
      <p>Activites</p>
        <div className="in_container">
          <canvas id='myChart'></canvas>
        </div>
        
      </div>
      </div>
    </>
  )
}

export default LineChart;