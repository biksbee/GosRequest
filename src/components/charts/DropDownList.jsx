import React, {useState} from "react"

const DropDownList = ({list, submit}) => {

    const [show, setShow] = useState(true)

    const trigerOn = () => {
        setShow(false)
    }
    const trigerOff = () => {
        setShow(true)
    }

    const sendId = () => {
        submit(list.i)
    }

    return(
        <div className="trigerEffect" onMouseOver={trigerOn} onMouseOut={trigerOff}>
            <li key={list.i} onClick={sendId} className="dropDownList underLineEffectOn">{list.item}</li>
        </div>
    )
}

export default DropDownList