import React from "react"

import PieChartOS from "../Diarrams/PieChartOS"

const Chart5 = () => {

    return(
        <div className="bg-white pl-27 pt-24">
            <div className="title-charts">Распредление по операционным системам</div>
            <div className="">
                <PieChartOS />
            </div>
        </div>
    )
}

export default Chart5