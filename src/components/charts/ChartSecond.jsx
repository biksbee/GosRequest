import React, {useState} from "react"

import GorizontBar from "../Diarrams/GorizontBar"
import Vector from "../../image/vector.png"
import DropDownList from "./DropDownList"

const myThought = []

const ChartSecond = () => {

    const dropList = ["Последние 7 дней", "Последние 30 дней", "Последние 6 месяцев", "За последний год"]
    const [show, setShow] = useState(false)
    const [title, setTitle] = useState(dropList[0])
    const [value, setValue] = useState([])
    const [label, setLabel] = useState([])

    const labels = [
        ['24', '23', '22', '21', '20', '19', '18'],    
        ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30'],
        ['09', '08', '07', '06', '05', '04'],
        ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12']
    ]
    
    const mock = [65, 59, 81, 56, 200, 40, 70, 100, 50, 66, 65, 59, 81, 56, 200, 40, 70, 100, 50, 66, 65, 59, 81, 56, 200, 40, 70, 100, 50, 66]

    const iTion = (k) => {
        return labels[k]
    }

    const select = (k) => {
        setTitle(dropList[k])
        setShow(false)
        // setLabel(labels)
        // setValue(test)    
        myThought = iTion(k)
    }

    const changeShow = () => {
        setShow(!show)
    }

    return(
        <div className="flex lg:block p5gC2 bg-white w-full">
            <div className="px-5 pb-12">
                <div className="w-max title-charts">
                    Колличество просмотров
                </div>
                <div className="absolute py-18 pr-18 cursor-pointer w-max">
                        <div className="p-16 border-2 border-purpleB rounded-2xl text-purpleT bg-white">
                             {
                                !show ? (
                                    <div onClick={changeShow} className="flex items-center">
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
                <div className="mt-55">
                    <GorizontBar triger={{}}/>
                </div>
            </div>    
        </div>
    )
}

export default ChartSecond