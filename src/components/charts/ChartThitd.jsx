import React from "react"

import PieChart from "../Diarrams/PieChart"

const ChartThird = () => {

    return(
        <div className="bg-white pl-27 pt-24">
            <div className="title-charts">Распредление по браузерам</div>
            <div className="">
                <PieChart />
            </div>
        </div>
    )
}

export default ChartThird