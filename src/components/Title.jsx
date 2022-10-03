import React from "react"

import Cat from "../image/cat.png"

const Title = () => {

    return(
        <>
            <div className="w-full mb-55 bg-gray-deep">
                <div className="flex items-center">
                    <div className="flex w-full h-max items-center justify-between">
                        <div className="pl-10 md:pl-17 h-max md:absolute">
                            <div className="text-black text-22 sm:text-31 md:text-60 mb-5 customText">
                                Трекер госзапросов
                            </div>
                            <div className="text-black text-16 sm:text-22 md:text-28 customText">
                                собираем данные и пишем в базу
                            </div>
                        </div>
                        <div className="mt-18 w-[50%] mb-46 md:ml-[50%] mr-10 md:mr-12">
                            <img src={Cat} alt=""/>
                        </div>
                    </div>    
                </div>
            </div>
        </>
    )
}

export default Title