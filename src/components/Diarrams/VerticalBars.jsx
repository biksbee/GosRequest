import React, {useState, useEffect} from "react";
import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";


const VerticalBar = () => {
    
    const url = "https://mge19722ka.execute-api.eu-central-1.amazonaws.com/production/statistics"

    const [obj, setObj] = useState([])

    const lastSevenDay = () => {
      const v = []
      const l = [] 
      obj.forEach(element => {
          v.push(element.count)
          l.push(element.name)
      })
      return {v, l}    
    }

    const labels = () => {
        const l = lastSevenDay()
        return l.l
    }
    const value = () => {
      const v = lastSevenDay()
      return v.v
  }
        
        useEffect(() => {
            const request = async () => {
                const res = await fetch(url)
                const items = await res.json()
                setObj(items.subnets)
                return items
            }
            const req = request()    
        }, [])
        const res = lastSevenDay()
    
      const randomInteger = (max) => {
          return Math.floor(Math.random()*(max + 1));
      }
      const randomRgbColor = () => {
          const len = value()
          const bgc = []
          const bbgc = [] 
          let colorStart = ''
          len.forEach(element => {
            let r = randomInteger(255)
            let g = randomInteger(255)
            let b = randomInteger(255)
            colorStart = (r + ', ' + g + ', ' + b)
            bgc.push('rgba(' + colorStart + ', 0.5)')
            bbgc.push('rgb(' + colorStart + ')')
          })
          return {bgc, bbgc}
      }
      const q = randomRgbColor()
        const data = {
          labels: labels(),
          datasets: [{
            axis: 'x',
            data: value(),
            backgroundColor: '#9072F4',
            borderColor: '#9072F4',
            borderWidth: 1
          }]
        };
        const options = {
          indexAxis: 'y',
          scales: {
            x: {
              grid: {
                display: false,
              }
            },
            y: {
              grid: {
                display: false,
              }
            }
          },
          plugins: {
            legend: {
                display: false
            },
        },
          type: 'bar',
          data: data,
        };

      return(
          <div className="h-full">
              <Bar data={data} options={options} />
          </div>
      )

}

export default VerticalBar



