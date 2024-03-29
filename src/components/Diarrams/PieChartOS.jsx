import React, {useState, useEffect} from "react";
import Chart from "chart.js/auto";
import { Doughnut } from "react-chartjs-2";
import { createRenderer } from "react-dom/test-utils";

const PieChartOS = () => {

    const url = "https://mge19722ka.execute-api.eu-central-1.amazonaws.com/production/statistics"

    const [obj, setObj] = useState([])
    
    const create = () => {
        const v = []
        const l = []
        const labelWithoutPersent = []
        const vForLabels = []
        const objValue = Object.entries(obj)
        objValue.forEach(element => {
          labelWithoutPersent.push(element[0])
          v.push(element[1]*100)     
        })
        v.forEach(element => {
          vForLabels.push(
            (element).toFixed(1) + '%'
          )
        })
        let i = 0
        vForLabels.forEach(element => {
          l.push(labelWithoutPersent[i] + ' ' + element)
          i++
        })
        return {v, l}
      }
      create()


    useEffect(() => {
      const request = async () => {
          const res = await fetch(url)
          const items = await res.json()
          setObj(items.os)
          return items
      }
      const req = request()
  }, [])


    const list = ["windows", "macos", "linux"]
    const value = [50, 25, 25]

    const data = {
      datasets: [{
          // data: create().v,
          data: value,
          backgroundColor: [
            'rgb(174, 114, 254)',
            'rgb(188, 164, 252)',
            'rgb(154, 119, 252)',
            'rgb(197, 177, 252)',
            'rgb(206, 189, 252)',
            'rgb(225, 215, 252)'
          ],
        }],
        // labels: create().l,
        labels: list
    }
  const options = {
      plugins: {
          legend: {
              pointStyle: true,
              display: true,
              position: 'bottom',
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

export default PieChartOS