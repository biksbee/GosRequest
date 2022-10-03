import React from "react";
import Chart from "chart.js/auto";
import { Doughnut } from "react-chartjs-2";

const PieChart = () => {

    const labels = ["January", "February", "March", "April", "May", "June"];
    const data = {
      datasets: [{
      data: [60, 6, 34],
      backgroundColor: [
    '#9072F4',
    '#DACCFF',
    '#AE90FE'
  ],
  }],

  labels: [
      'Safari 60%',
      'FireFox 6%',
      'Blue 34%'
  ]
  }
  const options = {
      // layout: {
      //     padding: {
      //         right: 50
      //     }
      // },
      plugins: {
          legend: {
              pointStyle: true,
              display: true,
              position: 'right',
              labels: {
                  color: '#2A292A',
                  pointStyle: 'circle',
                  usePointStyle: true,
              }
          }
      }
  }

    return (
      <div>
        <Doughnut data={data} options={options}/>
      </div>
    )
}

export default PieChart