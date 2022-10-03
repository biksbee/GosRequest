import React, {useState} from "react"

import sadCat from "../../image/sadCat.png"

const ChartFirst = () => {
    
    const [amount, setAmount] = useState('108')

    const date = () => {
        const today = new Date()
        const month = ["Января","Февраля","Марта","Апреля","Мая","Июня","Июля","Августа","Сентября","Октября","Ноября","Декабря"];
        const currentDate = today.getDate() + ' ' + month[today.getMonth()] + ' ' + today.getFullYear()
        return currentDate
    }
    const currentDate = date()

    return(
        <div className="text-center bg-gray-deep h-full">
            <div className="pt-25">    
                <div className="p-14 lg:p-0 items-center">    
                    <div className="title-charts mb-13">
                        Колличество запросов за
                    </div>
                    <div className="text-purple text-30 font-bold mb-100">
                        {currentDate}
                    </div>
                    <div className="text-60 lg:text-160 text-amount">
                        {amount}
                    </div>
                </div>    
                <div className="">
                    <img src={sadCat} alt=""/>
                </div>
            </div>    
        </div>
    )
}

export default ChartFirst