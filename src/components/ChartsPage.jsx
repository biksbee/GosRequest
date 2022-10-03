import React from "react"

import Title from "./Title"
import Charts from "./Charts"
import Metriks from "./Metriks"

const ChartPage = () => {

    return (
        <>
            <div className="w-screen bg-gray-lite px-24 md:px-44 lg:px-20 pt-8 pb-26">
                <Title />
                <Charts />
                <Metriks />  
            </div>
        </>
    )

}


export default ChartPage