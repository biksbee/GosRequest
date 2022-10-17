import React, {useState, useEffect} from "react";
import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";

const GorizontBar = ({check}) => {

    const url = "https://mge19722ka.execute-api.eu-central-1.amazonaws.com/production/statistics"

    const [obj, setObj] = useState([])

    const date = () => {
        const today = new Date()
        const monthNow = today.getMonth() + 1
        const yearNow = today.getFullYear()
        let day 
        if(today.getDate() <= 9){
            day = '0' + today.getDate()
        } else { 
            day = today.getDate()
        }
        const dayNow = day
        return {dayNow, monthNow, yearNow}

    }

    const lastSevenDay = () => {
        const v = []
        const l = []
        const q = obj.filter((item, index) => index < 7)  
        q.forEach(element => {
            v.push(element.count)
            l.push(element.date)
        })
        return {v, l}    
    }

    const lastMonth =() => {
        const v = []
        const l = []
        const q = obj.filter((item, index) => index < 29)
        q.forEach(element => {
            v.push(element.count)
            l.push(element.date)
        })
        return {v, l}    
    }

    const lastSixMonth = () => {
        const objDates = []
        const objValue = []
        const allDatesArrays = []
        const lastSixMonthValue = []
        const v = []
        const l = []
        const dateNow = date()
        obj.forEach(element => {
            objDates.push(element.date)
            objValue.push(element.count)
        })
        objDates.forEach(element => {
            allDatesArrays.push(element.split('-'))    
        })
        let month = 0, key = 0, counterValue = 0, counterValue0 = 0, i = 0, j = 0
        allDatesArrays.forEach(element => {
            if(dateNow.monthNow-6 >= dateNow.monthNow-element[1]){
                if(month !== element[1]){
                    month = element[1]
                    l.push(element[1])
                    counterValue0 += objValue[j]
                    j++
                } else {
                    counterValue +=objValue[j]
                    counterValue +=counterValue0
                    j++
                    counterValue0 = 0
                }    

            }
            if(l[i] !== element[1] && i < 5){
                v.push(counterValue) 
                i++
                counterValue = 0
            }
        })
        v.reverse()
        l.reverse()
        return {v, l}
    }

    const allTime = () => {
        let amount = 0
        obj.forEach(element => {
            amount += element.count
        })
        const q = []
        q.push(amount)
        return q
    }

    const createrLabels = () => {
        const k = check
        if(k === 0){ 
            const lastWeekLabels = lastSevenDay()
            return lastWeekLabels.l
        } else if(k=== 1){
            const lastMonthLabels = lastMonth()
            return lastMonthLabels.l   
        } else if(k === 2){
            const lastSixMonthLabels = lastSixMonth()
            return lastSixMonthLabels.l
        } else{
            return ["за все время"]
        }
    }
    const creater = () => {
        const k = check
        if(k === 0){ 
            const lastWeekValue = lastSevenDay()
            return lastWeekValue.v
        } else if(k=== 1){
            const lastMonthValue = lastMonth()
            return lastMonthValue.v   
        } else if(k === 2){
            const lastSixMonthValue = lastSixMonth()
            return lastSixMonthValue.v
        } else{
            const forAllTime = allTime()
            return forAllTime
        }       
    }
    const q = creater()


    useEffect(() => {
        const request = async () => {
            const res = await fetch(url)
            const items = await res.json()
            setObj(items.dates)
            return items
        }
        date()
        const req = request()
    }, [])

    ///////////////////////////////////////

    const data = {   
        labels: createrLabels(),  
        datasets: [{
            axis: 'x',
            data: creater(),
            fill: false,
            backgroundColor: [
                '#9072F4',
            ],
            borderWidth: 1,
        }],
    };
    const options = {
        indexAxis: 'x',
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