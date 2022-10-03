import React from "react"

import ChartFirst from "./charts/ChartFirst"
import ChartSecond from "./charts/ChartSecond"
import ChartThird from "./charts/ChartThitd"
import Chart4 from "./charts/Charts4"

const Charts = () => {

    return(
        <div className="block lg:flex w-full">
            <div className="sizeChartsPage">
                <ChartFirst />
            </div>
            <div className="lg:mx-30 sizeChartsPage">    
                <div className="mb-24">
                    <ChartSecond />
                </div>
                <div className="">
                    <ChartThird />
                </div>
            </div>
            <div className="sizeChartsPage">
                <Chart4 />
            </div>
        </div>
    )
}

export default Charts