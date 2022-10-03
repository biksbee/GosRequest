import React from "react"

import Logo from "../image/logo.png"

const NavBar = () => {

    return(
        <>
            <div className="w-screen h-[80px] bg-white z-20 md:justify-between">
                <div className="flex justify-between items-center w-full h-full">
                    <div className="flex justify-center item-center w-full">
                        <div className={"cursor-pointer p-4"}>
                            <img src={Logo} alt=""/>
                        </div>
                    </div>
                </div>
            </div>                
        </>
    )
}

export default NavBar