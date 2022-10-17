import React, {useState, useEffect} from "react"

import VerticalBar from "../Diarrams/VerticalBars"

const Chart4 = () => {

    return(
        <div className="bg-white pl-27 pt-24 heightChart">
            <div className="title-charts">
                Распредление по органам
            </div>
            <div className="pt-[70px] items-center">
                <div className="h-max">
                    <VerticalBar />
                </div>
            </div>    
        </div>
    )
}

export default Chart4