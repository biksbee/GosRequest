import React from "react"

import VerticalBar from "../Diarrams/VerticalBars"

const Chart4 = () => {

    return(
        <div className="bg-gray-deep pl-27 pt-24 h-full">
            <div className="title-charts">
                Распредление по органам
            </div>
            <div className="h-full p-25">
                <VerticalBar />
            </div>
        </div>
    )
}

export default Chart4