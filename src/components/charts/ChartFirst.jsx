import React, {useState, useEffect} from "react"

import sadCat from "../../image/sadCat.png"

const ChartFirst = () => {
    
    const url = "https://mge19722ka.execute-api.eu-central-1.amazonaws.com/production/statistics"

    const [amount, setAmount] = useState([])
    const [currentDate, setCurrentDate] = useState('')
    const [dateNow, setDateNow] = useState('')
    const [obj, setObj] = useState([])
    const [show, setShow] = useState(false)

    const date = () => {
        const today = new Date()
        const monthNow = today.getMonth() + 1
        let dayNow 
        if(today.getDate() <= 9){
            dayNow = '0' + today.getDate()
        } else { 
            dayNow = today.getDate()
        }    
        const month = ["Января","Февраля","Марта","Апреля","Мая","Июня","Июля","Августа","Сентября","Октября","Ноября","Декабря"];
        const currentDate = today.getDate() + ' ' + month[today.getMonth()] + ' ' + today.getFullYear()
        const realDate = today.getFullYear() + '-' + monthNow + '-' + dayNow               
        setCurrentDate(currentDate)
        setDateNow(realDate)
    }
    
    const create = () => {
        const vData = []
        const lData = []
        const v = []
        const objData = []
        obj.forEach(element => {
            vData.push(element.count)
            lData.push(element.date)
        })
        lData.forEach((item, index) => {
            if(item === dateNow){
                 v.push(vData[index]) 
            }
        })
        return v
    }
    
    
    useEffect(() => {
        const request = async () => {
            const res = await fetch(url)
            const items = await res.json()
            setObj(items.dates)
            date()
            return items
        }
        const val = request()
    }, [])

    
    return(
        <div className="text-center bg-gray-deep h-full">
            <div className="pt-25">    
                <div className="p-14 lg:p-0 items-center">    
                    <div className="title-charts mb-13">
                        Колличество запросов за
                    </div>
                    <div className="text-purple text-30 font-bold">
                        {currentDate}
                    </div>
                    <div className="text-[160px] text-amount">
                        {/* {create()[0]} */}
                        {20}
                    </div>
                </div>    
                <div className="w-[80%] h-auto">
                    <img src={sadCat} alt=""/>
                </div>
            </div>    
        </div>
    )
}

export default ChartFirst