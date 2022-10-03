import React, {useState} from "react";
import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";

const GorizontBar = ({myThought}) => {
    const test = myThought
    console.log(test)
    const mock = [65, 59, 81, 56, 200, 40, 70, 100, 50, 66, 65, 59, 81, 56, 200, 40, 70, 100, 50, 66, 65, 59, 81, 56, 200, 40, 70, 100, 50, 66]
    const data = {
        labels: test,     
        datasets: [{
            axis: 'x',
            data: mock,
            fill: false,
            backgroundColor: [
                '#9072F4',
            ],
            borderWidth: 1,
        }],
    };
    const options = {
        scales: {
            x: {
              grid: {
                display: false,
                offset: true,
                tickBorderDashOffset: 5,

              }
            },
          },
        plugins: {
            legend: {
                display: false
            },
        }
    }
        
    return(
        <div>
            <Bar data={data} options={options} />
        </div>
    )

}

export default GorizontBar