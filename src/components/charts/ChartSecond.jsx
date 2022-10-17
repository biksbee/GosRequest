import React, {useState} from "react"

import GorizontBar from "../Diarrams/GorizontBar"
import Vector from "../../image/vector.png"
import DropDownList from "./DropDownList"

const ChartSecond = () => {

    const dropList = ["Последние 7 дней", "Последние 30 дней", "Последние 6 месяцев", "За все время"]
    const [show, setShow] = useState(false)
    const [title, setTitle] = useState(dropList[0])
    const [k, setK] = useState(0)
    
    const select = (k) => {
        setK(k)
        setTitle(dropList[k])
        setShow(false)
    }

    const changeShow = () => {
        setShow(!show)
    }

    return(
        <div className="block p5gC2 bg-white w-full heightChart">
            <div className="px-5 pb-12">
                <div className="w-max title-charts">
                    Колличество просмотров
                </div>
                <div className="absolute py-18 pr-18 cursor-pointer w-max">
                        <div onClick={changeShow} className="p-16 border-[1px] border-purpleB rounded-xl text-purpleT bg-white">
                            {
                                !show ? (
                                    <div className="flex items-center">
                                        <div className="pr-6">{title}</div>
                                        <div className="h-max">
                                            <img src={Vector} alt="" />
                                        </div>    
                                    </div> 
                                ) : (
                                    <ul className="">
                                        {dropList.map((item, i) =>  
                                            <DropDownList key={i} list={{item, i}} submit={select} className="dropDownList" />
                                        )}
                                    </ul>
                                )
                             }
                        </div>
                </div>
            </div>
            <div className="flex w-full justify-center">
                <div className="mt-55 w-[90%]">
                    <GorizontBar check={k} />
                </div>
            </div>    
        </div>
    )
}

export default ChartSecond