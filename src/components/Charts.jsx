import React, {useEffect, useState} from "react"

import ChartFirst from "./charts/ChartFirst"
import ChartSecond from "./charts/ChartSecond"
import ChartThird from "./charts/ChartThitd"
import Chart4 from "./charts/Charts4"
import Chart5 from "./charts/Chart5"

const Charts = () => {
    
    // const url = "https://mge19722ka.execute-api.eu-central-1.amazonaws.com/production/statistics"
    // const [data, setData] = useState('')

    // useEffect(() => {
    //     const request = async () => {
    //         const res = await fetch(url)
    //         const items = await res.json()
    //         await setData(items.dates[0].count)
    //     }
    //     request()

    // }, [])




    return(
        <div className="block lg:flex w-full">
            <div className="sizeChartsPage">
                <ChartFirst/>
            </div>
            <div className="lg:mx-30 sizeChartsPage">    
                <div className="mb-30">
                    <ChartSecond />
                </div>
                <div className="">
                    <ChartThird />
                </div>
            </div>
            <div className="sizeChartsPage ">
                <div className="mb-30">
                    <Chart4 />
                </div>
                <div>
                    <Chart5 />
                </div>
            </div>    
        </div>
    )
}

export default Charts