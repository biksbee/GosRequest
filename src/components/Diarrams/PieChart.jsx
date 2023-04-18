import React, {useState, useEffect} from "react";
import Chart from "chart.js/auto";
import { Doughnut } from "react-chartjs-2";
import { createRenderer } from "react-dom/test-utils";

const PieChart = () => {

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
          setObj(items.browsers)
          return items
      }
      const req = request()
  }, [])


  const v = ["chrome", "firefox", "safari", "Яндекс"]
  const l = [40, 15, 30, 15]

    const data = {
      datasets: [{
          // data: create().v,
          data: v,
          backgroundColor: [
              'rgb(154, 119, 252)',
              'rgb(174, 114, 254)',
              'rgb(188, 164, 252)',
              'rgb(197, 177, 252)',
              'rgb(206, 189, 252)',
              'rgb(225, 215, 252)'
          ],
        }],
        // labels: create().l,
        labels: l
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

export default PieChart