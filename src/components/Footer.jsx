import React from "react"

import LogoFooter from '../image/logoFooter.png'

const Footer = () => {

    return(
        <div className="bg-footer w-full h-106 pl-75 pt-27">
            <div className="flex">
                <img src={LogoFooter} alt="" />
                <div className="text-25 text-white underline opacity-60 pl-44 items-center"><a href="https://sotaproject.com/contact">Связь с сотой</a></div>
            </div>    
        </div>
    )
}

export default Footer